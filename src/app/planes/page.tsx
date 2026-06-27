import PricingHeader from "@/components/shared/PricingHeader";
import PricingContent from "@/components/marketing/PricingContent";
import PricingBottomNav from "@/components/shared/PricingBottomNav";
import Navbar from "@/components/shared/Navbar";

export default function PricingPage() {
    return (
        <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden pb-24 bg-background-dark font-display text-slate-100">
            <div className="hidden md:block">
                <Navbar />
            </div>
            <PricingHeader />
            <div className="md:pt-20">
                <PricingContent />
            </div>
            <PricingBottomNav />
        </div>
    );
}
