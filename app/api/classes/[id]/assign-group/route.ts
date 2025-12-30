import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getServerSession } from '@/lib/auth';
import { sendClassAssignmentEmail } from '@/lib/email';
import crypto from 'crypto';

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession();

    if (!session?.user || session.user.role !== 'ENTRENADOR') {
      return NextResponse.json({ error: 'No autorizado' }, { status: 403 });
    }

    const { groupId } = await request.json();

    if (!groupId) {
      return NextResponse.json({ error: 'ID de grupo requerido' }, { status: 400 });
    }

    // Obtener grupo con todos los alumnos
    const group = await prisma.group.findUnique({
      where: { id: groupId },
      include: {
        members: {
          include: {
            alumno: {
              include: {
                user: true
              }
            }
          }
        },
        entrenador: true
      }
    });

    if (!group) {
      return NextResponse.json({ error: 'Grupo no encontrado' }, { status: 404 });
    }

    // Verificar que el grupo pertenece al entrenador de la sesión
    if (group.entrenador.userId !== session.user.id) {
      return NextResponse.json({ error: 'No autorizado para usar este grupo' }, { status: 403 });
    }

    // Obtener la clase
    const classData = await prisma.class.findUnique({
      where: { id: params.id },
      include: {
        entrenador: {
          include: { user: true }
        },
        reservations: true
      }
    });

    if (!classData) {
      return NextResponse.json({ error: 'Clase no encontrada' }, { status: 404 });
    }

    // Verificar que la clase pertenece al entrenador
    if (classData.entrenador.userId !== session.user.id) {
      return NextResponse.json({ error: 'No autorizado para esta clase' }, { status: 403 });
    }

    // Verificar cupos disponibles
    const currentReservations = classData.reservations.length;
    const availableSpots = classData.maxCapacity - currentReservations;
    const requiredSpots = group.members.length;

    if (requiredSpots > availableSpots) {
      return NextResponse.json(
        {
          error: `No hay cupos suficientes. Disponibles: ${availableSpots}, Requeridos: ${requiredSpots}`
        },
        { status: 400 }
      );
    }

    // Crear reservas para cada alumno del grupo
    const reservations = await Promise.all(
      group.members.map(async (member) => {
        // Generar token único para confirmación
        const confirmToken = crypto.randomBytes(32).toString('hex');

        // Crear reserva
        const reservation = await prisma.reservation.create({
          data: {
            alumnoId: member.alumno.id,
            classId: params.id,
            status: 'PENDIENTE',
            paymentStatus: 'PENDIENTE',
            amount: classData.price,
            commission: classData.price * 0.05, // 5% comisión
            confirmToken,
          },
          include: {
            alumno: {
              include: { user: true }
            }
          }
        });

        // Crear notificación in-app
        await prisma.notification.create({
          data: {
            userId: member.alumno.user.id,
            type: 'RESERVA',
            title: 'Nueva clase asignada',
            message: `Has sido asignado a la clase "${classData.title}" del ${new Date(classData.date).toLocaleDateString('es-CL')}`,
            read: false,
            actionUrl: `/confirm/${confirmToken}`,
          }
        });

        // Enviar email con link de confirmación
        try {
          await sendClassAssignmentEmail(
            member.alumno.user.email,
            member.alumno.user.name,
            classData,
            confirmToken
          );
        } catch (emailError) {
          console.error('Error al enviar email:', emailError);
          // Continuar aunque falle el email
        }

        return reservation;
      })
    );

    // Actualizar currentCapacity de la clase
    await prisma.class.update({
      where: { id: params.id },
      data: {
        currentCapacity: currentReservations + requiredSpots
      }
    });

    return NextResponse.json(
      {
        success: true,
        message: `${requiredSpots} alumnos asignados exitosamente`,
        reservations
      },
      { status: 201 }
    );

  } catch (error: any) {
    console.error('Error al asignar grupo:', error);
    return NextResponse.json(
      { error: 'Error al asignar grupo', details: error.message },
      { status: 500 }
    );
  }
}
