"use client";

import { useState } from "react";
import { Search, MapPin, Calendar, Filter } from "lucide-react";
import Button from "./Button";

interface SearchBarProps {
  onSearch?: (filters: SearchFilters) => void;
}

interface SearchFilters {
  activity?: string;
  location?: string;
  date?: Date;
  time?: string;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [filters, setFilters] = useState<SearchFilters>({});
  const [showFilters, setShowFilters] = useState(false);

  const handleSearch = () => {
    onSearch?.(filters);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      {/* Main Search Fields */}
      <div className="grid md:grid-cols-4 gap-4">
        {/* Activity */}
        <div className="relative">
          <label htmlFor="activity" className="block text-sm font-medium text-gray-700 mb-1">
            Actividad
          </label>
          <select
            id="activity"
            value={filters.activity || ""}
            onChange={(e) => setFilters({ ...filters, activity: e.target.value })}
            className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent appearance-none"
          >
            <option value="">Todas</option>
            <option value="yoga">Yoga</option>
            <option value="funcional">Funcional</option>
            <option value="running">Running</option>
            <option value="bootcamp">Bootcamp</option>
            <option value="pilates">Pilates</option>
          </select>
        </div>

        {/* Location */}
        <div className="relative">
          <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
            Ubicación
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
            <input
              type="text"
              id="location"
              value={filters.location || ""}
              onChange={(e) => setFilters({ ...filters, location: e.target.value })}
              placeholder="Ej: Vitacura"
              className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Date */}
        <div className="relative">
          <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
            Fecha
          </label>
          <div className="relative">
            <Calendar className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
            <input
              type="date"
              id="date"
              value={filters.date?.toISOString().split('T')[0] || ""}
              onChange={(e) => setFilters({ ...filters, date: new Date(e.target.value) })}
              className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Search Button */}
        <div className="flex items-end">
          <Button
            onClick={handleSearch}
            variant="primary"
            size="md"
            leftIcon={<Search className="w-5 h-5" />}
            className="w-full"
          >
            Buscar
          </Button>
        </div>
      </div>

      {/* Advanced Filters Toggle */}
      <div className="mt-4 flex justify-between items-center">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="text-sm text-gray-600 hover:text-gray-900 flex items-center gap-2"
        >
          <Filter className="w-4 h-4" />
          {showFilters ? "Ocultar filtros" : "Más filtros"}
        </button>

        <button
          onClick={() => setFilters({})}
          className="text-sm text-primary-600 hover:text-primary-700 font-medium"
        >
          Limpiar filtros
        </button>
      </div>

      {/* Advanced Filters */}
      {showFilters && (
        <div className="mt-4 pt-4 border-t grid md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Precio máximo
            </label>
            <input
              type="number"
              placeholder="$15.000"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tipo de clase
            </label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500">
              <option value="">Todas</option>
              <option value="individual">Individual</option>
              <option value="grupal">Grupal</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Rating mínimo
            </label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500">
              <option value="">Cualquiera</option>
              <option value="4">⭐ 4+</option>
              <option value="4.5">⭐ 4.5+</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
}
