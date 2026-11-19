// Origen de las solicitudes (UTM e identificadores publicitarios) en el navegador.
//
// CRITERIO DE ATRIBUCIÓN (documentado en docs/solicitudes-y-atribucion.md):
//  - Último clic con parámetros: si la URL trae utm_* o gclid/gbraid/wbraid, ese origen reemplaza al guardado.
//  - Una visita sin parámetros (navegación interna, visita directa) NUNCA borra el origen guardado.
//  - Duración: 30 días desde la captura; pasado ese plazo se descarta.
//  - Almacenamiento: solo en el navegador, sin cookies. Con consentimiento aceptado se usa localStorage (30 días);
//    sin decisión, con rechazo o con Global Privacy Control se usa sessionStorage (se borra al cerrar la pestaña).
//  - Nada de esto se envía a Analytics; solo viaja con la solicitud que la persona decide enviar.

import { medicionPermitida } from "@/lib/consentimiento";

export const DURACION_DIAS = 30;
const CLAVE = "dc_origen";
const CLAVE_PAQUETE = "dc_paquete";
const CAMPOS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "gbraid", "wbraid"] as const;

export type CampoOrigen = (typeof CAMPOS)[number];
export interface Origen extends Partial<Record<CampoOrigen, string>> {
  landing?: string;
  referrer?: string;
  capturado_en?: string;
}
interface Guardado {
  origen: Origen;
  expira: number;
}

function almacen(): Storage | null {
  try {
    return medicionPermitida() ? window.localStorage : window.sessionStorage;
  } catch {
    return null; // Almacenamiento bloqueado: se sigue sin persistir.
  }
}

function desdeUrl(): Origen | null {
  const params = new URLSearchParams(window.location.search);
  const origen: Origen = {};
  for (const campo of CAMPOS) {
    const valor = params.get(campo)?.trim();
    if (valor) origen[campo] = valor.slice(0, 255);
  }
  if (Object.keys(origen).length === 0) return null;
  origen.landing = window.location.pathname;
  try {
    const ref = document.referrer ? new URL(document.referrer).hostname : "";
    if (ref && ref !== window.location.hostname) origen.referrer = ref;
  } catch {
    // Referencia ilegible: se omite.
  }
  origen.capturado_en = new Date().toISOString();
  return origen;
}

function leer(): Guardado | null {
  try {
    const bruto = almacen()?.getItem(CLAVE);
    if (!bruto) return null;
    const g = JSON.parse(bruto) as Guardado;
    if (!g || typeof g.expira !== "number" || g.expira < Date.now()) {
      almacen()?.removeItem(CLAVE);
      return null;
    }
    return g;
  } catch {
    return null;
  }
}

/** Se llama en cada página: guarda el origen si la URL trae parámetros; si no, no toca lo guardado. */
export function capturarOrigen(): void {
  const nuevo = desdeUrl();
  if (!nuevo) return;
  try {
    const g: Guardado = { origen: nuevo, expira: Date.now() + DURACION_DIAS * 86_400_000 };
    almacen()?.setItem(CLAVE, JSON.stringify(g));
  } catch {
    // Sin almacenamiento disponible: el origen de la URL actual aún se usa al enviar.
  }
}

/** Al aceptar la medición, el origen de la sesión pasa a guardarse 30 días. */
export function persistirOrigenDeSesion(): void {
  try {
    const bruto = window.sessionStorage.getItem(CLAVE);
    if (bruto) window.localStorage.setItem(CLAVE, bruto);
  } catch {
    // Sin almacenamiento.
  }
}

/** Origen vigente para adjuntar a la solicitud: la URL actual si trae parámetros; si no, lo guardado. */
export function obtenerOrigen(): Origen {
  return desdeUrl() ?? leer()?.origen ?? {};
}

/** Recuerda el paquete elegido al pulsar un CTA, para que llegue al formulario aunque el enlace no lo incluya. */
export function recordarPaquete(id: string): void {
  try {
    window.sessionStorage.setItem(CLAVE_PAQUETE, id);
  } catch {
    // Sin almacenamiento: queda el parámetro ?paquete= de la URL.
  }
}

export function paqueteRecordado(): string | null {
  try {
    return window.sessionStorage.getItem(CLAVE_PAQUETE);
  } catch {
    return null;
  }
}
