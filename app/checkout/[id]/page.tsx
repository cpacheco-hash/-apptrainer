import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CreditCard, Lock, MapPin, Calendar, Clock, Check, AlertCircle } from "lucide-react";
import Logo from "@/components/Logo";
import Button from "@/components/Button";
import Card from "@/components/Card";
import { formatCurrency } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Checkout - AppTrainer",
};

// Mock data
const reservationData = {
  classId: "1",
  class: {
    title: "Funcional en Plaza Perú",
    entrenador: "Francisco López",
    date: new Date(2025, 11, 30),
    time: "07:00",
    duration: 60,
    location: "Plaza Perú, Recoleta",
    price: 12000,
  },
  subtotal: 12000,
  platformFee: 600, // 5%
  total: 12600,
};

export default function CheckoutPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href={`/clase/${params.id}`} className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Volver</span>
            </Link>

            <Logo size="sm" />

            <div className="flex items-center gap-2 text-green-600">
              <Lock className="w-4 h-4" />
              <span className="text-sm font-medium">Pago seguro</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Confirmar y pagar</h1>
          <p className="text-gray-600">Completa tu reserva de forma segura</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Payment Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Payment Method */}
            <Card variant="bordered" padding="lg">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Método de pago</h2>

              <div className="space-y-4 mb-6">
                {/* Webpay */}
                <label className="block">
                  <input type="radio" name="paymentMethod" value="webpay" className="sr-only peer" defaultChecked />
                  <div className="flex items-center gap-4 p-4 border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-primary-600 peer-checked:bg-primary-50 hover:border-gray-300 transition-all">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-white rounded-lg border border-gray-200 flex items-center justify-center">
                        <CreditCard className="w-6 h-6 text-gray-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900">Webpay Plus</p>
                      <p className="text-sm text-gray-600">Tarjeta de crédito o débito</p>
                    </div>
                    <div className="w-5 h-5 border-2 border-gray-300 rounded-full peer-checked:border-primary-600 peer-checked:bg-primary-600 flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                </label>

                {/* Card */}
                <label className="block">
                  <input type="radio" name="paymentMethod" value="tarjeta" className="sr-only peer" />
                  <div className="flex items-center gap-4 p-4 border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-primary-600 peer-checked:bg-primary-50 hover:border-gray-300 transition-all">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-white rounded-lg border border-gray-200 flex items-center justify-center">
                        <CreditCard className="w-6 h-6 text-gray-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900">Tarjeta</p>
                      <p className="text-sm text-gray-600">Visa, Mastercard, Amex</p>
                    </div>
                    <div className="w-5 h-5 border-2 border-gray-300 rounded-full peer-checked:border-primary-600 peer-checked:bg-primary-600 flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                </label>

                {/* Transfer */}
                <label className="block">
                  <input type="radio" name="paymentMethod" value="transferencia" className="sr-only peer" />
                  <div className="flex items-center gap-4 p-4 border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-primary-600 peer-checked:bg-primary-50 hover:border-gray-300 transition-all">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-white rounded-lg border border-gray-200 flex items-center justify-center">
                        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900">Transferencia</p>
                      <p className="text-sm text-gray-600">Transferencia bancaria</p>
                    </div>
                    <div className="w-5 h-5 border-2 border-gray-300 rounded-full peer-checked:border-primary-600 peer-checked:bg-primary-600 flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                </label>
              </div>
            </Card>

            {/* Payment Details */}
            <Card variant="bordered" padding="lg">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Detalles de pago</h2>

              <form className="space-y-4">
                <div>
                  <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
                    Número de tarjeta
                  </label>
                  <input
                    type="text"
                    id="cardNumber"
                    placeholder="1234 5678 9012 3456"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="expiry" className="block text-sm font-medium text-gray-700 mb-1">
                      Vencimiento
                    </label>
                    <input
                      type="text"
                      id="expiry"
                      placeholder="MM/AA"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="cvc" className="block text-sm font-medium text-gray-700 mb-1">
                      CVC
                    </label>
                    <input
                      type="text"
                      id="cvc"
                      placeholder="123"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="cardName" className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre en la tarjeta
                  </label>
                  <input
                    type="text"
                    id="cardName"
                    placeholder="JUAN PEREZ"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
              </form>
            </Card>

            {/* Terms */}
            <Card variant="bordered" padding="lg" className="bg-blue-50 border-blue-200">
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="terms"
                  className="mt-1 w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                />
                <label htmlFor="terms" className="text-sm text-gray-700">
                  Acepto los{" "}
                  <Link href="/terminos" className="text-primary-600 hover:text-primary-700 font-medium">
                    términos y condiciones
                  </Link>{" "}
                  y la política de cancelación. Entiendo que puedo cancelar hasta 12 horas antes de la clase.
                </label>
              </div>
            </Card>

            {/* Submit Button */}
            <Button variant="primary" size="lg" className="w-full" leftIcon={<Lock className="w-5 h-5" />}>
              Confirmar y pagar {formatCurrency(reservationData.total)}
            </Button>

            <p className="text-xs text-center text-gray-500">
              Pago seguro procesado con encriptación SSL
            </p>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:col-span-1">
            <Card variant="elevated" padding="lg" className="sticky top-24">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Resumen de reserva</h2>

              {/* Class Details */}
              <div className="mb-6 pb-6 border-b">
                <h3 className="font-semibold text-gray-900 mb-3">{reservationData.class.title}</h3>
                <p className="text-sm text-gray-600 mb-3">con {reservationData.class.entrenador}</p>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span>
                      {reservationData.class.date.toLocaleDateString('es-CL', {
                        weekday: 'long',
                        day: 'numeric',
                        month: 'long'
                      })}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span>{reservationData.class.time} ({reservationData.class.duration} min)</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    <span>{reservationData.class.location}</span>
                  </div>
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Precio de la clase</span>
                  <span className="font-medium text-gray-900">{formatCurrency(reservationData.subtotal)}</span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Comisión de plataforma</span>
                  <span className="font-medium text-gray-900">{formatCurrency(reservationData.platformFee)}</span>
                </div>

                <div className="pt-3 border-t flex items-center justify-between">
                  <span className="font-semibold text-gray-900">Total</span>
                  <span className="text-2xl font-bold text-gray-900">{formatCurrency(reservationData.total)}</span>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="pt-6 border-t space-y-3">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Confirmación instantánea</p>
                    <p className="text-xs text-gray-600">Recibirás un email de confirmación al instante</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Cancelación flexible</p>
                    <p className="text-xs text-gray-600">Cancela hasta 12h antes sin costo</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Pago seguro</p>
                    <p className="text-xs text-gray-600">Protegido con encriptación SSL</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
