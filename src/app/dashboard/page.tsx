import DashboardHeader from "@/components/shared/DashboardHeader";
import RoiHero from "@/components/marketing/dashboard/RoiHero";
import KpiGrid from "@/components/marketing/dashboard/KpiGrid";
import TrendChart from "@/components/marketing/dashboard/TrendChart";
import TechPerformance from "@/components/marketing/dashboard/TechPerformance";
import SourceBreakdown from "@/components/marketing/dashboard/SourceBreakdown";
import DashboardBottomNav from "@/components/shared/DashboardBottomNav";
import Navbar from "@/components/shared/Navbar";

export default function DashboardPage() {
    return (
        <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100">
            <div className="hidden md:block">
                <Navbar />
            </div>
            <DashboardHeader />
            <main className="pb-32 md:pt-20">
                {/* Time Range Selector */}
                <div className="px-6 pt-6">
                    <div className="flex p-1 bg-slate-200 dark:bg-slate-800 rounded-xl">
                        <button className="flex-1 py-2 text-sm font-semibold rounded-lg bg-white dark:bg-primary shadow-sm text-slate-900 dark:text-white transition-all">
                            7 Días
                        </button>
                        <button className="flex-1 py-2 text-sm font-semibold text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                            30 Días
                        </button>
                        <button className="flex-1 py-2 text-sm font-semibold text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                            90 Días
                        </button>
                    </div>
                </div>

                <RoiHero />
                <KpiGrid />
                <TrendChart />
                <TechPerformance />
                <SourceBreakdown />
            </main>
            <DashboardBottomNav />
        </div>
    );
}
