import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="scene-arrive"
      className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-[#080808] pt-28 sm:pt-36 md:pt-40 pb-10 sm:pb-14 px-4 sm:px-6 md:px-12 lg:px-24"
    >
      <div className="w-full max-w-7xl mx-auto my-auto py-4 sm:py-6">
        {/* Asymmetric Monograph Cover Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column: Negative Space & Typography Zone */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6 sm:space-y-8 z-10 py-2">
            <div className="space-y-1">
              <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.3em] text-accent font-semibold block">
                CRISTIAN VĂDUVA
              </span>
              <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-text-secondary/70">
                EXECUTIVE ADVISOR · INVESTOR · STRATEGIST
              </p>
            </div>

            {/* Main Statement */}
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
                <span>REQUEST A PRIVATE CONSULTATION</span>
                <span>→</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Architectural Hero Image Frame */}
          <div className="lg:col-span-6 relative aspect-[4/5] min-h-[360px] sm:min-h-[440px] lg:min-h-[540px] w-full overflow-hidden border border-white/10 bg-surface-primary shadow-2xl">
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
      <div className="w-full max-w-7xl mx-auto flex items-end justify-between pt-6 border-t border-white/10">
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
