import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, User, Mail, Phone, MapPin, FileText, Award } from "lucide-react";
import Logo from "@/components/Logo";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Registro Entrenador - AppTrainer",
  description: "Únete como entrenador y comienza a ofrecer tus clases outdoor",
};

export default function RegistroEntrenadorPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-12">
      <div className="max-w-2xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al inicio
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <Logo size="md" href="/" />
          </div>
        </div>

        {/* Registration Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Registro para Entrenadores
            </h1>
            <p className="text-gray-600">
              Completa tu perfil y comienza a ofrecer tus clases
            </p>
          </div>

          <form className="space-y-6">
            {/* Información Personal */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <User className="w-5 h-5 text-primary-600" />
                Información Personal
              </h2>

              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Juan Pérez"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="juan@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Teléfono *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      id="phone"
                      className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="+56 9 1234 5678"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Información Profesional */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-primary-600" />
                Información Profesional
              </h2>

              <div className="space-y-4">
                <div>
                  <label htmlFor="specialties" className="block text-sm font-medium text-gray-700 mb-1">
                    Especialidades *
                  </label>
                  <select
                    id="specialties"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                    multiple
                  >
                    <option value="yoga">Yoga</option>
                    <option value="funcional">Funcional</option>
                    <option value="running">Running</option>
                    <option value="bootcamp">Bootcamp</option>
                    <option value="pilates">Pilates</option>
                  </select>
                  <p className="text-xs text-gray-500 mt-1">Mantén presionado Ctrl (Cmd en Mac) para seleccionar múltiples opciones</p>
                </div>

                <div>
                  <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-1">
                    Descripción *
                  </label>
                  <div className="relative">
                    <FileText className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <textarea
                      id="bio"
                      rows={4}
                      className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Cuéntanos sobre tu experiencia, metodología y qué hace únicas tus clases..."
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="certifications" className="block text-sm font-medium text-gray-700 mb-1">
                    Certificaciones
                  </label>
                  <input
                    type="text"
                    id="certifications"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Ej: Personal Trainer NSCA, Instructor de Yoga 200h"
                  />
                </div>
              </div>
            </div>

            {/* Ubicación */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary-600" />
                Ubicación Principal
              </h2>

              <div className="space-y-4">
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                    ¿Dónde ofreces tus clases? *
                  </label>
                  <input
                    type="text"
                    id="location"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Ej: Parque Bicentenario, Vitacura"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6 border-t">
              <Button type="submit" variant="primary" size="lg" className="w-full">
                Crear cuenta de entrenador
              </Button>

              <p className="text-center text-sm text-gray-600 mt-4">
                ¿Ya tienes cuenta?{" "}
                <Link href="/login" className="text-primary-600 hover:text-primary-700 font-medium">
                  Inicia sesión
                </Link>
              </p>
            </div>
          </form>

          {/* Benefits */}
          <div className="mt-8 p-6 bg-primary-50 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-3">Beneficios de unirte:</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-primary-600 mt-0.5">✓</span>
                <span>Sin costos de entrada - solo pagas comisión cuando tienes alumnos</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-600 mt-0.5">✓</span>
                <span>Gestiona tus horarios y precios de forma flexible</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-600 mt-0.5">✓</span>
                <span>Recibe pagos de forma segura y automática</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-600 mt-0.5">✓</span>
                <span>Accede a métricas y estadísticas de tus clases</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
