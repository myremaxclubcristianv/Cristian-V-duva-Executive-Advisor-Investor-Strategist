import { biography } from "@/lib/content/biography";

export default function ExecutiveProfile() {
  const disciplines = [
    { number: "01", title: "CAPITAL", desc: "Private equity allocation & venture structuring" },
    { number: "02", title: "REAL ESTATE", desc: "Ultra-prime acquisition & portfolio development" },
    { number: "03", title: "RISK", desc: "Asset protection & market surveillance" },
    { number: "04", title: "STRATEGY", desc: "Executive board advisory & mandates" },
  ];

  return (
    <section
      id="scene-live"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-transparent py-24 sm:py-32 md:py-44 px-4 sm:px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-7xl mx-auto w-full space-y-10 sm:space-y-14 my-auto">
        {/* Scene Indicator */}
        <div className="flex items-center gap-3 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-accent font-semibold">
          <span>02 / 08</span>
          <span className="w-6 h-[1px] bg-accent/40" />
          <span>THE ADVISOR</span>
        </div>

        {/* Editorial Monograph Grid */}
        <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-20 items-start">
          {/* Left Column: Statement & Biography */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-1">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent font-medium block">
                EXECUTIVE MONOGRAPH
              </span>
              <h2 className="font-display text-xl sm:text-2xl uppercase tracking-tight text-text-primary">
                CRISTIAN VĂDUVA
              </h2>
            </div>

            <blockquote className="font-display text-display-lg-fluid text-text-primary tracking-tight">
              {biography.shortDescription}
            </blockquote>

            <p className="font-sans text-text-secondary/90 text-body-lead-fluid font-light leading-relaxed pt-2">
              Directing private equity, ultra-prime real estate acquisitions, and board advisory for family offices and institutional investors across Europe.
            </p>
          </div>

          {/* Right Column: Strategic Disciplines Monograph */}
          <div className="lg:col-span-5 space-y-6">
            <div className="border-t border-accent/40 pt-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent font-semibold block">
                STRATEGIC DISCIPLINES
              </span>
            </div>

            <div className="space-y-4 pt-1">
              {disciplines.map((d) => (
                <div
                  key={d.number}
                  className="py-3 border-b border-white/10 flex items-start justify-between gap-4 group"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] text-accent font-medium">{d.number}</span>
                      <span className="font-mono text-xs uppercase tracking-wider text-text-primary font-medium group-hover:text-accent transition-colors">
                        {d.title}
                      </span>
                    </div>
                    <p className="font-sans text-xs text-text-secondary/80 font-light pl-6">
                      {d.desc}
                    </p>
                  </div>
                  <span className="font-mono text-xs text-accent/40 group-hover:translate-x-1 transition-transform pt-0.5">
                    →
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
