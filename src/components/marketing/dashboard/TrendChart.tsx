export default function TrendChart() {
    return (
        <section className="px-6 pt-8">
            <div className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 rounded-2xl p-6">
                <div className="flex justify-between items-start mb-6">
                    <div>
                        <h4 className="text-base font-bold dark:text-white">
                            Crecimiento de Adquisición
                        </h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                            Tendencia de conversión diaria
                        </p>
                    </div>
                    <span className="material-symbols-outlined text-slate-400">
                        more_vert
                    </span>
                </div>
                <div className="h-48 w-full flex flex-col justify-end gap-2">
                    <svg
                        className="w-full h-full"
                        preserveAspectRatio="none"
                        viewBox="0 0 400 150"
                    >
                        {/* Chart Area Gradient */}
                        <defs>
                            <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                                <stop offset="0%" stopColor="#2463eb" stopOpacity="0.3"></stop>
                                <stop offset="100%" stopColor="#2463eb" stopOpacity="0"></stop>
                            </linearGradient>
                        </defs>
                        <path
                            d="M0 120 Q 50 110, 80 80 T 150 60 T 220 90 T 300 40 T 400 20 L 400 150 L 0 150 Z"
                            fill="url(#chartGradient)"
                        ></path>
                        <path
                            d="M0 120 Q 50 110, 80 80 T 150 60 T 220 90 T 300 40 T 400 20"
                            fill="none"
                            stroke="#2463eb"
                            strokeLinecap="round"
                            strokeWidth="4"
                        ></path>
                    </svg>
                    <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase tracking-widest px-1">
                        <span>Lun</span>
                        <span>Mar</span>
                        <span>Mie</span>
                        <span>Jue</span>
                        <span>Vie</span>
                        <span>Sab</span>
                        <span>Dom</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
