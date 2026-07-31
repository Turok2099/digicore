import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/soluciones/consigue-mas-clientes",
        destination: "/soluciones/posicionamiento-seo",
        permanent: true,
      },
      {
        source: "/soluciones/sitios-web-landing-pages",
        destination: "/soluciones/sitios-web-profesionales",
        permanent: true,
      },
      {
        source: "/soluciones/vende-por-internet",
        destination: "/soluciones/e-commerce",
        permanent: true,
      },
      {
        source: "/soluciones/haz-crecer-tu-empresa",
        destination: "/soluciones/pasarelas-de-pago",
        permanent: true,
      },
      {
        source: "/soluciones/automatiza-tu-negocio",
        destination: "/soluciones/automatizacion-de-procesos",
        permanent: true,
      },
      {
        source: "/soluciones/nosotros-nos-encargamos",
        destination: "/soluciones/automatizacion-de-procesos",
        permanent: true,
      },
      {
        source: "/planes",
        destination: "/#contacto",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
