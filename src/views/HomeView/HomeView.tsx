import {
  Navigation,
  HeroSection,
  SolutionsGrid,
  PricingSection,
  LeadCaptureForm,
  Footer
} from "@/views/HomeView/HomeView.sections";

export default function HomeView() {
  return (
    <div className="bg-black text-white min-h-screen font-sans antialiased">
      {/* Fixed Sticky Header */}
      <Navigation />
      
      {/* Main Landing Structure */}
      <main>
        <HeroSection />
        <SolutionsGrid />
        <PricingSection />
        <LeadCaptureForm />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
