import Link from "next/link";
import Image from "next/image";
import fs from "fs";
import path from "path";

export default function Hero() {
  // Check if an authentic portrait file exists in public/images/personal/portraits/
  const portraitDir = path.join(process.cwd(), "public/images/personal/portraits");
  let portraitSrc: string | null = null;

  try {
    if (fs.existsSync(portraitDir)) {
      const files = fs.readdirSync(portraitDir).filter((f) => !f.startsWith("."));
      if (files.length > 0) {
        portraitSrc = `/images/personal/portraits/${files[0]}`;
      }
    }
  } catch {
    portraitSrc = null;
  }

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] w-full flex flex-col justify-between overflow-hidden bg-[#F7F7F5] text-[#111111] pt-28 sm:pt-36 md:pt-40 pb-12 sm:pb-16 border-b border-[#E3E3DF]"
    >
      {/* Hero Editorial Composition Grid */}
      <div className="relative z-10 w-full site-container my-auto py-6 sm:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Asymmetric Editorial Header */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#B89B72] font-semibold block">
                CRISTIAN VĂDUVA
              </span>

              <h1 className="font-display text-hero-fluid text-[#111111] tracking-tight font-semibold">
                PRIVATE ADVICE.<br />
                <span className="text-[#B89B72] font-normal italic">STRATEGIC CAPITAL.</span><br />
                REAL‑WORLD VALUE.
              </h1>

              <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.25em] text-[#5F5F5F] font-medium pt-1">
                EXECUTIVE ADVISOR · INVESTOR · REAL ESTATE
              </p>
            </div>

            <div className="space-y-4 max-w-2xl">
              <p className="font-sans text-xl sm:text-2xl text-[#111111] font-light leading-relaxed tracking-tight">
                Building better decisions across capital, property, and opportunity.
              </p>

              <p className="font-sans text-sm sm:text-base text-[#5F5F5F] font-light leading-relaxed">
                Independent strategic advisory, high-stakes negotiation, and luxury real estate counsel for UHNW principals, family offices, and institutional boards across Europe.
              </p>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center min-h-[48px] px-8 py-4 bg-[#111111] text-[#F7F7F5] font-mono text-xs font-semibold uppercase tracking-[0.2em] hover:bg-[#B89B72] hover:text-[#FFFFFF] transition-colors shadow-sm text-center touch-active"
              >
                <span>WORK WITH ME →</span>
              </Link>

              <a
                href="#about"
                className="inline-flex items-center justify-center min-h-[48px] px-6 py-3 border border-[#111111]/20 text-[#111111] font-mono text-xs uppercase tracking-[0.2em] hover:border-[#B89B72] hover:text-[#B89B72] transition-colors text-center touch-active"
              >
                EXPLORE MY STORY
              </a>
            </div>
          </div>

          {/* Right Column: Dominant Portrait Panel */}
          <div className="lg:col-span-5 space-y-3">
            <div className="relative aspect-[4/5] w-full border border-[#E3E3DF] overflow-hidden bg-[#FFFFFF] shadow-lg group">
              {portraitSrc ? (
                <Image
                  src={portraitSrc}
                  alt="Cristian Văduva — Official Portrait"
                  fill
                  priority
                  className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-700 opacity-95 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              ) : (
                /* Honest Editorial Placeholder when no portrait file is uploaded */
                <div className="w-full h-full flex flex-col items-center justify-center bg-[#F1F1EE] p-8 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full border border-[#B89B72] flex items-center justify-center text-[#B89B72] font-display text-2xl font-semibold">
                    CV
                  </div>
                  <div className="space-y-1">
                    <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#111111] font-semibold block">
                      PORTRAIT / ADD IMAGE
                    </span>
                    <span className="font-mono text-[10px] text-[#5F5F5F] block">
                      /public/images/personal/portraits/
                    </span>
                  </div>
                  <p className="font-sans text-xs text-[#8A8A86] font-light max-w-xs leading-relaxed">
                    Upload official headshots to automatically render portrait visual here.
                  </p>
                </div>
              )}

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[#111111] font-mono text-[10px] uppercase tracking-widest bg-[#FFFFFF]/90 backdrop-blur-sm px-3 py-2 border border-black/5">
                <span>CRISTIAN VĂDUVA</span>
                <span className="text-[#B89B72]">EXECUTIVE PORTRAIT</span>
              </div>
            </div>

            <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.25em] text-[#5F5F5F] pt-1 px-1">
              <span>LOCATIONS</span>
              <span className="text-[#111111] font-semibold">BUCHAREST · MONACO · DUBAI</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bar */}
      <div className="relative z-10 w-full site-container pt-6 border-t border-[#E3E3DF] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
        <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#5F5F5F]">
          EXECUTIVE ADVISORY · LUXURY REAL ESTATE · CAPITAL
        </div>

        <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#B89B72] font-semibold">
          DISCRETION & INDEPENDENCE GUARANTEED
        </div>
      </div>
    </section>
  );
}
