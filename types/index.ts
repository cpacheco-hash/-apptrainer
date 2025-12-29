/**
 * AppTrainer Types
 * Tipos de datos principales de la aplicación
 */

// User Types
export type UserRole = "alumno" | "entrenador" | "admin";

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  phone?: string;
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Alumno extends User {
  role: "alumno";
  reservations: Reservation[];
  favoriteTrainers: string[]; // Trainer IDs
}

export interface Entrenador extends User {
  role: "entrenador";
  bio?: string;
  certifications: Certification[];
  specialties: string[];
  rating: number;
  totalReviews: number;
  classes: Class[];
  location?: Location;
  bankInfo?: BankInfo;
}

// Class Types
export type ClassStatus = "programada" | "completada" | "cancelada";
export type ClassType = "individual" | "grupal";
export type Activity = "yoga" | "funcional" | "running" | "bootcamp" | "pilates" | "otro";

export interface Class {
  id: string;
  entrenadorId: string;
  entrenador?: Entrenador;
  title: string;
  description: string;
  activity: Activity;
  type: ClassType;
  date: Date;
  startTime: string;
  duration: number; // minutes
  price: number; // CLP
  maxCapacity: number;
  currentCapacity: number;
  location: Location;
  status: ClassStatus;
  imageUrl?: string;
  requirements?: string;
  cancellationPolicy?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Location Types
export interface Location {
  id?: string;
  name: string; // e.g., "Parque Bicentenario"
  address: string;
  latitude: number;
  longitude: number;
  city: string;
  comuna: string;
}

// Reservation Types
export type ReservationStatus = "pendiente" | "confirmada" | "completada" | "cancelada";
export type PaymentStatus = "pendiente" | "procesando" | "completado" | "fallido" | "reembolsado";

export interface Reservation {
  id: string;
  alumnoId: string;
  alumno?: Alumno;
  classId: string;
  class?: Class;
  status: ReservationStatus;
  paymentStatus: PaymentStatus;
  amount: number; // CLP
  commission: number; // Comisión de la plataforma (5-8%)
  paymentMethod?: PaymentMethod;
  transactionId?: string;
  canceledAt?: Date;
  cancelReason?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Payment Types
export type PaymentMethod = "webpay" | "tarjeta" | "transferencia";

export interface Payment {
  id: string;
  reservationId: string;
  amount: number;
  method: PaymentMethod;
  status: PaymentStatus;
  transactionId?: string;
  processedAt?: Date;
  createdAt: Date;
}

export interface BankInfo {
  bankName: string;
  accountType: "cuenta_corriente" | "cuenta_vista" | "cuenta_ahorro";
  accountNumber: string;
  rut: string;
  holderName: string;
}

// Review Types
export interface Review {
  id: string;
  alumnoId: string;
  alumno?: Alumno;
  entrenadorId: string;
  entrenador?: Entrenador;
  classId: string;
  rating: number; // 1-5
  comment?: string;
  createdAt: Date;
}

// Certification Types
export interface Certification {
  id: string;
  name: string;
  institution: string;
  year: number;
  imageUrl?: string;
  verified: boolean;
}

// Notification Types
export type NotificationType = "reserva" | "pago" | "cancelacion" | "recordatorio" | "mensaje";

export interface Notification {
  id: string;
  userId: string;
  type: NotificationType;
  title: string;
  message: string;
  read: boolean;
  actionUrl?: string;
  createdAt: Date;
}

// Message/Chat Types
export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  read: boolean;
  createdAt: Date;
}

export interface Conversation {
  id: string;
  participants: User[];
  lastMessage?: Message;
  updatedAt: Date;
}

// Dashboard/Metrics Types
export interface TrainerMetrics {
  totalClasses: number;
  completedClasses: number;
  upcomingClasses: number;
  totalRevenue: number; // Total earnings
  monthlyRevenue: number;
  totalStudents: number;
  averageRating: number;
  totalReviews: number;
  cancellationRate: number;
}

export interface AlumnoMetrics {
  totalReservations: number;
  completedClasses: number;
  upcomingClasses: number;
  totalSpent: number;
  favoriteActivities: Activity[];
}

// Search/Filter Types
export interface SearchFilters {
  activity?: Activity;
  location?: {
    latitude: number;
    longitude: number;
    radius: number; // km
  };
  date?: Date;
  priceRange?: {
    min: number;
    max: number;
  };
  rating?: number;
  classType?: ClassType;
}

export interface SearchResult {
  classes: Class[];
  total: number;
  page: number;
  limit: number;
}
