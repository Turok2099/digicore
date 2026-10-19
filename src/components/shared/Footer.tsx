import Link from "next/link";
import Logo from "@/components/shared/Logo";
import { container } from "@/lib/ui";
import WhatsAppLink from "@/components/ui/WhatsAppLink";
import { WHATSAPP_VISIBLE } from "@/lib/contacto";

export default function Footer() {
  const anio = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <div className={`${container} grid gap-10 py-12 md:grid-cols-3`}>
        <div className="space-y-4">
          <Logo className="h-14 w-auto" />
          <p className="max-w-xs text-sm leading-relaxed text-muted">
            Estudio de desarrollo web para profesionistas y pequeños negocios en México. Estrategia, diseño y desarrollo con alcance y costos claros.
          </p>
        </div>

        <nav aria-label="Pie de página">
          <h2 className="mb-4 font-poppins text-sm font-semibold text-text">Navegación</h2>
          <ul className="space-y-2 text-sm text-muted">
            <li>
              <Link href="/planes" className="hover:text-text">Paquetes y precios</Link>
            </li>
            <li>
              <Link href="/servicios/ads-marketing-digital" className="hover:text-text">Ads y marketing digital</Link>
            </li>
            <li>
              <Link href="/servicios/ecommerce" className="hover:text-text">Ecommerce</Link>
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
          <p className="mt-2 text-sm text-muted">
            <WhatsAppLink ubicacion="pie" className="hover:text-text">
              WhatsApp: {WHATSAPP_VISIBLE}
            </WhatsAppLink>
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
