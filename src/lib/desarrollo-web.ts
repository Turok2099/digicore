// Contenido de la página de Desarrollo web (/sitios-web).
// Los importes y las condiciones de renovación se toman de paquetes.ts para no duplicarlos.
// Los identificadores internos (presencia, profesional, mayor-alcance) se conservan para el formulario.
import { PAQUETES, RENOVACION, type Pregunta } from "@/lib/paquetes";

const precio = (id: "presencia" | "profesional") => PAQUETES.find((p) => p.id === id)?.creacion ?? "";

export interface Necesidad {
  titulo: string;
  texto: string;
  /** Opción que suele encajar. */
  opcion: string;
}

export const NECESIDADES: Necesidad[] = [
  {
    titulo: "Necesitas tu primera página web",
    texto: "Quieres que tu negocio se encuentre y se entienda en línea, con tus datos de contacto a la vista.",
    opcion: "Suele encajar: Una página",
  },
  {
    titulo: "Tu sitio ya no representa bien a tu empresa",
    texto: "Se ve anticuado, cuesta usarlo desde el celular o ya no refleja lo que ofreces hoy.",
    opcion: "Según el tamaño: Una página o Sitio empresarial",
  },
  {
    titulo: "Necesitas explicar varios servicios",
    texto: "Cada servicio merece su propia explicación para que el visitante encuentre lo que busca.",
    opcion: "Suele encajar: Sitio empresarial",
  },
  {
    titulo: "Quieres mostrar productos y recibir consultas",
    texto:
      "Un catálogo informativo para presentar lo que vendes, sin carrito ni cobros en línea. Si necesitas comprar en línea, eso es ecommerce.",
    opcion: "Según la cantidad de productos: Una página, Sitio empresarial o mayor alcance",
  },
  {
    titulo: "Necesitas una página de destino para una campaña",
    texto: "Una página enfocada en una sola oferta, con un contacto claro para quien llega desde un anuncio.",
    opcion: "Suele encajar: Una página",
  },
];

export interface Opcion {
  id: "presencia" | "profesional" | "mayor-alcance";
  nombre: string;
  para: string;
  /** Importe base sin IVA; vacío si es cotización personalizada. */
  precio: string;
  nota: string;
  items: string[];
  destacada?: boolean;
  cta: string;
}

export const OPCIONES: Opcion[] = [
  {
    id: "presencia",
    nombre: "Una página",
    para: "Para presentar tu negocio o una oferta concreta en una sola página.",
    precio: precio("presencia"),
    nota: "Entrega estimada: 7 días hábiles",
    items: [
      "Una página con hasta 6 secciones",
      "Organización y corrección de los textos que aportes",
      "Diseño adaptado a tu identidad",
      "WhatsApp cuando corresponda y formulario de contacto",
      "Configuración técnica inicial para buscadores",
      "Medición de contactos",
      "Hasta 5 imágenes con licencia adecuada, si se necesitan",
      "Dos rondas consolidadas de revisión",
    ],
    cta: "Cotizar una página",
  },
  {
    id: "profesional",
    nombre: "Sitio empresarial",
    para: "Para explicar tu empresa y sus servicios prioritarios en varias páginas.",
    precio: precio("profesional"),
    nota: "Entrega estimada: 15 días hábiles",
    destacada: true,
    items: [
      "Hasta 5 páginas",
      "Estructura definida según tus servicios prioritarios",
      "Organización y redacción a partir de tu información",
      "Diseño adaptado a tu identidad",
      "Formulario que identifica el servicio de interés",
      "Configuración inicial para buscadores y medición",
      "Hasta 10 imágenes con licencia adecuada, si se necesitan",
      "Dos rondas consolidadas de revisión",
      "Guía y llamada de entrega de 30 minutos",
    ],
    cta: "Cotizar sitio empresarial",
  },
  {
    id: "mayor-alcance",
    nombre: "Proyecto de mayor alcance",
    para: "Para sitios con más páginas, varios idiomas, más trabajo de contenido o requisitos especiales.",
    precio: "",
    nota: "Cotización personalizada",
    items: [
      "Alcance, plazo y costo definidos en una propuesta a tu medida",
      "Traducciones y funciones adicionales solo si se acuerdan y se cotizan",
    ],
    cta: "Cotizar mi proyecto",
  },
];

export const CONDICION_PLAZOS =
  "Los plazos empiezan cuando recibimos el anticipo y tus materiales y accesos completos, y están sujetos al calendario acordado y a los tiempos de tus revisiones.";

export const PREPARACION = [
  {
    titulo: "Tú aportas",
    texto:
      "Información real de tu negocio: servicios, identidad (logotipo y colores), datos de contacto y los materiales que ya tengas.",
  },
  {
    titulo: "Nosotros preparamos",
    texto:
      "Organizamos o redactamos el contenido según la opción que elijas: en Una página corregimos y ordenamos tus textos; en Sitio empresarial también redactamos a partir de tu información.",
  },
  {
    titulo: "Tú validas",
    texto: "Revisas que los datos y los materiales sean exactos antes de publicar. Nada se publica sin tu aprobación.",
  },
];

export const INCLUYE_SITIO = [
  "Diseño adaptable a celular, tableta y computadora",
  "Formulario de contacto y datos de contacto visibles",
  "Publicación del sitio",
  "Corrección de defectos de entrega durante 30 días",
];

export const SE_COTIZA_APARTE_WEB = [
  "Fotografía",
  "Traducciones",
  "Identidad de marca (logotipo y lineamientos)",
  "Producción adicional de contenido",
];

export const COSTOS_POSTERIORES = {
  primerAnio: "Primer año de alojamiento estándar incluido en Una página y Sitio empresarial.",
  segundoAnio: `Desde el segundo año: desde ${RENOVACION} MXN + IVA al año.`,
  noIncluye: [
    "Dominio y correo empresarial: se cotizan por separado",
    "Cambios de contenido",
    "Rediseño o nuevas funciones",
    "Atención ilimitada",
  ],
  cambios: "Los cambios adicionales se cotizan antes de realizarlos.",
};

export const PASOS_WEB = [
  { titulo: "Nos cuentas tu necesidad", texto: "Qué hace tu negocio, qué quieres presentar y para quién." },
  { titulo: "Definimos estructura, alcance y propuesta", texto: "Acordamos qué incluirá tu sitio y recibes la propuesta con el total." },
  { titulo: "Anticipo del 50% y materiales", texto: "Con el anticipo y tus materiales y accesos completos, empieza a contar el plazo." },
  { titulo: "Preparación, diseño y desarrollo", texto: "Organizamos el contenido, diseñamos y construimos el sitio." },
  { titulo: "Revisiones consolidadas", texto: "Reúnes tus comentarios y los revisamos juntos en las rondas incluidas." },
  { titulo: "Aprobación, pago restante y publicación", texto: "Apruebas la entrega, pagas el 50% restante y publicamos." },
  { titulo: "Entrega y periodo de corrección", texto: "Si aparece un defecto de la entrega en los siguientes 30 días, lo corregimos." },
];

export interface RelacionServicio {
  titulo: string;
  texto: string;
  href?: string;
  enlace?: string;
  actual?: boolean;
}

export const RELACION_SERVICIOS: RelacionServicio[] = [
  {
    titulo: "Desarrollo web",
    texto: "Tu sitio, preparado técnicamente para que los buscadores lo puedan leer. Es lo que contratas en esta página.",
    actual: true,
  },
  {
    titulo: "SEO",
    texto:
      "Trabajo continuo para mejorar la visibilidad orgánica de tu sitio con el tiempo. Es un servicio distinto y se cotiza por separado.",
  },
  {
    titulo: "Publicidad digital",
    texto: "Campañas pagadas para atraer visitas a tu sitio mientras están activas.",
    href: "/servicios/ads-marketing-digital",
    enlace: "Ver publicidad y marketing digital",
  },
  {
    titulo: "Ecommerce",
    texto: "Catálogo, carrito, cobros y operación de una tienda en línea.",
    href: "/servicios/ecommerce",
    enlace: "Ver ecommerce",
  },
];

export const PREGUNTAS_WEB: Pregunta[] = [
  {
    p: "¿Cuál es el precio de una página web?",
    r: `Una página cuesta ${precio("presencia")} MXN + IVA y un sitio empresarial ${precio("profesional")} MXN + IVA. El precio cambia según el número de páginas, la cantidad de contenido por preparar, los idiomas, las funciones especiales y los materiales que ya tengas. Si tu proyecto es más grande, lo cotizamos de forma personalizada. Dominio y correo empresarial se cotizan por separado.`,
  },
  {
    p: "¿Qué diferencia hay entre una página y un sitio empresarial?",
    r: "Una página presenta tu negocio o una oferta en un solo lugar, con hasta 6 secciones. Un sitio empresarial tiene hasta 5 páginas y le da su propio espacio a tus servicios prioritarios, con un formulario que identifica el servicio que le interesa a cada persona.",
  },
  {
    p: "¿Quién prepara los textos y las imágenes?",
    r: "Tú aportas la información real de tu negocio. En Una página organizamos y corregimos los textos que entregues; en Sitio empresarial también redactamos a partir de tu información. Las imágenes necesarias se seleccionan con licencia adecuada (hasta 5 o hasta 10, según la opción). Fotografía y producción adicional se cotizan aparte, y tú validas la exactitud antes de publicar.",
  },
  {
    p: "¿Cuánto tarda?",
    r: "La entrega estimada es de 7 días hábiles para Una página y de 15 días hábiles para Sitio empresarial. El plazo empieza con el anticipo, tus materiales y accesos completos, y depende del calendario acordado y de tus revisiones. Los proyectos de mayor alcance tienen un plazo propio en la propuesta.",
  },
  {
    p: "¿Qué pasa con el dominio, el alojamiento y la renovación?",
    r: `El primer año de alojamiento estándar está incluido. Desde el segundo año, el alojamiento cuesta desde ${RENOVACION} MXN + IVA al año e incluye el alojamiento dentro de los recursos acordados, la gestión de la configuración del dominio y del certificado HTTPS, y una revisión técnica anual. El dominio y el correo empresarial se cotizan por separado. No hay mensualidad obligatoria.`,
  },
  {
    p: "¿Puedo hacer cambios después y editar el sitio yo mismo?",
    r: "Estos paquetes no incluyen un panel de edición, así que el sitio no es autoadministrable. Durante los primeros 30 días corregimos defectos de entrega. Después, los cambios de contenido, rediseños o nuevas funciones se cotizan antes de realizarse.",
  },
  {
    p: "¿Qué diferencia hay entre la configuración inicial para buscadores y el SEO?",
    r: "La configuración inicial deja tu sitio preparado técnicamente para que los buscadores lo lean. El SEO es un trabajo continuo para mejorar la visibilidad orgánica con el tiempo y se contrata aparte. Ninguno de los dos garantiza posiciones, visitas ni ventas.",
  },
  {
    p: "¿Puedo ampliar mi sitio más adelante?",
    r: "Sí. Revisamos qué se puede reutilizar y cotizamos el trabajo adicional antes de empezar. No siempre basta con pagar la diferencia de precios entre opciones.",
  },
];
