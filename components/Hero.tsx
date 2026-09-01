import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="scene-arrive"
      className="relative min-h-[95vh] w-full flex flex-col justify-between overflow-hidden bg-[#070707] text-[#F4F1EA] pt-28 sm:pt-36 md:pt-40 pb-12 sm:pb-16 border-b border-white/10"
    >
      {/* Hero Content Grid */}
      <div className="relative z-10 w-full site-container my-auto py-6 sm:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Asymmetric Editorial Typography */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <div className="flex items-center gap-3 font-mono text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#E6D5C0] font-semibold">
                <span>PRIVATE ADVISORY</span>
                <span className="w-4 h-[1px] bg-[#E6D5C0]/40" />
                <span>REAL ESTATE</span>
                <span className="w-4 h-[1px] bg-[#E6D5C0]/40" />
                <span>CAPITAL</span>
              </div>

              <h1 className="font-display text-hero-fluid text-[#F4F1EA] tracking-tight leading-[1.02]">
                CRISTIAN VĂDUVA
              </h1>

              <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.25em] text-[#E6D5C0] font-medium">
                EXECUTIVE ADVISOR · INVESTOR · STRATEGIST
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-display text-2xl sm:text-4xl md:text-5xl text-[#F4F1EA] tracking-tight leading-tight">
                PRIVATE ADVICE.<br />
                <span className="text-[#E6D5C0] italic font-normal">STRATEGIC CAPITAL.</span><br />
                LONG‑TERM VALUE.
              </h2>

              <p className="font-sans text-sm sm:text-base text-[#A1A09B] font-light leading-relaxed max-w-xl">
                Independent advisory counsel and strategic capital structuring for ultra-high-net-worth principals, family offices, and executive boards navigating complex European asset decisions.
              </p>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center min-h-[48px] px-8 py-4 bg-[#E6D5C0] text-[#070707] font-mono text-xs font-semibold uppercase tracking-[0.2em] hover:bg-[#E6D5C0]/90 transition-quick shadow-2xl gap-2 text-center touch-active"
              >
                <span>REQUEST PRIVATE CONSULTATION</span>
                <span>→</span>
              </Link>

              <a
                href="#scene-live"
                className="inline-flex items-center justify-center min-h-[48px] px-6 py-3 border border-white/20 text-[#A1A09B] font-mono text-xs uppercase tracking-[0.2em] hover:text-[#E6D5C0] hover:border-[#E6D5C0] transition-quick text-center touch-active"
              >
                EXPLORE THE PRACTICE ↓
              </a>
            </div>
          </div>

          {/* Right Column: Architectural Photography Monograph Panel */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] w-full border border-white/15 overflow-hidden bg-[#0D0D0D] group shadow-2xl">
              <Image
                src="/residence/exterior.png"
                alt="Cristian Văduva Private Executive Residence"
                fill
                priority
                className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-700 opacity-80 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-[#070707]/30 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between border-t border-white/20 pt-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#F4F1EA]">
                  ARCHITECTURAL RESIDENCE
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#E6D5C0]">
                  BUCHAREST · MONACO
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Metadata Bar */}
      <div className="relative z-10 w-full site-container pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
        <div className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-[#A1A09B]">
          BUCHAREST · MONACO · EUROPE
        </div>

        <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#E6D5C0] font-semibold">
          DISCRETION & INDEPENDENCE GUARANTEED
        </div>
      </div>
    </section>
  );
}
