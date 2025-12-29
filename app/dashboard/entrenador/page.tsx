import { Metadata } from "next";
import { Bell, Plus, Calendar, TrendingUp, Users, DollarSign, Star, ChevronRight } from "lucide-react";
import Logo from "@/components/Logo";
import Button from "@/components/Button";
import Card, { CardHeader, CardTitle, CardContent } from "@/components/Card";
import { formatCurrency } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Dashboard Entrenador - AppTrainer",
  description: "Gestiona tus clases, horarios e ingresos",
};

// Mock data
const stats = {
  monthlyRevenue: 1250000,
  totalClasses: 24,
  activeStudents: 42,
  averageRating: 4.9,
};

const upcomingClasses = [
  {
    id: "1",
    title: "Funcional en Plaza Perú",
    date: new Date(2025, 11, 30),
    time: "07:00",
    spots: "9/12",
    revenue: 108000,
  },
  {
    id: "2",
    title: "CrossFit Outdoor",
    date: new Date(2025, 11, 30),
    time: "18:00",
    spots: "7/10",
    revenue: 105000,
  },
  {
    id: "3",
    title: "Running Club",
    date: new Date(2025, 11, 31),
    time: "06:30",
    spots: "12/15",
    revenue: 120000,
  },
];

const recentReservations = [
  {
    id: "1",
    student: "María González",
    class: "Funcional en Plaza Perú",
    date: "Hoy, 07:00",
    amount: 12000,
    status: "confirmed",
  },
  {
    id: "2",
    student: "Carlos Ruiz",
    class: "CrossFit Outdoor",
    date: "Hoy, 18:00",
    amount: 15000,
    status: "confirmed",
  },
  {
    id: "3",
    student: "Andrea Silva",
    class: "Running Club",
    date: "Mañana, 06:30",
    amount: 10000,
    status: "pending",
  },
];

export default function DashboardEntrenadorPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header/Navbar */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Logo size="sm" href="/dashboard/entrenador" />

            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="text-gray-700 hover:text-primary-600 font-medium">
                Mis Clases
              </a>
              <a href="#" className="text-gray-700 hover:text-primary-600 font-medium">
                Calendario
              </a>
              <a href="#" className="text-gray-700 hover:text-primary-600 font-medium">
                Alumnos
              </a>
              <a href="#" className="text-gray-700 hover:text-primary-600 font-medium">
                Ingresos
              </a>
            </nav>

            <div className="flex items-center gap-4">
              <Button variant="primary" size="sm" leftIcon={<Plus className="w-4 h-4" />}>
                Crear clase
              </Button>

              <button className="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>

              <button className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-full transition-colors">
                <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                  FL
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            ¡Bienvenido de vuelta, Francisco! 👋
          </h1>
          <p className="text-gray-600">
            Aquí tienes un resumen de tu actividad este mes
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Revenue Card */}
          <Card variant="elevated" padding="lg">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-green-600" />
              </div>
              <div className="px-2 py-1 bg-green-100 rounded-full">
                <span className="text-xs font-semibold text-green-700">+12%</span>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-1">Ingresos del mes</p>
            <p className="text-2xl font-bold text-gray-900">{formatCurrency(stats.monthlyRevenue)}</p>
          </Card>

          {/* Classes Card */}
          <Card variant="elevated" padding="lg">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                <Calendar className="w-6 h-6 text-primary-600" />
              </div>
              <div className="px-2 py-1 bg-blue-100 rounded-full">
                <span className="text-xs font-semibold text-blue-700">+8%</span>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-1">Clases este mes</p>
            <p className="text-2xl font-bold text-gray-900">{stats.totalClasses}</p>
          </Card>

          {/* Students Card */}
          <Card variant="elevated" padding="lg">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-secondary-600" />
              </div>
              <div className="px-2 py-1 bg-purple-100 rounded-full">
                <span className="text-xs font-semibold text-purple-700">+15%</span>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-1">Alumnos activos</p>
            <p className="text-2xl font-bold text-gray-900">{stats.activeStudents}</p>
          </Card>

          {/* Rating Card */}
          <Card variant="elevated" padding="lg">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <Star className="w-6 h-6 text-yellow-600" />
              </div>
              <div className="px-2 py-1 bg-yellow-100 rounded-full">
                <span className="text-xs font-semibold text-yellow-700">Excelente</span>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-1">Calificación promedio</p>
            <p className="text-2xl font-bold text-gray-900">{stats.averageRating}</p>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Upcoming Classes */}
          <div className="lg:col-span-2 space-y-6">
            {/* Upcoming Classes */}
            <Card variant="bordered" padding="lg">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Próximas clases</h2>
                <Button variant="ghost" size="sm" rightIcon={<ChevronRight className="w-4 h-4" />}>
                  Ver todas
                </Button>
              </div>

              <div className="space-y-4">
                {upcomingClasses.map((classItem) => (
                  <div
                    key={classItem.id}
                    className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{classItem.title}</h3>
                        <p className="text-sm text-gray-600">
                          {classItem.date.toLocaleDateString('es-CL', {
                            weekday: 'short',
                            day: 'numeric',
                            month: 'short'
                          })}{" "}
                          · {classItem.time}
                        </p>
                      </div>
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                        {classItem.spots} inscritos
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Users className="w-4 h-4" />
                        <span>{classItem.spots.split('/')[0]} alumnos</span>
                      </div>
                      <p className="font-semibold text-gray-900">{formatCurrency(classItem.revenue)}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t">
                <Button variant="primary" className="w-full" leftIcon={<Plus className="w-5 h-5" />}>
                  Crear nueva clase
                </Button>
              </div>
            </Card>

            {/* Calendar Preview */}
            <Card variant="bordered" padding="lg">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Calendario semanal</h2>
                <div className="flex items-center gap-2">
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <span className="text-sm font-medium text-gray-700">Dic 29 - Ene 4</span>
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-2">
                {['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'].map((day) => (
                  <div key={day} className="text-center text-xs font-semibold text-gray-600 p-2">
                    {day}
                  </div>
                ))}

                {[29, 30, 31, 1, 2, 3, 4].map((day, index) => (
                  <div
                    key={index}
                    className={`aspect-square p-2 border border-gray-200 rounded-lg ${
                      day === 30 ? 'bg-primary-50 border-primary-600' : 'bg-white hover:bg-gray-50'
                    } cursor-pointer transition-colors`}
                  >
                    <p className={`text-sm font-medium ${day === 30 ? 'text-primary-600' : 'text-gray-900'}`}>
                      {day}
                    </p>
                    {(day === 30 || day === 31) && (
                      <div className="mt-1">
                        <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mb-1"></div>
                        <div className="w-1.5 h-1.5 bg-secondary-600 rounded-full"></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Right Column - Recent Activity */}
          <div className="space-y-6">
            {/* Recent Reservations */}
            <Card variant="bordered" padding="lg">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900">Reservas recientes</h2>
                <Button variant="ghost" size="sm" rightIcon={<ChevronRight className="w-4 h-4" />}>
                  Ver todas
                </Button>
              </div>

              <div className="space-y-4">
                {recentReservations.map((reservation) => (
                  <div key={reservation.id} className="pb-4 border-b last:border-b-0">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="font-medium text-gray-900">{reservation.student}</p>
                        <p className="text-sm text-gray-600">{reservation.class}</p>
                      </div>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          reservation.status === 'confirmed'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-yellow-100 text-yellow-700'
                        }`}
                      >
                        {reservation.status === 'confirmed' ? 'Confirmada' : 'Pendiente'}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-xs text-gray-500">{reservation.date}</p>
                      <p className="text-sm font-semibold text-gray-900">
                        {formatCurrency(reservation.amount)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Quick Actions */}
            <Card variant="bordered" padding="lg">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Acciones rápidas</h2>
              <div className="space-y-2">
                <button className="w-full flex items-center gap-3 p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors text-left">
                  <Calendar className="w-5 h-5 text-primary-600" />
                  <span className="font-medium text-gray-900">Ver calendario completo</span>
                </button>

                <button className="w-full flex items-center gap-3 p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors text-left">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                  <span className="font-medium text-gray-900">Ver reportes</span>
                </button>

                <button className="w-full flex items-center gap-3 p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors text-left">
                  <Users className="w-5 h-5 text-secondary-600" />
                  <span className="font-medium text-gray-900">Gestionar alumnos</span>
                </button>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
