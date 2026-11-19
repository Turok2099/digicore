// Preferencia de cookies y medición. Sin decisión (o con rechazo) no se carga Analytics, no se envían eventos y el
// origen de campaña solo se guarda durante la sesión de la pestaña. Global Privacy Control cuenta como rechazo.

const CLAVE = "dc_consentimiento";
export const EVENTO_CONSENTIMIENTO = "dc-consentimiento";
export type Decision = "aceptado" | "rechazado";

function gpc(): boolean {
  try {
    return (navigator as Navigator & { globalPrivacyControl?: boolean }).globalPrivacyControl === true;
  } catch {
    return false;
  }
}

/** Decisión vigente. `null` = todavía no decidió (se trata como no aceptado). */
export function leerDecision(): Decision | null {
  if (typeof window === "undefined") return null;
  if (gpc()) return "rechazado";
  try {
    const v = window.localStorage.getItem(CLAVE);
    return v === "aceptado" || v === "rechazado" ? v : null;
  } catch {
    return null;
  }
}

export function medicionPermitida(): boolean {
  return leerDecision() === "aceptado";
}

export function guardarDecision(d: Decision): void {
  try {
    window.localStorage.setItem(CLAVE, d);
    if (d === "rechazado") window.localStorage.removeItem("dc_origen"); // El origen guardado se elimina.
  } catch {
    // Sin almacenamiento: la decisión vale solo hasta recargar.
  }
  window.dispatchEvent(new CustomEvent(EVENTO_CONSENTIMIENTO, { detail: d }));
}

export function borrarDecision(): void {
  try {
    window.localStorage.removeItem(CLAVE);
  } catch {
    // Nada que borrar.
  }
  window.dispatchEvent(new CustomEvent(EVENTO_CONSENTIMIENTO, { detail: null }));
}

export function gpcActivo(): boolean {
  return gpc();
}
