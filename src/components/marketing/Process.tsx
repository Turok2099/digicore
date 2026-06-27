import { Search, PenTool, Code2, Rocket } from "lucide-react";

export default function Process() {
    return (
        <section className="px-6 py-24 bg-graphite relative border-t border-purewhite/5">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-xs font-mono text-electricblue uppercase tracking-widest">Metodología Comprobada</span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-purewhite mt-4 mb-6 tracking-tight">
                        ¿Cómo trabajamos tu <span className="text-electricblue">Agencia de Diseño Web</span>?
                    </h2>
                    <p className="text-lightgray/80 text-lg max-w-2xl mx-auto font-light">
                        Seguimos un marco estricto y transparente para garantizar que el proceso completo desde el concepto hasta el <strong className="font-medium text-purewhite">diseño y elaboracion de paginas web</strong> quede perfecto.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Step 1 */}
                    <div className="relative p-8 rounded-3xl bg-deepblue border border-purewhite/10 hover:border-electricblue/50 transition-colors group">
                        <div className="size-12 rounded-xl bg-electricblue/10 text-electricblue flex items-center justify-center mb-6 overflow-hidden">
                            <Search className="w-6 h-6 group-hover:scale-110 transition-transform" />
                        </div>
                        <h3 className="text-xl font-bold text-purewhite mb-3">1. Descubrimiento y Estrategia</h3>
                        <p className="text-lightgray/70 text-sm leading-relaxed">
                            No solo pintamos pantallas. Analizamos tu mercado, tus competidores y el comportamiento de tu audiencia antes de plantear la estrategia de <em className="not-italic text-lightgray">creación páginas web</em>.
                        </p>
                    </div>

                    {/* Step 2 */}
                    <div className="relative p-8 rounded-3xl bg-deepblue border border-purewhite/10 hover:border-electricblue/50 transition-colors group delay-100">
                        <div className="size-12 rounded-xl bg-electricblue/10 text-electricblue flex items-center justify-center mb-6">
                            <PenTool className="w-6 h-6 group-hover:scale-110 transition-transform" />
                        </div>
                        <h3 className="text-xl font-bold text-purewhite mb-3">2. Diseño de Paginás Web Profesionales</h3>
                        <p className="text-lightgray/70 text-sm leading-relaxed">
                            Creamos iteraciones visuales guiadas por UX. Cada componente de nuestro diseño web comunica tu identidad de marca y dirige la mirada hacia la conversión del cliente final.
                        </p>
                    </div>

                    {/* Step 3 */}
                    <div className="relative p-8 rounded-3xl bg-deepblue border border-purewhite/10 hover:border-electricblue/50 transition-colors group delay-200">
                        <div className="size-12 rounded-xl bg-electricblue/10 text-electricblue flex items-center justify-center mb-6">
                            <Code2 className="w-6 h-6 group-hover:scale-110 transition-transform" />
                        </div>
                        <h3 className="text-xl font-bold text-purewhite mb-3">3. Desarrollo de Páginas Web</h3>
                        <p className="text-lightgray/70 text-sm leading-relaxed">
                            Nuestro equipo escribe código impecable y modular en React y Next.js, priorizando la arquitectura para SEO, velocidad nativa y escalabilidad infinita sobre <em className="not-italic text-lightgray">diseño web pagina</em> por página.
                        </p>
                    </div>

                    {/* Step 4 */}
                    <div className="relative p-8 rounded-3xl bg-electricblue/10 border border-electricblue/30 shadow-[0_0_40px_rgba(58,123,255,0.1)] group delay-300">
                        <div className="absolute inset-0 bg-gradient-to-tr from-electricblue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl"></div>
                        <div className="relative z-10">
                            <div className="size-12 rounded-xl bg-electricblue text-purewhite flex items-center justify-center mb-6">
                                <Rocket className="w-6 h-6 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                            </div>
                            <h3 className="text-xl font-bold text-purewhite mb-3">4. Lanzamiento y Control</h3>
                            <p className="text-lightgray/90 text-sm leading-relaxed">
                                Auditanos antes de salir en vivo. Una vez validado, hacemos el deploy con Core Vitals al 100%. Nosotros nos encargamos para que <strong className="text-purewhite">creando tu sitio web</strong> no consigas dolores de cabeza.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
