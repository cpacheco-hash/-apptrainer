import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// GET /api/classes - Get all classes
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const activity = searchParams.get('activity');
    const location = searchParams.get('location');

    const classes = await prisma.class.findMany({
      where: {
        status: 'PROGRAMADA',
        ...(activity && { activity: activity as any }),
        ...(location && {
          OR: [
            { locationCity: { contains: location, mode: 'insensitive' } },
            { locationComuna: { contains: location, mode: 'insensitive' } },
            { locationName: { contains: location, mode: 'insensitive' } },
          ],
        }),
      },
      include: {
        entrenador: {
          include: {
            user: {
              select: {
                name: true,
                avatar: true,
              },
            },
          },
        },
      },
      orderBy: {
        date: 'asc',
      },
    });

    return NextResponse.json(classes);
  } catch (error) {
    console.error('Error fetching classes:', error);
    return NextResponse.json(
      { error: 'Error al obtener las clases' },
      { status: 500 }
    );
  }
}

// POST /api/classes - Create a new class
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // TODO: Validate user is authenticated and is a trainer
    // TODO: Validate request body

    const newClass = await prisma.class.create({
      data: {
        ...body,
        currentCapacity: 0,
      },
    });

    return NextResponse.json(newClass, { status: 201 });
  } catch (error) {
    console.error('Error creating class:', error);
    return NextResponse.json(
      { error: 'Error al crear la clase' },
      { status: 500 }
    );
  }
}
