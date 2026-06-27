import { ArrowRight, ExternalLink } from "lucide-react";

export default function Showcase() {
    return (
        <section className="px-6 py-24 bg-deepblue relative">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
                        <span className="text-xs font-mono text-electricblue uppercase tracking-widest">Nuestro Trabajo</span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-purewhite mt-4 tracking-tight">
                            Diseño de páginas web <br />
                            <span className="text-lightgray/50">que generan rentabilidad.</span>
                        </h2>
                    </div>
                    <button className="h-12 px-6 border border-purewhite/10 hover:border-electricblue/50 text-purewhite hover:text-electricblue rounded-lg flex items-center justify-center gap-2 transition-colors shrink-0">
                        Ver portafolio completo
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {/* Project 1 */}
                    <div className="group cursor-pointer">
                        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-graphite mb-6 border border-purewhite/5">
                            <div className="absolute inset-0 bg-gradient-to-t from-deepblue/80 via-transparent to-transparent opacity-60 z-10"></div>
                            <div className="absolute inset-0 flex items-center justify-center bg-electricblue/5 text-lightgray/30 font-light text-2xl lg:text-3xl group-hover:scale-105 transition-transform duration-700">
                                [ E-commerce App UI ]
                            </div>
                        </div>
                        <div className="flex justify-between items-start gap-4">
                            <div>
                                <h3 className="text-2xl font-bold text-purewhite mb-2 group-hover:text-electricblue transition-colors">Plataforma Fintech Core</h3>
                                <p className="text-lightgray/70 font-light text-sm md:text-base">Estrategia, UX/UI, Desarrollo web de alto rendimiento en React/Next.js</p>
                            </div>
                            <div className="size-10 md:size-12 rounded-full border border-purewhite/10 flex items-center justify-center shrink-0 group-hover:bg-electricblue group-hover:border-electricblue transition-colors">
                                <ExternalLink className="w-4 h-4 text-purewhite" />
                            </div>
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div className="group cursor-pointer md:mt-20">
                        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-graphite mb-6 border border-purewhite/5">
                            <div className="absolute inset-0 bg-gradient-to-t from-deepblue/80 via-transparent to-transparent opacity-60 z-10"></div>
                            <div className="absolute inset-0 flex items-center justify-center bg-electricblue/5 text-lightgray/30 font-light text-2xl lg:text-3xl group-hover:scale-105 transition-transform duration-700">
                                [ Landing Page B2B UI ]
                            </div>
                        </div>
                        <div className="flex justify-between items-start gap-4">
                            <div>
                                <h3 className="text-2xl font-bold text-purewhite mb-2 group-hover:text-electricblue transition-colors">SaaS B2B Corporativo</h3>
                                <p className="text-lightgray/70 font-light text-sm md:text-base"><em className="not-italic text-lightgray">Diseño de pagina web profesional</em> que escaló la conversión de su tráfico B2B al 12%.</p>
                            </div>
                            <div className="size-10 md:size-12 rounded-full border border-purewhite/10 flex items-center justify-center shrink-0 group-hover:bg-electricblue group-hover:border-electricblue transition-colors">
                                <ExternalLink className="w-4 h-4 text-purewhite" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
