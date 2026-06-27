import { Users } from "lucide-react";
export default function KpiGrid() {
    return (
        <section className="grid grid-cols-2 gap-4 px-6 pt-6">
            <div className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 p-5 rounded-2xl">
                <div className="flex items-center justify-between mb-3">
                    <Users className="text-primary" />
                    <span className="text-xs font-bold text-emerald-500">+12%</span>
                </div>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                    Leads Totales
                </p>
                <h3 className="text-2xl font-bold dark:text-white mt-1">1,284</h3>
            </div>
            <div className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 p-5 rounded-2xl">
                <div className="flex items-center justify-between mb-3">
                    <span className="material-symbols-outlined text-accent">
                        ads_click
                    </span>
                    <span className="text-xs font-bold text-emerald-500">+0.8%</span>
                </div>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                    Conv. Rate
                </p>
                <h3 className="text-2xl font-bold dark:text-white mt-1">4.2%</h3>
            </div>
        </section>
    );
}
