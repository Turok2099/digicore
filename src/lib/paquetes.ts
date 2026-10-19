// Fuente única del contenido comercial. Contrastado con docs/matriz-paquetes-digicore.md
// y docs/contenido-paquetes-digicore.md (v4). Crecimiento no se publica hasta confirmar su modalidad.

export type PaqueteId = "presencia" | "profesional";

export interface Paquete {
  id: PaqueteId;
  nombre: string;
  para: string;
  creacion: string;
  renovacion: string;
  recomendado?: boolean;
  resumen: string[];
}

export const PRECIO_INICIAL = "$5,900";

export const PAQUETES: Paquete[] = [
  {
    id: "presencia",
    nombre: "Presencia",
    para: "Para tu primera página web profesional.",
    creacion: "$5,900",
    renovacion: "$2,490",
    resumen: [
      "Una página con hasta 6 secciones",
      "Alojamiento y 1 correo empresarial durante 12 meses",
      "WhatsApp y formulario con aviso a tu correo",
      "Configuración inicial para buscadores",
      "Entrega estimada: 7 días hábiles",
    ],
  },
  {
    id: "profesional",
    nombre: "Profesional",
    para: "Para explicar varios servicios por separado.",
    creacion: "$14,900",
    renovacion: "$3,490",
    recomendado: true,
    resumen: [
      "Hasta 5 páginas según tus prioridades",
      "Alojamiento y 2 correos empresariales durante 12 meses",
      "Formulario que identifica el servicio de interés",
      "Textos redactados con la información que nos compartes",
      "Entrega estimada: 15 días hábiles",
    ],
  },
];

export interface FilaComparacion {
  concepto: string;
  presencia: string;
  profesional: string;
  detalle?: boolean;
}

export const COMPARACION: FilaComparacion[] = [
  { concepto: "Páginas", presencia: "Una página, hasta 6 secciones", profesional: "Hasta 5 páginas" },
  { concepto: "Costo de creación", presencia: "$5,900 + IVA", profesional: "$14,900 + IVA" },
  {
    concepto: "Alojamiento y correo",
    presencia: "12 meses incluidos, 1 correo",
    profesional: "12 meses incluidos, 2 correos",
  },
  {
    concepto: "Desde el segundo año",
    presencia: "$2,490 + IVA al año",
    profesional: "$3,490 + IVA al año",
  },
  {
    concepto: "Contacto",
    presencia: "WhatsApp y formulario con aviso por correo",
    profesional: "WhatsApp y formulario con selección de servicio y aviso por correo",
  },
  { concepto: "Entrega estimada", presencia: "7 días hábiles", profesional: "15 días hábiles" },
  {
    concepto: "Textos",
    presencia: "Organizamos y corregimos la información que entregas",
    profesional: "Redactamos a partir de la información que entregas",
    detalle: true,
  },
  { concepto: "Imágenes de banco con licencia", presencia: "Hasta 5", profesional: "Hasta 10", detalle: true },
  {
    concepto: "Revisiones antes de publicar",
    presencia: "2 rondas consolidadas",
    profesional: "2 rondas consolidadas",
    detalle: true,
  },
  {
    concepto: "Buscadores (SEO inicial)",
    presencia: "1 servicio y 1 ubicación, página principal",
    profesional: "Hasta 3 servicios y 1 ubicación, las 5 páginas",
    detalle: true,
  },
  {
    concepto: "Google Business Profile",
    presencia: "Se cotiza aparte",
    profesional: "Configuración si tu negocio es elegible",
    detalle: true,
  },
  {
    concepto: "Capacitación",
    presencia: "Guía de correo y medición",
    profesional: "Guía y llamada de 30 minutos",
    detalle: true,
  },
  {
    concepto: "Corrección de defectos de entrega",
    presencia: "30 días",
    profesional: "30 días",
    detalle: true,
  },
];

export const INCLUIDO_EN_TODOS = [
  "Diseño adaptado a celular, tableta y computadora",
  "Tus colores, tu logotipo y tus imágenes",
  "Ícono del sitio y vista previa al compartir el enlace",
  "Página de error personalizada",
  "Medición de clics en WhatsApp y de solicitudes recibidas por formulario, por separado",
  "Maquetación del aviso de privacidad con el contenido que entregues o valides",
  "Corrección de defectos de entrega durante 30 días",
];

export const SE_COTIZA_APARTE = [
  {
    titulo: "Dominio",
    texto:
      "Se registra a tu nombre en Hostinger. Te damos el precio de registro y de renovación antes de pagarlo; pueden ser distintos.",
  },
  {
    titulo: "Páginas y funciones adicionales",
    texto: "Si necesitas más páginas o funciones de las que incluye tu paquete, te cotizamos antes de empezar.",
  },
  {
    titulo: "Blog y artículos",
    texto: "Digicore los redacta y publica por ti. Se cotizan según la cantidad.",
  },
  {
    titulo: "Cambios después de la entrega",
    texto: "Pasados los 30 días de corrección de defectos, cada cambio se cotiza antes de hacerse.",
  },
  {
    titulo: "Tienda en línea, cobros y automatizaciones",
    texto:
      "Son ampliaciones para quien las necesita. No están incluidas en Presencia ni en Profesional y se cotizan por separado.",
  },
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
    texto: "Ves el avance y consolidas tus comentarios en 2 rondas de revisión.",
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

export const PREGUNTAS = [
  {
    p: "¿Cuánto pago en total el primer año?",
    r: "Presencia: $5,900 + IVA, que incluye alojamiento y un correo durante 12 meses. Profesional: $14,900 + IVA, con alojamiento y dos correos durante 12 meses. A eso se suma el dominio, que se cotiza por separado. En tu propuesta verás el total con impuestos antes de contratar.",
  },
  {
    p: "¿Y a partir del segundo año?",
    r: "Renovar el alojamiento y los correos cuesta $2,490 + IVA al año en Presencia y $3,490 + IVA al año en Profesional, más la renovación del dominio. Cualquier otro costo se te explica y se acuerda antes de hacerse.",
  },
  {
    p: "¿El dominio está incluido?",
    r: "No. Lo cotizamos en Hostinger según el nombre, la extensión y su disponibilidad, y se registra a tu nombre después de que apruebes el importe. La renovación se cotiza con su precio vigente, que puede ser distinto del de registro.",
  },
  {
    p: "¿Quién desarrolla mi sitio?",
    r: "Jorge Castro, fundador de Digicore Studio. Diseña y desarrolla cada sitio personalmente y es tu contacto directo durante el proyecto.",
  },
  {
    p: "¿Cuándo empieza a contar el plazo de entrega?",
    r: "Desde que recibimos el anticipo, tus materiales y accesos completos, y se acuerda el calendario. El tiempo que tardan tus revisiones o verificaciones de terceros no cuenta como producción. Si cambia el alcance, la fecha se ajusta.",
  },
  {
    p: "¿Puedo actualizar los textos yo mismo?",
    r: "No. Estos paquetes no incluyen un panel de edición. Dentro de los primeros 30 días corregimos defectos de entrega; después, cada cambio se cotiza antes de hacerse.",
  },
  {
    p: "¿Puedo cambiar de paquete más adelante?",
    r: "Sí. Revisamos qué se puede reutilizar y cotizamos el trabajo adicional antes de empezar. No siempre basta con pagar la diferencia de precios.",
  },
  {
    p: "¿El sitio garantiza clientes o posiciones en Google?",
    r: "No. Incluye el trabajo técnico y de contenido contratado para que tu sitio se entienda y se use bien. No garantizamos indexación, visitas, posiciones ni ventas.",
  },
  {
    p: "¿Pueden hacer una tienda en línea o integrar pagos?",
    r: "Sí, como ampliación. No forman parte de Presencia ni de Profesional y se cotizan por separado según lo que necesites.",
  },
];

export function esPaqueteId(v: string | null | undefined): v is PaqueteId {
  return v === "presencia" || v === "profesional";
}
