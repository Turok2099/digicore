import { Rocket, ArrowRight } from "lucide-react";

export default function CTA() {
    return (
        <section className="px-6 py-24 bg-deepblue" id="contact">
            <div className="max-w-5xl mx-auto bg-electricblue rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden text-center shadow-[0_0_50px_rgba(58,123,255,0.3)]">
                {/* Background Pattern Hint */}
                <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "20px 20px"}}></div>
                
                <div className="absolute -top-10 -right-10 md:-top-24 md:-right-24 p-4 opacity-10 pointer-events-none">
                    <Rocket className="w-64 h-64 md:w-96 md:h-96 text-purewhite" />
                </div>
                
                <div className="relative z-10">
                    <h2 className="text-4xl md:text-6xl font-extrabold text-purewhite mb-6 tracking-tight text-balance">
                        Crea tu página web de alto impacto hoy.
                    </h2>
                    <p className="text-xl text-purewhite/90 mb-10 max-w-2xl mx-auto font-light leading-relaxed text-balance">
                        Lleva tu negocio al siguiente nivel con nuestra <strong className="font-medium">agencia de desarrollo web</strong>. Deja atrás lo genérico y descubre el verdadero retorno de inversión a través de un excelente diseño de páginas web.
                    </p>
                    
                    <button className="h-16 px-10 bg-purewhite text-electricblue font-extrabold rounded-xl flex items-center justify-center gap-3 relative z-10 shadow-2xl hover:scale-105 active:scale-95 transition-all text-lg mx-auto">
                        Cotizar mi proyecto
                        <ArrowRight className="w-5 h-5" />
                    </button>
                    
                    <p className="mt-8 text-sm text-purewhite/70 font-medium">
                        Auditoría estratégica gratuita · Sin compromisos · Plazas limitadas cada mes.
                    </p>
                </div>
            </div>
        </section>
    );
}
