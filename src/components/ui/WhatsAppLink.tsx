"use client";

import { trackEvent } from "@/lib/analytics";
import { whatsappUrl } from "@/lib/contacto";

interface Props {
  ubicacion: string;
  className?: string;
  children: React.ReactNode;
  "aria-label"?: string;
}

/** Enlace a WhatsApp. El clic es una señal de interés, no una conversación ni una venta. */
export default function WhatsAppLink({ ubicacion, className, children, ...rest }: Props) {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={() => trackEvent("whatsapp_click", { ubicacion })}
      {...rest}
    >
      {children}
    </a>
  );
}
