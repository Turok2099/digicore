import { Hero, ValueProposition, Features, Showcase, Process, CTA } from "@/views/HomeView/HomeView.sections";

export default function HomeView() {
  return (
    <main className="min-h-screen bg-deepblue">
      <Hero />
      <ValueProposition />
      <Features />
      <Showcase />
      <Process />
      <CTA />
    </main>
  );
}
