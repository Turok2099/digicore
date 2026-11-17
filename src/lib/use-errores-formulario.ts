"use client";

import { useEffect, type RefObject } from "react";

/**
 * Sincroniza el estado visual `:user-invalid` con el estado accesible del campo.
 *
 * - `aria-invalid` es "false" hasta que el campo es `:user-invalid`, para que los lectores de
 *   pantalla no anuncien un error antes de que la persona interactúe (Firefox y Safari exponen
 *   un `required` vacío como inválido desde que carga la página).
 * - El mensaje de error (id en `data-error`) entra en `aria-describedby` solo mientras el campo
 *   es inválido: el texto referenciado se lee aunque esté oculto.
 * - Un error que aparece al salir de un campo se anuncia por una única región `aria-live`
 *   (`anunciar`), medio segundo después para no pisar el anuncio del siguiente campo.
 * - Tras un envío fallido el navegador enfoca el primer campo inválido y su error se lee por
 *   el foco, así que esos errores no se anuncian aparte.
 */

const CAMPOS = "input[data-error], select[data-error], textarea[data-error]";
type Campo = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

function esUserInvalid(el: Element) {
  try {
    return el.matches(":user-invalid");
  } catch {
    return false;
  }
}

// Texto como lo lee un lector de pantalla: el aria-label de los iconos entra, lo aria-hidden sale.
function textoLeido(nodo: Element) {
  const copia = nodo.cloneNode(true) as Element;
  copia.querySelectorAll('[aria-hidden="true"]').forEach((n) => n.remove());
  copia.querySelectorAll('[role="img"][aria-label]').forEach((n) => n.replaceWith(`${n.getAttribute("aria-label")}: `));
  return (copia.textContent ?? "").replace(/\s+/g, " ").trim();
}

function enlazarError(el: Campo, visible: boolean) {
  const id = (el as HTMLElement).dataset.error;
  if (!id) return;
  const ids = (el.getAttribute("aria-describedby") ?? "").split(/\s+/).filter((x) => x && x !== id);
  if (visible) ids.push(id);
  if (ids.length) el.setAttribute("aria-describedby", ids.join(" "));
  else el.removeAttribute("aria-describedby");
}

export function useErroresFormulario(
  formulario: RefObject<HTMLFormElement | null>,
  anunciar: (mensaje: string) => void,
) {
  useEffect(() => {
    const raiz = formulario.current;
    if (!raiz) return;

    let temporizador: ReturnType<typeof setTimeout> | undefined;
    let campoAnunciado: Campo | undefined;
    const marcados = new WeakSet<Campo>(); // los puso en "true" este script
    const anunciados = new WeakSet<Campo>(); // su error actual ya se anunció o se leyó por el foco

    const anunciarError = (el: Campo) => {
      const error = document.getElementById((el as HTMLElement).dataset.error ?? "");
      if (!error) return;
      const etiqueta = el.labels?.[0] ? `${textoLeido(el.labels[0])}: ` : "";
      clearTimeout(temporizador);
      anunciar("");
      campoAnunciado = el;
      temporizador = setTimeout(() => anunciar(etiqueta + textoLeido(error)), 500);
    };

    const sincronizar = (el: Campo, anunciarSiError = false) => {
      if (esUserInvalid(el)) {
        if (anunciarSiError && !anunciados.has(el)) {
          anunciarError(el);
          anunciados.add(el);
        }
        el.setAttribute("aria-invalid", "true");
        enlazarError(el, true);
        marcados.add(el);
      } else if (marcados.has(el) || el.getAttribute("aria-invalid") !== "true") {
        el.setAttribute("aria-invalid", "false");
        enlazarError(el, false);
        marcados.delete(el);
        anunciados.delete(el);
        // Un error ya corregido no debe quedar en la región para cuando se lea la página.
        if (campoAnunciado === el) {
          clearTimeout(temporizador);
          anunciar("");
        }
      }
    };

    const esCampo = (t: EventTarget | null): t is Campo => t instanceof Element && t.matches(CAMPOS);

    const alSalir = (e: Event) => esCampo(e.target) && sincronizar(e.target, true);
    const alEscribir = (e: Event) => esCampo(e.target) && sincronizar(e.target);
    const alCambiar = (e: Event) => esCampo(e.target) && sincronizar(e.target, true);
    // 'invalid' salta en cada campo que falla al enviar, incluso los que nunca se tocaron.
    const alFallar = (e: Event) => {
      if (!esCampo(e.target)) return;
      anunciados.add(e.target);
      sincronizar(e.target);
    };

    raiz.querySelectorAll<Campo>(CAMPOS).forEach((el) => sincronizar(el));

    raiz.addEventListener("focusout", alSalir);
    raiz.addEventListener("input", alEscribir);
    raiz.addEventListener("change", alCambiar);
    raiz.addEventListener("invalid", alFallar, true); // 'invalid' no burbujea

    return () => {
      clearTimeout(temporizador);
      raiz.removeEventListener("focusout", alSalir);
      raiz.removeEventListener("input", alEscribir);
      raiz.removeEventListener("change", alCambiar);
      raiz.removeEventListener("invalid", alFallar, true);
    };
  }, [formulario, anunciar]);
}
