import type { NextConfig } from "next";

const ADS = "/servicios/ads-marketing-digital";
const ECOMMERCE = "/servicios/ecommerce";
const SITIOS = "/sitios-web";

// Rutas anteriores de "soluciones" (eran páginas en construcción) hacia su equivalente vigente.
const redirecciones: [string, string][] = [
  ["/soluciones/sitios-web-profesionales", SITIOS],
  ["/soluciones/sitios-web-landing-pages", SITIOS],
  ["/soluciones/posicionamiento-seo", ADS],
  ["/soluciones/consigue-mas-clientes", ADS],
  ["/soluciones/e-commerce", ECOMMERCE],
  ["/soluciones/pasarelas-de-pago", ECOMMERCE],
  ["/soluciones/vende-por-internet", ECOMMERCE],
  ["/soluciones/haz-crecer-tu-empresa", ECOMMERCE],
  ["/soluciones/automatizacion-de-procesos", `${SITIOS}#ampliaciones`],
  ["/soluciones/automatiza-tu-negocio", `${SITIOS}#ampliaciones`],
  ["/soluciones/nosotros-nos-encargamos", `${SITIOS}#ampliaciones`],
];

const nextConfig: NextConfig = {
  async redirects() {
    return redirecciones.map(([source, destination]) => ({ source, destination, permanent: true }));
  },
};

export default nextConfig;
