import { medicionPermitida } from "@/lib/consentimiento";

type Parametros = Record<string, string | number | boolean>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Envía un evento de medición. Sin datos personales en los parámetros.
 * Solo se envía si la persona aceptó la medición. Si no hay herramienta cargada, el evento queda en dataLayer y no pasa nada más.
 */
export function trackEvent(nombre: string, parametros: Parametros = {}) {
  if (typeof window === "undefined" || !medicionPermitida()) return;
  try {
    if (window.gtag) {
      window.gtag("event", nombre, parametros);
    } else {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: nombre, ...parametros });
    }
  } catch {
    // La medición nunca debe romper la página.
  }
}
