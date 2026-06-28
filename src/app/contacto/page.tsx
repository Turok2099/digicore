import Navigation from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import LeadCaptureForm from "@/components/marketing/CTA";

export default function ContactoPage() {
  return (
    <div className="bg-black text-white min-h-screen font-sans antialiased flex flex-col justify-between">
      <Navigation />
      
      {/* Contact Content Area */}
      <main className="flex-grow pt-28">
        <LeadCaptureForm />
      </main>

      <Footer />
    </div>
  );
}
