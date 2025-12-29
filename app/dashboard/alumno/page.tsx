import { Metadata } from "next";
import { Bell, Heart, User } from "lucide-react";
import Logo from "@/components/Logo";
import SearchBar from "@/components/SearchBar";
import MapView from "@/components/MapView";
import ClassCard from "@/components/ClassCard";

export const metadata: Metadata = {
  title: "Buscar Clases - AppTrainer",
  description: "Encuentra y reserva tus clases outdoor favoritas",
};

// Mock data - esto vendría de la base de datos
const mockClasses = [
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
    title: "Yoga al Amanecer",
    entrenador: {
      name: "María González",
      rating: 5.0,
    },
    activity: "yoga",
    location: {
      name: "Parque Bicentenario, Vitacura",
      distance: 2.5,
    },
    date: new Date(2025, 11, 30),
    time: "06:30",
    duration: 75,
    price: 15000,
    spotsLeft: 5,
  },
  {
    id: "3",
    title: "Running Club Las Condes",
    entrenador: {
      name: "Carlos Ruiz",
      rating: 4.8,
    },
    activity: "running",
    location: {
      name: "Parque Araucano, Las Condes",
      distance: 3.1,
    },
    date: new Date(2025, 11, 31),
    time: "18:30",
    duration: 90,
    price: 10000,
    spotsLeft: 8,
  },
  {
    id: "4",
    title: "Bootcamp Intensivo",
    entrenador: {
      name: "Andrea Silva",
      rating: 4.7,
    },
    activity: "bootcamp",
    location: {
      name: "Parque Natural, Ñuñoa",
      distance: 1.8,
    },
    date: new Date(2025, 11, 31),
    time: "07:30",
    duration: 60,
    price: 14000,
    spotsLeft: 2,
  },
  {
    id: "5",
    title: "Pilates en el Parque",
    entrenador: {
      name: "Sofía Martínez",
      rating: 4.9,
    },
    activity: "pilates",
    location: {
      name: "Parque Padre Hurtado, Vitacura",
      distance: 2.9,
    },
    date: new Date(2026, 0, 1),
    time: "09:00",
    duration: 60,
    price: 16000,
    spotsLeft: 4,
  },
  {
    id: "6",
    title: "Entrenamiento Funcional Grupal",
    entrenador: {
      name: "Diego Torres",
      rating: 4.6,
    },
    activity: "funcional",
    location: {
      name: "Parque de las Esculturas, Providencia",
      distance: 4.2,
    },
    date: new Date(2026, 0, 2),
    time: "19:00",
    duration: 75,
    price: 13000,
    spotsLeft: 6,
  },
];

export default function DashboardAlumnoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header/Navbar */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Logo size="sm" href="/dashboard/alumno" />

            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="text-gray-700 hover:text-primary-600 font-medium">
                Mis Clases
              </a>
              <a href="#" className="text-gray-700 hover:text-primary-600 font-medium">
                Favoritos
              </a>
              <a href="#" className="text-gray-700 hover:text-primary-600 font-medium">
                Entrenadores
              </a>
            </nav>

            <div className="flex items-center gap-4">
              <button className="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>

              <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors">
                <Heart className="w-5 h-5" />
              </button>

              <button className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-full transition-colors">
                <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                  M
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Reserva clases deportivas al aire libre
          </h1>
          <p className="text-gray-600">
            Encuentra entrenadores cerca de ti y reserva tu próxima clase
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <SearchBar />
        </div>

        {/* Map Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">
              Clases cerca de ti
            </h2>
            <button className="text-sm text-primary-600 hover:text-primary-700 font-medium">
              Ver lista
            </button>
          </div>
          <MapView classes={mockClasses} />
        </div>

        {/* Classes List */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Clases disponibles
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                {mockClasses.length} clases encontradas
              </p>
            </div>

            <div className="flex items-center gap-4">
              <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm">
                <option>Más cercanas</option>
                <option>Mejor calificadas</option>
                <option>Menor precio</option>
                <option>Próximamente</option>
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockClasses.map((classItem) => (
              <ClassCard key={classItem.id} {...classItem} />
            ))}
          </div>

          {/* Load More */}
          <div className="mt-8 text-center">
            <button className="px-6 py-3 bg-white border-2 border-gray-300 rounded-full font-medium text-gray-700 hover:border-primary-600 hover:text-primary-600 transition-colors">
              Cargar más clases
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
