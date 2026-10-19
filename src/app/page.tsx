import type { Metadata } from "next";
import Hero from "@/components/marketing/Hero";
import Paquetes from "@/components/marketing/Paquetes";
import Jorge from "@/components/marketing/Jorge";
import CtaBand from "@/components/marketing/CtaBand";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero formBase="/contacto" />
      <Paquetes formBase="/contacto" />
      <Jorge />
      <CtaBand />
    </>
  );
}
