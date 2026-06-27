"use client";

export default function DashboardHeader() {
    return (
        <div className="md:hidden">
            {/* iOS Status Bar Spacer */}
            <div className="h-12 w-full bg-background-light dark:bg-background-dark"></div>

            {/* Header Navigation */}
            <header className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
                <button
                    onClick={() => window.history.back()}
                    className="flex items-center justify-center p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                >
                    <span className="material-symbols-outlined text-slate-600 dark:text-slate-400">
                        arrow_back_ios_new
                    </span>
                </button>
                <h1 className="text-lg font-bold tracking-tight text-slate-900 dark:text-slate-100">
                    Performance & ROI
                </h1>
                <button className="flex items-center justify-center p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
                    <span className="material-symbols-outlined text-slate-600 dark:text-slate-400">
                        share
                    </span>
                </button>
            </header>
        </div>
    );
}
