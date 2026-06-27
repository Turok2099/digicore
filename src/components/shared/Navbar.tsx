import { Rocket } from "lucide-react";
export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 glass-nav h-16 flex items-center justify-between px-6">
            <div className="flex items-center gap-2">
                <div className="size-8 bg-primary rounded-lg flex items-center justify-center">
                    <Rocket className="text-white text-xl" />
                </div>
                <span className="font-extrabold tracking-tight text-lg">
                    Agencia<span className="text-accent">Web</span>
                </span>
            </div>
            <div className="flex items-center gap-6">
                <div className="hidden md:flex items-center gap-6">
                    <a className="text-sm font-bold text-neutral-gray hover:text-white transition-colors" href="/">Home</a>
                    <a className="text-sm font-bold text-neutral-gray hover:text-white transition-colors" href="/planes">Planes</a>
                    <a className="text-sm font-bold text-neutral-gray hover:text-white transition-colors" href="/dashboard">Dashboard</a>
                </div>
                <a
                    className="text-sm font-bold text-neutral-gray hover:text-white transition-colors"
                    href="#contact"
                >
                    Let&apos;s Talk
                </a>
            </div>
        </nav>
    );
}
