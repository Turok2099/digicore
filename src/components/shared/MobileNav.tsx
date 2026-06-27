import { Home, Briefcase, Plus, BarChart, Mail } from "lucide-react";
export default function MobileNav() {
    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 glass-nav border-t border-white/5 pb-6 pt-2">
            <div className="max-w-md mx-auto flex justify-around items-center px-4">
                <a className="flex flex-col items-center gap-1 text-primary" href="/">
                    <Home className="fill-[1]" />
                    <span className="text-[10px] font-bold">Home</span>
                </a>
                <a className="flex flex-col items-center gap-1 text-neutral-gray/60 hover:text-primary transition-colors" href="/planes">
                    <Briefcase />
                    <span className="text-[10px] font-bold">Portfolio</span>
                </a>
                <div className="relative -top-6">
                    <button className="size-14 bg-primary rounded-2xl shadow-lg shadow-primary/40 flex items-center justify-center text-white border-4 border-background-dark">
                        <Plus className="text-3xl" />
                    </button>
                </div>
                <a className="flex flex-col items-center gap-1 text-neutral-gray/60 hover:text-primary transition-colors" href="/dashboard">
                    <BarChart />
                    <span className="text-[10px] font-bold">Insights</span>
                </a>
                <a className="flex flex-col items-center gap-1 text-neutral-gray/60" href="#">
                    <Mail />
                    <span className="text-[10px] font-bold">Contact</span>
                </a>
            </div>
        </div>
    );
}
