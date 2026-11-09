# Nintendo Parts & Repair Colombia

Tienda web de repuestos físicos para consolas Nintendo (Wii, Wii U, Switch y familia 3DS) y servicio técnico, pensada para operar únicamente en Colombia. Esta es una **versión inicial en un solo archivo HTML**, sin servidor ni base de datos.

> **Datos de demostración:** los productos, precios y existencias incluidos son ejemplos inventados. Reemplázalos por datos reales antes de publicar.

---

## Contenido del proyecto

```
tienda-nintendo/
├── index.html   → la tienda completa (HTML, CSS y JavaScript)
└── README.md    → este documento
```

No requiere instalación, Node.js, base de datos ni compilación.

## Cómo ejecutarla

1. Descomprime la carpeta.
2. Abre `index.html` con doble clic en tu navegador (Chrome, Edge, Firefox o Safari).
3. Para editarla, ábrela con un editor de texto (Bloc de notas, VS Code, etc.).

Las tipografías se cargan desde Google Fonts. Sin conexión a internet la página funciona igual, con una tipografía del sistema.

## Funcionalidades incluidas

**Tienda**
- Catálogo con productos de demostración organizados por consola y tipo de repuesto.
- Buscador por nombre, SKU, tipo, modelo o consola, con coincidencias parciales y sin distinguir tildes.
- Filtros por consola, tipo de repuesto, condición, disponibilidad y precio máximo.
- Orden por precio (menor a mayor, mayor a menor) o por más recientes.
- Estados de disponibilidad: Disponible, Últimas unidades, Agotado y Bajo pedido.
- Aviso "Compatibilidad por verificar" cuando la compatibilidad no está confirmada.
- Mensaje de "sin resultados" con botón para consultar por WhatsApp.

**Carrito y pedido**
- Agregar, quitar y cambiar cantidades, con límite según el inventario.
- Los productos agotados no se pueden agregar.
- El carrito se conserva en el navegador (`localStorage`).
- Formulario de pedido con los 32 departamentos de Colombia y Bogotá D.C. (solo direcciones colombianas).
- El pedido se envía por WhatsApp como **solicitud**, con número de referencia. No es un pago.

**Servicio técnico y citas**
- Cinco servicios de ejemplo con el texto "Precio sujeto a evaluación técnica".
- Formulario de cita con consola, modelo, servicio, descripción, fecha, hora y datos de contacto.
- La fecha mínima se calcula con la zona horaria `America/Bogota`.
- La cita queda como **pendiente de confirmación**; nunca se muestra como confirmada.

**Soporte**
- Botón flotante de WhatsApp visible en todas las páginas.
- Mensajes con el nombre y la referencia del producto, codificados correctamente para la URL.
- Formulario de contacto alternativo con validación de campos.

**Diseño**
- Responsive (computador, tableta y celular), con menú móvil.
- Foco visible para navegación con teclado y respeto de la preferencia de movimiento reducido.
- Interfaz completamente en español.

## Configuración

Toda la configuración está dentro de `index.html`, en la sección `<script>`.

### 1. Datos del negocio y WhatsApp

Busca el bloque `CONFIG`:

```js
const CONFIG={
  nombre:"Nintendo Parts & Repair Colombia",
  whatsapp:"",            // Ej.: "573001234567" (57 + número)
  moneda:"COP",
  horas:["09:00","10:00","11:00","14:00","15:00","16:00"]
};
```

- `nombre`: nombre del negocio (se refleja en el encabezado, el pie y el título).
- `whatsapp`: tu número con el prefijo de Colombia, solo dígitos y sin `+`. Si queda vacío, la página avisa que falta configurarlo.
- `horas`: horarios que se ofrecen en el formulario de citas.

### 2. Productos

Edita la lista `P`. Cada producto tiene estos campos:

| Campo | Significado |
|-------|-------------|
| `id` | Identificador único (número) |
| `n` | Nombre del producto |
| `sku` | Referencia interna |
| `t` | Tipo de repuesto (por ejemplo, "Pantallas") |
| `c` | Lista de consolas, con los nombres de `CONSOLAS` |
| `m` | Modelo compatible. Usa `"Compatibilidad por verificar"` si no está confirmado |
| `k` | Condición: `Nuevo`, `Usado` o `Reacondicionado` |
| `s` | Unidades disponibles. `0` = agotado, `null` = bajo pedido |
| `p` | Precio en pesos colombianos, sin puntos |
| `nw` | Orden de novedad (mayor = más reciente) |

Ejemplo:

```js
{id:9,n:"Botón ZL/ZR",sku:"REF-009",t:"Controles y botones",c:["Nintendo Switch"],m:"Switch OLED",k:"Nuevo",s:15,p:12000,v:"",nw:9}
```

Importante: no pongas compatibilidades, precios ni existencias que no hayas verificado.

### 3. Servicios técnicos

Edita la lista `SV` (campos `n` nombre, `d` descripción y `c` consolas).

### 4. Consolas y modelos

Edita el objeto `CONSOLAS` para agregar o cambiar consolas y modelos.

### 5. Imágenes de productos

Los productos usan un marcador de "Imagen de demostración". Para usar fotos reales, cambia el contenido del `div` con clase `ph` dentro de la función `render()` por una etiqueta `<img src="..." alt="descripción">`.

## Cómo publicarla

Como es un archivo estático, puedes publicarla en cualquier hosting estático:

- **Netlify** o **Vercel**: arrastra la carpeta al panel de despliegue.
- **GitHub Pages**: sube la carpeta a un repositorio y activa Pages.
- **Hosting tradicional**: sube `index.html` por FTP.

Antes de publicar, revisa la lista de pendientes de abajo.

## Limitaciones de esta versión

Esta versión no tiene servidor, por lo que **no incluye**:

- Base de datos ni inventario real: las existencias viven en el código.
- Cuentas de usuario, roles ni panel administrativo.
- Pagos en línea (Wompi, Mercado Pago) ni verificación de pagos.
- Cálculo y verificación de precios en el servidor.
- Reserva de citas con control de cupos ni calendario real.
- Envío de correos electrónicos.
- Integración con transportadoras (Coordinadora, Servientrega, Inter Rapidísimo).
- Subida de fotografías del daño.
- Páginas de políticas (privacidad, términos, envíos, garantías, tratamiento de datos).
- Órdenes de servicio e historial de reparaciones.
- Facturación electrónica.

Como los precios y el inventario están en el navegador, cualquier persona podría alterarlos desde las herramientas de desarrollador. Por eso los pedidos se envían como solicitud y se confirman manualmente por WhatsApp.

## Próximos pasos sugeridos

1. Configurar el número de WhatsApp y cargar el catálogo real.
2. Redactar y publicar las políticas, con revisión de un abogado (Ley 1581 de 2012 sobre datos personales y Ley 1480 de 2011, Estatuto del Consumidor).
3. Consultar con un contador los requisitos de facturación electrónica ante la DIAN.
4. Migrar a una versión con servidor (Next.js, PostgreSQL y Prisma) para tener inventario, pedidos, citas, pagos y panel administrativo reales.

## Pruebas realizadas

No se ejecutaron pruebas automatizadas ni se verificó la página en un navegador durante su creación. Antes de publicar, prueba manualmente: búsqueda y filtros, carrito, pedido, formulario de cita, formulario de contacto y los enlaces de WhatsApp en computador y celular.

## Aviso legal

Este proyecto no está afiliado, patrocinado ni autorizado por Nintendo. Nintendo y los nombres de sus consolas son marcas de sus respectivos propietarios. Considera usar un nombre comercial propio que no incluya la marca. Los textos legales deben ser revisados por el propietario del negocio y por un profesional competente antes de su publicación.
