"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, ShoppingCart, Search, Phone } from "lucide-react"
import { getWhatsAppUrl } from "@/lib/utils"

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || ""

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Tienda", href: "/tienda" },
  { name: "Consolas", href: "/consolas" },
  { name: "Servicio Técnico", href: "/servicio-tecnico" },
  { name: "Agendar Cita", href: "/agendar-cita" },
  { name: "Contacto", href: "/contacto" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleWhatsAppSupport = () => {
    if (whatsappNumber) {
      const message = "Hola, necesito soporte técnico. ¿Me pueden ayudar?"
      window.open(getWhatsAppUrl(whatsappNumber, message), '_blank')
    }
  }

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold text-red-600">Nintendo Parts & Repair</span>
              <span className="ml-1 text-xl font-bold text-gray-900">Colombia</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            <Link
              href="/buscar"
              className="p-2 text-gray-700 hover:text-red-600 transition-colors"
              aria-label="Buscar"
            >
              <Search className="h-5 w-5" />
            </Link>
            <Link
              href="/carrito"
              className="p-2 text-gray-700 hover:text-red-600 transition-colors relative"
              aria-label="Carrito"
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Link>
            <button
              onClick={handleWhatsAppSupport}
              className="flex items-center space-x-1 bg-green-600 text-white px-3 py-2 rounded-md hover:bg-green-700 transition-colors text-sm"
            >
              <Phone className="h-4 w-4" />
              <span>WhatsApp</span>
            </button>
            <Link
              href="/mi-cuenta"
              className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors"
            >
              Mi cuenta
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            <Link href="/carrito" className="p-2 text-gray-700 hover:text-red-600 relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Link>
            <button
              type="button"
              className="p-2 text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden">
            <div className="space-y-1 pb-3 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-red-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/buscar"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-red-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                Buscar
              </Link>
              <Link
                href="/mi-cuenta"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-red-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                Mi cuenta
              </Link>
              <button
                onClick={() => {
                  handleWhatsAppSupport()
                  setMobileMenuOpen(false)
                }}
                className="block w-full text-left px-3 py-2 text-base font-medium text-green-600 hover:bg-gray-50"
              >
                WhatsApp Soporte
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
