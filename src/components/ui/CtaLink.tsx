"use client";

import Link from "next/link";
import { trackEvent } from "@/lib/analytics";

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
      onClick={() => trackEvent("cta_click", { ubicacion, ...(paquete ? { paquete } : {}) })}
    >
      {children}
    </Link>
  );
}
