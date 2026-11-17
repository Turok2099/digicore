import { MetadataRoute } from "next";

// lastModified refleja el último cambio real de contenido de cada página (según el historial de git de la página
// y de los componentes y textos que la componen). Es una fecha fija: actualízala solo cuando cambie el contenido
// de esa página. No se usa la fecha de generación, que haría parecer que todo cambia en cada despliegue.
// Si una página nueva no tiene fecha confiable, deja `ultimaModificacion` sin definir y el campo se omite.
const routes: { path: string; priority: number; ultimaModificacion?: string }[] = [
  { path: "", priority: 1.0, ultimaModificacion: "2026-11-17" },
  { path: "/sitios-web", priority: 0.9, ultimaModificacion: "2026-11-17" },
  { path: "/planes", priority: 0.9, ultimaModificacion: "2026-11-17" },
  { path: "/servicios/ads-marketing-digital", priority: 0.8, ultimaModificacion: "2026-11-17" },
  { path: "/servicios/ecommerce", priority: 0.8, ultimaModificacion: "2026-11-17" },
  { path: "/contacto", priority: 0.7, ultimaModificacion: "2026-11-17" },
  { path: "/aviso-de-privacidad", priority: 0.3, ultimaModificacion: "2026-11-17" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://digicorestudio.com";

  return routes.map(({ path, priority, ultimaModificacion }) => ({
    url: `${baseUrl}${path}`,
    ...(ultimaModificacion ? { lastModified: new Date(ultimaModificacion) } : {}),
    changeFrequency: "monthly" as const,
    priority,
  }));
}
