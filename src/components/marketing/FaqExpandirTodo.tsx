"use client";

import { useEffect, useState } from "react";

/**
 * Abre o cierra todos los <details> hijos directos del contenedor indicado.
 * `aria-expanded` solo es "true" cuando todos están abiertos; en estado mixto el botón dice
 * "Expandir todo" y abre todo. El estado se deriva de los propios <details>, que también
 * se abren y cierran de uno en uno.
 */
export default function FaqExpandirTodo({ contenedorId }: { contenedorId: string }) {
  const [todoAbierto, setTodoAbierto] = useState(false);

  useEffect(() => {
    const contenedor = document.getElementById(contenedorId);
    if (!contenedor) return;
    const sincronizar = () => {
      const items = Array.from(contenedor.querySelectorAll<HTMLDetailsElement>(":scope > details"));
      setTodoAbierto(items.length > 0 && items.every((d) => d.open));
    };
    // 'toggle' no burbujea: se escucha en la fase de captura.
    contenedor.addEventListener("toggle", sincronizar, true);
    return () => contenedor.removeEventListener("toggle", sincronizar, true);
  }, [contenedorId]);

  function alternar() {
    const items = document.querySelectorAll<HTMLDetailsElement>(`#${contenedorId} > details`);
    items.forEach((d) => {
      d.open = !todoAbierto;
    });
  }

  return (
    <button
      type="button"
      onClick={alternar}
      aria-expanded={todoAbierto}
      aria-controls={contenedorId}
      className="inline-flex min-h-11 items-center rounded-lg px-3 font-poppins text-sm font-medium text-accent hover:text-accent-hover"
    >
      {todoAbierto ? "Contraer todo" : "Expandir todo"}
    </button>
  );
}
