"use client";

import { useState } from "react";
import Link from "next/link";
import { Bell, Heart, User, Menu, X, Plus } from "lucide-react";
import Logo from "./Logo";
import Button from "./Button";

interface NavItem {
  label: string;
  href: string;
}

interface NavbarProps {
  userType?: "alumno" | "entrenador" | null;
  userName?: string;
  userInitials?: string;
  navItems?: NavItem[];
  showCreateButton?: boolean;
  onCreateClick?: () => void;
  notifications?: number;
}

export default function Navbar({
  userType = null,
  userName,
  userInitials = "U",
  navItems = [],
  showCreateButton = false,
  onCreateClick,
  notifications = 0,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Logo
            size="sm"
            href={userType ? `/dashboard/${userType}` : "/"}
          />

          {/* Desktop Navigation */}
          {navItems.length > 0 && (
            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200 relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>
          )}

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            {/* Create Button (solo para entrenadores) */}
            {showCreateButton && (
              <Button
                variant="primary"
                size="sm"
                leftIcon={<Plus className="w-4 h-4" />}
                onClick={onCreateClick}
                className="shadow-md hover:shadow-lg"
              >
                Crear clase
              </Button>
            )}

            {/* Notifications */}
            {userType && (
              <button
                className="relative p-2 text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-full transition-all duration-200 group"
                aria-label="Notificaciones"
              >
                <Bell className="w-5 h-5 group-hover:scale-110 transition-transform" />
                {notifications > 0 && (
                  <span className="absolute top-1 right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center animate-pulse-subtle">
                    {notifications > 9 ? "9+" : notifications}
                  </span>
                )}
              </button>
            )}

            {/* Favorites (solo para alumnos) */}
            {userType === "alumno" && (
              <button
                className="p-2 text-gray-600 hover:text-red-500 hover:bg-red-50 rounded-full transition-all duration-200 group"
                aria-label="Favoritos"
              >
                <Heart className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </button>
            )}

            {/* User Avatar */}
            {userType ? (
              <div className="relative group">
                <button className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-full transition-all duration-200">
                  <div className="w-9 h-9 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white text-sm font-semibold shadow-md group-hover:shadow-lg transition-shadow">
                    {userInitials}
                  </div>
                </button>

                {/* Dropdown Menu */}
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                  <div className="px-4 py-2 border-b border-gray-100">
                    <p className="text-sm font-semibold text-gray-900">{userName}</p>
                    <p className="text-xs text-gray-500 capitalize">{userType}</p>
                  </div>
                  <Link
                    href="/perfil"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                  >
                    Mi Perfil
                  </Link>
                  <Link
                    href="/configuracion"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                  >
                    Configuración
                  </Link>
                  <hr className="my-2 border-gray-100" />
                  <button className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors">
                    Cerrar Sesión
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Link
                  href="/login"
                  className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
                >
                  Iniciar Sesión
                </Link>
                <Link href="/registro/alumno">
                  <Button variant="primary" size="sm">
                    Registrarse
                  </Button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all"
            aria-label="Menú"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 animate-fade-in-down">
            {/* Mobile Navigation Links */}
            {navItems.length > 0 && (
              <nav className="flex flex-col space-y-2 mb-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-lg font-medium transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            )}

            {/* Mobile Actions */}
            <div className="space-y-2 pt-4 border-t border-gray-200">
              {showCreateButton && (
                <Button
                  variant="primary"
                  className="w-full justify-center"
                  leftIcon={<Plus className="w-4 h-4" />}
                  onClick={() => {
                    onCreateClick?.();
                    setMobileMenuOpen(false);
                  }}
                >
                  Crear clase
                </Button>
              )}

              {userType ? (
                <>
                  <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                      {userInitials}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{userName}</p>
                      <p className="text-xs text-gray-500 capitalize">{userType}</p>
                    </div>
                  </div>
                  <Link
                    href="/perfil"
                    className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-lg transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Mi Perfil
                  </Link>
                  <Link
                    href="/configuracion"
                    className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-lg transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Configuración
                  </Link>
                  <button className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                    Cerrar Sesión
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="block text-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg font-medium transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Iniciar Sesión
                  </Link>
                  <Link
                    href="/registro/alumno"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Button variant="primary" className="w-full justify-center">
                      Registrarse
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
