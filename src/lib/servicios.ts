import type { InteresId } from "@/lib/paquetes";

export interface Servicio {
  slug: string;
  interes: InteresId;
  eyebrow: string;
  h1: string;
  intro: string;
  cta: string;
  contactoTitulo: string;
  contactoIntro: string;
  contratable: { titulo: string; items: string[] };
  fases: { titulo: string; texto: string }[];
  aclaraciones: { titulo: string; texto: string }[];
  noIncluido: { titulo: string; texto: string };
}

export const ADS: Servicio = {
  slug: "ads-marketing-digital",
  interes: "ads-marketing",
  eyebrow: "Publicidad y marketing digital",
  h1: "Campañas y medición para conseguir solicitudes de tu negocio",
  intro:
    "Definimos la estrategia, configuramos las campañas y damos seguimiento según tus objetivos y tu situación. No hay un paquete fijo: el alcance se acuerda en una propuesta personalizada.",
  cta: "Solicitar propuesta de marketing",
  contactoTitulo: "Solicita una propuesta de marketing",
  contactoIntro:
    "Cuéntanos qué ofreces, a quién quieres llegar y qué quieres lograr. Te responderemos por correo con una propuesta a tu medida.",
  contratable: {
    titulo: "Lo que puede contratarse",
    items: [
      "Revisión inicial de tu situación y tus objetivos",
      "Campañas de búsqueda en Google Ads",
      "Investigación de palabras clave",
      "Redacción y configuración de anuncios",
      "Configuración de conversiones",
      "Revisión de tu página de destino (landing)",
      "Seguimiento con informes",
    ],
  },
  fases: [
    { titulo: "Diagnóstico de necesidades", texto: "Entendemos tu negocio, tu público, tu oferta y lo que ya tienes funcionando." },
    { titulo: "Propuesta", texto: "Te presentamos el alcance, los entregables y el costo de nuestro servicio." },
    { titulo: "Configuración", texto: "Preparamos las campañas, los anuncios y la medición de conversiones." },
    { titulo: "Lanzamiento autorizado", texto: "Nada se publica ni se activa sin tu aprobación." },
    { titulo: "Optimización", texto: "Revisamos resultados y ajustamos con base en los datos disponibles." },
  ],
  aclaraciones: [
    {
      titulo: "Publicidad",
      texto: "Son anuncios pagados que aparecen cuando alguien busca lo que ofreces. Se activan y se detienen según lo acordado.",
    },
    {
      titulo: "SEO",
      texto:
        "Es el trabajo para que tu sitio se entienda mejor en los buscadores. Pagar anuncios no posiciona tu sitio de forma orgánica.",
    },
    {
      titulo: "Contenido",
      texto: "Son los textos y artículos que explican tu oferta. Apoya a ambos, pero se contrata y se planea por separado.",
    },
  ],
  noIncluido: {
    titulo: "Lo que no se incluye por defecto",
    texto:
      "La inversión publicitaria se paga directamente a la plataforma y no forma parte de nuestra propuesta. Tampoco incluimos gestión de redes sociales, producción audiovisual ni plataformas publicitarias adicionales; si las necesitas, se cotizan aparte. No garantizamos resultados, visitas ni ventas.",
  },
};

// Pendiente de confirmar por el negocio: el encargo no incluyó el detalle de esta página.
// El contenido se limita a lo ya definido para la oferta de tienda en línea (catálogo, carrito y cobros).
export const ECOMMERCE: Servicio = {
  slug: "ecommerce",
  interes: "ecommerce",
  eyebrow: "Tienda en línea",
  h1: "Tu tienda en línea, con alcance definido antes de empezar",
  intro:
    "Una tienda en línea es un proyecto distinto a un sitio informativo: involucra catálogo, carrito, cobros y operación. Por eso cada proyecto se cotiza según su alcance.",
  cta: "Solicitar propuesta de ecommerce",
  contactoTitulo: "Solicita una propuesta de ecommerce",
  contactoIntro:
    "Cuéntanos qué vendes y cómo quieres cobrar. Te responderemos por correo con una propuesta a tu medida.",
  contratable: {
    titulo: "Lo que puede contratarse",
    items: [
      "Catálogo de productos",
      "Carrito y proceso de compra",
      "Integración de cobros en línea",
      "Configuración en un sitio nuevo o en uno existente",
    ],
  },
  fases: [
    { titulo: "Diagnóstico de necesidades", texto: "Revisamos qué vendes, cómo cobras y cómo quieres que compren tus clientes." },
    { titulo: "Propuesta", texto: "Te presentamos el alcance, los entregables y el costo." },
    { titulo: "Diseño y desarrollo", texto: "Construimos el catálogo, el carrito y la integración de cobros acordados." },
    { titulo: "Pruebas y publicación autorizada", texto: "Probamos el flujo de compra y publicamos solo con tu aprobación." },
  ],
  aclaraciones: [
    {
      titulo: "Es independiente de los paquetes",
      texto: "Presencia, Profesional y Crecimiento no incluyen tienda en línea, cobros ni inventario.",
    },
    {
      titulo: "Cada negocio es distinto",
      texto: "La cantidad de productos, las formas de pago y la operación determinan el alcance y el costo.",
    },
  ],
  noIncluido: {
    titulo: "Costos de terceros",
    texto:
      "Los proveedores de cobros en línea y otras plataformas pueden aplicar comisiones o cuotas propias, independientes de nuestra cotización. Se te explican antes de contratar.",
  },
};
