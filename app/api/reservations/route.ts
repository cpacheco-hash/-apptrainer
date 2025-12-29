import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// POST /api/reservations - Create a new reservation
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { alumnoId, classId, paymentMethod } = body;

    // TODO: Validate user is authenticated
    // TODO: Validate class has available spots
    // TODO: Calculate commission

    const classData = await prisma.class.findUnique({
      where: { id: classId },
    });

    if (!classData) {
      return NextResponse.json(
        { error: 'Clase no encontrada' },
        { status: 404 }
      );
    }

    if (classData.currentCapacity >= classData.maxCapacity) {
      return NextResponse.json(
        { error: 'No hay cupos disponibles' },
        { status: 400 }
      );
    }

    const platformCommission = Number(process.env.PLATFORM_COMMISSION_PERCENTAGE || 5);
    const commission = (classData.price * platformCommission) / 100;

    const reservation = await prisma.reservation.create({
      data: {
        alumnoId,
        classId,
        amount: classData.price,
        commission,
        paymentMethod: paymentMethod || 'WEBPAY',
        status: 'PENDIENTE',
        paymentStatus: 'PENDIENTE',
      },
      include: {
        class: true,
        alumno: {
          include: {
            user: true,
          },
        },
      },
    });

    // Update class capacity
    await prisma.class.update({
      where: { id: classId },
      data: {
        currentCapacity: {
          increment: 1,
        },
      },
    });

    // TODO: Create payment record
    // TODO: Send confirmation email
    // TODO: Create notification

    return NextResponse.json(reservation, { status: 201 });
  } catch (error) {
    console.error('Error creating reservation:', error);
    return NextResponse.json(
      { error: 'Error al crear la reserva' },
      { status: 500 }
    );
  }
}

// GET /api/reservations - Get user's reservations
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const alumnoId = searchParams.get('alumnoId');

    // TODO: Validate user is authenticated
    // TODO: Ensure user can only see their own reservations

    const reservations = await prisma.reservation.findMany({
      where: {
        ...(alumnoId && { alumnoId }),
      },
      include: {
        class: {
          include: {
            entrenador: {
              include: {
                user: true,
              },
            },
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return NextResponse.json(reservations);
  } catch (error) {
    console.error('Error fetching reservations:', error);
    return NextResponse.json(
      { error: 'Error al obtener las reservas' },
      { status: 500 }
    );
  }
}
