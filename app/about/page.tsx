import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import ExecutiveProfile from "@/components/ExecutiveProfile";
import ExecutivePortrait from "@/components/ExecutivePortrait";
import Timeline from "@/components/Timeline";
import WatchCristian from "@/components/WatchCristian";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About — Cristian Văduva",
  description: "Executive advisor, investor, and strategist directing ultra-prime real estate acquisitions, capital structuring, and private advisory across Europe.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-text-primary">
      <Navigation />
      <main className="flex-1 pt-24">
        {/* Editorial Hero Header */}
        <section className="py-20 md:py-28 px-6 md:px-16 lg:px-24 border-b border-surface-secondary/50">
          <div className="max-w-5xl mx-auto space-y-6">
            <div className="flex items-center gap-3 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-accent font-semibold">
              <span>PROFILE & MANDATE</span>
              <span className="w-6 h-[1px] bg-accent/40" />
              <span>CRISTIAN VĂDUVA</span>
            </div>
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl text-text-primary leading-[1.06] tracking-tight">
              Private Advice.<br />
              <span className="text-accent italic font-normal">Strategic Capital.</span><br />
              Long‑Term Value.
            </h1>
            <p className="font-sans text-base sm:text-lg text-text-secondary/90 font-light max-w-3xl leading-relaxed pt-2">
              Luxury real estate expert and strategist directing capital allocation, prime property acquisitions, and confidential board advisory across Monaco, Zurich, Bucharest, and core European markets.
            </p>
          </div>
        </section>

        <ExecutivePortrait />
        <ExecutiveProfile />
        <Timeline />
        <WatchCristian />
      </main>
      <Footer />
    </div>
  );
}
