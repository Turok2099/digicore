import { Zap, Target, LayoutGrid } from "lucide-react";
export default function Features() {
    return (
        <section className="px-6 py-24 bg-deepblue relative border-t border-purewhite/5 overflow-hidden">
             {/* Subtle ambient light */}
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[300px] bg-electricblue/5 blur-[120px] rounded-[100%] pointer-events-none"></div>

             <div className="max-w-7xl mx-auto relative z-10">
                <div className="mb-16">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-px bg-electricblue/50"></div>
                        <span className="text-xs font-mono text-electricblue uppercase tracking-widest">Tu Agencia de Desarrollo Web</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-purewhite tracking-tight mb-6">
                        Desempeño Innegable.
                    </h2>
                    <p className="text-lightgray/80 text-lg max-w-xl font-light">
                        Olvídate de las genéricas <em className="not-italic text-purewhite">aplicaciones para crear páginas web</em>. Nuestro enfoque en el <strong className="font-medium text-purewhite">diseño y desarrollo web</strong> estructurado asegura la construcción de sitios ultrarrápidos, optimizados y listos para escalar brutalmente.
                    </p>
                </div>

                {/* Bento Grid Architecture */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
                    {/* Bento Box 1 - Span 2 Columns */}
                    <div className="md:col-span-2 group relative border border-purewhite/10 bg-graphite rounded-3xl p-8 overflow-hidden transition-all duration-500 hover:border-electricblue/30 hover:shadow-[0_0_30px_rgba(58,123,255,0.05)]">
                        <div className="absolute inset-0 bg-gradient-to-br from-electricblue/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div className="size-14 rounded-2xl border border-purewhite/10 bg-purewhite/5 flex items-center justify-center shrink-0 mb-6 group-hover:scale-105 transition-transform duration-500">
                                <Zap className="text-electricblue w-6 h-6" />
                            </div>
                            <div className="max-w-md">
                                <h3 className="text-2xl font-bold text-purewhite mb-3">Diseño de Páginas Web Profesionales</h3>
                                <p className="text-lightgray/70 font-light leading-relaxed">
                                    Optimizamos cada byte en nuestra <em className="not-italic text-lightgray">creación de páginas web</em>. Conseguimos puntuaciones Core Web Vitals en verde para dominar el SEO y aniquilar las tasas de rebote en milisegundos.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Bento Box 2 - Span 1 Column */}
                    <div className="group relative border border-purewhite/10 bg-graphite rounded-3xl p-8 overflow-hidden transition-all duration-500 hover:border-electricblue/30 hover:shadow-[0_0_30px_rgba(58,123,255,0.05)]">
                         <div className="relative z-10 h-full flex flex-col justify-between">
                            <div className="size-14 rounded-2xl border border-purewhite/10 bg-purewhite/5 flex items-center justify-center shrink-0 mb-6 group-hover:scale-105 transition-transform duration-500">
                                <Target className="text-electricblue w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-purewhite mb-3">Ingeniería de Conversión</h3>
                                <p className="text-lightgray/70 font-light text-sm leading-relaxed">
                                    Patrones UX cognitivos diseñados quirúrgicamente para transformar tráfico frío en prospectos de alto valor durante el <em className="not-italic text-lightgray">desarrollo de paginas web</em>.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Bento Box 3 - Span 1 Column */}
                    <div className="group relative border border-purewhite/10 bg-graphite rounded-3xl p-8 overflow-hidden transition-all duration-500 hover:border-electricblue/30 hover:shadow-[0_0_30px_rgba(58,123,255,0.05)]">
                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div className="size-14 rounded-2xl border border-purewhite/10 bg-purewhite/5 flex items-center justify-center shrink-0 mb-6 group-hover:scale-105 transition-transform duration-500">
                                <LayoutGrid className="text-electricblue w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-purewhite mb-3">Escalabilidad Atómica</h3>
                                <p className="text-lightgray/70 font-light text-sm leading-relaxed">
                                    El <em className="not-italic text-lightgray">diseño web página</em> por página a través de Design Tokens asegura coherencia total y lista integración corporativa.
                                </p>
                            </div>
                        </div>
                    </div>

                     {/* Bento Box 4 - Span 2 Columns */}
                     <div className="md:col-span-2 group relative border border-purewhite/10 bg-graphite rounded-3xl p-8 overflow-hidden transition-all duration-500 hover:border-electricblue/30 hover:shadow-[0_0_30px_rgba(58,123,255,0.05)]">
                         <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purewhite/[0.02] to-transparent"></div>
                         <div className="relative z-10 h-full flex flex-col justify-center">
                            <div className="flex items-center gap-3 mb-6">
                                 <span className="flex h-2.5 w-2.5 relative">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-electricblue opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-electricblue"></span>
                                 </span>
                                 <span className="text-xs font-mono text-lightgray uppercase tracking-widest border border-purewhite/10 bg-purewhite/5 px-2 py-1 rounded">
                                    Telemetría Exacta
                                 </span>
                            </div>
                            <h3 className="text-2xl font-bold text-purewhite mb-3">Decisiones Basadas en Datos Reales</h3>
                            <p className="text-lightgray/70 font-light max-w-lg leading-relaxed">
                                Eliminamos las conjeturas del <em className="not-italic text-lightgray">diseño página web</em>. Implementamos analytics desde la capa base para que gobiernes tu crecimiento orgánico con data fidedigna.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
