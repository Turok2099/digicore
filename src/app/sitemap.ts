import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://digicorestudio.com";
  
  const routes = [
    "",
    "/contacto",
    "/planes",
    "/soluciones/automatiza-tu-negocio",
    "/soluciones/consigue-mas-clientes",
    "/soluciones/haz-crecer-tu-empresa",
    "/soluciones/nosotros-nos-encargamos",
    "/soluciones/vende-por-internet",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));
}
