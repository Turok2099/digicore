"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { MessageCircle } from "lucide-react";
import WhatsAppLink from "@/components/ui/WhatsAppLink";

/** Páginas cuyo hero ya trae su propia acción: en móvil el botón flotante espera a que el hero salga de pantalla. */
const HERO_POR_RUTA: Record<string, string> = { "/": "hero-oferta", "/sitios-web": "hero-oferta" };

export default function WhatsAppFloat() {
  const pathname = usePathname();
  const heroId = HERO_POR_RUTA[pathname];
  // Parte oculto en esas rutas para que no aparezca y desaparezca al hidratar.
  const [heroVisible, setHeroVisible] = useState(Boolean(heroId));
  const [conFoco, setConFoco] = useState(false);

  useEffect(() => {
    const hero = heroId ? document.getElementById(heroId) : null;
    if (!hero || !("IntersectionObserver" in window)) {
      // Sin hero que observar el botón se muestra siempre (fuera del efecto síncrono, que React desaconseja).
      const cuadro = requestAnimationFrame(() => setHeroVisible(false));
      return () => cancelAnimationFrame(cuadro);
    }
    const observador = new IntersectionObserver(([entrada]) => setHeroVisible(entrada.isIntersecting));
    observador.observe(hero);
    return () => observador.disconnect();
  }, [heroId]);

  // Solo se oculta por debajo de lg. Si tiene el foco no se oculta, para no perderlo al volver arriba con el teclado.
  const oculto = heroVisible && !conFoco;

  return (
    <div
      data-oculto={oculto}
      onFocus={() => setConFoco(true)}
      onBlur={() => setConFoco(false)}
      className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-40 sm:right-6 max-lg:data-[oculto=true]:invisible max-lg:data-[oculto=true]:opacity-0 motion-safe:transition-[opacity,visibility] motion-safe:duration-200"
    >
      <WhatsAppLink
        ubicacion="flotante"
        aria-label="Escríbenos por WhatsApp (se abre en una pestaña nueva)"
        className="inline-flex size-14 items-center justify-center rounded-full bg-whatsapp text-on-accent shadow-md transition-colors hover:bg-whatsapp-hover"
      >
        <MessageCircle className="size-7" aria-hidden="true" />
      </WhatsAppLink>
    </div>
  );
}
