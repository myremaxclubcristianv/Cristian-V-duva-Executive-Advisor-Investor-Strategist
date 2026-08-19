import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="scene-arrive"
      className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-transparent pt-36 sm:pt-44 md:pt-48 pb-12 sm:pb-16 px-4 sm:px-6 md:px-12 lg:px-24"
    >
      <div className="w-full max-w-7xl mx-auto my-auto py-6 sm:py-10">
        {/* Editorial Publication Cover Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8 space-y-6 sm:space-y-8">
            {/* Chapter Marker + Identity */}
            <div className="space-y-2">
              <div className="flex items-center gap-3 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-accent font-semibold">
                <span>01 / 06</span>
                <span className="w-6 h-[1px] bg-accent/40" />
                <span>PRIVATE OFFICE</span>
              </div>

              <div className="space-y-0.5">
                <h2 className="font-mono text-xs uppercase tracking-[0.35em] text-text-primary font-semibold">
                  CRISTIAN VĂDUVA
                </h2>
                <p className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.22em] text-text-secondary/80">
                  EXECUTIVE ADVISOR · INVESTOR · STRATEGIST
                </p>
              </div>
            </div>

            {/* Dominant Typographic Statement */}
            <h1 className="font-display text-hero-fluid text-text-primary tracking-tight leading-[1.05]">
              PRIVATE ADVICE.<br />
              <span className="text-accent italic font-normal">STRATEGIC CAPITAL.</span><br />
              LONG‑TERM VALUE.
            </h1>

            {/* Restrained Narrative */}
            <p className="max-w-lg font-sans text-body-lead-fluid text-text-secondary/90 font-light leading-relaxed">
              Bespoke advisory for ultra-prime real estate acquisitions, private equity allocation, and strategic capital across European markets.
            </p>

            {/* Understated Editorial CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 bg-accent text-background text-xs font-mono font-semibold uppercase tracking-[0.2em] hover:bg-accent/90 transition-quick text-center touch-active min-h-[48px] flex items-center justify-center shadow-xl"
              >
                REQUEST PRIVATE CONSULTATION
              </Link>
              <a
                href="#scene-live"
                className="w-full sm:w-auto px-6 py-4 border border-white/20 text-text-primary text-xs font-mono uppercase tracking-[0.2em] hover:border-accent hover:text-accent transition-quick text-center touch-active min-h-[48px] flex items-center justify-center gap-2"
              >
                <span>EXPLORE THE ADVISORY OFFICE</span>
                <span className="text-accent">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Framing Metadata */}
      <div className="w-full max-w-7xl mx-auto flex items-end justify-between pt-8 border-t border-white/10">
        <div className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-text-secondary/70">
          BUCHAREST · MONACO · EUROPE
        </div>

        <a
          href="#scene-live"
          className="hidden sm:flex items-center gap-3 group font-mono text-[9px] uppercase tracking-[0.25em] text-text-secondary/80 hover:text-accent transition-quick"
        >
          <span>ENTER THE SALON</span>
          <span className="text-accent group-hover:translate-y-1 transition-transform">↓</span>
        </a>
      </div>
    </section>
  );
}
