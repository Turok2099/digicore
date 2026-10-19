import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Páginas anteriores de "soluciones" (eran páginas en construcción).
      {
        source: "/soluciones/sitios-web-profesionales",
        destination: "/sitios-web",
        permanent: true,
      },
      {
        source: "/soluciones/posicionamiento-seo",
        destination: "/sitios-web",
        permanent: true,
      },
      {
        source: "/soluciones/e-commerce",
        destination: "/sitios-web#ampliaciones",
        permanent: true,
      },
      {
        source: "/soluciones/pasarelas-de-pago",
        destination: "/sitios-web#ampliaciones",
        permanent: true,
      },
      {
        source: "/soluciones/automatizacion-de-procesos",
        destination: "/sitios-web#ampliaciones",
        permanent: true,
      },
      // Rutas aún más antiguas que ya redirigían a las anteriores.
      {
        source: "/soluciones/consigue-mas-clientes",
        destination: "/sitios-web",
        permanent: true,
      },
      {
        source: "/soluciones/sitios-web-landing-pages",
        destination: "/sitios-web",
        permanent: true,
      },
      {
        source: "/soluciones/vende-por-internet",
        destination: "/sitios-web#ampliaciones",
        permanent: true,
      },
      {
        source: "/soluciones/haz-crecer-tu-empresa",
        destination: "/sitios-web#ampliaciones",
        permanent: true,
      },
      {
        source: "/soluciones/automatiza-tu-negocio",
        destination: "/sitios-web#ampliaciones",
        permanent: true,
      },
      {
        source: "/soluciones/nosotros-nos-encargamos",
        destination: "/sitios-web#ampliaciones",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
