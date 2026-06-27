import { Target, Lightbulb, Settings } from "lucide-react";
export default function DashboardBottomNav() {
    return (
        <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white/90 dark:bg-background-dark/90 backdrop-blur-xl border-t border-slate-200 dark:border-slate-800 pb-8 pt-2">
            <div className="flex justify-around items-center px-4">
                <a className="flex flex-col items-center gap-1 group" href="/dashboard">
                    <span
                        className="material-symbols-outlined text-primary"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                        dashboard
                    </span>
                    <span className="text-[10px] font-bold text-primary">Dashboard</span>
                </a>
                <a
                    className="flex flex-col items-center gap-1 group text-slate-400 dark:text-slate-500 hover:text-primary transition-colors"
                    href="#"
                >
                    <Target />
                    <span className="text-[10px] font-bold">Campañas</span>
                </a>
                <a
                    className="flex flex-col items-center gap-1 group text-slate-400 dark:text-slate-500 hover:text-primary transition-colors"
                    href="#"
                >
                    <Lightbulb />
                    <span className="text-[10px] font-bold">Insights</span>
                </a>
                <a
                    className="flex flex-col items-center gap-1 group text-slate-400 dark:text-slate-500 hover:text-primary transition-colors"
                    href="#"
                >
                    <Settings />
                    <span className="text-[10px] font-bold">Ajustes</span>
                </a>
            </div>
            {/* iOS Home Indicator Spacer */}
            <div className="mt-4 flex justify-center">
                <div className="w-32 h-1.5 bg-slate-300 dark:bg-slate-700 rounded-full"></div>
            </div>
        </nav>
    );
}
