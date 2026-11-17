"use client";

import { useEffect, useRef, useState, type MouseEvent, type RefObject } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Check, ChevronDown, Menu, X } from "lucide-react";
import Logo from "@/components/shared/Logo";
import CtaLink from "@/components/ui/CtaLink";
import { btnPrimary } from "@/lib/ui";

const enlaces = [
  { label: "Proyectos", href: "/#proyectos" },
  { label: "Paquetes", href: "/#paquetes" },
  { label: "Nuestro proceso", href: "/sitios-web#proceso" },
];

// Servicios: la página de SEO aún no existe, por eso se muestra sin enlace.
const servicios: { label: string; href?: string }[] = [
  { label: "Diseño y desarrollo de páginas web para empresas", href: "/sitios-web" },
  { label: "Publicidad digital en Google Ads y Meta Ads para empresas", href: "/servicios/ads-marketing-digital" },
  { label: "Posicionamiento SEO para empresas en Google" },
  { label: "Diseño y desarrollo de tiendas en línea para empresas", href: "/servicios/ecommerce" },
];

/** Estado abierto/cerrado de un popover, leído del evento `toggle` (funciona también con el polyfill). */
function usePopoverAbierto(ref: RefObject<HTMLElement | null>) {
  const [abierto, setAbierto] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const alCambiar = (e: Event) => setAbierto((e as ToggleEvent).newState === "open");
    el.addEventListener("toggle", alCambiar);
    return () => el.removeEventListener("toggle", alCambiar);
  }, [ref]);
  return abierto;
}

/** Cierra el popover que contiene el enlace pulsado: los enlaces con # no cambian de ruta. */
function cerrarMenu(e: MouseEvent<HTMLElement>) {
  e.currentTarget.closest<HTMLElement>("[popover]")?.hidePopover();
}

function ItemServicio({ label, href, actual, movil }: { label: string; href?: string; actual: boolean; movil?: boolean }) {
  if (!href) {
    return (
      <span
        className={`block font-poppins font-medium text-muted ${movil ? "px-2 py-3 text-base" : "px-3 py-2.5 text-sm"}`}
      >
        {label} <span className="font-normal">(próximamente)</span>
      </span>
    );
  }
  return (
    <Link
      href={href}
      onClick={cerrarMenu}
      aria-current={actual ? "page" : undefined}
      className={`flex items-center justify-between gap-3 rounded-lg font-poppins font-medium text-text hover:bg-surface aria-[current=page]:bg-surface aria-[current=page]:font-semibold aria-[current=page]:text-accent ${
        movil ? "px-2 py-3 text-base" : "px-3 py-2.5 text-sm"
      }`}
    >
      {label}
      {/* La página actual no se indica solo con color: también con icono y peso de la letra. */}
      {actual && <Check className="size-4 shrink-0" aria-hidden="true" />}
    </Link>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  // En las páginas con hero de oferta, el botón del navbar dice igual que el del hero.
  const conHeroOferta = pathname === "/" || pathname === "/sitios-web";
  const textoCta = conHeroOferta ? "Solicitar cotización" : "Solicitar propuesta";
  const enServicio = servicios.some((s) => s.href === pathname);

  const menuServicios = useRef<HTMLUListElement>(null);
  const menuMovil = useRef<HTMLDivElement>(null);
  const serviciosAbierto = usePopoverAbierto(menuServicios);
  const abierto = usePopoverAbierto(menuMovil);

  // Popover es Baseline reciente: en navegadores sin soporte se carga el polyfill, solo ahí.
  useEffect(() => {
    if (!Object.hasOwn(HTMLElement.prototype, "popover")) {
      import("@oddbird/popover-polyfill");
    }
  }, []);

  // El navbar persiste entre páginas: al cambiar de ruta (por ejemplo desde el botón del menú) se cierran los menús.
  useEffect(() => {
    for (const menu of [menuMovil.current, menuServicios.current]) {
      try {
        menu?.hidePopover();
      } catch {
        // Sin popover: no hay nada que cerrar.
      }
    }
  }, [pathname]);

  // Al pasar a escritorio el menú móvil queda oculto con su padre; se cierra para no reaparecer.
  useEffect(() => {
    const escritorio = window.matchMedia("(min-width: 64rem)");
    const alCambiar = () => {
      for (const menu of [menuMovil.current, menuServicios.current]) {
        try {
          menu?.hidePopover();
        } catch {
          // Sin popover (navegador sin soporte y sin polyfill todavía): no hay nada que cerrar.
        }
      }
    };
    escritorio.addEventListener("change", alCambiar);
    return () => escritorio.removeEventListener("change", alCambiar);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-bg/95 backdrop-blur">
      <nav aria-label="Principal" className="mx-auto flex h-16 sm:h-[72px] max-w-[1240px] items-center justify-between px-5 sm:px-8">
        {/* shrink-0 y altura propia: el logo no debe comprimirse ni deformarse en pantallas estrechas. */}
        <Link href="/" aria-label="DigiCore Studio, inicio" className="shrink-0">
          <Logo priority className="h-10 w-auto sm:h-14" />
        </Link>

        <div className="ml-auto hidden items-center gap-8 lg:flex">
          <div>
            <button
              type="button"
              popoverTarget="menu-servicios"
              aria-expanded={serviciosAbierto}
              aria-controls="menu-servicios"
              className={`nav-servicios-boton inline-flex items-center gap-1 font-poppins text-sm font-medium transition-colors hover:text-text ${
                enServicio ? "text-text underline decoration-accent decoration-2 underline-offset-8" : "text-muted"
              }`}
            >
              Servicios
              <ChevronDown className={`size-4 transition-transform ${serviciosAbierto ? "rotate-180" : ""}`} aria-hidden="true" />
            </button>
            <ul
              ref={menuServicios}
              id="menu-servicios"
              popover="auto"
              className="nav-servicios rounded-xl border border-border bg-bg p-2 text-text shadow-lg"
            >
              {servicios.map((s) => (
                <li key={s.label}>
                  <ItemServicio {...s} actual={s.href === pathname} />
                </li>
              ))}
            </ul>
          </div>
          {enlaces.map((e) => (
            <Link
              key={e.href}
              href={e.href}
              className="font-poppins text-sm font-medium text-muted transition-colors hover:text-text"
            >
              {e.label}
            </Link>
          ))}
          <CtaLink href="/contacto" ubicacion="navbar" className={`${btnPrimary} !min-h-10 !px-4 !py-2 !text-sm`}>
            {textoCta}
          </CtaLink>
        </div>

        <div className="ml-auto flex items-center gap-1 lg:hidden">
          {/* Con hero de oferta, en móvil el único botón principal es el del hero; aquí vive en el menú. */}
          <CtaLink
            href="/contacto"
            ubicacion="navbar_movil"
            className={`${btnPrimary} !min-h-10 !px-3 !py-2 !text-sm whitespace-nowrap ${conHeroOferta ? "max-sm:hidden" : ""}`}
          >
            {textoCta}
          </CtaLink>
          <button
            type="button"
            popoverTarget="menu-movil"
            aria-expanded={abierto}
            aria-controls="menu-movil"
            aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
            className="inline-flex size-11 items-center justify-center rounded-lg text-text hover:bg-surface aria-expanded:bg-surface"
          >
            {abierto ? <X className="size-6" aria-hidden="true" /> : <Menu className="size-6" aria-hidden="true" />}
          </button>
          {/* Debajo del navbar y a todo el ancho. No lleva `display`: lo controla [popover]. */}
          <div
            ref={menuMovil}
            id="menu-movil"
            popover="auto"
            className="inset-x-0 bottom-auto top-16 m-0 max-h-[calc(100dvh-4rem)] w-auto overflow-y-auto border-0 border-t border-border bg-bg p-0 text-text sm:top-[72px] sm:max-h-[calc(100dvh-72px)]"
          >
            <ul className="mx-auto flex max-w-[1240px] flex-col px-5 py-2">
              <li>
                <p className="px-2 pb-1 pt-3 font-poppins text-xs font-semibold uppercase tracking-wider text-muted">Servicios</p>
                <ul>
                  {servicios.map((s) => (
                    <li key={s.label}>
                      <ItemServicio {...s} actual={s.href === pathname} movil />
                    </li>
                  ))}
                </ul>
              </li>
              {enlaces.map((e) => (
                <li key={e.href}>
                  <Link
                    href={e.href}
                    onClick={cerrarMenu}
                    className="block rounded-lg px-2 py-3 font-poppins text-base font-medium text-text hover:bg-surface"
                  >
                    {e.label}
                  </Link>
                </li>
              ))}
              {conHeroOferta && (
                <li className="pb-2 pt-3 sm:hidden">
                  <CtaLink href="/contacto" ubicacion="navbar_movil" className={`${btnPrimary} w-full`}>
                    {textoCta}
                  </CtaLink>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
