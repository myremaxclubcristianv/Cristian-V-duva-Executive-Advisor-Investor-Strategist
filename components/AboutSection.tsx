import Image from "next/image";
import fs from "fs";
import path from "path";
import { biography } from "@/lib/content/biography";

export default function AboutSection() {
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
    <section id="about" className="site-chapter bg-[#FFFFFF] text-[#111111] border-b border-[#E1E1DD]">
      <div className="site-container space-y-16">
        {/* Chapter Header */}
        <div className="flex items-center justify-between border-b border-[#E1E1DD] pb-6">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#B89B72] font-semibold">
            CHAPTER II / THE PERSON
          </span>
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#5F5F5B]">
            BIOGRAPHY & PHILOSOPHY
          </span>
        </div>

        {/* Narrative & Monograph Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Monograph Frame */}
          <div className="lg:col-span-5 space-y-4 sticky top-28">
            <div className="relative aspect-[4/5] w-full border border-[#E1E1DD] overflow-hidden bg-[#F6F6F3] shadow-md">
              {editorialSrc ? (
                <Image
                  src={editorialSrc}
                  alt="Cristian Văduva — Editorial Monograph"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center space-y-3 bg-[#F0F0ED]">
                  <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#111111] font-semibold block">
                    EDITORIAL ARCHIVE
                  </span>
                  <span className="font-mono text-[10px] text-[#5F5F5B] block">
                    /public/images/personal/editorial/
                  </span>
                  <p className="font-sans text-xs text-[#888884] font-light leading-relaxed max-w-xs">
                    Upload editorial profile photography to render visual monograph here.
                  </p>
                </div>
              )}
            </div>
            <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-[#5F5F5B] px-1">
              <span>MULTIDISCIPLINARY RIGOR</span>
              <span className="text-[#B89B72]">MADRID · AMIENS · MALTA</span>
            </div>
          </div>

          {/* Right Column: Verified Story Narrative */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h2 className="font-display text-3xl sm:text-5xl text-[#111111] tracking-tight leading-none font-semibold">
                THE PERSON BEHIND<br />
                <span className="text-[#B89B72] italic font-normal">THE DECISIONS.</span>
              </h2>
              <p className="font-sans text-lg sm:text-xl text-[#5F5F5B] font-light leading-relaxed pt-2">
                {biography.shortDescription}
              </p>
            </div>

            <div className="space-y-6 font-sans text-sm sm:text-base text-[#5F5F5B] font-light leading-relaxed">
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
            <div className="pt-8 border-t border-[#E1E1DD] grid grid-cols-1 sm:grid-cols-3 gap-6">
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
