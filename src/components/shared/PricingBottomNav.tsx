import { Home, LineChart, Mail } from "lucide-react";
export default function PricingBottomNav() {
    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 flex gap-2 border-t border-slate-800 bg-background-dark/95 backdrop-blur-md px-4 pb-6 pt-3">
            <a
                className="flex flex-1 flex-col items-center justify-center gap-1 text-slate-500 hover:text-slate-300 transition-colors"
                href="/"
            >
                <Home className="text-2xl" />
                <p className="text-[10px] font-bold leading-normal uppercase">Inicio</p>
            </a>
            <a
                className="flex flex-1 flex-col items-center justify-center gap-1 text-primary"
                href="/planes"
            >
                <span className="material-symbols-outlined text-2xl font-fill">
                    payments
                </span>
                <p className="text-[10px] font-bold leading-normal uppercase">Planes</p>
            </a>
            <a
                className="flex flex-1 flex-col items-center justify-center gap-1 text-slate-500 hover:text-slate-300 transition-colors"
                href="/dashboard"
            >
                <LineChart className="text-2xl" />
                <p className="text-[10px] font-bold leading-normal uppercase">Casos</p>
            </a>
            <a
                className="flex flex-1 flex-col items-center justify-center gap-1 text-slate-500 hover:text-slate-300 transition-colors"
                href="#"
            >
                <Mail className="text-2xl" />
                <p className="text-[10px] font-bold leading-normal uppercase">Contact</p>
            </a>
        </div>
    );
}
