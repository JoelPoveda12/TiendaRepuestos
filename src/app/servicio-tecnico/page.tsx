import Link from "next/link"
import { Wrench, Clock, CheckCircle, AlertCircle, Calendar } from "lucide-react"

const services = [
  {
    id: "mantenimiento-preventivo",
    name: "Mantenimiento Preventivo",
    description: "Limpieza interna completa, revisión de ventiladores, cambio de pasta térmica si es necesario, inspección general de componentes.",
    includes: ["Limpieza de polvo", "Revisión de ventilación", "Inspección de conectores", "Prueba funcional"],
    priceNote: "Precio sujeto a evaluación técnica",
    estimatedTime: "1-2 horas"
  },
  {
    id: "reparacion-hardware",
    name: "Reparación de Hardware",
    description: "Diagnóstico y reparación de fallas electrónicas, cortocircuitos, daños por líquidos, componentes dañados.",
    includes: ["Diagnóstico completo", "Reparación de placa", "Pruebas post-reparación", "Garantía de reparación"],
    priceNote: "Precio sujeto a evaluación técnica",
    estimatedTime: "2-5 días hábiles"
  },
  {
    id: "cambio-pantalla",
    name: "Cambio de Pantalla",
    description: "Reemplazo de pantallas LCD rotas o con fallas, digitalizadores táctiles dañados.",
    includes: ["Pantalla compatible", "Instalación profesional", "Calibración", "Pruebas"],
    priceNote: "Precio sujeto a evaluación técnica",
    estimatedTime: "1-2 días hábiles"
  },
  {
    id: "cambio-bateria",
    name: "Cambio de Batería",
    description: "Reemplazo de baterías agotadas o hinchadas para consolas portátiles.",
    includes: ["Batería compatible", "Instalación", "Calibración", "Pruebas de carga"],
    priceNote: "Precio sujeto a evaluación técnica",
    estimatedTime: "1-2 horas"
  },
  {
    id: "reparacion-joysticks",
    name: "Reparación de Joysticks y Botones",
    description: "Drift de joysticks, botones que no responden, gatillos defectuosos.",
    includes: ["Diagnóstico", "Reemplazo de módulos", "Calibración", "Pruebas"],
    priceNote: "Precio sujeto a evaluación técnica",
    estimatedTime: "1-2 horas"
  },
  {
    id: "puertos-carga",
    name: "Reparación de Puertos de Carga",
    description: "Puertos de carga flojos, dañados o que no cargan correctamente.",
    includes: ["Reparación o reemplazo", "Soldadura especializada", "Pruebas de carga", "Verificación"],
    priceNote: "Precio sujeto a evaluación técnica",
    estimatedTime: "1-3 horas"
  }
]

export default function ServicioTecnicoPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Servicio Técnico Especializado</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Reparación profesional de consolas Nintendo con técnicos especializados. 
          Diagnóstico preciso y repuestos de calidad.
        </p>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
        <div className="flex items-start">
          <AlertCircle className="h-6 w-6 text-yellow-600 mr-3 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-semibold text-yellow-800 mb-2">Importante</h3>
            <p className="text-yellow-700">
              <strong>No prometemos que todas las reparaciones sean posibles antes de realizar un diagnóstico.</strong> 
              Algunos daños pueden ser irreparables o no rentables. Siempre realizamos una evaluación completa.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {services.map((service) => (
          <div key={service.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <Wrench className="h-8 w-8 text-red-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">{service.name}</h3>
            </div>
            <p className="text-gray-600 mb-4">{service.description}</p>
            
            <div className="mb-4">
              <h4 className="font-semibold text-sm mb-2 text-gray-900">Incluye:</h4>
              <ul className="space-y-1">
                {service.includes.map((item, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-4 space-y-2">
              <div className="flex items-center text-sm text-gray-600">
                <Clock className="h-4 w-4 mr-2" />
                <span>Tiempo estimado: {service.estimatedTime}</span>
              </div>
              <div className="text-sm text-red-600 font-semibold">
                {service.priceNote}
              </div>
            </div>

            <div className="space-y-2">
              <Link
                href="/agendar-cita"
                className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors inline-block text-center"
              >
                <Calendar className="inline h-4 w-4 mr-2" />
                Solicitar cita
              </Link>
              <a
                href={`https://wa.me/?text=${encodeURIComponent(`Hola, necesito información sobre el servicio: ${service.name}. ¿Pueden darme más detalles?`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors inline-block text-center"
              >
                Consultar por WhatsApp
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 rounded-lg p-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">¿Cómo es nuestro proceso?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex">
              <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0 font-bold">1</div>
              <div>
                <h3 className="font-semibold mb-2">Recepción</h3>
                <p className="text-gray-600 text-sm">Recibimos tu consola, registramos el estado físico y el problema reportado.</p>
              </div>
            </div>
            <div className="flex">
              <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0 font-bold">2</div>
              <div>
                <h3 className="font-semibold mb-2">Diagnóstico</h3>
                <p className="text-gray-600 text-sm">Realizamos un diagnóstico completo para identificar todas las fallas.</p>
              </div>
            </div>
            <div className="flex">
              <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0 font-bold">3</div>
              <div>
                <h3 className="font-semibold mb-2">Presupuesto</h3>
                <p className="text-gray-600 text-sm">Te enviamos un presupuesto detallado para tu aprobación antes de iniciar.</p>
              </div>
            </div>
            <div className="flex">
              <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0 font-bold">4</div>
              <div>
                <h3 className="font-semibold mb-2">Reparación y Entrega</h3>
                <p className="text-gray-600 text-sm">Ejecutamos la reparación, pruebas y te entregamos tu consola lista.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">¿Listo para reparar tu Nintendo?</h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/agendar-cita"
            className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors inline-flex items-center justify-center"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Agendar cita
          </Link>
          <a
            href={`https://wa.me/?text=${encodeURIComponent("Hola, necesito una consulta sobre reparación de mi consola Nintendo. ¿Pueden ayudarme?")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-flex items-center justify-center"
          >
            Consultar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}
