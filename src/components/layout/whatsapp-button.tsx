"use client"

import { MessageCircle } from "lucide-react"
import { getWhatsAppUrl } from "@/lib/utils"

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || ""

export function WhatsAppButton() {
  const handleClick = () => {
    if (!whatsappNumber) {
      alert("Número de WhatsApp no configurado. Por favor configure NEXT_PUBLIC_WHATSAPP_NUMBER en las variables de entorno.")
      return
    }
    const message = "Hola, necesito información sobre repuestos o servicio técnico para mi Nintendo."
    window.open(getWhatsAppUrl(whatsappNumber, message), '_blank')
  }

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </button>
  )
}
