export default function PerformanceShowcase() {
    return (
        <section className="px-6 py-20 relative overflow-hidden">
            <div className="max-w-md mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-extrabold mb-4">
                        Built for <span className="text-accent">Peak</span> Speed
                    </h2>
                    <p className="text-neutral-gray">
                        Our sites consistently score 95+ on Google PageSpeed Insights.
                    </p>
                </div>

                <div className="relative glass-card rounded-2xl overflow-hidden p-1">
                    <img
                        alt="Data analytics dashboard"
                        className="w-full rounded-xl opacity-80 border border-white/5"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCq3t592jGLXNhpVnH_Al6xdTDgPbQ1LIRArbB3MaFYxAaqXjAgLEQ_TaSmr6QWssIipkX3B7hstT9eF9I8GJR2QyPaSZqKz4m7kbWEtd3FMgIzCXGFj0MQmmKuBcLSoiayOb8Mk1BqssO0hXp84gRoVN9q8cha282p-Sy2bFF6yBt5iqopybZW3MVvo5LniIH1HOGb8Z4xomCw81vuARgLWdtu8tAnWdCZC1aWpyA2-ruMBorJdkxwlto5jVmLw9IpuKfoVdsdej0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent"></div>

                    <div className="absolute bottom-6 left-6 right-6">
                        <div className="flex items-center gap-3 glass-card bg-white/10 p-3 rounded-lg border border-white/20">
                            <div className="size-10 rounded-full border-4 border-accent border-r-transparent animate-spin-slow"></div>
                            <div>
                                <p className="text-xs font-bold uppercase tracking-tighter text-accent">
                                    Performance Score
                                </p>
                                <p className="text-xl font-black">99/100</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
