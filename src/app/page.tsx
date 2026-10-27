import Link from "next/link"
import { Wrench, ShoppingBag, Calendar, MessageCircle, ArrowRight } from "lucide-react"
import { formatPrice } from "@/lib/utils"

const categories = [
  { name: "Nintendo Switch", href: "/consolas/nintendo-switch", image: "/images/switch.jpg" },
  { name: "Nintendo Switch 2", href: "/consolas/nintendo-switch-2", image: "/images/switch2.jpg" },
  { name: "Nintendo 3DS", href: "/consolas/nintendo-3ds", image: "/images/3ds.jpg" },
  { name: "Nintendo Wii", href: "/consolas/nintendo-wii", image: "/images/wii.jpg" },
  { name: "Nintendo Wii U", href: "/consolas/nintendo-wii-u", image: "/images/wiiu.jpg" },
]

const services = [
  {
    title: "Mantenimiento Preventivo",
    description: "Limpieza interna, revisión de ventiladores y componentes",
    icon: Wrench,
  },
  {
    title: "Reparación de Hardware",
    description: "Diagnóstico y reparación de fallas electrónicas",
    icon: Wrench,
  },
  {
    title: "Cambio de Componentes",
    description: "Pantallas, baterías, joysticks, puertos de carga",
    icon: Wrench,
  },
]

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Todo lo que necesitas para reparar tu Nintendo, en un solo lugar
            </h1>
            <p className="text-xl mb-8 text-red-100">
              Dale una segunda vida a tu Nintendo. Encuentra repuestos compatibles, consulta con nuestro soporte técnico y programa tu servicio de mantenimiento o reparación.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/tienda"
                className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                <ShoppingBag className="mr-2 h-5 w-5" />
                Comprar repuestos
              </Link>
              <Link
                href="/agendar-cita"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors inline-flex items-center justify-center"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Solicitar reparación
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/buscar" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-red-600">
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Encontrar mi repuesto</h3>
              <p className="text-gray-600">Busca por consola, modelo o tipo de componente</p>
            </Link>
            <Link href="/agendar-cita" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-red-600">
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Agendar mantenimiento</h3>
              <p className="text-gray-600">Programa una cita para revisión preventiva</p>
            </Link>
            <Link href="/contacto" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-green-600">
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Hablar con soporte técnico</h3>
              <p className="text-gray-600">Te ayudamos a identificar tu repuesto</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Categorías por Consola</h2>
            <p className="text-lg text-gray-600">Repuestos específicos para cada modelo Nintendo</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 text-center hover:border-red-600 border-2 border-transparent"
              >
                <div className="h-20 bg-gray-100 rounded mb-4 flex items-center justify-center">
                  <span className="text-sm text-gray-500">Imagen</span>
                </div>
                <h3 className="font-semibold text-gray-900">{category.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Servicios Técnicos</h2>
            <p className="text-lg text-gray-600">Profesionales especializados en reparación Nintendo</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="bg-white p-6 rounded-lg shadow-md">
                <service.icon className="h-12 w-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link href="/servicio-tecnico" className="text-red-600 font-semibold hover:text-red-700 inline-flex items-center">
                  Ver más <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/agendar-cita"
              className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors inline-flex items-center"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Agendar cita ahora
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">¿Cómo funciona?</h2>
            <p className="text-lg text-gray-600">Proceso simple para reparar o comprar repuestos</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="font-semibold mb-2">Identifica el problema</h3>
              <p className="text-gray-600 text-sm">Describe la falla o busca tu repuesto</p>
            </div>
            <div className="text-center">
              <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="font-semibold mb-2">Consulta</h3>
              <p className="text-gray-600 text-sm">Verificamos compatibilidad por WhatsApp</p>
            </div>
            <div className="text-center">
              <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="font-semibold mb-2">Compra o Agenda</h3>
              <p className="text-gray-600 text-sm">Compra online o agenda tu cita</p>
            </div>
            <div className="text-center">
              <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
              <h3 className="font-semibold mb-2">Recibe tu solución</h3>
              <p className="text-gray-600 text-sm">Reparación o envío a nivel nacional</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-red-600 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">¿No encuentras el repuesto que necesitas?</h2>
          <p className="text-xl mb-8 text-red-100">
            Nuestro equipo te ayuda a identificarlo y encontrar la solución
          </p>
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-flex items-center"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Consultar por WhatsApp
          </a>
        </div>
      </section>
    </div>
  )
}
