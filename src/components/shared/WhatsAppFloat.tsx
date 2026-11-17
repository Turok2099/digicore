"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { MessageCircle } from "lucide-react";
import WhatsAppLink from "@/components/ui/WhatsAppLink";

/** Páginas cuyo hero ya trae su propia acción: en móvil la etiqueta espera a que el hero salga de pantalla. */
const HERO_POR_RUTA: Record<string, string> = { "/": "hero-oferta", "/sitios-web": "hero-oferta" };

export default function WhatsAppFloat() {
  const pathname = usePathname();
  const heroId = HERO_POR_RUTA[pathname];
  // Parte oculto en esas rutas para que no aparezca y desaparezca al hidratar.
  const [heroVisible, setHeroVisible] = useState(Boolean(heroId));
  // Formulario o pie de página en pantalla: la etiqueta se retira para no tapar campos, botones ni textos.
  const [tapando, setTapando] = useState(false);
  const [conFoco, setConFoco] = useState(false);
  // En móvil, mientras se lee hacia abajo la etiqueta se retira para no tapar texto; reaparece al subir.
  const [bajando, setBajando] = useState(false);

  useEffect(() => {
    const hero = heroId ? document.getElementById(heroId) : null;
    if (!hero || !("IntersectionObserver" in window)) {
      // Sin hero que observar se muestra siempre (fuera del efecto síncrono, que React desaconseja).
      const cuadro = requestAnimationFrame(() => setHeroVisible(false));
      return () => cancelAnimationFrame(cuadro);
    }
    const observador = new IntersectionObserver(([entrada]) => setHeroVisible(entrada.isIntersecting));
    observador.observe(hero);
    return () => observador.disconnect();
  }, [heroId]);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const objetivos = [...document.querySelectorAll<HTMLElement>("#contacto, footer")];
    if (objetivos.length === 0) return;
    const visibles = new Set<Element>();
    const observador = new IntersectionObserver((entradas) => {
      for (const e of entradas) {
        if (e.isIntersecting) visibles.add(e.target);
        else visibles.delete(e.target);
      }
      setTapando(visibles.size > 0);
    });
    objetivos.forEach((o) => observador.observe(o));
    return () => observador.disconnect();
  }, [pathname]);

  useEffect(() => {
    let anterior = window.scrollY;
    const alDesplazar = () => {
      const y = window.scrollY;
      if (Math.abs(y - anterior) < 12) return;
      setBajando(y > anterior && y > 120);
      anterior = y;
    };
    window.addEventListener("scroll", alDesplazar, { passive: true });
    return () => window.removeEventListener("scroll", alDesplazar);
  }, []);

  // Con el foco dentro no se oculta, para no perderlo con el teclado.
  const oculto = (tapando || heroVisible) && !conFoco;

  return (
    <div
      data-oculto={oculto}
      data-hero={heroVisible && !tapando}
      data-bajando={bajando && !conFoco}
      onFocus={() => setConFoco(true)}
      onBlur={() => setConFoco(false)}
      className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-40 sm:right-6 max-lg:data-[bajando=true]:invisible max-lg:data-[bajando=true]:opacity-0 data-[oculto=true]:invisible data-[oculto=true]:opacity-0 lg:data-[hero=true]:visible lg:data-[hero=true]:opacity-100 motion-safe:transition-[opacity,visibility] motion-safe:duration-200"
    >
      {/* Misma acción que antes (mismo número y mensaje). La etiqueta visible forma parte del nombre accesible. */}
      <WhatsAppLink
        ubicacion="flotante"
        className="inline-flex min-h-11 items-center gap-2 rounded-full bg-whatsapp px-4 py-2 font-poppins text-sm font-semibold text-on-accent shadow-md transition-colors hover:bg-whatsapp-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-text"
      >
        <MessageCircle className="size-5 shrink-0" aria-hidden="true" />
        <span>Solicitar cotización</span>
        <span className="sr-only"> por WhatsApp (se abre en una pestaña nueva)</span>
      </WhatsAppLink>
    </div>
  );
}
