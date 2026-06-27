import { CheckCircle2, BadgeCheck, Plus } from "lucide-react";
export default function PricingContent() {
    return (
        <>
            {/* Hero Section */}
            <div className="px-6 pt-10 pb-6 text-center">
                <h1 className="text-white text-3xl font-black leading-tight tracking-tight mb-3">
                    Planes diseñados para convertir
                </h1>
                <p className="text-slate-400 text-base max-w-xs mx-auto">
                    Inversión estratégica enfocada en maximizar tu adquisición de clientes y ROI.
                </p>
            </div>

            {/* Pricing Cards Stack */}
            <div className="flex flex-col gap-6 px-4 py-4 max-w-lg mx-auto">
                {/* Starter Plan */}
                <div className="flex flex-col gap-6 rounded-xl border border-slate-800 bg-slate-900/50 p-6">
                    <div className="flex flex-col gap-2">
                        <div className="flex justify-between items-start">
                            <h2 className="text-slate-300 text-lg font-bold">Starter</h2>
                            <span className="text-xs font-medium text-slate-400 bg-slate-800 px-2.5 py-1 rounded-full uppercase tracking-wider">
                                Presencia Digital
                            </span>
                        </div>
                        <div className="flex items-baseline gap-1">
                            <span className="text-white text-4xl font-black tracking-tighter">$499</span>
                            <span className="text-slate-400 text-sm font-medium">/proyecto</span>
                        </div>
                        <p className="text-slate-500 text-sm">
                            Ideal para nuevos negocios que buscan velocidad y estabilidad.
                        </p>
                    </div>
                    <button className="w-full flex items-center justify-center rounded-lg h-12 bg-slate-800 hover:bg-slate-700 text-white font-bold transition-colors">
                        Get Started
                    </button>
                    <div className="flex flex-col gap-3">
                        {[
                            "Carga ultra-rápida < 2s",
                            "Diseño Mobile-First",
                            "SEO On-page Básico",
                            "Soporte Técnico Email",
                        ].map((feature, i) => (
                            <div key={i} className="flex items-center gap-3 text-sm text-slate-300">
                                <CheckCircle2 className="text-primary" />
                                {feature}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Growth Plan (Most Popular) */}
                <div className="flex flex-col gap-6 rounded-xl border-2 border-accent bg-slate-900/80 p-6 relative">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-slate-900 text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1 rounded-full">
                        Most Popular
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex justify-between items-start">
                            <h2 className="text-white text-lg font-bold">Growth</h2>
                            <span className="text-xs font-medium text-accent bg-accent/10 px-2.5 py-1 rounded-full uppercase tracking-wider">
                                Escalabilidad
                            </span>
                        </div>
                        <div className="flex items-baseline gap-1">
                            <span className="text-white text-4xl font-black tracking-tighter">$999</span>
                            <span className="text-slate-400 text-sm font-medium">/proyecto</span>
                        </div>
                        <p className="text-slate-400 text-sm">
                            Diseñado para negocios en expansión que necesitan leads calificados.
                        </p>
                    </div>
                    <button className="w-full flex items-center justify-center rounded-lg h-12 bg-primary hover:bg-blue-700 text-white font-bold shadow-lg shadow-primary/20 transition-all">
                        Start Growing
                    </button>
                    <div className="flex flex-col gap-3">
                        {[
                            "Optimización de Conversión (CRO)",
                            "Integración CRM y Analytics",
                            "SEO Avanzado Competitivo",
                            "A/B Testing de Landing Page",
                        ].map((feature, i) => (
                            <div key={i} className="flex items-center gap-3 text-sm text-slate-200">
                                <BadgeCheck className="text-accent" />
                                {feature}
                            </div>
                        ))}
                        <div className="flex items-center gap-3 text-sm text-slate-200 font-bold">
                            <Plus className="text-accent" />
                            Todo lo del Plan Starter
                        </div>
                    </div>
                </div>

                {/* Elite Plan */}
                <div className="flex flex-col gap-6 rounded-xl border border-slate-800 bg-slate-900/50 p-6">
                    <div className="flex flex-col gap-2">
                        <div className="flex justify-between items-start">
                            <h2 className="text-slate-300 text-lg font-bold">Elite</h2>
                            <span className="text-xs font-medium text-slate-400 bg-slate-800 px-2.5 py-1 rounded-full uppercase tracking-wider">
                                Dominio Total
                            </span>
                        </div>
                        <div className="flex items-baseline gap-1">
                            <span className="text-white text-4xl font-black tracking-tighter">$1999</span>
                            <span className="text-slate-400 text-sm font-medium">/proyecto</span>
                        </div>
                        <p className="text-slate-500 text-sm">
                            Solución integral con monitoreo de ROI en tiempo real.
                        </p>
                    </div>
                    <button className="w-full flex items-center justify-center rounded-lg h-12 bg-slate-800 hover:bg-slate-700 text-white font-bold transition-colors">
                        Get Started Elite
                    </button>
                    <div className="flex flex-col gap-3">
                        {[
                            "Embudos de Venta Automatizados",
                            "Dashboard ROI Personalizado",
                            "Soporte VIP 24/7 Dedicado",
                            "Auditoría Mensual de Performance",
                        ].map((feature, i) => (
                            <div key={i} className="flex items-center gap-3 text-sm text-slate-300">
                                <CheckCircle2 className="text-primary" />
                                {feature}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Trust Stats */}
            <div className="px-6 py-10 grid grid-cols-2 gap-4 max-w-lg mx-auto">
                <div className="flex flex-col p-4 bg-slate-900/30 rounded-lg border border-slate-800/50">
                    <span className="text-accent text-2xl font-black">99.9%</span>
                    <span className="text-slate-500 text-xs uppercase font-bold tracking-widest">
                        Uptime
                    </span>
                </div>
                <div className="flex flex-col p-4 bg-slate-900/30 rounded-lg border border-slate-800/50">
                    <span className="text-accent text-2xl font-black">2.5x</span>
                    <span className="text-slate-500 text-xs uppercase font-bold tracking-widest">
                        Conversion
                    </span>
                </div>
            </div>
        </>
    );
}
