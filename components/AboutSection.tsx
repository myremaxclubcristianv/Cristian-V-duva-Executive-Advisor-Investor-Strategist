import Image from "next/image";
import fs from "fs";
import path from "path";
import { biography } from "@/lib/content/biography";

export default function AboutSection() {
  // Check if an editorial portrait file exists in public/images/personal/editorial/
  const editorialDir = path.join(process.cwd(), "public/images/personal/editorial");
  let editorialSrc: string | null = null;

  try {
    if (fs.existsSync(editorialDir)) {
      const files = fs.readdirSync(editorialDir).filter((f) => !f.startsWith("."));
      if (files.length > 0) {
        editorialSrc = `/images/personal/editorial/${files[0]}`;
      }
    }
  } catch {
    editorialSrc = null;
  }

  return (
    <section id="about" className="site-section bg-[#FFFFFF] text-[#111111] border-b border-[#E5E5E1]">
      <div className="site-container space-y-16 sm:space-y-24">
        {/* Section Header */}
        <div className="space-y-3 border-b border-[#E5E5E1] pb-8">
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
            <div className="relative aspect-[4/5] w-full border border-[#E5E5E1] overflow-hidden bg-[#F5F5F2] shadow-md">
              {editorialSrc ? (
                <Image
                  src={editorialSrc}
                  alt="Cristian Văduva — Editorial Monograph"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center space-y-3 bg-[#E8E8E5]">
                  <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#111111] font-semibold block">
                    EDITORIAL PHOTO / ADD IMAGE
                  </span>
                  <span className="font-mono text-[10px] text-[#555555] block">
                    /public/images/personal/editorial/
                  </span>
                  <p className="font-sans text-xs text-[#858585] font-light leading-relaxed max-w-xs">
                    Upload editorial portraits to render here.
                  </p>
                </div>
              )}
            </div>
            <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-[#555555] px-1">
              <span>EDITORIAL MONOGRAPH</span>
              <span className="text-[#B89B72]">BUCHAREST · MONACO</span>
            </div>
          </div>

          {/* Right Column: Verified Story Narrative */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h3 className="font-display text-2xl sm:text-3xl text-[#111111] tracking-tight">
                Multidisciplinary Rigor & International Perspective
              </h3>
              <p className="font-sans text-base sm:text-lg text-[#555555] font-light leading-relaxed">
                {biography.shortDescription}
              </p>
            </div>

            <div className="space-y-6 font-sans text-sm sm:text-base text-[#555555] font-light leading-relaxed">
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
            <div className="pt-6 border-t border-[#E5E5E1] grid grid-cols-1 sm:grid-cols-3 gap-6">
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
