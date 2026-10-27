"use client"

import { useState } from "react"
import { Calendar, Clock, User, Phone, Mail, Gamepad2 } from "lucide-react"
import { colombianDepartments } from "@/lib/utils"

const consoles = [
  { id: "switch", name: "Nintendo Switch" },
  { id: "switch-lite", name: "Nintendo Switch Lite" },
  { id: "switch-oled", name: "Nintendo Switch OLED" },
  { id: "switch-2", name: "Nintendo Switch 2" },
  { id: "3ds", name: "Nintendo 3DS" },
  { id: "3ds-xl", name: "Nintendo 3DS XL" },
  { id: "2ds", name: "Nintendo 2DS" },
  { id: "new-3ds", name: "Nintendo New 3DS" },
  { id: "new-3ds-xl", name: "Nintendo New 3DS XL" },
  { id: "new-2ds-xl", name: "Nintendo New 2DS XL" },
  { id: "wii", name: "Nintendo Wii" },
  { id: "wii-u", name: "Nintendo Wii U" },
]

const services = [
  { id: "mantenimiento", name: "Mantenimiento Preventivo" },
  { id: "diagnostico", name: "Diagnóstico" },
  { id: "reparacion", name: "Reparación" },
  { id: "pantalla", name: "Cambio de Pantalla" },
  { id: "bateria", name: "Cambio de Batería" },
  { id: "joystick", name: "Reparación de Joysticks/Botones" },
  { id: "puerto", name: "Reparación de Puertos" },
  { id: "otro", name: "Otro (especificar)" },
]

const timeSlots = [
  "09:00", "10:00", "11:00", "12:00", "14:00", "15:00", "16:00", "17:00"
]

export default function AgendarCitaPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    console: "",
    model: "",
    service: "",
    problem: "",
    date: "",
    time: "",
    name: "",
    phone: "",
    email: "",
    department: "",
    city: "",
    address: "",
    photos: [] as File[]
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Funcionalidad en desarrollo. Se requiere configuración de base de datos y validación en servidor. Por favor, contacte por WhatsApp para agendar su cita.")
  }

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Agendar Cita - Servicio Técnico</h1>
        <p className="text-gray-600">Programa tu cita para mantenimiento o reparación de tu consola Nintendo</p>
        <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-sm text-yellow-800">
            <strong>Nota:</strong> Esta funcionalidad requiere configuración completa de base de datos. Por ahora es una demostración. 
            Puedes contactar directamente por WhatsApp para agendar tu cita.
          </p>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          {[1, 2, 3, 4].map((stepNum) => (
            <div key={stepNum} className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                step >= stepNum ? 'bg-red-600 text-white' : 'bg-gray-300 text-gray-600'
              }`}>
                {stepNum}
              </div>
              {stepNum < 4 && (
                <div className={`w-16 h-1 mx-2 ${
                  step > stepNum ? 'bg-red-600' : 'bg-gray-300'
                }`} />
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-2 text-xs text-gray-600">
          <span>Consola & Servicio</span>
          <span>Fecha & Hora</span>
          <span>Datos Personales</span>
          <span>Confirmación</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
        {step === 1 && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Gamepad2 className="h-5 w-5 mr-2" />
              Consola y Servicio
            </h2>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Consola *
              </label>
              <select
                required
                value={formData.console}
                onChange={(e) => setFormData({...formData, console: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
              >
                <option value="">Seleccionar consola</option>
                {consoles.map((console) => (
                  <option key={console.id} value={console.id}>{console.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Modelo específico (opcional)
              </label>
              <input
                type="text"
                value={formData.model}
                onChange={(e) => setFormData({...formData, model: e.target.value})}
                placeholder="Ej: Modelo serial, revisiones si las conoce"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tipo de servicio *
              </label>
              <select
                required
                value={formData.service}
                onChange={(e) => setFormData({...formData, service: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
              >
                <option value="">Seleccionar servicio</option>
                {services.map((service) => (
                  <option key={service.id} value={service.id}>{service.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Descripción del problema o necesidad *
              </label>
              <textarea
                required
                rows={4}
                value={formData.problem}
                onChange={(e) => setFormData({...formData, problem: e.target.value})}
                placeholder="Describe detalladamente el problema que presenta tu consola..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
              />
            </div>

            <button
              type="button"
              onClick={() => setStep(2)}
              className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
            >
              Siguiente
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Calendar className="h-5 w-5 mr-2" />
              Fecha y Hora
            </h2>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Fecha solicitada *
              </label>
              <input
                type="date"
                required
                value={formData.date}
                onChange={(e) => setFormData({...formData, date: e.target.value})}
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Hora disponible *
              </label>
              <div className="grid grid-cols-4 gap-2">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => setFormData({...formData, time})}
                    className={`px-3 py-2 rounded-lg border ${
                      formData.time === time
                        ? 'bg-red-600 text-white border-red-600'
                        : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm text-blue-800">
                <Clock className="inline h-4 w-4 mr-1" />
                Horario de atención: Lunes a Viernes 9:00 - 18:00, Sábados 9:00 - 13:00
              </p>
            </div>

            <div className="flex space-x-4">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-400 transition-colors"
              >
                Anterior
              </button>
              <button
                type="button"
                onClick={() => setStep(3)}
                className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
              >
                Siguiente
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <User className="h-5 w-5 mr-2" />
              Datos de Contacto
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Teléfono / WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  placeholder="300 123 4567"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Correo electrónico
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Departamento *
                </label>
                <select
                  required
                  value={formData.department}
                  onChange={(e) => setFormData({...formData, department: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
                >
                  <option value="">Seleccionar departamento</option>
                  {colombianDepartments.map((dept) => (
                    <option key={dept} value={dept}>{dept}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ciudad/Municipio *
                </label>
                <input
                  type="text"
                  required
                  value={formData.city}
                  onChange={(e) => setFormData({...formData, city: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Dirección completa *
              </label>
              <input
                type="text"
                required
                value={formData.address}
                onChange={(e) => setFormData({...formData, address: e.target.value})}
                placeholder="Calle, carrera, número, barrio"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
              />
            </div>

            <div className="flex space-x-4">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-400 transition-colors"
              >
                Anterior
              </button>
              <button
                type="button"
                onClick={() => setStep(4)}
                className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
              >
                Siguiente
              </button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold mb-4">Confirmación de Solicitud</h2>
            
            <div className="bg-gray-50 p-4 rounded-lg space-y-3">
              <div>
                <span className="font-semibold">Consola:</span> {consoles.find(c => c.id === formData.console)?.name}
                {formData.model && <span> - {formData.model}</span>}
              </div>
              <div>
                <span className="font-semibold">Servicio:</span> {services.find(s => s.id === formData.service)?.name}
              </div>
              <div>
                <span className="font-semibold">Fecha:</span> {formData.date} a las {formData.time}
              </div>
              <div>
                <span className="font-semibold">Cliente:</span> {formData.name} - {formData.phone}
              </div>
              <div>
                <span className="font-semibold">Problema:</span> {formData.problem}
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg">
              <p className="text-sm text-yellow-800">
                <strong>Nota:</strong> Esta es una solicitud, no una cita confirmada. 
                Nos pondremos en contacto contigo para confirmar disponibilidad y detalles.
              </p>
            </div>

            <div className="flex space-x-4">
              <button
                type="button"
                onClick={() => setStep(3)}
                className="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-400 transition-colors"
              >
                Anterior
              </button>
              <button
                type="submit"
                className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
              >
                Enviar solicitud
              </button>
            </div>
          </div>
        )}
      </form>

      <div className="mt-6 text-center">
        <p className="text-gray-600 mb-4">¿Prefieres agendar directamente por WhatsApp?</p>
        <a
          href={`https://wa.me/?text=${encodeURIComponent("Hola, me gustaría agendar una cita para servicio técnico de mi consola Nintendo. ¿Qué información necesitan?")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors inline-flex items-center"
        >
          Agendar por WhatsApp
        </a>
      </div>
    </div>
  )
}
