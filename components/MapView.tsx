"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";

// Placeholder for map - you can integrate Google Maps or Leaflet later
interface MapViewProps {
  classes?: any[];
  center?: { lat: number; lng: number };
}

export default function MapView({ classes = [], center = { lat: -33.4172, lng: -70.6058 } }: MapViewProps) {
  const [selectedClass, setSelectedClass] = useState<string | null>(null);

  return (
    <div className="relative w-full h-[500px] bg-gray-100 rounded-2xl overflow-hidden">
      {/* Map Placeholder */}
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary-100 via-white to-secondary-100">
        <div className="text-center">
          <MapPin className="w-16 h-16 text-primary-600 mx-auto mb-4" />
          <p className="text-gray-600 font-medium">Mapa Interactivo</p>
          <p className="text-sm text-gray-500 mt-2">
            Aquí se mostrará el mapa con las clases disponibles
          </p>
          <p className="text-xs text-gray-400 mt-4">
            Santiago, Chile
          </p>
        </div>
      </div>

      {/* Mock Markers */}
      <div className="absolute top-1/4 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
        <button className="relative group">
          <div className="w-10 h-10 bg-primary-600 rounded-full shadow-lg flex items-center justify-center text-white font-semibold hover:scale-110 transition-transform">
            3
          </div>
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block">
            <div className="bg-white rounded-lg shadow-lg p-3 text-sm whitespace-nowrap">
              <p className="font-semibold">Parque Bicentenario</p>
              <p className="text-xs text-gray-600">3 clases disponibles</p>
            </div>
          </div>
        </button>
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <button className="relative group">
          <div className="w-10 h-10 bg-secondary-600 rounded-full shadow-lg flex items-center justify-center text-white font-semibold hover:scale-110 transition-transform">
            5
          </div>
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block">
            <div className="bg-white rounded-lg shadow-lg p-3 text-sm whitespace-nowrap">
              <p className="font-semibold">Parque Araucano</p>
              <p className="text-xs text-gray-600">5 clases disponibles</p>
            </div>
          </div>
        </button>
      </div>

      <div className="absolute top-2/3 left-2/3 transform -translate-x-1/2 -translate-y-1/2">
        <button className="relative group">
          <div className="w-10 h-10 bg-primary-600 rounded-full shadow-lg flex items-center justify-center text-white font-semibold hover:scale-110 transition-transform">
            2
          </div>
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block">
            <div className="bg-white rounded-lg shadow-lg p-3 text-sm whitespace-nowrap">
              <p className="font-semibold">Parque Natural</p>
              <p className="text-xs text-gray-600">2 clases disponibles</p>
            </div>
          </div>
        </button>
      </div>

      {/* Map Controls */}
      <div className="absolute bottom-4 right-4 flex flex-col gap-2">
        <button className="w-10 h-10 bg-white rounded-lg shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
          <span className="text-xl">+</span>
        </button>
        <button className="w-10 h-10 bg-white rounded-lg shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
          <span className="text-xl">−</span>
        </button>
      </div>

      {/* Location Button */}
      <div className="absolute bottom-4 left-4">
        <button className="px-4 py-2 bg-white rounded-lg shadow-lg flex items-center gap-2 hover:bg-gray-50 transition-colors">
          <MapPin className="w-4 h-4 text-primary-600" />
          <span className="text-sm font-medium">Mi ubicación</span>
        </button>
      </div>
    </div>
  );
}
