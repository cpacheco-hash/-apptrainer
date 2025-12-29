import Link from "next/link";
import { ArrowRight, MapPin, Calendar, CreditCard, Users, Star, CheckCircle, Sparkles, TrendingUp, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center gradient-hero overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-300/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-300/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary-200/10 to-secondary-200/10 rounded-full blur-3xl"></div>
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-40"></div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center space-y-8 animate-fade-in-up">
            {/* Logo */}
            <div className="flex justify-center mb-8 animate-scale-in">
              <div className="bg-white rounded-full p-6 shadow-soft hover:shadow-glow-primary transition-all duration-500 hover:scale-110">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-3xl font-bold">AT</span>
                </div>
              </div>
            </div>

            {/* Badge */}
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md border border-primary-100 animate-slide-in-right">
                <Sparkles className="w-4 h-4 text-primary-600" />
                <span className="text-sm font-semibold text-gray-700">
                  La plataforma líder en fitness outdoor
                </span>
              </div>
            </div>

            {/* Tagline */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 tracking-tight leading-tight">
              Entrena donde quieras,
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-600 animate-gradient">
                reserva fácil
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Conecta con los mejores entrenadores outdoor de tu zona. Yoga, running, bootcamps y más.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 animate-slide-in-left" style={{ animationDelay: "0.2s" }}>
              <Link
                href="/registro/entrenador"
                className="group w-full sm:w-auto px-8 py-4 gradient-primary text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-glow-primary transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Soy Entrenador
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/registro/alumno"
                className="group w-full sm:w-auto px-8 py-4 bg-white text-primary-600 border-2 border-primary-600 rounded-full font-semibold text-lg shadow-lg hover:shadow-glow-secondary hover:bg-primary-50 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Soy Alumno
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-gray-900">200+</p>
                <p className="text-sm text-gray-600 mt-1">Entrenadores</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-gray-900">5,000+</p>
                <p className="text-sm text-gray-600 mt-1">Alumnos</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-gray-900">4.9</p>
                <div className="flex items-center justify-center gap-1 mt-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <p className="text-sm text-gray-600">Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-100/30 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-primary-600" />
              <span className="text-sm font-semibold text-primary-700">Funcionalidades</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Todo lo que necesitas en un solo lugar
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Gestiona tus clases outdoor de manera profesional y simple
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1 */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-primary-50 to-white border border-primary-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Geolocalización</h3>
              <p className="text-gray-600 leading-relaxed">Encuentra clases cerca de ti con nuestro mapa interactivo y filtros avanzados</p>
            </div>

            {/* Feature 2 */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-secondary-50 to-white border border-secondary-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Calendar className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Reservas Online</h3>
              <p className="text-gray-600 leading-relaxed">Agenda y gestiona tus clases en tiempo real desde cualquier dispositivo</p>
            </div>

            {/* Feature 3 */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-green-50 to-white border border-green-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Pagos Seguros</h3>
              <p className="text-gray-600 leading-relaxed">Webpay, tarjetas y transferencias con máxima seguridad y encriptación</p>
            </div>

            {/* Feature 4 */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-white border border-purple-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Análisis y Reportes</h3>
              <p className="text-gray-600 leading-relaxed">Métricas detalladas para hacer crecer tu negocio fitness</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 gradient-primary overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
        <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <CheckCircle className="w-4 h-4 text-white" />
              <span className="text-sm font-semibold text-white">Únete Ahora</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              ¿Listo para transformar
              <br />
              tu experiencia fitness?
            </h2>

            <p className="text-xl md:text-2xl mb-10 text-white/90 max-w-2xl mx-auto leading-relaxed">
              Únete a miles de personas que ya entrenan al aire libre con los mejores profesionales
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/registro/alumno"
                className="group px-10 py-5 bg-white text-primary-600 rounded-full font-bold text-lg shadow-2xl hover:shadow-glow-secondary transform hover:scale-110 transition-all duration-300 flex items-center gap-3"
              >
                Comenzar ahora
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>

              <Link
                href="/registro/entrenador"
                className="group px-10 py-5 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white hover:text-primary-600 transform hover:scale-110 transition-all duration-300 flex items-center gap-3"
              >
                Soy entrenador
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex items-center justify-center gap-8 mt-12 text-white/80">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span className="text-sm">Sin costo inicial</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span className="text-sm">Cancela cuando quieras</span>
              </div>
              <div className="hidden md:flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span className="text-sm">Pagos seguros</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-xl font-bold">AT</span>
                </div>
                <span className="text-2xl font-bold">AppTrainer</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                La plataforma líder en Chile para conectar entrenadores outdoor con alumnos. Entrena donde quieras, reserva fácil.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Links */}
            <div>
              <h3 className="font-bold text-lg mb-4">Para Alumnos</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-primary-400 transition-colors">Buscar Clases</a></li>
                <li><a href="#" className="hover:text-primary-400 transition-colors">Cómo Funciona</a></li>
                <li><a href="#" className="hover:text-primary-400 transition-colors">Preguntas Frecuentes</a></li>
                <li><a href="#" className="hover:text-primary-400 transition-colors">Registrarse</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Para Entrenadores</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-primary-400 transition-colors">Crear Cuenta</a></li>
                <li><a href="#" className="hover:text-primary-400 transition-colors">Precios</a></li>
                <li><a href="#" className="hover:text-primary-400 transition-colors">Recursos</a></li>
                <li><a href="#" className="hover:text-primary-400 transition-colors">Soporte</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                © 2025 AppTrainer. Todos los derechos reservados. Hecho con ❤️ en Chile
              </p>
              <div className="flex gap-6 text-sm text-gray-400">
                <a href="#" className="hover:text-primary-400 transition-colors">Términos</a>
                <a href="#" className="hover:text-primary-400 transition-colors">Privacidad</a>
                <a href="#" className="hover:text-primary-400 transition-colors">Cookies</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
