import { TrendingUp, LineChart } from "lucide-react";
export default function RoiHero() {
    return (
        <section className="px-6 pt-8">
            <div className="relative overflow-hidden rounded-2xl bg-primary p-6 text-white shadow-xl shadow-primary/20">
                <div className="relative z-10 flex flex-col gap-1">
                    <span className="text-white/80 text-sm font-medium uppercase tracking-wider">
                        Retorno de Inversión (ROI)
                    </span>
                    <div className="flex items-baseline gap-2">
                        <h2 className="text-4xl font-extrabold tracking-tight">$42,850.00</h2>
                        <span className="flex items-center text-xs font-bold bg-white/20 px-2 py-0.5 rounded-full">
                            <TrendingUp className="text-sm mr-0.5" />
                            24.5%
                        </span>
                    </div>
                    <p className="text-white/70 text-sm mt-4">
                        Generado a través de campañas de adquisición directa este mes.
                    </p>
                </div>
                {/* Abstract Background Pattern */}
                <div className="absolute -right-10 -bottom-10 opacity-20">
                    <LineChart className="text-[180px] select-none" />
                </div>
            </div>
        </section>
    );
}
