import Link from "next/link"
import { Filter, Search } from "lucide-react"
import { formatPrice } from "@/lib/utils"

// Datos de demostración - identificar claramente como demostración
const demoProducts = [
  {
    id: "1",
    name: "Pantalla LCD para Nintendo Switch (DEMOSTRACIÓN)",
    slug: "pantalla-lcd-nintendo-switch-demo",
    price: 150000,
    image: "/images/demo.jpg",
    category: "Pantallas",
    console: "Nintendo Switch",
    stock: 0,
    status: "DEMO"
  },
  {
    id: "2", 
    name: "Joystick Analógico para Nintendo Switch Lite (DEMOSTRACIÓN)",
    slug: "joystick-nintendo-switch-lite-demo",
    price: 45000,
    image: "/images/demo.jpg",
    category: "Controles",
    console: "Nintendo Switch Lite",
    stock: 0,
    status: "DEMO"
  },
]

export default function TiendaPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Tienda de Repuestos</h1>
        <p className="text-gray-600">Repuestos y accesorios para consolas Nintendo</p>
        <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-sm text-yellow-800">
            <strong>Nota:</strong> Los productos mostrados son datos de demostración. El inventario real se administra desde el panel administrativo.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters Sidebar */}
        <aside className="lg:w-64 space-y-6">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="font-semibold mb-4 flex items-center">
              <Filter className="h-4 w-4 mr-2" />
              Filtros
            </h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2 text-sm">Consola</h4>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-red-600 focus:ring-red-500" />
                    <span className="ml-2 text-sm">Nintendo Switch</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-red-600 focus:ring-red-500" />
                    <span className="ml-2 text-sm">Nintendo 3DS</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-red-600 focus:ring-red-500" />
                    <span className="ml-2 text-sm">Nintendo Wii</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-red-600 focus:ring-red-500" />
                    <span className="ml-2 text-sm">Nintendo Wii U</span>
                  </label>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2 text-sm">Categoría</h4>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-red-600 focus:ring-red-500" />
                    <span className="ml-2 text-sm">Pantallas</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-red-600 focus:ring-red-500" />
                    <span className="ml-2 text-sm">Controles</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-red-600 focus:ring-red-500" />
                    <span className="ml-2 text-sm">Baterías</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-red-600 focus:ring-red-500" />
                    <span className="ml-2 text-sm">Puertos de carga</span>
                  </label>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2 text-sm">Precio</h4>
                <div className="flex space-x-2">
                  <input type="number" placeholder="Min" className="w-full px-2 py-1 border border-gray-300 rounded text-sm" />
                  <input type="number" placeholder="Max" className="w-full px-2 py-1 border border-gray-300 rounded text-sm" />
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Products Grid */}
        <main className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Buscar repuestos..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
                />
              </div>
            </div>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500">
              <option>Más recientes</option>
              <option>Precio: menor a mayor</option>
              <option>Precio: mayor a menor</option>
              <option>Más vendidos</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {demoProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Imagen del producto</span>
                </div>
                <div className="p-4">
                  <div className="text-xs text-red-600 font-semibold mb-1">{product.category} - {product.console}</div>
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
                  <div className="text-lg font-bold text-red-600 mb-2">
                    {formatPrice(product.price)}
                  </div>
                  <div className="text-sm text-gray-500 mb-3">
                    Estado: {product.status}
                  </div>
                  <div className="space-y-2">
                    <button 
                      disabled 
                      className="w-full bg-gray-300 text-gray-500 py-2 px-4 rounded-lg cursor-not-allowed"
                    >
                      Agotado / Demostración
                    </button>
                    <a
                      href={`https://wa.me/?text=${encodeURIComponent(`Hola, quiero consultar la disponibilidad y compatibilidad del repuesto ${product.name} para mi consola Nintendo.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors inline-block text-center"
                    >
                      Consultar por WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center p-6 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-blue-800 mb-4">
              ¿No encuentras el repuesto que necesitas?
            </p>
            <a
              href={`https://wa.me/?text=${encodeURIComponent("Hola, no encuentro el repuesto que necesito en la tienda. ¿Me pueden ayudar a identificarlo para mi consola Nintendo?")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors inline-flex items-center"
            >
              <Search className="mr-2 h-4 w-4" />
              Buscar con soporte técnico
            </a>
          </div>
        </main>
      </div>
    </div>
  )
}
