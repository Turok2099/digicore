import { Rocket, MessageCircle } from "lucide-react";
export default function PricingHeader() {
    return (
        <div className="sticky top-0 z-50 flex items-center bg-background-dark/80 backdrop-blur-md p-4 justify-between border-b border-slate-800 md:hidden">
            <div className="flex items-center gap-2">
                <div className="size-8 bg-primary rounded-lg flex items-center justify-center">
                    <Rocket className="text-white text-xl" />
                </div>
                <span className="text-white font-bold tracking-tight">WebAgency</span>
            </div>
            <div className="flex items-center gap-4">
                <button className="flex items-center justify-center size-10 rounded-full bg-slate-800 text-slate-300 hover:bg-slate-700 transition-colors">
                    <MessageCircle />
                </button>
            </div>
        </div>
    );
}
