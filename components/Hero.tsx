// components/Hero.tsx
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="scene-arrive"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-transparent pt-36 sm:pt-40 md:pt-48 pb-20 px-6 md:px-16 lg:px-24"
    >
      {/* Left-Aligned Asymmetric Architectural Composition */}
      <div className="relative z-10 max-w-3xl space-y-8 my-auto">
        {/* Scene Marker + Eyebrow */}
        <div className="space-y-3">
          <div className="flex items-center gap-3 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-accent font-semibold">
            <span>01 / 08</span>
            <span className="w-6 h-[1px] bg-accent/40" />
            <span>ARRIVE</span>
          </div>

          <div className="space-y-1">
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-text-primary font-medium">
              CRISTIAN VĂDUVA
            </p>
            <p className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.25em] text-text-secondary/80">
              EXECUTIVE ADVISOR · INVESTOR · STRATEGIST
            </p>
          </div>
        </div>

        {/* Hero Headline */}
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] text-text-primary leading-[1.04] tracking-tight">
          PRIVATE ADVICE.<br />
          <span className="text-accent italic font-normal">STRATEGIC CAPITAL.</span><br />
          LONG‑TERM VALUE.
        </h1>

        {/* Short Supporting Line */}
        <p className="max-w-lg font-sans text-sm sm:text-base text-text-secondary/90 font-light leading-relaxed">
          Bespoke advisory for ultra-prime real estate acquisitions and strategic capital across Europe.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
          <Link
            href="/contact"
            className="px-8 py-4 bg-accent text-background text-xs font-mono font-semibold uppercase tracking-[0.2em] hover:bg-accent/90 transition-quick text-center shadow-2xl"
          >
            REQUEST PRIVATE CONSULTATION
          </Link>
          <a
            href="#scene-live"
            className="px-8 py-4 border border-text-secondary/30 bg-background/20 backdrop-blur-xs text-text-primary text-xs font-mono uppercase tracking-[0.2em] hover:border-accent hover:text-accent transition-quick text-center"
          >
            EXPLORE THE RESIDENCE ↓
          </a>
        </div>
      </div>

      {/* Bottom Architectural Framing */}
      <div className="relative z-10 flex items-end justify-between pt-12">
        <div className="hidden lg:block font-mono text-[9px] uppercase tracking-[0.25em] text-text-secondary/50 max-w-xs">
          BUCHAREST · MONACO · EUROPE
        </div>

        <a
          href="#scene-live"
          className="hidden sm:flex items-center gap-3 group opacity-70 hover:opacity-100 transition-quick font-mono text-[9px] uppercase tracking-[0.25em] text-text-secondary"
        >
          <span>ENTER THE SALON</span>
          <span className="text-accent group-hover:translate-y-1 transition-transform">↓</span>
        </a>
      </div>
    </section>
  );
}
