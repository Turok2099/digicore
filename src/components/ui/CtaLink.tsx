"use client";

import Link from "next/link";
import { trackEvent } from "@/lib/analytics";
import { recordarPaquete } from "@/lib/atribucion";

interface Props {
  href: string;
  ubicacion: string;
  paquete?: string;
  className: string;
  children: React.ReactNode;
}

export default function CtaLink({ href, ubicacion, paquete, className, children }: Props) {
  return (
    <Link
      href={href}
      className={className}
      onClick={() => {
        if (paquete) recordarPaquete(paquete);
        trackEvent("cta_click", { ubicacion, ...(paquete ? { paquete } : {}) });
      }}
    >
      {children}
    </Link>
  );
}
