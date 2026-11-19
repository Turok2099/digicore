"use client";

import { borrarDecision } from "@/lib/consentimiento";

/** Reabre el banner para cambiar la decisión sobre cookies y medición. */
export default function PreferenciasCookies({ className }: { className?: string }) {
  return (
    <button type="button" onClick={borrarDecision} className={className}>
      Preferencias de cookies
    </button>
  );
}
