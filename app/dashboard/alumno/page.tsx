import { Metadata } from "next";
import { MapPin, Filter, Grid3x3, List } from "lucide-react";
import Navbar from "@/components/Navbar";
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
  const navItems = [
    { label: "Mis Clases", href: "/dashboard/alumno/clases" },
    { label: "Favoritos", href: "/dashboard/alumno/favoritos" },
    { label: "Entrenadores", href: "/dashboard/alumno/entrenadores" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header/Navbar */}
      <Navbar
        userType="alumno"
        userName="María González"
        userInitials="MG"
        navItems={navItems}
        notifications={3}
      />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in-up">
        {/* Page Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center shadow-md">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              Descubre Clases Cerca de Ti
            </h1>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl">
            Explora y reserva las mejores clases outdoor con entrenadores certificados en tu zona
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-10">
          <SearchBar />
        </div>

        {/* Quick Filters */}
        <div className="mb-8 flex gap-3 overflow-x-auto pb-2 custom-scrollbar">
          {["Todos", "Yoga", "Running", "Funcional", "Bootcamp", "Pilates"].map((filter) => (
            <button
              key={filter}
              className={`px-5 py-2.5 rounded-full font-medium whitespace-nowrap transition-all duration-200 ${
                filter === "Todos"
                  ? "bg-primary-600 text-white shadow-md hover:shadow-lg hover:scale-105"
                  : "bg-white text-gray-700 border border-gray-200 hover:border-primary-600 hover:text-primary-600 hover:shadow-md"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Map Section */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <h2 className="text-2xl font-bold text-gray-900">
                Mapa Interactivo
              </h2>
              <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
                {mockClasses.length} clases
              </span>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 text-primary-600 hover:bg-primary-50 rounded-lg font-medium transition-colors">
              <List className="w-4 h-4" />
              Ver lista
            </button>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-card-hover border border-gray-200">
            <MapView classes={mockClasses} />
          </div>
        </div>

        {/* Classes List */}
        <div>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                Clases Disponibles
              </h2>
              <p className="text-gray-600 mt-2 flex items-center gap-2">
                <span className="inline-block w-2 h-2 bg-primary-600 rounded-full animate-pulse-subtle"></span>
                {mockClasses.length} clases encontradas en tu área
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button className="p-2.5 bg-white border border-gray-200 rounded-lg hover:bg-primary-50 hover:border-primary-600 transition-colors">
                <Grid3x3 className="w-5 h-5 text-gray-700" />
              </button>
              <button className="p-2.5 bg-white border border-gray-200 rounded-lg hover:bg-primary-50 hover:border-primary-600 transition-colors">
                <List className="w-5 h-5 text-gray-700" />
              </button>
              <select className="input-primary min-w-[180px] py-2.5">
                <option>Más cercanas</option>
                <option>Mejor calificadas</option>
                <option>Menor precio</option>
                <option>Próximamente</option>
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {mockClasses.map((classItem, index) => (
              <div
                key={classItem.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ClassCard {...classItem} />
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center">
            <button className="group px-8 py-4 bg-white border-2 border-primary-600 text-primary-600 rounded-full font-semibold hover:bg-primary-600 hover:text-white shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2 mx-auto">
              Cargar más clases
              <svg
                className="w-5 h-5 group-hover:rotate-180 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
