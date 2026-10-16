import { Metadata } from "next";
import ExecutiveHeader from "@/components/ExecutiveHeader";
import IntelligenceBlock from "@/components/IntelligenceBlock";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Market Intelligence & Capital Analytics — Cristian Văduva",
  description: "Real-time European market intelligence, macroeconomic indicators, and institutional real estate capital analysis.",
};

export default function MarketPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#07090D] text-[#F5F4EF] selection:bg-[#93C8FF]/25 selection:text-[#F5F4EF]">
      <ExecutiveHeader />

      <main className="flex-1 pt-28 sm:pt-36">
        {/* Editorial Header */}
        <section className="py-20 md:py-28 px-6 md:px-16 lg:px-24 border-b border-white/[0.08] bg-arch-grid">
          <div className="max-w-5xl mx-auto space-y-6">
            <div className="flex items-center gap-3 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-[#93C8FF] font-semibold">
              <span>RESEARCH & SURVEILLANCE</span>
              <span className="w-8 h-[1px] bg-[#93C8FF]/40" />
              <span>CAPITAL INTELLIGENCE</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#F5F4EF] leading-[1.04] tracking-tight">
              Macro Analytics &<br />
              <span className="text-[#A97F60] italic font-normal">Market Intelligence.</span>
            </h1>
            <p className="font-sans text-base sm:text-lg text-[#B8C2CF] font-light max-w-2xl leading-relaxed pt-2">
              Continuous monitoring of European credit liquidity, asset repricing, regulatory developments, and institutional transaction volumes.
            </p>
          </div>
        </section>

        <IntelligenceBlock />
      </main>

      <Footer />
    </div>
  );
}
