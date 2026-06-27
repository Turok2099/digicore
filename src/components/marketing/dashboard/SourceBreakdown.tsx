import { Search, Megaphone } from "lucide-react";
export default function SourceBreakdown() {
    return (
        <section className="px-6 pt-8 pb-32">
            <h4 className="text-base font-bold dark:text-white mb-4 px-1">
                Fuentes de Adquisición
            </h4>
            <div className="space-y-3">
                <div className="flex items-center justify-between p-4 bg-white dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-800">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-primary">
                            <Search />
                        </div>
                        <div>
                            <p className="text-sm font-bold dark:text-white">
                                Búsqueda Orgánica
                            </p>
                            <p className="text-[10px] text-slate-500 dark:text-slate-400">
                                SEO Strategy
                            </p>
                        </div>
                    </div>
                    <div className="text-right">
                        <p className="text-sm font-bold dark:text-white">45%</p>
                        <p className="text-[10px] text-emerald-500 font-bold">+5.2%</p>
                    </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-white dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-800">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg text-accent-cyan">
                            <Megaphone />
                        </div>
                        <div>
                            <p className="text-sm font-bold dark:text-white">
                                Publicidad Pagada
                            </p>
                            <p className="text-[10px] text-slate-500 dark:text-slate-400">
                                Google Ads / Meta
                            </p>
                        </div>
                    </div>
                    <div className="text-right">
                        <p className="text-sm font-bold dark:text-white">32%</p>
                        <p className="text-[10px] text-primary font-bold">+2.1%</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
