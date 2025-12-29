import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, MapPin, Clock, Calendar, Users, Star, Info, AlertCircle, Check } from "lucide-react";
import Logo from "@/components/Logo";
import Button from "@/components/Button";
import Card from "@/components/Card";
import { formatCurrency } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Detalle de Clase - AppTrainer",
};

// Mock data
const classData = {
  id: "1",
  title: "Funcional en Plaza Perú",
  description: "Entrenamiento funcional de alta intensidad enfocado en mejorar fuerza, resistencia y movilidad. Trabajaremos con peso corporal y elementos básicos como bandas elásticas y mancuernas ligeras. Apto para todos los niveles.",
  activity: "Funcional",
  type: "Grupal",
  entrenador: {
    id: "1",
    name: "Francisco López",
    rating: 4.9,
    totalReviews: 127,
    avatar: "",
  },
  date: new Date(2025, 11, 30),
  time: "07:00",
  duration: 60,
  price: 12000,
  maxCapacity: 12,
  currentCapacity: 9,
  location: {
    name: "Plaza Perú",
    address: "Plaza Perú, Recoleta, Santiago",
    latitude: -33.4172,
    longitude: -70.6058,
  },
  requirements: [
    "Traer botella de agua",
    "Mat o toalla personal",
    "Ropa deportiva cómoda",
    "Llegar 5 minutos antes",
  ],
  cancellationPolicy: "Puedes cancelar hasta 12 horas antes del inicio de la clase sin costo.",
  whatToBring: ["Agua", "Mat", "Toalla", "Zapatos deportivos"],
  benefits: [
    "Mejora tu condición física general",
    "Quema calorías efectivamente",
    "Fortalece todo tu cuerpo",
    "Conoce gente nueva",
  ],
};

export default function ClassDetailPage({ params }: { params: { id: string } }) {
  const spotsLeft = classData.maxCapacity - classData.currentCapacity;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/dashboard/alumno" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Volver</span>
            </Link>

            <Logo size="sm" />

            <div className="w-20"></div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Class Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Hero Image */}
            <div className="relative h-96 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-white">
                <Users className="w-32 h-32 opacity-50" />
              </div>

              {/* Activity Badge */}
              <div className="absolute top-6 left-6">
                <span className="px-4 py-2 backdrop-blur-sm rounded-full text-sm font-semibold text-gray-900" style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
                  {classData.activity}
                </span>
              </div>

              {/* Type Badge */}
              <div className="absolute top-6 right-6">
                <span className="px-4 py-2 backdrop-blur-sm rounded-full text-sm font-semibold text-gray-900" style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
                  Clase {classData.type}
                </span>
              </div>
            </div>

            {/* Title & Trainer */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{classData.title}</h1>

              <Link href={`/entrenador/${classData.entrenador.id}`}>
                <div className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200 hover:border-primary-600 transition-colors">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white text-xl font-semibold">
                    FL
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">Con {classData.entrenador.name}</p>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-gray-600">
                        {classData.entrenador.rating} ({classData.entrenador.totalReviews} reseñas)
                      </span>
                    </div>
                  </div>
                  <div className="text-primary-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>

            {/* Description */}
            <Card variant="bordered" padding="lg">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Descripción</h2>
              <p className="text-gray-700 leading-relaxed">{classData.description}</p>
            </Card>

            {/* What to Bring */}
            <Card variant="bordered" padding="lg">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Qué traer</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {classData.whatToBring.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary-600" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Benefits */}
            <Card variant="bordered" padding="lg">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Beneficios</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {classData.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Location */}
            <Card variant="bordered" padding="lg">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <MapPin className="w-6 h-6 text-primary-600" />
                Ubicación
              </h2>
              <p className="text-gray-700 mb-4">{classData.location.address}</p>

              {/* Map Placeholder */}
              <div className="h-64 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-primary-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Mapa de ubicación</p>
                </div>
              </div>
            </Card>

            {/* Cancellation Policy */}
            <Card variant="bordered" padding="lg" className="bg-amber-50 border-amber-200">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Política de cancelación</h3>
                  <p className="text-sm text-gray-700">{classData.cancellationPolicy}</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column - Booking Card */}
          <div className="lg:col-span-1">
            <Card variant="elevated" padding="lg" className="sticky top-24">
              {/* Price */}
              <div className="text-center mb-6 pb-6 border-b">
                <p className="text-4xl font-bold text-gray-900 mb-1">
                  {formatCurrency(classData.price)}
                </p>
                <p className="text-sm text-gray-600">por persona</p>
              </div>

              {/* Class Info */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Fecha</p>
                    <p className="font-semibold text-gray-900">
                      {classData.date.toLocaleDateString('es-CL', {
                        weekday: 'long',
                        day: 'numeric',
                        month: 'long'
                      })}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-secondary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-secondary-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Horario</p>
                    <p className="font-semibold text-gray-900">
                      {classData.time} ({classData.duration} minutos)
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Cupos disponibles</p>
                    <p className="font-semibold text-gray-900">
                      {spotsLeft} de {classData.maxCapacity}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-secondary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-secondary-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Ubicación</p>
                    <p className="font-semibold text-gray-900">{classData.location.name}</p>
                  </div>
                </div>
              </div>

              {/* Spots Warning */}
              {spotsLeft <= 3 && spotsLeft > 0 && (
                <div className="mb-6 p-3 bg-red-50 border border-red-200 rounded-lg flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-red-900">
                    <span className="font-semibold">¡Últimos cupos!</span> Solo quedan {spotsLeft} lugares disponibles.
                  </p>
                </div>
              )}

              {/* Book Button */}
              <Link href={`/checkout/${classData.id}`}>
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full mb-3"
                  disabled={spotsLeft === 0}
                >
                  {spotsLeft === 0 ? "Clase llena" : "Reservar y pagar"}
                </Button>
              </Link>

              <p className="text-xs text-center text-gray-500">
                Solo se cobra si confirmas la reserva
              </p>

              {/* Requirements */}
              <div className="mt-6 pt-6 border-t">
                <h3 className="text-sm font-semibold text-gray-900 mb-3">Requisitos</h3>
                <ul className="space-y-2">
                  {classData.requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
