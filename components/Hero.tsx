import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="scene-arrive"
      className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-[#080808] pt-28 sm:pt-36 md:pt-40 pb-12 sm:pb-16 px-4 sm:px-6 md:px-12 lg:px-24"
    >
      <div className="w-full max-w-7xl mx-auto my-auto py-4 sm:py-8">
        {/* Asymmetric Editorial Cover Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Dedicated Typography & Negative Space Zone */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8 z-10">
            {/* Top Metadata */}
            <div className="space-y-2">
              <div className="flex items-center gap-3 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-accent font-semibold">
                <span>01 / 06</span>
                <span className="w-6 h-[1px] bg-accent/40" />
                <span>PRIVATE OFFICE · BUCHAREST</span>
              </div>

              <div className="space-y-0.5 pt-1">
                <h2 className="font-mono text-xs uppercase tracking-[0.35em] text-text-primary font-semibold">
                  CRISTIAN VĂDUVA
                </h2>
                <p className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.22em] text-text-secondary/80">
                  EXECUTIVE ADVISOR · INVESTOR · STRATEGIST
                </p>
              </div>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="font-display text-hero-fluid text-text-primary tracking-tight leading-[1.05]">
              PRIVATE ADVICE.<br />
              <span className="text-accent italic font-normal">STRATEGIC CAPITAL.</span><br />
              LONG‑TERM VALUE.
            </h1>

            {/* Concise Supporting Narrative */}
            <p className="max-w-lg font-sans text-body-lead-fluid text-text-secondary/90 font-light leading-relaxed">
              Bespoke advisory for ultra-prime real estate acquisitions, private equity allocation, and strategic capital across European markets.
            </p>

            {/* Single Primary Action CTA */}
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center min-h-[48px] px-8 py-4 bg-accent text-background font-mono text-xs font-semibold uppercase tracking-[0.2em] hover:bg-accent/90 transition-quick shadow-xl gap-2"
              >
                <span>REQUEST PRIVATE CONSULTATION</span>
                <span>→</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Un-smothered Architectural Hero Photograph */}
          <div className="lg:col-span-6 relative aspect-[4/5] w-full overflow-hidden border border-white/10 bg-surface-primary shadow-2xl">
            <Image
              src="/residence/exterior.png"
              alt="Hillside Private Residence Exterior at Dusk"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>

      {/* Bottom Publication Line */}
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
