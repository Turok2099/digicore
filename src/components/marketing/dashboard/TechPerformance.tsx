export default function TechPerformance() {
    return (
        <section className="px-6 pt-8">
            <h4 className="text-base font-bold dark:text-white mb-4 px-1">
                Rendimiento Técnico
            </h4>
            <div className="grid grid-cols-1 gap-4">
                <div className="flex items-center gap-4 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 p-4 rounded-2xl">
                    <div className="relative flex items-center justify-center size-16">
                        <svg className="size-full transform -rotate-90">
                            <circle
                                className="text-slate-200 dark:text-slate-700"
                                cx="32"
                                cy="32"
                                fill="transparent"
                                r="28"
                                stroke="currentColor"
                                strokeWidth="6"
                            ></circle>
                            <circle
                                className="text-primary"
                                cx="32"
                                cy="32"
                                fill="transparent"
                                r="28"
                                stroke="currentColor"
                                strokeDasharray="176"
                                strokeDashoffset="17.6"
                                strokeWidth="6"
                            ></circle>
                        </svg>
                        <span className="absolute text-sm font-bold dark:text-white">
                            98
                        </span>
                    </div>
                    <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                            <span className="text-sm font-bold dark:text-white">
                                Page Speed Score
                            </span>
                            <span className="text-xs font-bold text-emerald-500">
                                Excelente
                            </span>
                        </div>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                            Carga optimizada para retención de usuarios.
                        </p>
                    </div>
                </div>
                <div className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 p-5 rounded-2xl">
                    <h5 className="text-sm font-bold dark:text-white mb-4">
                        Core Web Vitals
                    </h5>
                    <div className="space-y-4">
                        <div>
                            <div className="flex justify-between text-xs font-semibold mb-1.5">
                                <span className="text-slate-500 dark:text-slate-400">
                                    LCP (Largest Contentful Paint)
                                </span>
                                <span className="text-primary">1.2s</span>
                            </div>
                            <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                                <div className="h-full bg-primary rounded-full w-[85%]"></div>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between text-xs font-semibold mb-1.5">
                                <span className="text-slate-500 dark:text-slate-400">
                                    CLS (Cumulative Layout Shift)
                                </span>
                                <span className="text-accent">0.01</span>
                            </div>
                            <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                                <div className="h-full bg-accent rounded-full w-[95%]"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
