import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const { token } = await request.json();

    if (!token) {
      return NextResponse.json({ error: 'Token requerido' }, { status: 400 });
    }

    // Buscar reserva por token
    const reservation = await prisma.reservation.findFirst({
      where: {
        id,
        confirmToken: token
      },
      include: {
        class: true,
        alumno: {
          include: { user: true }
        }
      }
    });

    if (!reservation) {
      return NextResponse.json({ error: 'Reserva no encontrada o token inválido' }, { status: 404 });
    }

    // Verificar que no esté ya confirmada
    if (reservation.status === 'CONFIRMADA') {
      return NextResponse.json({ message: 'Esta reserva ya fue confirmada previamente' });
    }

    // Actualizar reserva a confirmada
    const updatedReservation = await prisma.reservation.update({
      where: { id },
      data: {
        status: 'CONFIRMADA',
        confirmedAt: new Date()
      },
      include: {
        class: true,
        alumno: {
          include: { user: true }
        }
      }
    });

    // Crear notificación de confirmación
    await prisma.notification.create({
      data: {
        userId: reservation.alumno.userId,
        type: 'RESERVA',
        title: 'Asistencia confirmada',
        message: `Tu asistencia a "${reservation.class.title}" ha sido confirmada`,
        read: false
      }
    });

    return NextResponse.json({
      success: true,
      message: 'Asistencia confirmada exitosamente',
      reservation: updatedReservation
    });

  } catch (error: any) {
    console.error('Error al confirmar reserva:', error);
    return NextResponse.json(
      { error: 'Error al confirmar reserva', details: error.message },
      { status: 500 }
    );
  }
}

// GET - Obtener información de reserva por token (para mostrar en página de confirmación)
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const { searchParams } = new URL(request.url);
    const token = searchParams.get('token');

    if (!token) {
      return NextResponse.json({ error: 'Token requerido' }, { status: 400 });
    }

    const reservation = await prisma.reservation.findFirst({
      where: {
        id,
        confirmToken: token
      },
      include: {
        class: {
          include: {
            entrenador: {
              include: { user: true }
            }
          }
        },
        alumno: {
          include: { user: true }
        }
      }
    });

    if (!reservation) {
      return NextResponse.json({ error: 'Reserva no encontrada' }, { status: 404 });
    }

    return NextResponse.json({ reservation });

  } catch (error: any) {
    console.error('Error al obtener reserva:', error);
    return NextResponse.json(
      { error: 'Error al obtener reserva', details: error.message },
      { status: 500 }
    );
  }
}
