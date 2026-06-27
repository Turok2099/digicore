"use client";

import { ArrowRight, Award, LineChart, TrendingUp, UserPlus, BadgeCheck, CheckCircle, Settings, Rocket } from "lucide-react";

import { useState, useEffect } from "react";

export default function Hero() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTimestamp: number | null = null;
        const duration = 2000; // 2 segundos de animación
        const target = 84200;

        const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);

            // Función ease-out quad para que el conteo desacelere sutilmente al final
            const easeOutProgress = progress * (2 - progress);
            setCount(Math.floor(easeOutProgress * target));

            if (progress < 1) {
                window.requestAnimationFrame(step);
            } else {
                setCount(target);
            }
        };

        window.requestAnimationFrame(step);
    }, []);

    return (
        <section className="relative min-h-[90vh] flex items-center pt-20 pb-20 px-6 overflow-hidden bg-deepblue">
            {/* Architectural Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

            <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-10">
                <div className="max-w-2xl">

                    <p className="text-xl sm:text-2xl text-lightgray font-medium mb-6 max-w-xl leading-snug">
                        ¿Buscas nuevos clientes?
                    </p>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-purewhite leading-[1.1] tracking-tight mb-4">
                        Sitios web profesionales listos para <span className="text-electricblue">producir resultados.</span>
                    </h1>

                    <ul className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-6 mb-8">
                        <li className="flex items-center gap-2 text-lightgray">
                            <CheckCircle className="w-5 h-5 text-electricblue" />
                            <span className="font-medium">Optimizados</span>
                        </li>
                        <li className="flex items-center gap-2 text-lightgray">
                            <TrendingUp className="w-5 h-5 text-electricblue" />
                            <span className="font-medium">Escalables</span>
                        </li>
                        <li className="flex items-center gap-2 text-lightgray">
                            <Settings className="w-5 h-5 text-electricblue" />
                            <span className="font-medium">Personalizados</span>
                        </li>
                    </ul>

                    <p className="text-base sm:text-lg text-lightgray/80 leading-relaxed mb-10 max-w-xl font-light">
                        Desarrollo web moderno con enfoque en SEO y marketing digital.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 sm:items-center">
                        <button className="h-14 px-8 bg-electricblue text-purewhite font-bold rounded-lg flex items-center justify-center gap-2 hover:bg-electricblue/90 transition-colors shadow-[0_0_20px_rgba(58,123,255,0.3)] w-full sm:w-auto shrink-0">
                            Cotizar proyecto
                            <ArrowRight className="text-sm" />
                        </button>

                        {/* Micro-mensaje de autoridad */}
                        <div className="flex items-center gap-3 text-lightgray/90 sm:max-w-[280px]">
                            <Award className="text-electricblue/80 text-2xl shrink-0" />
                            <p className="text-xs leading-relaxed font-light">
                                <strong className="font-medium text-purewhite">Más de 10 años creando productos digitales</strong> con tecnología moderna y estándares de calidad profesional.
                            </p>
                        </div>
                    </div>


                </div>

                {/* Right Column: Abstract Terminal / Metric Visual */}
                <div className="hidden lg:flex justify-end relative">
                    {/* Glow behind terminal */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-electricblue/20 to-purewhite/5 blur-3xl rounded-full"></div>

                    <div className="relative w-full max-w-lg aspect-square border border-purewhite/10 bg-graphite/80 backdrop-blur-2xl rounded-2xl p-6 flex flex-col gap-4 overflow-hidden shadow-2xl">
                        {/* Header */}
                        <div className="flex items-center justify-between pb-4 border-b border-lightgray/10">
                            <div className="flex items-center gap-2">
                                <LineChart className="text-electricblue text-xl" />
                                <span className="text-sm font-semibold text-purewhite tracking-wide">Tráfico Orgánico Mensual</span>
                            </div>
                            <div className="flex items-center gap-2 bg-electricblue/10 px-3 py-1 rounded-full border border-electricblue/20">
                                <span className="size-1.5 rounded-full bg-electricblue animate-pulse"></span>
                                <span className="text-[10px] font-mono font-medium text-electricblue uppercase tracking-widest">Live ROI</span>
                            </div>
                        </div>

                        {/* Main Metric */}
                        <div className="flex flex-col gap-3 mt-4 mb-2">
                            <h3 className="text-6xl sm:text-[4rem] font-black text-purewhite tracking-tighter leading-none">
                                +{count.toLocaleString("en-US")}
                            </h3>
                            <div className="flex items-center gap-1.5 text-electricblue bg-electricblue/10 px-3 py-1 rounded-full text-sm font-bold w-fit border border-electricblue/20">
                                <TrendingUp className="text-[16px]" />
                                +142%
                            </div>
                        </div>

                        {/* Sparkline / Graph */}
                        <div className="flex-1 min-h-[100px] w-full mt-4 relative">
                            {/* Decorative curve representing growth */}
                            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-electricblue/20 to-transparent flex items-end">
                                <svg width="100%" height="100%" viewBox="0 0 100 40" preserveAspectRatio="none" className="drop-shadow-[0_0_8px_rgba(58,123,255,0.4)]">
                                    <path d="M0,40 C20,38 30,20 50,15 C70,10 80,5 100,0 L100,40 L0,40 Z" fill="url(#gradient)" opacity="0.2" />
                                    <path d="M0,40 C20,38 30,20 50,15 C70,10 80,5 100,0" fill="none" stroke="#3A7BFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <defs>
                                        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                            <stop offset="0%" stopColor="#3A7BFF" stopOpacity="0.8" />
                                            <stop offset="100%" stopColor="#3A7BFF" stopOpacity="0" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>

                            {/* Mock Notification / Leads */}
                            <div className="absolute top-0 right-4 bg-purewhite/5 backdrop-blur-md border border-lightgray/10 rounded-lg p-3 shadow-xl animate-[bounce_3s_ease-in-out_infinite] delay-100 flex items-center gap-3">
                                <div className="bg-electricblue/20 p-2 rounded-full flex shrink-0">
                                    <UserPlus className="text-electricblue text-sm" />
                                </div>
                                <div>
                                    <p className="text-[10px] text-lightgray font-medium leading-none mb-1">Nuevo prospecto (SEO)</p>
                                    <p className="text-xs text-purewhite font-bold leading-none">+$1,400 MRR</p>
                                </div>
                            </div>

                            {/* Another Mock Notification offset */}
                            <div className="absolute top-16 left-2 bg-purewhite/5 backdrop-blur-md border border-lightgray/10 rounded-lg p-2.5 shadow-xl animate-[bounce_4s_ease-in-out_infinite] flex items-center gap-2">
                                <BadgeCheck className="text-[#10B981] text-xs shrink-0" />
                                <p className="text-[10px] text-purewhite font-medium">Top #1 Búsquedas Google</p>
                            </div>
                        </div>

                        {/* Footer Stats Grid */}
                        <div className="grid grid-cols-2 gap-3 mt-auto pt-4 border-t border-lightgray/10">
                            <div className="flex items-center gap-3">
                                <div className="size-10 rounded-full border-[3px] border-electricblue/30 border-t-electricblue flex items-center justify-center animate-[spin_3s_linear_infinite] shrink-0">
                                    <span className="text-[10px] font-bold text-purewhite animate-[spin_3s_linear_infinite_reverse]">99</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] text-lightgray uppercase tracking-widest font-mono">Performance</span>
                                    <span className="text-[10px] sm:text-xs text-purewhite font-medium">Carga rápida 0.4s</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="size-10 rounded-full border-[3px] border-electricblue flex items-center justify-center bg-electricblue/10 shrink-0">
                                    <CheckCircle className="text-electricblue text-sm" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] text-lightgray uppercase tracking-widest font-mono">Core Vitals</span>
                                    <span className="text-[10px] sm:text-xs text-electricblue font-bold tracking-wide">100 Audit Score</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
