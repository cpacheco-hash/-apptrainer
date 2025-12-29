"use client";

import Link from "next/link";
import { MapPin, Clock, Users, Star, Calendar } from "lucide-react";
import Card from "./Card";
import Button from "./Button";
import { formatCurrency } from "@/lib/utils";

interface ClassCardProps {
  id: string;
  title: string;
  entrenador: {
    name: string;
    avatar?: string;
    rating: number;
  };
  activity: string;
  location: {
    name: string;
    distance?: number;
  };
  date: Date;
  time: string;
  duration: number;
  price: number;
  spotsLeft: number;
  imageUrl?: string;
}

export default function ClassCard({
  id,
  title,
  entrenador,
  activity,
  location,
  date,
  time,
  duration,
  price,
  spotsLeft,
  imageUrl,
}: ClassCardProps) {
  return (
    <Card variant="interactive" padding="none" className="overflow-hidden animate-fade-in-up">
      {/* Image */}
      <div className="relative h-48 bg-gradient-to-br from-primary-400 to-secondary-400 overflow-hidden">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-white bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-600">
            <Users className="w-16 h-16 opacity-50 transition-transform duration-300 group-hover:scale-110" />
          </div>
        )}

        {/* Overlay gradient */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'linear-gradient(to top, rgba(0, 0, 0, 0.2), transparent)' }}></div>

        {/* Activity Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-900 capitalize shadow-md transition-transform duration-200 group-hover:scale-105" style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)' }}>
            {activity}
          </span>
        </div>

        {/* Spots Badge */}
        {spotsLeft <= 3 && spotsLeft > 0 && (
          <div className="absolute top-4 right-4 animate-bounce-subtle">
            <span className="px-3 py-1 backdrop-blur-sm rounded-full text-xs font-semibold text-white shadow-md" style={{ backgroundColor: 'rgba(239, 68, 68, 0.95)' }}>
              ¡Últimos {spotsLeft} cupos!
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>

        {/* Trainer */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
            {entrenador.avatar ? (
              <img src={entrenador.avatar} alt={entrenador.name} className="w-full h-full rounded-full object-cover" />
            ) : (
              entrenador.name.charAt(0)
            )}
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-900">{entrenador.name}</p>
            <div className="flex items-center gap-1">
              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              <span className="text-xs text-gray-600">{entrenador.rating.toFixed(1)}</span>
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <MapPin className="w-4 h-4 text-primary-600" />
            <span>{location.name}</span>
            {location.distance && (
              <span className="text-xs text-gray-400">({location.distance.toFixed(1)} km)</span>
            )}
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Calendar className="w-4 h-4 text-primary-600" />
            <span>{date.toLocaleDateString('es-CL', { weekday: 'long', day: 'numeric', month: 'long' })}</span>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Clock className="w-4 h-4 text-primary-600" />
            <span>{time} ({duration} min)</span>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t">
          <div>
            <p className="text-2xl font-bold text-gray-900">{formatCurrency(price)}</p>
            <p className="text-xs text-gray-500">por persona</p>
          </div>

          <Link href={`/clase/${id}`}>
            <Button variant="primary" size="sm">
              Ver detalles
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
}
