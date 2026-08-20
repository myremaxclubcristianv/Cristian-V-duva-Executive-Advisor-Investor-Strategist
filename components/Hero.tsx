import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="scene-arrive"
      className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-[#080808] pt-28 sm:pt-36 md:pt-40 pb-10 sm:pb-14 px-4 sm:px-6 md:px-12 lg:px-24"
    >
      <div className="w-full max-w-7xl mx-auto my-auto py-4 sm:py-6">
        {/* Asymmetric Personal Authority Cover Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column: Negative Space & Personal Authority Zone */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6 sm:space-y-8 z-10 py-2">
            <div className="space-y-1.5 border-l-2 border-accent pl-4">
              <h1 className="font-mono text-sm sm:text-base uppercase tracking-[0.35em] text-accent font-semibold">
                CRISTIAN VĂDUVA
              </h1>
              <p className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.22em] text-text-secondary/90">
                EXECUTIVE ADVISOR · INVESTOR · STRATEGIST
              </p>
            </div>

            {/* Main Value Proposition Headline */}
            <h2 className="font-display text-hero-fluid text-text-primary tracking-tight leading-[1.05]">
              PRIVATE ADVICE.<br />
              <span className="text-accent italic font-normal">STRATEGIC CAPITAL.</span><br />
              LONG‑TERM VALUE.
            </h2>

            {/* Clear Supporting Narrative */}
            <p className="max-w-lg font-sans text-body-lead-fluid text-text-secondary/90 font-light leading-relaxed">
              I help ultra-high-net-worth principals, investors, and executive boards make high-stakes financial, real estate, and strategic decisions across European markets.
            </p>

            {/* Primary Action CTA & Secondary Approach Link */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center min-h-[48px] px-8 py-4 bg-accent text-background font-mono text-xs font-semibold uppercase tracking-[0.2em] hover:bg-accent/90 transition-quick shadow-xl gap-2 text-center"
              >
                <span>REQUEST PRIVATE CONSULTATION</span>
                <span>→</span>
              </Link>

              <a
                href="#scene-live"
                className="inline-flex items-center justify-center min-h-[48px] px-6 py-3 border border-white/20 text-text-secondary font-mono text-xs uppercase tracking-[0.2em] hover:text-accent hover:border-accent transition-quick text-center"
              >
                EXPLORE MY APPROACH ↓
              </a>
            </div>
          </div>

          {/* Right Column: Executive Study Environment & Authority Frame */}
          <div className="lg:col-span-6 relative aspect-[4/5] min-h-[360px] sm:min-h-[440px] lg:min-h-[540px] w-full overflow-hidden border border-white/10 bg-surface-primary shadow-2xl">
            <Image
              src="/residence/office.png"
              alt="Executive Private Office & Advisory Desk"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#080808] via-[#080808]/40 to-transparent p-6 flex items-end justify-between border-t border-white/10">
              <div className="space-y-0.5">
                <span className="font-mono text-[9px] uppercase tracking-widest text-accent font-semibold block">
                  PRIVATE DESK
                </span>
                <span className="font-sans text-xs text-text-primary font-medium block">
                  Bucharest · Monaco · European Mandates
                </span>
              </div>
              <span className="font-mono text-xs text-accent font-semibold">
                DIRECT ADVISORY →
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Publication Marker */}
      <div className="w-full max-w-7xl mx-auto flex items-end justify-between pt-6 border-t border-white/10">
        <div className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-text-secondary/70">
          EXECUTIVE OFFICE · BUCHAREST · EUROPE
        </div>

        <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-text-secondary/70">
          DISCRETE MANDATES ONLY
        </div>
      </div>
    </section>
  );
}
