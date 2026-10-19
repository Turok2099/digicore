import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://digicorestudio.com";

  const routes = [
    { path: "", priority: 1.0 },
    { path: "/sitios-web", priority: 0.9 },
    { path: "/planes", priority: 0.9 },
    { path: "/servicios/ads-marketing-digital", priority: 0.8 },
    { path: "/servicios/ecommerce", priority: 0.8 },
    { path: "/contacto", priority: 0.7 },
  ];

  return routes.map(({ path, priority }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority,
  }));
}
