// Fuente única del contenido comercial de los sitios web (v5).
// Documentación interna: docs/ (no se publica). No nombrar proveedores de infraestructura en el contenido público.

export type PaqueteId = "presencia" | "profesional" | "crecimiento";
export type InteresId = PaqueteId | "mayor-alcance" | "ads-marketing" | "ecommerce";

export interface Paquete {
  id: PaqueteId;
  nombre: string;
  para: string;
  creacion: string;
  /** Línea de costos posteriores mostrada en la tarjeta. */
  posterior: string;
  recomendado?: boolean;
  resumen: string[];
  ejemplos?: string;
}

export const PRECIO_INICIAL = "$5,900";
export const RENOVACION = "$2,490";

export const PAQUETES: Paquete[] = [
  {
    id: "presencia",
    nombre: "Presencia",
    para: "Para explicar tu oferta en una sola página y facilitar que te consulten.",
    creacion: "$5,900",
    posterior: `Primer año de alojamiento estándar incluido. Desde el segundo año, desde ${RENOVACION} + IVA al año.`,
    resumen: [
      "Una página con hasta 6 secciones",
      "WhatsApp (si hay número confirmado) y formulario con notificación de solicitudes",
      "Configuración inicial para buscadores y medición de solicitudes",
      "Hasta 5 imágenes con licencia adecuada, si se necesitan",
      "Entrega estimada: 7 días hábiles",
    ],
    ejemplos: "Ejemplos: un consultorio, un negocio local o una selección breve de productos con consultas por WhatsApp.",
  },
  {
    id: "profesional",
    nombre: "Profesional",
    para: "Para explicar varios servicios en páginas independientes.",
    creacion: "$14,900",
    posterior: `Primer año de alojamiento estándar incluido. Desde el segundo año, desde ${RENOVACION} + IVA al año.`,
    recomendado: true,
    resumen: [
      "Hasta 5 páginas",
      "Contenido organizado y redactado a partir de tu información",
      "Formulario que identifica el servicio de interés",
      "Optimización inicial de las páginas para buscadores",
      "Analytics y Search Console cuando existan accesos y datos",
      "Guía y llamada de entrega de 30 minutos",
      "Entrega estimada: 15 días hábiles",
    ],
  },
  {
    id: "crecimiento",
    nombre: "Crecimiento",
    para: "Para sumar contenido y mejora continua a tu sitio, con acompañamiento mensual.",
    creacion: "$22,900",
    posterior:
      "Más $3,900 + IVA al mes desde la publicación. Alojamiento y mantenimiento técnico rutinario incluidos mientras la mensualidad esté activa.",
    resumen: [
      "Hasta 8 páginas, incluido el índice del blog",
      "3 artículos iniciales y diseño personalizado dentro del alcance acordado",
      "Cada mes: 2 artículos, revisión de métricas, 1 optimización de una página e informe",
      "Hasta 1 hora total al mes de cambios de textos e imágenes",
      "Entrega inicial estimada: 20 días hábiles",
    ],
  },
];

export interface FilaComparacion {
  concepto: string;
  /** Presencia, Profesional, Crecimiento. */
  valores: [string, string, string];
  detalle?: boolean;
}

export const COMPARACION: FilaComparacion[] = [
  {
    concepto: "Páginas",
    valores: ["Una página, hasta 6 secciones", "Hasta 5 páginas", "Hasta 8 páginas, incluido el índice del blog"],
  },
  { concepto: "Costo de creación", valores: ["$5,900 + IVA", "$14,900 + IVA", "$22,900 + IVA"] },
  {
    concepto: "Acompañamiento mensual",
    valores: ["No incluido", "No incluido", "$3,900 + IVA al mes desde la publicación"],
  },
  {
    concepto: "Alojamiento",
    valores: [
      "Primer año estándar incluido",
      "Primer año estándar incluido",
      "Incluido mientras la mensualidad esté activa",
    ],
  },
  {
    concepto: "Desde el segundo año",
    valores: [
      `Desde ${RENOVACION} + IVA al año`,
      `Desde ${RENOVACION} + IVA al año`,
      "Sin renovación anual mientras la mensualidad esté activa",
    ],
  },
  {
    concepto: "Contacto",
    valores: [
      "WhatsApp (si hay número confirmado) y formulario con notificación",
      "Formulario con selección de servicio y notificación",
      "Formulario con medición de solicitudes",
    ],
  },
  { concepto: "Entrega estimada", valores: ["7 días hábiles", "15 días hábiles", "20 días hábiles"] },
  {
    concepto: "Contenido",
    valores: [
      "Organización y corrección del contenido que entregas",
      "Organización y redacción a partir de tu información",
      "3 artículos iniciales y 2 al mes, publicados tras tu aprobación",
    ],
    detalle: true,
  },
  {
    concepto: "Diseño",
    valores: [
      "Estructura adaptada a tu identidad y materiales",
      "Una página independiente por cada servicio prioritario",
      "Personalizado dentro del alcance acordado",
    ],
    detalle: true,
  },
  {
    concepto: "Imágenes con licencia adecuada",
    valores: ["Hasta 5, si se necesitan", "Hasta 10, si hacen falta", "Hasta 15"],
    detalle: true,
  },
  {
    concepto: "Revisiones antes de publicar",
    valores: ["2 rondas consolidadas", "2 rondas consolidadas", "3 rondas consolidadas del sitio"],
    detalle: true,
  },
  {
    concepto: "Buscadores y medición",
    valores: [
      "Configuración inicial y medición de solicitudes",
      "Optimización inicial de las páginas; Analytics y Search Console cuando existan accesos y datos",
      "Configuración y medición, más revisión mensual de métricas e incidencias",
    ],
    detalle: true,
  },
  {
    concepto: "Google Business Profile",
    valores: [
      "No incluido",
      "Si el negocio es elegible; verificación sujeta a Google",
      "Si el negocio es elegible; verificación sujeta a Google",
    ],
    detalle: true,
  },
  {
    concepto: "Entrega y capacitación",
    valores: ["Guía de entrega", "Guía y llamada de 30 minutos", "Guía y llamada de 60 minutos"],
    detalle: true,
  },
  {
    concepto: "Cambios después de publicar",
    valores: [
      "Se cotizan",
      "Se cotizan",
      "Hasta 1 hora total al mes, no acumulable, más la optimización mensual de una página",
    ],
    detalle: true,
  },
  {
    concepto: "Corrección de defectos de entrega",
    valores: ["30 días", "30 días", "30 días"],
    detalle: true,
  },
  {
    concepto: "No incluye",
    valores: [
      "Carrito, cobros, inventario, reservas, portal, blog ni catálogo extenso",
      "Ecommerce, cuentas de usuarios, sistemas de gestión, reservas complejas ni integraciones personalizadas",
      "Administración de Google Ads, inversión publicitaria, redes sociales, ecommerce, nuevas funciones ni integraciones a medida",
    ],
    detalle: true,
  },
];

export const INCLUIDO_EN_TODOS = [
  "Calidad profesional y diseño adaptado a celular, tableta y computadora",
  "Tus colores, tu logotipo y tus imágenes",
  "Ícono del sitio y vista previa al compartir el enlace",
  "Página de error personalizada",
  "Medición separada de clics en WhatsApp (si aplica) y solicitudes recibidas por formulario",
  "Maquetación del aviso de privacidad con el contenido que entregues o valides",
  "Corrección de defectos de entrega durante 30 días",
];

export interface ItemAparte {
  titulo: string;
  texto: string;
  href?: string;
  enlace?: string;
}

export const SE_COTIZA_APARTE: ItemAparte[] = [
  {
    titulo: "Dominio",
    texto:
      "Registro y renovación se cotizan según el nombre, la extensión y la tarifa vigente. El importe se confirma antes de pagarlo y el dominio queda a tu nombre.",
  },
  {
    titulo: "Correo empresarial",
    texto:
      "No viene incluido en los paquetes. Se cotiza como adicional si lo necesitas. El aviso de solicitudes del formulario es independiente de tu correo empresarial.",
  },
  {
    titulo: "Páginas y funciones adicionales",
    texto: "Si necesitas más páginas o funciones de las que incluye tu paquete, te cotizamos antes de empezar.",
  },
  {
    titulo: "Cambios después de la entrega",
    texto: "Pasados los 30 días de corrección de defectos, cada cambio se cotiza antes de hacerse.",
  },
  {
    titulo: "Tienda en línea",
    texto: "Catálogo, carrito y cobros en línea son un proyecto distinto, con cotización según alcance.",
    href: "/servicios/ecommerce",
    enlace: "Ver ecommerce",
  },
  {
    titulo: "Publicidad y marketing digital",
    texto: "Campañas, conversiones y seguimiento se definen en una propuesta personalizada.",
    href: "/servicios/ads-marketing-digital",
    enlace: "Ver Ads y marketing digital",
  },
];

export const RENOVACION_INCLUYE = [
  "Alojamiento del sitio dentro de los recursos acordados",
  "Gestión de la configuración del dominio y del certificado HTTPS",
  "Una revisión técnica anual",
];

export const RENOVACION_NO_INCLUYE = [
  "Cambios de contenido",
  "Rediseño o nuevas funciones",
  "Mantenimiento evolutivo",
  "Correo empresarial",
  "Atención ilimitada",
];

export const PASOS = [
  {
    titulo: "Solicitas una propuesta",
    texto: "Cuéntanos tu profesión o negocio y qué quieres presentar. No necesitas tener todo listo.",
  },
  {
    titulo: "Recibes la propuesta",
    texto: "Incluye el alcance, el total con impuestos, la cotización del dominio y las condiciones de pago.",
  },
  {
    titulo: "Anticipo del 50% y materiales",
    texto: "Con el anticipo y tus materiales y accesos completos, comienza el plazo de entrega.",
  },
  {
    titulo: "Revisamos juntos",
    texto: "Ves el avance y consolidas tus comentarios en las rondas de revisión de tu paquete.",
  },
  {
    titulo: "Aprobación y publicación",
    texto: "Apruebas la entrega, pagas el 50% restante y publicamos tu sitio.",
  },
  {
    titulo: "30 días de corrección",
    texto: "Si aparece un defecto de la entrega durante los siguientes 30 días, lo corregimos.",
  },
];

export interface Pregunta {
  p: string;
  r: string;
  href?: string;
  enlace?: string;
}

export const PREGUNTAS: Pregunta[] = [
  {
    p: "¿Cuánto pago en total el primer año?",
    r: "Presencia: $5,900 + IVA. Profesional: $14,900 + IVA. Ambos incluyen el primer año de alojamiento estándar. Crecimiento: $22,900 + IVA de creación más $3,900 + IVA al mes desde la publicación. A cualquiera de ellos se suma el dominio, que se cotiza por separado, y el correo empresarial si lo necesitas. En tu propuesta verás el total con impuestos antes de contratar.",
  },
  {
    p: "¿Qué incluye la renovación desde el segundo año?",
    r: "En Presencia y Profesional, desde $2,490 + IVA al año. Es una tarifa de alojamiento administrado y gestión técnica básica: incluye el alojamiento del sitio dentro de los recursos acordados, la gestión de la configuración del dominio y del certificado HTTPS, y una revisión técnica anual. No incluye cambios de contenido, rediseño, nuevas funciones, mantenimiento evolutivo, correo empresarial ni atención ilimitada. Si tu sitio necesita más recursos, te lo explicamos y cotizamos antes de contratar. En Crecimiento no hay renovación anual mientras la mensualidad esté activa.",
  },
  {
    p: "¿El dominio está incluido?",
    r: "No. Registro y renovación se cotizan por separado según el nombre, la extensión y la tarifa vigente, y no prometemos un precio fijo de renovación. Se registra a tu nombre después de que apruebes el importe.",
  },
  {
    p: "¿Incluyen correo empresarial?",
    r: "No. Los paquetes no incluyen buzones de correo. Si lo necesitas, se cotiza como adicional. No lo confundas con el aviso del formulario: las solicitudes de tus clientes se te notifican al correo que indiques, sin necesidad de un buzón empresarial.",
  },
  {
    p: "¿Cuándo empieza a contar el plazo de entrega?",
    r: "Desde que recibimos el anticipo, tus materiales y accesos completos, y se acuerda el calendario. El tiempo que tardan tus revisiones o verificaciones de terceros no cuenta como producción. Si cambia el alcance, la fecha se ajusta.",
  },
  {
    p: "¿Puedo actualizar los textos yo mismo?",
    r: "No. Estos paquetes no incluyen un panel de edición. Dentro de los primeros 30 días corregimos defectos de entrega; después, cada cambio se cotiza antes de hacerse, salvo la hora mensual de cambios que incluye Crecimiento.",
  },
  {
    p: "¿Puedo cambiar de paquete más adelante?",
    r: "Sí. Revisamos qué se puede reutilizar y cotizamos el trabajo adicional antes de empezar. No siempre basta con pagar la diferencia de precios.",
  },
  {
    p: "¿Qué pasa si cancelo el acompañamiento de Crecimiento?",
    r: "Se cancela con 30 días de aviso. Al finalizar el periodo pagado cesan los artículos, las optimizaciones, los informes y los cambios. Si quieres que tu sitio siga alojado, la continuidad se ofrece desde $2,490 + IVA al año según los recursos del sitio y el blog, descontando cualquier periodo ya pagado para evitar doble cobro. El dominio se cotiza aparte. También puedes acordar la entrega o migración del sitio.",
  },
  {
    p: "¿El sitio garantiza clientes o posiciones en Google?",
    r: "No. Incluye el trabajo técnico y de contenido contratado para que tu sitio se entienda y se use bien. No garantizamos indexación, visitas, posiciones ni ventas.",
  },
  {
    p: "¿Hacen tiendas en línea o administran publicidad?",
    r: "Sí, como servicios independientes con cotización según alcance. No forman parte de ningún paquete de sitio web.",
    href: "/servicios/ecommerce",
    enlace: "Ver ecommerce",
  },
];

const INTERESES: InteresId[] = ["presencia", "profesional", "crecimiento", "mayor-alcance", "ads-marketing", "ecommerce"];

export function esInteresId(v: string | null | undefined): v is InteresId {
  return !!v && (INTERESES as string[]).includes(v);
}
