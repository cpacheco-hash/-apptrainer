import bcrypt from 'bcryptjs';
import { getServerSession as getNextAuthServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function hashPassword(password: string): Promise<string> {
  return await bcrypt.hash(password, 12);
}

export async function verifyPassword(
  password: string,
  hashedPassword: string
): Promise<boolean> {
  return await bcrypt.compare(password, hashedPassword);
}

export async function getServerSession() {
  return await getNextAuthServerSession(authOptions);
}

export function requireAuth(session: any) {
  if (!session || !session.user) {
    throw new Error('No autenticado');
  }
  return session;
}

export function requireRole(session: any, role: string) {
  requireAuth(session);
  if (session.user.role !== role) {
    throw new Error('No autorizado');
  }
  return session;
}
