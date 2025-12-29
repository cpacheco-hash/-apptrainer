import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, MapPin, Star, Award, Calendar, MessageCircle, Heart, Share2 } from "lucide-react";
import Logo from "@/components/Logo";
import Button from "@/components/Button";
import Card from "@/components/Card";
import ClassCard from "@/components/ClassCard";

export const metadata: Metadata = {
  title: "Perfil del Entrenador - AppTrainer",
};

// Mock data
const trainerData = {
  id: "1",
  name: "Francisco López",
  rating: 4.9,
  totalReviews: 127,
  location: "Parque Bicentenario, Vitacura",
  specialties: ["Funcional", "CrossFit", "Running"],
  bio: "Entrenador personal certificado con más de 8 años de experiencia en entrenamiento funcional y outdoor. Especializado en ayudar a personas a alcanzar sus objetivos de fitness de manera integral y sostenible. Mi enfoque combina entrenamiento de fuerza, cardio y movilidad.",
  certifications: [
    { name: "Personal Trainer NSCA", year: 2016 },
    { name: "CrossFit Level 2", year: 2018 },
    { name: "Running Coach", year: 2019 },
  ],
  stats: {
    totalClasses: 450,
    activeStudents: 45,
    yearsExperience: 8,
  },
};

const upcomingClasses = [
  {
    id: "1",
    title: "Funcional en Plaza Perú",
    entrenador: {
      name: "Francisco López",
      rating: 4.9,
    },
    activity: "funcional",
    location: {
      name: "Plaza Perú, Recoleta",
      distance: 1.2,
    },
    date: new Date(2025, 11, 30),
    time: "07:00",
    duration: 60,
    price: 12000,
    spotsLeft: 3,
  },
  {
    id: "2",
    title: "CrossFit Outdoor",
    entrenador: {
      name: "Francisco López",
      rating: 4.9,
    },
    activity: "funcional",
    location: {
      name: "Parque Bicentenario, Vitacura",
      distance: 0.5,
    },
    date: new Date(2025, 11, 31),
    time: "18:00",
    duration: 75,
    price: 15000,
    spotsLeft: 5,
  },
];

const reviews = [
  {
    id: "1",
    author: "María González",
    rating: 5,
    date: "Hace 2 días",
    comment: "Excelente entrenador! Muy profesional y motivador. Las clases son desafiantes pero divertidas. Lo recomiendo 100%.",
  },
  {
    id: "2",
    author: "Carlos Ruiz",
    rating: 5,
    date: "Hace 1 semana",
    comment: "Francisco es el mejor! Me ha ayudado a mejorar mi condición física de manera increíble. Sus rutinas son variadas y efectivas.",
  },
  {
    id: "3",
    author: "Andrea Silva",
    rating: 4,
    date: "Hace 2 semanas",
    comment: "Muy buenas clases, el entrenador es atento y siempre está pendiente de la técnica correcta.",
  },
];

export default function TrainerProfilePage({ params }: { params: { id: string } }) {
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

            <div className="flex items-center gap-2">
              <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full">
                <Share2 className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-600 hover:text-red-500 hover:bg-red-50 rounded-full">
                <Heart className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Profile Info */}
          <div className="lg:col-span-1">
            <Card variant="elevated" padding="lg" className="sticky top-24">
              {/* Profile Photo */}
              <div className="text-center mb-6">
                <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white text-5xl font-bold">
                  FL
                </div>
                <h1 className="text-2xl font-bold text-gray-900 mb-1">
                  {trainerData.name}
                </h1>
                <div className="flex items-center justify-center gap-1 mb-2">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="text-xl font-semibold text-gray-900">{trainerData.rating}</span>
                  <span className="text-sm text-gray-600">({trainerData.totalReviews} reseñas)</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{trainerData.location}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 mb-6">
                <Button variant="primary" size="lg" className="w-full" leftIcon={<Calendar className="w-5 h-5" />}>
                  Ver clases
                </Button>
                <Button variant="outline" size="lg" className="w-full" leftIcon={<MessageCircle className="w-5 h-5" />}>
                  Contactar
                </Button>
              </div>

              {/* Specialties */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-900 mb-3">Especialidades</h3>
                <div className="flex flex-wrap gap-2">
                  {trainerData.specialties.map((specialty) => (
                    <span
                      key={specialty}
                      className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t">
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900">{trainerData.stats.totalClasses}</p>
                  <p className="text-xs text-gray-600">Clases</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900">{trainerData.stats.activeStudents}</p>
                  <p className="text-xs text-gray-600">Alumnos</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900">{trainerData.stats.yearsExperience}</p>
                  <p className="text-xs text-gray-600">Años</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column - Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* About */}
            <Card variant="bordered" padding="lg">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Sobre mí</h2>
              <p className="text-gray-700 leading-relaxed">{trainerData.bio}</p>
            </Card>

            {/* Certifications */}
            <Card variant="bordered" padding="lg">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Award className="w-6 h-6 text-primary-600" />
                Certificaciones
              </h2>
              <div className="space-y-3">
                {trainerData.certifications.map((cert, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">{cert.name}</p>
                      <p className="text-sm text-gray-600">Certificado en {cert.year}</p>
                    </div>
                    <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                      <Award className="w-5 h-5 text-primary-600" />
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Upcoming Classes */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Próximas clases</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {upcomingClasses.map((classItem) => (
                  <ClassCard key={classItem.id} {...classItem} />
                ))}
              </div>
            </div>

            {/* Reviews */}
            <Card variant="bordered" padding="lg">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">
                  Reseñas ({trainerData.totalReviews})
                </h2>
                <div className="flex items-center gap-2">
                  <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  <span className="text-2xl font-bold text-gray-900">{trainerData.rating}</span>
                </div>
              </div>

              <div className="space-y-6">
                {reviews.map((review) => (
                  <div key={review.id} className="pb-6 border-b last:border-b-0">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="font-semibold text-gray-900">{review.author}</p>
                        <p className="text-sm text-gray-500">{review.date}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700">{review.comment}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 text-center">
                <button className="text-primary-600 hover:text-primary-700 font-medium">
                  Ver todas las reseñas
                </button>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
