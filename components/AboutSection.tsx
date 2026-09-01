import Image from "next/image";
import { biography } from "@/lib/content/biography";

export default function AboutSection() {
  return (
    <section id="about" className="site-section bg-[#FFFFFF] text-[#111111] border-b border-black/5">
      <div className="site-container space-y-16 sm:space-y-24">
        {/* Section Header */}
        <div className="space-y-3 border-b border-black/5 pb-8">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#B89B72] font-semibold block">
            02 / ABOUT CRISTIAN
          </span>
          <h2 className="font-display text-3xl sm:text-5xl text-[#111111] tracking-tight leading-tight">
            THE PERSON<br />
            <span className="text-[#B89B72] italic font-normal">BEHIND THE PROFESSIONAL.</span>
          </h2>
        </div>

        {/* Narrative & Image Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Portrait Monograph Panel */}
          <div className="lg:col-span-5 space-y-4 sticky top-28">
            <div className="relative aspect-[4/5] w-full border border-black/10 overflow-hidden bg-[#E8E8E5] shadow-md">
              <Image
                src="/residence/library.png"
                alt="Cristian Văduva — Study & Research Sanctuary"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-[#6B6B6B] px-1">
              <span>RESEARCH & ADVISORY STUDY</span>
              <span className="text-[#B89B72]">BUCHAREST · MONACO</span>
            </div>
          </div>

          {/* Right Column: Verified Story Narrative */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h3 className="font-display text-2xl sm:text-3xl text-[#111111] tracking-tight">
                Multidisciplinary Rigor & International Perspective
              </h3>
              <p className="font-sans text-base sm:text-lg text-[#6B6B6B] font-light leading-relaxed">
                {biography.shortDescription}
              </p>
            </div>

            <div className="space-y-6 font-sans text-sm sm:text-base text-[#6B6B6B] font-light leading-relaxed">
              <p>
                Cristian Văduva is an executive advisor and investor specializing in luxury real estate, capital markets, and cross-border asset protection. He represents buyers, family offices, and institutional investors in transactions involving prime property, commercial developments, and strategic asset allocation across European hubs.
              </p>
              <p>
                His academic foundation spans **Economics, Ecology, and Law**, complemented by master’s degrees in **Financial Management, Environmental Impact Assessment, and Information Security**. This multidisciplinary analytical background provides a unique perspective when evaluating downside risk, property valuation, and long-term liquidity.
              </p>
              <p>
                Cristian’s international trajectory includes academic and professional engagements in **Madrid, Amiens, and Malta**, giving him a broad European perspective and direct relationships with international counterparties across **Monaco, Dubai, and Bucharest**.
              </p>
            </div>

            {/* Quick Credentials Summary Index */}
            <div className="pt-6 border-t border-black/5 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="space-y-1">
                <span className="font-mono text-xs uppercase tracking-widest text-[#B89B72] font-semibold block">DEGREES</span>
                <span className="font-sans text-xs text-[#111111] font-medium block">Economics · Ecology · Law</span>
              </div>
              <div className="space-y-1">
                <span className="font-mono text-xs uppercase tracking-widest text-[#B89B72] font-semibold block">MASTERS</span>
                <span className="font-sans text-xs text-[#111111] font-medium block">Finance · Impact · Security</span>
              </div>
              <div className="space-y-1">
                <span className="font-mono text-xs uppercase tracking-widest text-[#B89B72] font-semibold block">CENTERS</span>
                <span className="font-sans text-xs text-[#111111] font-medium block">Madrid · Amiens · Malta</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
