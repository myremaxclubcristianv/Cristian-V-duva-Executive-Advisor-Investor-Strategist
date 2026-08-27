import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="scene-arrive"
      className="relative min-h-[92vh] w-full flex flex-col justify-between overflow-hidden bg-[#080808] pt-28 sm:pt-36 md:pt-40 pb-12 sm:pb-16"
    >
      {/* FULL-BLEED EXECUTIVE ENVIRONMENT BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/residence/exterior.png"
          alt="Executive Private Residence & Architectural Facade at Dusk"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-35 filter contrast-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/75 to-[#080808]/40" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 w-full site-container my-auto py-6 sm:py-10 space-y-8 sm:space-y-10">
        {/* Brand & Credentials Header */}
        <div className="space-y-3 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 border border-accent/30 text-accent font-mono text-[10px] sm:text-xs uppercase tracking-[0.3em] font-semibold">
            <span>PRIVATE EXECUTIVE OFFICE</span>
          </div>
          <h1 className="font-display text-hero-fluid text-[#F5F3EF] tracking-tight leading-[1.04]">
            CRISTIAN VĂDUVA
          </h1>
          <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.25em] text-accent font-medium">
            EXECUTIVE ADVISOR · INVESTOR · STRATEGIST
          </p>
        </div>

        {/* Central Value Proposition */}
        <div className="max-w-3xl space-y-4">
          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl text-[#F5F3EF] tracking-tight leading-tight">
            PRIVATE ADVICE.<br />
            <span className="text-accent italic font-normal">STRATEGIC CAPITAL.</span><br />
            LONG‑TERM VALUE.
          </h2>
          <p className="max-w-2xl font-sans text-body-lead-fluid text-text-secondary/90 font-light leading-relaxed">
            Independent advisory counsel and strategic capital structuring for ultra-high-net-worth principals, family offices, and executive boards navigating complex European asset decisions.
          </p>
        </div>

        {/* Conversion Action */}
        <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center min-h-[48px] px-8 py-4 bg-accent text-background font-mono text-xs font-semibold uppercase tracking-[0.2em] hover:bg-accent/90 transition-quick shadow-2xl gap-2 text-center touch-active"
          >
            <span>REQUEST PRIVATE CONSULTATION</span>
            <span>→</span>
          </Link>

          <a
            href="#scene-live"
            className="inline-flex items-center justify-center min-h-[48px] px-6 py-3 border border-white/20 text-text-secondary font-mono text-xs uppercase tracking-[0.2em] hover:text-accent hover:border-accent transition-quick text-center touch-active"
          >
            EXPLORE MY APPROACH ↓
          </a>
        </div>
      </div>

      {/* Bottom Footer Bar */}
      <div className="relative z-10 w-full site-container pt-6 border-t border-white/10 flex items-center justify-between">
        <div className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-text-secondary/70">
          BUCHAREST · MONACO · EUROPE
        </div>

        <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-accent font-semibold">
          DISCRETION & INDEPENDENCE GUARANTEED
        </div>
      </div>
    </section>
  );
}
