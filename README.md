# Nintendo Parts & Repair Colombia

Plataforma web profesional para la venta de repuestos físicos, accesorios y servicio técnico especializado para consolas Nintendo en Colombia.

## Descripción

Sitio web completo enfocado al mercado colombiano que permite:
- Vender repuestos y accesorios para consolas Nintendo
- Ofrecer servicio técnico especializado
- Agendar citas para mantenimiento y reparación
- Gestionar pedidos e inventario desde panel administrativo
- Soporte técnico a través de WhatsApp

## Tecnologías Utilizadas

- **Frontend:** Next.js 16.4.3, React 19.3.0, TypeScript, Tailwind CSS 4
- **Backend:** Next.js API Routes (App Router)
- **Base de Datos:** PostgreSQL con Prisma ORM
- **Autenticación:** JWT / NextAuth (preparado)
- **Iconos:** Lucide React
- **Validación:** Zod
- **Utilidades:** date-fns, clsx, tailwind-merge, zustand

## Consolas Soportadas

- Nintendo Switch, Switch Lite, Switch OLED, Switch 2
- Nintendo 3DS, 3DS XL, 2DS, New 3DS, New 3DS XL, New 2DS XL
- Nintendo Wii, Nintendo Wii U

## Características Principales

### Para Clientes
- **Tienda Online:** Catálogo con filtros por consola, categoría y precio
- **Búsqueda Avanzada:** Buscar por nombre, SKU, tipo de repuesto
- **Carrito de Compras:** Gestión completa del carrito
- **Agendamiento de Citas:** Sistema de citas para servicio técnico
- **WhatsApp Integrado:** Soporte directo por WhatsApp
- **Seguimiento:** Historial de pedidos y reparaciones
- **100% en Español:** Interfaz completamente en español colombiano

### Para Administradores
- **Panel Administrativo:** Dashboard con estadísticas
- **Gestión de Productos:** CRUD completo con inventario
- **Gestión de Pedidos:** Control de estados y envíos
- **Gestión de Citas:** Calendario y confirmación
- **Gestión de Reparaciones:** Seguimiento de órdenes de servicio
- **Configuración:** Tienda, pagos, envíos y WhatsApp

## Requisitos Previos

- Node.js 18+ (incluido en el entorno)
- pnpm 11+ (incluido en el entorno)
- PostgreSQL (para funcionalidad completa)
- Cuenta de WhatsApp Business (opcional)

## Instalación Rápida

### Opción 1: Script Automático (Windows)
```bash
# Ejecutar como administrador o doble click
INSTALAR_Y_CONFIGURAR.bat
```

### Opción 2: Manual
```bash
# Instalar dependencias
pnpm install

# Configurar variables de entorno
copy .env.example .env
# Editar .env con tus configuraciones

# Generar cliente Prisma
pnpm prisma generate

# Ejecutar migraciones (con base de datos configurada)
pnpm prisma migrate dev

# Iniciar servidor de desarrollo
pnpm dev
```

## Ejecución

### Desarrollo
```bash
# Con script
INICIAR_PROYECTO.bat

# O manual
pnpm dev
```

La aplicación estará disponible en: [http://localhost:3000](http://localhost:3000)

### Producción
```bash
# Construir
pnpm build

# Iniciar
pnpm start
```

## Configuración

### Variables de Entorno Principales

Editar archivo `.env` con las siguientes configuraciones:

```env
# Base de Datos
DATABASE_URL="postgresql://usuario:contraseña@localhost:5432/nintendo_parts_repair"

# Aplicación
NEXT_PUBLIC_APP_NAME="Nintendo Parts & Repair Colombia"
NEXT_PUBLIC_APP_URL="http://localhost:3000"
NEXT_PUBLIC_WHATSAPP_NUMBER="573001234567"  # Sin + ni espacios

# Autenticación
NEXTAUTH_SECRET="clave-secreta-muy-segura"
JWT_SECRET="otra-clave-secreta-muy-segura"
```

Ver `.env.example` para todas las variables disponibles.

### Configuración de WhatsApp

1. Obtener número de WhatsApp Business
2. Configurar en `.env`: `NEXT_PUBLIC_WHATSAPP_NUMBER=573XXXXXXXXX`
3. El botón flotante y enlaces usarán este número automáticamente

### Base de Datos

1. Crear base de datos PostgreSQL: `nintendo_parts_repair`
2. Configurar `DATABASE_URL` en `.env`
3. Ejecutar: `pnpm prisma migrate dev`
4. (Opcional) Poblar con datos de prueba: `pnpm prisma db seed`

## Estructura del Proyecto

```
src/
├── app/                    # App Router de Next.js
│   ├── (shop)/            # Rutas de tienda
│   ├── admin/             # Panel administrativo
│   ├── agendar-cita/      # Sistema de citas
│   ├── servicio-tecnico/  # Página de servicios
│   ├── tienda/            # Catálogo de productos
│   └── page.tsx           # Página principal
├── components/            # Componentes React
│   ├── layout/            # Header, Footer, Layout
│   ├── ui/                # Componentes UI reutilizables
│   └── home/              # Componentes de inicio
├── lib/                   # Utilidades y configuración
│   ├── prisma.ts          # Cliente Prisma
│   └── utils.ts           # Funciones utilitarias
└── store/                 # Estado global (Zustand)

prisma/
└── schema.prisma          # Esquema de base de datos
```

## Funcionalidades en Desarrollo

- [ ] Autenticación de usuarios completa
- [ ] Proceso de checkout y pagos
- [ ] Integración con pasarelas de pago colombianas (Wompi, Mercado Pago)
- [ ] Integración con transportadoras
- [ ] Sistema de notificaciones por email
- [ ] Panel administrativo funcional completo
- [ ] Carga de imágenes

## Notas Importantes

- **Mercado Colombiano:** Precios en COP, solo envíos nacionales, direcciones colombianas
- **Datos de Demostración:** Los productos mostrados son de demostración y están claramente identificados
- **Sin Pagos Reales:** Las pasarelas de pago están preparadas pero requieren configuración
- **WhatsApp Obligatorio:** Se recomienda configurar el número de WhatsApp para soporte
- **Base de Datos Requerida:** Para funcionalidades completas (carrito, pedidos, citas) se requiere PostgreSQL

## Soporte

Para soporte técnico o consultas sobre el proyecto:
- WhatsApp: Configurar en variables de entorno
- Desarrollado para Nintendo Parts & Repair Colombia

## Licencia

Proyecto privado - Todos los derechos reservados © 2024 Nintendo Parts & Repair Colombia

---

**Desarrollado con enfoque en el mercado colombiano | Precios en Pesos Colombianos (COP) | Atención en Español**
