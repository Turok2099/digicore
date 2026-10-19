import type { Metadata } from "next";
import Hero from "@/components/marketing/Hero";
import Proyectos from "@/components/marketing/Proyectos";
import Paquetes from "@/components/marketing/Paquetes";
import Enfoque from "@/components/marketing/Enfoque";
import OtrosServicios from "@/components/marketing/OtrosServicios";
import CtaBand from "@/components/marketing/CtaBand";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero formBase="/contacto" />
      <Proyectos />
      <Paquetes formBase="/contacto" />
      <Enfoque />
      <OtrosServicios />
      <CtaBand />
    </>
  );
}
