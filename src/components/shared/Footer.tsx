import Link from "next/link";
import Logo from "@/components/shared/Logo";
import { container } from "@/lib/ui";

export default function Footer() {
  const anio = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <div className={`${container} grid gap-10 py-12 md:grid-cols-3`}>
        <div className="space-y-4">
          <Logo className="h-14 w-auto" />
          <p className="max-w-xs text-sm leading-relaxed text-muted">
            Sitios web profesionales para profesionistas y pequeños negocios en México, con alcance y costos claros.
            Desarrollados por Jorge Castro.
          </p>
        </div>

        <nav aria-label="Pie de página">
          <h2 className="mb-4 font-poppins text-sm font-semibold text-text">Navegación</h2>
          <ul className="space-y-2 text-sm text-muted">
            <li>
              <Link href="/planes" className="hover:text-text">Paquetes y precios</Link>
            </li>
            <li>
              <Link href="/sitios-web#proceso" className="hover:text-text">Cómo trabajamos</Link>
            </li>
            <li>
              <Link href="/sitios-web#preguntas" className="hover:text-text">Preguntas frecuentes</Link>
            </li>
            <li>
              <Link href="/contacto" className="hover:text-text">Solicitar propuesta</Link>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="mb-4 font-poppins text-sm font-semibold text-text">Contacto</h2>
          <p className="text-sm text-muted">
            <a href="mailto:contacto@digicorestudio.com" className="hover:text-text">
              contacto@digicorestudio.com
            </a>
          </p>
        </div>
      </div>

      <div className="border-t border-border">
        <p className={`${container} py-6 text-sm text-muted`}>
          &copy; {anio} Digicore Studio. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
