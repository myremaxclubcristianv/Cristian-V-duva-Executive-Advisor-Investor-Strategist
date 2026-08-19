import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="scene-arrive"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-transparent pt-28 sm:pt-36 md:pt-44 pb-16 px-4 sm:px-6 md:px-12 lg:px-24"
    >
      {/* Editorial Cover Composition */}
      <div className="relative z-10 max-w-3xl space-y-6 sm:space-y-8 my-auto">
        {/* Micro Index + Eyebrow */}
        <div className="space-y-3">
          <div className="flex items-center gap-3 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-accent font-semibold">
            <span>01 / 08</span>
            <span className="w-6 h-[1px] bg-accent/40" />
            <span>PRIVATE OFFICE</span>
          </div>

          <div className="space-y-1">
            <h2 className="font-mono text-xs uppercase tracking-[0.35em] text-text-primary font-semibold">
              CRISTIAN VĂDUVA
            </h2>
            <p className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.22em] text-text-secondary/80">
              EXECUTIVE ADVISOR · INVESTOR · STRATEGIST
            </p>
          </div>
        </div>

        {/* Hero Display Headline */}
        <h1 className="font-display text-hero-fluid text-text-primary tracking-tight">
          PRIVATE ADVICE.<br />
          <span className="text-accent italic font-normal">STRATEGIC CAPITAL.</span><br />
          LONG‑TERM VALUE.
        </h1>

        {/* High-Authority Narrative */}
        <p className="max-w-lg font-sans text-body-lead-fluid text-text-secondary/90 font-light leading-relaxed">
          Bespoke advisory for ultra-prime real estate acquisitions, private equity allocation, and strategic capital across European markets.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
          <Link
            href="/contact"
            className="w-full sm:w-auto px-8 py-4 bg-accent text-background text-xs font-mono font-semibold uppercase tracking-[0.2em] hover:bg-accent/90 transition-quick text-center shadow-2xl touch-active min-h-[48px] flex items-center justify-center"
          >
            REQUEST PRIVATE CONSULTATION
          </Link>
          <a
            href="#scene-live"
            className="w-full sm:w-auto px-8 py-4 border border-white/20 bg-background/40 backdrop-blur-xs text-text-primary text-xs font-mono uppercase tracking-[0.2em] hover:border-accent hover:text-accent transition-quick text-center touch-active min-h-[48px] flex items-center justify-center"
          >
            EXPLORE THE ADVISORY OFFICE ↓
          </a>
        </div>
      </div>

      {/* Bottom Framing Metadata */}
      <div className="relative z-10 flex items-end justify-between pt-10 sm:pt-16 border-t border-white/5">
        <div className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-text-secondary/60 max-w-xs">
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
