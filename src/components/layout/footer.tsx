import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-xl font-bold text-red-500">Nintendo Parts & Repair</span>
              <span className="ml-1 text-xl font-bold text-white">Colombia</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Dale una segunda vida a tu Nintendo. Repuestos, accesorios y servicio técnico especializado para tus consolas Nintendo en Colombia.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-red-500" />
                <span className="text-gray-300">WhatsApp: Configurar en variables de entorno</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-red-500" />
                <span className="text-gray-300">contacto@nintendoparts.com.co</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-red-500" />
                <span className="text-gray-300">Taller - Bogotá, Colombia</span>
              </div>
            </div>
          </div>

          {/* Tienda */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Tienda</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/tienda" className="text-gray-300 hover:text-white transition-colors">
                  Todos los productos
                </Link>
              </li>
              <li>
                <Link href="/consolas/nintendo-switch" className="text-gray-300 hover:text-white transition-colors">
                  Nintendo Switch
                </Link>
              </li>
              <li>
                <Link href="/consolas/nintendo-3ds" className="text-gray-300 hover:text-white transition-colors">
                  Nintendo 3DS
                </Link>
              </li>
              <li>
                <Link href="/consolas/wii" className="text-gray-300 hover:text-white transition-colors">
                  Nintendo Wii
                </Link>
              </li>
              <li>
                <Link href="/consolas/wii-u" className="text-gray-300 hover:text-white transition-colors">
                  Nintendo Wii U
                </Link>
              </li>
            </ul>
          </div>

          {/* Servicio y Soporte */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Servicio Técnico</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/servicio-tecnico" className="text-gray-300 hover:text-white transition-colors">
                  Servicios disponibles
                </Link>
              </li>
              <li>
                <Link href="/agendar-cita" className="text-gray-300 hover:text-white transition-colors">
                  Agendar cita
                </Link>
              </li>
              <li>
                <Link href="/seguimiento-reparacion" className="text-gray-300 hover:text-white transition-colors">
                  Seguimiento de reparación
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-gray-300 hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="/preguntas-frecuentes" className="text-gray-300 hover:text-white transition-colors">
                  Preguntas frecuentes
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="text-gray-400 text-sm">
              <p>&copy; 2024 Nintendo Parts & Repair Colombia. Todos los derechos reservados.</p>
              <p className="mt-1">Operando exclusivamente en Colombia. Precios en COP.</p>
            </div>
            <div className="flex flex-wrap gap-4 md:justify-end text-sm">
              <Link href="/politica-privacidad" className="text-gray-400 hover:text-white transition-colors">
                Política de Privacidad
              </Link>
              <Link href="/terminos-condiciones" className="text-gray-400 hover:text-white transition-colors">
                Términos y Condiciones
              </Link>
              <Link href="/politica-envios" className="text-gray-400 hover:text-white transition-colors">
                Política de Envíos
              </Link>
              <Link href="/politica-cambios-garantias" className="text-gray-400 hover:text-white transition-colors">
                Cambios y Garantías
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
