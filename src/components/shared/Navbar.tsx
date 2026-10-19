"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Logo from "@/components/shared/Logo";
import CtaLink from "@/components/ui/CtaLink";
import { btnPrimary } from "@/lib/ui";

const enlaces = [
  { label: "Paquetes", href: "/planes" },
  { label: "Ads y marketing", href: "/servicios/ads-marketing-digital" },
  { label: "Ecommerce", href: "/servicios/ecommerce" },
  { label: "Preguntas", href: "/sitios-web#preguntas" },
];

export default function Navbar() {
  const [abierto, setAbierto] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-bg/95 backdrop-blur">
      <nav aria-label="Principal" className="mx-auto flex h-16 sm:h-[72px] max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="/" aria-label="DigiCore Studio, inicio" onClick={() => setAbierto(false)}>
          <Logo />
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
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
            Solicitar propuesta
          </CtaLink>
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <CtaLink href="/contacto" ubicacion="navbar_movil" className={`${btnPrimary} !min-h-10 !px-3 !py-2 !text-sm whitespace-nowrap`}>
            Solicitar propuesta
          </CtaLink>
          <button
            type="button"
            onClick={() => setAbierto((v) => !v)}
            aria-expanded={abierto}
            aria-controls="menu-movil"
            aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
            className="inline-flex size-11 items-center justify-center rounded-lg text-text hover:bg-surface"
          >
            {abierto ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </nav>

      {abierto && (
        <div id="menu-movil" className="border-t border-border bg-bg lg:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-5 py-2">
            {enlaces.map((e) => (
              <li key={e.href}>
                <Link
                  href={e.href}
                  onClick={() => setAbierto(false)}
                  className="block py-3 font-poppins text-base font-medium text-text"
                >
                  {e.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
