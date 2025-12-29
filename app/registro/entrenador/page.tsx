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
        <div className="bg-white rounded-2xl shadow-card-hover border border-gray-100 p-8 animate-fade-in-up">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl mb-4 shadow-lg">
              <User className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-3">
              Registro para Entrenadores
            </h1>
            <p className="text-lg text-gray-600">
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
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="input-primary"
                    placeholder="Juan Pérez"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3.5 w-5 h-5 text-gray-400 pointer-events-none" />
                    <input
                      type="email"
                      id="email"
                      className="input-primary pl-11"
                      placeholder="juan@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3.5 w-5 h-5 text-gray-400 pointer-events-none" />
                    <input
                      type="tel"
                      id="phone"
                      className="input-primary pl-11"
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
                  <label htmlFor="specialties" className="block text-sm font-medium text-gray-700 mb-2">
                    Especialidades *
                  </label>
                  <select
                    id="specialties"
                    className="input-primary"
                    required
                    multiple
                    size={5}
                  >
                    <option value="yoga">Yoga</option>
                    <option value="funcional">Funcional</option>
                    <option value="running">Running</option>
                    <option value="bootcamp">Bootcamp</option>
                    <option value="pilates">Pilates</option>
                  </select>
                  <p className="text-xs text-gray-500 mt-2">Mantén presionado Ctrl (Cmd en Mac) para seleccionar múltiples opciones</p>
                </div>

                <div>
                  <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-2">
                    Descripción *
                  </label>
                  <div className="relative">
                    <FileText className="absolute left-3 top-3 w-5 h-5 text-gray-400 pointer-events-none" />
                    <textarea
                      id="bio"
                      rows={4}
                      className="input-primary pl-11 resize-none"
                      placeholder="Cuéntanos sobre tu experiencia, metodología y qué hace únicas tus clases..."
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="certifications" className="block text-sm font-medium text-gray-700 mb-2">
                    Certificaciones
                  </label>
                  <input
                    type="text"
                    id="certifications"
                    className="input-primary"
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
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                    ¿Dónde ofreces tus clases? *
                  </label>
                  <input
                    type="text"
                    id="location"
                    className="input-primary"
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
          <div className="mt-10 p-6 bg-gradient-to-br from-primary-50 to-white border border-primary-100 rounded-2xl">
            <h3 className="font-bold text-lg text-gray-900 mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-primary-600" />
              Beneficios de unirte:
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span>Sin costos de entrada - solo pagas comisión cuando tienes alumnos</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span>Gestiona tus horarios y precios de forma flexible</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span>Recibe pagos de forma segura y automática</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span>Accede a métricas y estadísticas de tus clases</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
