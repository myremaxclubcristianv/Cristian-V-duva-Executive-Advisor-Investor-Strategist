import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import SelectedPropertiesModule from "@/components/SelectedPropertiesModule";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Curated Architectural Works — Cristian Văduva",
  description: "Curated architectural masterworks and high-value residential assets represented by Cristian Văduva.",
};

export default function PropertiesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-text-primary">
      <Navigation />
      <main className="flex-1 pt-24">
        {/* Editorial Header */}
        <section className="py-20 md:py-28 px-6 md:px-16 lg:px-24 border-b border-surface-secondary/50">
          <div className="max-w-5xl mx-auto space-y-6">
            <div className="flex items-center gap-3 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-accent font-semibold">
              <span>ACTIVE CURATION</span>
              <span className="w-6 h-[1px] bg-accent/40" />
              <span>SELECTED PROPERTIES</span>
            </div>
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl text-text-primary leading-[1.06] tracking-tight">
              Curated Architectural<br />
              <span className="text-accent italic font-normal">Masterworks.</span>
            </h1>
            <p className="font-sans text-base sm:text-lg text-text-secondary/90 font-light max-w-2xl leading-relaxed pt-2">
              Exceptional residential and commercial assets curated for architectural distinction, location scarcity, and generational capital resilience.
            </p>
          </div>
        </section>

        <SelectedPropertiesModule />
      </main>
      <Footer />
    </div>
  );
}
