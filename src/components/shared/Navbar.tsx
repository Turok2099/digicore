"use client";

import { useState } from "react";
import { Cpu, Menu, X, ChevronDown } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileSolOpen, setMobileSolOpen] = useState(false);

  const soluciones = [
    { label: "Consigue más clientes", href: "/soluciones/consigue-mas-clientes" },
    { label: "Vende por Internet", href: "/soluciones/vende-por-internet" },
    { label: "Automatiza tu negocio", href: "/soluciones/automatiza-tu-negocio" },
    { label: "Haz crecer tu empresa", href: "/soluciones/haz-crecer-tu-empresa" },
    { label: "Nosotros nos encargamos", href: "/soluciones/nosotros-nos-encargamos" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav h-20 flex items-center justify-between px-6 md:px-12 border-b border-border-dark">
      
      {/* Brand Logo (Left) */}
      <a href="/" className="flex items-center gap-3">
        <div className="size-10 bg-black border border-neon-cyan/50 rounded-lg flex items-center justify-center shadow-[0_0_10px_rgba(0,240,255,0.2)]">
          <Cpu className="text-neon-cyan size-6" />
        </div>
        <span className="font-bold tracking-wider text-xl text-white">
          DIGICORE<span className="text-neon-cyan font-black">STUDIO</span>
        </span>
      </a>

      {/* Desktop Nav Links (Aligned to the Right) */}
      <div className="hidden md:flex items-center gap-8">
        {/* Dropdown for Soluciones */}
        <div className="relative group">
          <button className="flex items-center gap-1.5 text-base font-semibold text-text-muted hover:text-neon-emerald transition-colors duration-200 py-2 cursor-pointer">
            Soluciones
            <ChevronDown className="size-4.5 group-hover:rotate-180 transition-transform duration-200" />
          </button>
          
          {/* Dropdown Menu aligned to the right of the button to prevent screen overflow */}
          <div className="absolute top-full right-0 mt-1 w-64 bg-black border border-white/10 rounded-xl p-3 shadow-[0_15px_30px_rgba(0,0,0,0.8)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col gap-1 backdrop-blur-md">
            {soluciones.map((sol) => (
              <a
                key={sol.label}
                href={sol.href}
                className="text-sm text-text-muted hover:text-neon-emerald hover:bg-white/[0.03] px-3.5 py-2.5 rounded-lg transition-colors border border-transparent hover:border-white/5"
              >
                {sol.label}
              </a>
            ))}
          </div>
        </div>

        <a href="/#paquetes" className="text-base font-semibold text-text-muted hover:text-neon-emerald transition-colors duration-200">
          Paquetes
        </a>
        <a href="/contacto" className="text-base font-semibold text-text-muted hover:text-neon-emerald transition-colors duration-200">
          Contacto
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 text-text-muted hover:text-neon-emerald transition-colors"
        aria-label="Toggle Menu"
      >
        {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
      </button>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="absolute top-20 left-0 right-0 bg-black/95 backdrop-blur-md border-b border-border-dark flex flex-col p-6 gap-5 md:hidden animate-fade-in max-h-[calc(100vh-5rem)] overflow-y-auto">
          {/* Soluciones Accordion */}
          <div className="flex flex-col gap-2">
            <button 
              onClick={() => setMobileSolOpen(!mobileSolOpen)}
              className="flex items-center justify-between text-xl font-semibold text-text-muted hover:text-neon-emerald w-full py-1 text-left"
            >
              <span>Soluciones</span>
              <ChevronDown className={`size-5 transition-transform duration-200 ${mobileSolOpen ? 'rotate-180 text-neon-emerald' : ''}`} />
            </button>
            
            {mobileSolOpen && (
              <div className="flex flex-col pl-4 border-l border-white/10 gap-3 mt-2">
                {soluciones.map((sol) => (
                  <a
                    key={sol.label}
                    href={sol.href}
                    onClick={() => setIsOpen(false)}
                    className="text-base text-text-muted hover:text-neon-emerald transition-colors py-1"
                  >
                    {sol.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a
            href="/#paquetes"
            onClick={() => setIsOpen(false)}
            className="text-xl font-semibold text-text-muted hover:text-neon-emerald transition-colors py-1"
          >
            Paquetes
          </a>
          <a
            href="/contacto"
            onClick={() => setIsOpen(false)}
            className="text-xl font-semibold text-text-muted hover:text-neon-emerald transition-colors py-1 border-t border-white/10 pt-3"
          >
            Contacto
          </a>
        </div>
      )}
    </nav>
  );
}
