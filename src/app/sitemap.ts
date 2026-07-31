import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://digicorestudio.com";
  
  const routes = [
    "",
    "/contacto",
    "/soluciones/posicionamiento-seo",
    "/soluciones/sitios-web-profesionales",
    "/soluciones/e-commerce",
    "/soluciones/pasarelas-de-pago",
    "/soluciones/automatizacion-de-procesos",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));
}
