"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { capturarOrigen } from "@/lib/atribucion";

/** Captura UTM/gclid al cargar cada página. No renderiza nada. */
export default function CapturaOrigen() {
  const pathname = usePathname();
  useEffect(() => {
    capturarOrigen();
  }, [pathname]);
  return null;
}
