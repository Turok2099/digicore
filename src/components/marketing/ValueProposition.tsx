import { Quote, Activity, CheckCircle2 } from "lucide-react";

export default function ValueProposition() {
    return (
        <section className="relative w-full py-32 px-6 bg-deepblue flex items-center justify-center overflow-hidden">
            {/* Subtle Gradient Backglow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-electricblue/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
                <Quote className="w-16 h-16 text-electricblue/20 mb-8" />
                
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl/snug font-medium text-lightgray/80 tracking-tight max-w-4xl text-balance">
                    Ayudamos a <span className="text-purewhite font-bold">startups y negocios digitales</span> a lanzar sitios web profesionales, rápidos y optimizados que <span className="text-electricblue font-bold drop-shadow-[0_0_15px_rgba(58,123,255,0.4)]">convierten visitantes en clientes.</span>
                </h2>
                
                <p className="mt-12 text-lg sm:text-xl text-lightgray/60 font-light max-w-3xl leading-relaxed text-balance">
                    Desde MVPs hasta sitios corporativos, combinamos <strong className="text-purewhite font-medium">diseño, desarrollo y estrategia</strong> para entregar resultados reales desde el primer día.
                </p>

                {/* Micro indicators below the text */}
                <div className="mt-16 flex flex-wrap justify-center gap-8 sm:gap-12 opacity-80 border-t border-purewhite/5 pt-10 min-w-[50%]">
                    <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-electricblue/70" />
                        <span className="text-sm font-mono tracking-widest text-lightgray/50 uppercase">Alta Conversión</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Activity className="w-5 h-5 text-electricblue/70" />
                        <span className="text-sm font-mono tracking-widest text-lightgray/50 uppercase">Velocidad Extrema</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
