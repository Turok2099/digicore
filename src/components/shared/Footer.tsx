

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black border-t border-border-dark py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        {/* Brand */}
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
              <img src="/logo_DS.png" alt="Digicore Studio Logo" className="size-full object-cover" />
            </div>
            <span className="font-orbitron font-black tracking-wider text-base sm:text-lg">
              <span className="text-[#39FF14]">DIGICORE</span>
              <span className="text-[#00E5FF] ml-1">STUDIO</span>
            </span>
          </div>
          <p className="text-base text-text-muted max-w-sm leading-relaxed">
            Soluciones integrales de digitalización, automatización e Inteligencia Artificial. Maximizamos el rendimiento de tu negocio liberándote de la complejidad técnica.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-xs uppercase tracking-widest text-white font-bold mb-4">Navegación</h3>
          <ul className="space-y-2 text-base text-text-muted">
            <li><a href="#soluciones" className="hover:text-neon-cyan transition-colors">Soluciones</a></li>
            <li><a href="#paquetes" className="hover:text-neon-cyan transition-colors">Paquetes</a></li>
            <li><a href="#contacto" className="hover:text-neon-cyan transition-colors">Contacto</a></li>
          </ul>
        </div>

        {/* Legales & Redes */}
        <div>
          <h3 className="text-xs uppercase tracking-widest text-white font-bold mb-4">Contacto</h3>
          <p className="text-sm text-text-muted">
            Email: <a href="mailto:contacto@digicorestudio.com" className="hover:text-neon-cyan">contacto@digicorestudio.com</a>
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-border-dark flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-text-muted">
        <p>&copy; {currentYear} Digicore Studio. Todos los derechos reservados.</p>
        <div className="flex gap-6">
          <a href="/privacidad" className="hover:text-neon-cyan">Aviso de Privacidad</a>
          <a href="/terminos" className="hover:text-neon-cyan">Términos de Servicio</a>
        </div>
      </div>
    </footer>
  );
}
