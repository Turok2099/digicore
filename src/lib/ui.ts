const base =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-6 py-3 font-poppins text-base font-semibold transition-colors";

export const btnPrimary = `${base} bg-accent text-on-accent hover:bg-accent-hover`;
export const btnSecondary = `${base} border border-border-strong text-text hover:border-accent hover:text-accent`;
export const container = "mx-auto w-full max-w-[1240px] px-5 sm:px-8";
export const sectionY = "py-16 sm:py-20";

/** Enlace al formulario: en la misma página si tiene uno, o en /contacto. */
export const hrefSolicitar = (base: string, paquete?: string) =>
  `${base}${paquete ? `?paquete=${paquete}` : ""}#contacto`;
