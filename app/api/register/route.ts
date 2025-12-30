import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { hashPassword } from '@/lib/auth';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password, name, role, phone, bio } = body;

    // Validaciones básicas
    if (!email || !password || !name || !role) {
      return NextResponse.json(
        { error: 'Datos incompletos' },
        { status: 400 }
      );
    }

    // Verificar si el email ya existe
    const existingUser = await prisma.user.findUnique({
      where: { email }
    });

    if (existingUser) {
      return NextResponse.json(
        { error: 'El email ya está registrado' },
        { status: 400 }
      );
    }

    // Hash de la contraseña
    const hashedPassword = await hashPassword(password);

    // Generar username para entrenadores
    const username = role === 'ENTRENADOR'
      ? email.split('@')[0] + Math.random().toString(36).substr(2, 5)
      : undefined;

    // Crear usuario con relación correspondiente
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
        role,
        phone: phone || null,
        ...(role === 'ENTRENADOR' ? {
          entrenador: {
            create: {
              username: username!,
              bio: bio || '',
              specialties: [],
            }
          }
        } : {
          alumno: {
            create: {
              favoriteTrainers: [],
            }
          }
        })
      },
      include: {
        entrenador: true,
        alumno: true
      }
    });

    // No devolver la contraseña
    const { password: _, ...userWithoutPassword } = user;

    return NextResponse.json(
      { user: userWithoutPassword },
      { status: 201 }
    );

  } catch (error: any) {
    console.error('Error en registro:', error);
    return NextResponse.json(
      { error: 'Error al crear usuario', details: error.message },
      { status: 500 }
    );
  }
}
