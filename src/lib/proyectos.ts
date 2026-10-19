// Proyectos verificables. La sección se muestra solo si hay elementos.
// Agregar un proyecto únicamente con enlace público, alcance real y permiso del cliente.
// Las descripciones se limitan a lo que cada sitio publica; sin resultados ni métricas.
export interface Proyecto {
  nombre: string;
  sector: string;
  descripcion: string;
  url: string;
  imagen: string;
  imagenAlt: string;
}

export const PROYECTOS: Proyecto[] = [
  {
    nombre: "Clínica Integral del Peso",
    sector: "Salud",
    descripcion: "Sitio de una clínica especializada en control metabólico, con su método, sus clínicas y contacto.",
    url: "https://www.clinicaintegraldelpeso.com.mx/",
    imagen: "/proyectos/clinica-integral-del-peso.webp",
    imagenAlt: "Página de inicio del sitio de la Clínica Integral del Peso",
  },
  {
    nombre: "La Trinchera México",
    sector: "Eventos",
    descripcion: "Sitio de una empresa de organización de eventos en CDMX, con sus servicios y solicitud de cotización.",
    url: "https://latrincheramexico.com/",
    imagen: "/proyectos/la-trinchera.webp",
    imagenAlt: "Página de inicio del sitio de La Trinchera México",
  },
  {
    nombre: "Beckatex",
    sector: "Textil",
    descripcion: "Sitio de uniformes y productos textiles personalizados, con catálogo y pedidos por WhatsApp.",
    url: "https://www.bktxsolucionestextiles.com.mx/",
    imagen: "/proyectos/beckatex.webp",
    imagenAlt: "Página de inicio del sitio de Beckatex, soluciones textiles",
  },
  {
    nombre: "Club Triple Impacto",
    sector: "Donaciones",
    descripcion: "Sitio de donaciones que da acceso a cupones de descuento y apoya proyectos sociales y ambientales.",
    url: "https://www.clubtripleimpacto.com/",
    imagen: "/proyectos/triple-impacto.webp",
    imagenAlt: "Página de inicio del sitio del Club Triple Impacto",
  },
  {
    nombre: "BPB Abogados",
    sector: "Servicios legales",
    descripcion: "Sitio de un despacho legal especializado en derecho corporativo, en Argentina.",
    url: "https://www.bpbabogados.com.ar/",
    imagen: "/proyectos/bpb-abogados.webp",
    imagenAlt: "Página de inicio del sitio de BPB Abogados",
  },
];
