import { Metadata } from "next";
import { Plus, Calendar, TrendingUp, Users, DollarSign, Star, ChevronRight, Activity, Award, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Button from "@/components/Button";
import Card from "@/components/Card";
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
  const navItems = [
    { label: "Mis Clases", href: "/dashboard/entrenador/clases" },
    { label: "Calendario", href: "/dashboard/entrenador/calendario" },
    { label: "Alumnos", href: "/dashboard/entrenador/alumnos" },
    { label: "Ingresos", href: "/dashboard/entrenador/ingresos" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header/Navbar */}
      <Navbar
        userType="entrenador"
        userName="Francisco López"
        userInitials="FL"
        navItems={navItems}
        showCreateButton={true}
        onCreateClick={() => console.log("Crear clase")}
        notifications={5}
      />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in-up">
        {/* Welcome Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-lg">
              <Activity className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                ¡Bienvenido de vuelta, Francisco! 👋
              </h1>
              <p className="text-gray-600 mt-1">
                Aquí tienes un resumen de tu actividad este mes
              </p>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {/* Revenue Card */}
          <div className="group relative bg-gradient-to-br from-green-50 to-white p-6 rounded-2xl border border-green-100 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-start justify-between mb-4">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                <DollarSign className="w-7 h-7 text-white" />
              </div>
              <div className="px-3 py-1.5 bg-green-100 rounded-full animate-pulse-subtle">
                <span className="text-xs font-bold text-green-700">+12%</span>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-2 font-medium">Ingresos del mes</p>
            <p className="text-3xl font-bold text-gray-900">{formatCurrency(stats.monthlyRevenue)}</p>
          </div>

          {/* Classes Card */}
          <div className="group relative bg-gradient-to-br from-primary-50 to-white p-6 rounded-2xl border border-primary-100 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-start justify-between mb-4">
              <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                <Calendar className="w-7 h-7 text-white" />
              </div>
              <div className="px-3 py-1.5 bg-blue-100 rounded-full animate-pulse-subtle">
                <span className="text-xs font-bold text-blue-700">+8%</span>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-2 font-medium">Clases este mes</p>
            <p className="text-3xl font-bold text-gray-900">{stats.totalClasses}</p>
          </div>

          {/* Students Card */}
          <div className="group relative bg-gradient-to-br from-secondary-50 to-white p-6 rounded-2xl border border-secondary-100 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-start justify-between mb-4">
              <div className="w-14 h-14 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                <Users className="w-7 h-7 text-white" />
              </div>
              <div className="px-3 py-1.5 bg-purple-100 rounded-full animate-pulse-subtle">
                <span className="text-xs font-bold text-purple-700">+15%</span>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-2 font-medium">Alumnos activos</p>
            <p className="text-3xl font-bold text-gray-900">{stats.activeStudents}</p>
          </div>

          {/* Rating Card */}
          <div className="group relative bg-gradient-to-br from-yellow-50 to-white p-6 rounded-2xl border border-yellow-100 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-start justify-between mb-4">
              <div className="w-14 h-14 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                <Award className="w-7 h-7 text-white" />
              </div>
              <div className="px-3 py-1.5 bg-yellow-100 rounded-full">
                <span className="text-xs font-bold text-yellow-700">⭐ Top</span>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-2 font-medium">Calificación promedio</p>
            <div className="flex items-center gap-2">
              <p className="text-3xl font-bold text-gray-900">{stats.averageRating}</p>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
          </div>
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
