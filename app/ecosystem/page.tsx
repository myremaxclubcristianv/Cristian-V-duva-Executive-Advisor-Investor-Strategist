import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import EcosystemSection from "@/components/EcosystemSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Ecosystem — Cristian Văduva",
  description: "An integrated network of specialized investment vehicles, real estate advisory, and media platforms directed by Cristian Văduva.",
};

export default function EcosystemPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-text-primary">
      <Navigation />
      <main className="flex-1 pt-24">
        {/* Editorial Header */}
        <section className="py-20 md:py-28 px-6 md:px-16 lg:px-24 border-b border-surface-secondary/50">
          <div className="max-w-5xl mx-auto space-y-6">
            <div className="flex items-center gap-3 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-accent font-semibold">
              <span>VENTURES & INFRASTRUCTURE</span>
              <span className="w-6 h-[1px] bg-accent/40" />
              <span>THE ECOSYSTEM</span>
            </div>
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl text-text-primary leading-[1.06] tracking-tight">
              Building Intelligent<br />
              <span className="text-accent italic font-normal">Capital Systems.</span>
            </h1>
            <p className="font-sans text-base sm:text-lg text-text-secondary/90 font-light max-w-2xl leading-relaxed pt-2">
              A strategic network of corporate entities, investment partnerships, and digital platforms delivering long-term value across European real estate and capital markets.
            </p>
          </div>
        </section>

        <EcosystemSection />
      </main>
      <Footer />
    </div>
  );
}
