import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getServerSession } from '@/lib/auth';

// GET - Listar grupos del entrenador
export async function GET() {
  try {
    const session = await getServerSession();

    if (!session?.user) {
      return NextResponse.json({ error: 'No autenticado' }, { status: 401 });
    }

    if (session.user.role !== 'ENTRENADOR') {
      return NextResponse.json({ error: 'Solo entrenadores pueden ver grupos' }, { status: 403 });
    }

    const entrenador = await prisma.entrenador.findUnique({
      where: { userId: session.user.id },
      include: {
        groups: {
          include: {
            members: {
              include: {
                alumno: {
                  include: {
                    user: {
                      select: {
                        id: true,
                        name: true,
                        email: true,
                        phone: true
                      }
                    }
                  }
                }
              }
            }
          },
          orderBy: { createdAt: 'desc' }
        }
      }
    });

    if (!entrenador) {
      return NextResponse.json({ error: 'Entrenador no encontrado' }, { status: 404 });
    }

    return NextResponse.json({ groups: entrenador.groups });

  } catch (error: any) {
    console.error('Error al obtener grupos:', error);
    return NextResponse.json(
      { error: 'Error al obtener grupos', details: error.message },
      { status: 500 }
    );
  }
}

// POST - Crear nuevo grupo
export async function POST(request: Request) {
  try {
    const session = await getServerSession();

    if (!session?.user || session.user.role !== 'ENTRENADOR') {
      return NextResponse.json({ error: 'No autorizado' }, { status: 403 });
    }

    const { name, description, alumnoIds } = await request.json();

    if (!name || !alumnoIds || !Array.isArray(alumnoIds)) {
      return NextResponse.json(
        { error: 'Nombre y lista de alumnos son requeridos' },
        { status: 400 }
      );
    }

    const entrenador = await prisma.entrenador.findUnique({
      where: { userId: session.user.id }
    });

    if (!entrenador) {
      return NextResponse.json({ error: 'Entrenador no encontrado' }, { status: 404 });
    }

    // Crear grupo con miembros
    const group = await prisma.group.create({
      data: {
        name,
        description: description || null,
        entrenadorId: entrenador.id,
        members: {
          create: alumnoIds.map(alumnoId => ({
            alumnoId
          }))
        }
      },
      include: {
        members: {
          include: {
            alumno: {
              include: {
                user: {
                  select: {
                    id: true,
                    name: true,
                    email: true
                  }
                }
              }
            }
          }
        }
      }
    });

    return NextResponse.json({ group }, { status: 201 });

  } catch (error: any) {
    console.error('Error al crear grupo:', error);
    return NextResponse.json(
      { error: 'Error al crear grupo', details: error.message },
      { status: 500 }
    );
  }
}
