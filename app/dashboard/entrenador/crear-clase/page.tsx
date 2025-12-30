"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, MapPin, Clock, Calendar, DollarSign, Users, Info } from "lucide-react";
import Link from "next/link";
import Logo from "@/components/Logo";
import Button from "@/components/Button";
import Card from "@/components/Card";
import { formatCurrency } from "@/lib/utils";

const actividadesDisponibles = [
  "Funcional", "CrossFit", "Running", "Yoga", "Pilates", "Box", "Ciclismo", "Natación", "HIIT", "Otro"
];

const ubicacionesSugeridas = [
  "Plaza Perú, Recoleta",
  "Parque Forestal, Santiago Centro",
  "Parque Bicentenario, Vitacura",
  "Parque Araucano, Las Condes",
  "Cerro San Cristóbal",
  "Costanera Center, Providencia",
  "Otra ubicación"
];

export default function CrearClasePage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    titulo: "",
    descripcion: "",
    actividad: "",
    tipo: "Grupal",
    fecha: "",
    hora: "",
    duracion: 60,
    ubicacion: "",
    direccion: "",
    precio: 12000,
    maxCupos: 12,
    requisitos: "",
    quéTraer: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simular guardado (aquí iría la llamada al backend)
    await new Promise(resolve => setTimeout(resolve, 1500));

    alert("¡Clase creada exitosamente! Los alumnos ya pueden verla en tu perfil.");
    router.push("/dashboard/entrenador");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/dashboard/entrenador" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Volver al Dashboard</span>
            </Link>

            <Logo size="sm" />

            <div className="w-32"></div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Crear Nueva Clase</h1>
          <p className="text-gray-600">Completa la información de tu clase para que los alumnos puedan encontrarla y unirse.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Información Básica */}
          <Card variant="bordered" padding="lg">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Información Básica</h2>

            <div className="space-y-4">
              <div>
                <label htmlFor="titulo" className="block text-sm font-medium text-gray-700 mb-2">
                  Título de la Clase *
                </label>
                <input
                  type="text"
                  id="titulo"
                  name="titulo"
                  required
                  value={formData.titulo}
                  onChange={handleChange}
                  placeholder="Ej: Funcional en Plaza Perú"
                  className="input-primary"
                />
              </div>

              <div>
                <label htmlFor="descripcion" className="block text-sm font-medium text-gray-700 mb-2">
                  Descripción *
                </label>
                <textarea
                  id="descripcion"
                  name="descripcion"
                  required
                  value={formData.descripcion}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Describe tu clase: objetivos, nivel, qué harán los alumnos..."
                  className="input-primary"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="actividad" className="block text-sm font-medium text-gray-700 mb-2">
                    Tipo de Actividad *
                  </label>
                  <select
                    id="actividad"
                    name="actividad"
                    required
                    value={formData.actividad}
                    onChange={handleChange}
                    className="input-primary"
                  >
                    <option value="">Selecciona una actividad</option>
                    {actividadesDisponibles.map(act => (
                      <option key={act} value={act}>{act}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="tipo" className="block text-sm font-medium text-gray-700 mb-2">
                    Modalidad *
                  </label>
                  <select
                    id="tipo"
                    name="tipo"
                    required
                    value={formData.tipo}
                    onChange={handleChange}
                    className="input-primary"
                  >
                    <option value="Grupal">Clase Grupal</option>
                    <option value="Personal">Entrenamiento Personal</option>
                  </select>
                </div>
              </div>
            </div>
          </Card>

          {/* Fecha y Horario */}
          <Card variant="bordered" padding="lg">
            <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
              <Calendar className="w-6 h-6 text-primary-600" />
              Fecha y Horario
            </h2>

            <div className="grid sm:grid-cols-3 gap-4">
              <div>
                <label htmlFor="fecha" className="block text-sm font-medium text-gray-700 mb-2">
                  Fecha *
                </label>
                <input
                  type="date"
                  id="fecha"
                  name="fecha"
                  required
                  value={formData.fecha}
                  onChange={handleChange}
                  className="input-primary"
                />
              </div>

              <div>
                <label htmlFor="hora" className="block text-sm font-medium text-gray-700 mb-2">
                  Hora de Inicio *
                </label>
                <input
                  type="time"
                  id="hora"
                  name="hora"
                  required
                  value={formData.hora}
                  onChange={handleChange}
                  className="input-primary"
                />
              </div>

              <div>
                <label htmlFor="duracion" className="block text-sm font-medium text-gray-700 mb-2">
                  Duración (min) *
                </label>
                <input
                  type="number"
                  id="duracion"
                  name="duracion"
                  required
                  min="15"
                  max="180"
                  step="15"
                  value={formData.duracion}
                  onChange={handleChange}
                  className="input-primary"
                />
              </div>
            </div>
          </Card>

          {/* Ubicación */}
          <Card variant="bordered" padding="lg">
            <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
              <MapPin className="w-6 h-6 text-primary-600" />
              Ubicación
            </h2>

            <div className="space-y-4">
              <div>
                <label htmlFor="ubicacion" className="block text-sm font-medium text-gray-700 mb-2">
                  Lugar *
                </label>
                <select
                  id="ubicacion"
                  name="ubicacion"
                  required
                  value={formData.ubicacion}
                  onChange={handleChange}
                  className="input-primary"
                >
                  <option value="">Selecciona una ubicación</option>
                  {ubicacionesSugeridas.map(loc => (
                    <option key={loc} value={loc}>{loc}</option>
                  ))}
                </select>
              </div>

              {formData.ubicacion === "Otra ubicación" && (
                <div>
                  <label htmlFor="direccion" className="block text-sm font-medium text-gray-700 mb-2">
                    Dirección exacta
                  </label>
                  <input
                    type="text"
                    id="direccion"
                    name="direccion"
                    value={formData.direccion}
                    onChange={handleChange}
                    placeholder="Ingresa la dirección completa"
                    className="input-primary"
                  />
                </div>
              )}
            </div>
          </Card>

          {/* Precio y Cupos */}
          <Card variant="bordered" padding="lg">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Precio y Cupos</h2>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="precio" className="block text-sm font-medium text-gray-700 mb-2">
                  Precio por Persona (CLP) *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <DollarSign className="w-5 h-5 text-gray-400" />
                  </div>
                  <input
                    type="number"
                    id="precio"
                    name="precio"
                    required
                    min="0"
                    step="1000"
                    value={formData.precio}
                    onChange={handleChange}
                    className="input-primary pl-10"
                  />
                </div>
                <p className="mt-1 text-sm text-gray-500">
                  Valor sugerido: {formatCurrency(formData.precio)}
                </p>
              </div>

              <div>
                <label htmlFor="maxCupos" className="block text-sm font-medium text-gray-700 mb-2">
                  Cupos Máximos *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Users className="w-5 h-5 text-gray-400" />
                  </div>
                  <input
                    type="number"
                    id="maxCupos"
                    name="maxCupos"
                    required
                    min="1"
                    max="50"
                    value={formData.maxCupos}
                    onChange={handleChange}
                    className="input-primary pl-10"
                  />
                </div>
              </div>
            </div>
          </Card>

          {/* Información Adicional */}
          <Card variant="bordered" padding="lg">
            <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
              <Info className="w-6 h-6 text-primary-600" />
              Información Adicional
            </h2>

            <div className="space-y-4">
              <div>
                <label htmlFor="requisitos" className="block text-sm font-medium text-gray-700 mb-2">
                  Requisitos (opcional)
                </label>
                <textarea
                  id="requisitos"
                  name="requisitos"
                  value={formData.requisitos}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Ej: Llegar 5 minutos antes, nivel intermedio recomendado..."
                  className="input-primary"
                />
              </div>

              <div>
                <label htmlFor="quéTraer" className="block text-sm font-medium text-gray-700 mb-2">
                  Qué deben traer los alumnos (opcional)
                </label>
                <textarea
                  id="quéTraer"
                  name="quéTraer"
                  value={formData.quéTraer}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Ej: Botella de agua, mat, toalla, zapatos deportivos..."
                  className="input-primary"
                />
              </div>
            </div>
          </Card>

          {/* Botones */}
          <div className="flex items-center gap-4 pt-4">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="flex-1"
              disabled={loading}
            >
              {loading ? "Creando clase..." : "Publicar Clase"}
            </Button>

            <Link href="/dashboard/entrenador" className="flex-1">
              <Button
                type="button"
                variant="secondary"
                size="lg"
                className="w-full"
              >
                Cancelar
              </Button>
            </Link>
          </div>
        </form>
      </main>
    </div>
  );
}
