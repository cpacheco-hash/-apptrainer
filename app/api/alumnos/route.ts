import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getServerSession } from '@/lib/auth';

// GET - Listar alumnos (para que entrenadores puedan agregar a grupos)
export async function GET(request: Request) {
  try {
    const session = await getServerSession();

    if (!session?.user) {
      return NextResponse.json({ error: 'No autenticado' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const search = searchParams.get('search') || '';

    const alumnos = await prisma.alumno.findMany({
      where: search ? {
        user: {
          OR: [
            { name: { contains: search, mode: 'insensitive' } },
            { email: { contains: search, mode: 'insensitive' } }
          ]
        }
      } : undefined,
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            phone: true
          }
        }
      },
      take: 50
    });

    return NextResponse.json({ alumnos });

  } catch (error: any) {
    console.error('Error al obtener alumnos:', error);
    return NextResponse.json(
      { error: 'Error al obtener alumnos', details: error.message },
      { status: 500 }
    );
  }
}
