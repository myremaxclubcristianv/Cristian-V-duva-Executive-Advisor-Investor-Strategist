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
      <div className="max-w-7xl mx-auto w-full space-y-12 sm:space-y-16 my-auto">
        {/* Scene Marker */}
        <div className="flex items-center gap-3 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-accent font-semibold">
          <span>02 / 06</span>
          <span className="w-6 h-[1px] bg-accent/40" />
          <span>THE ADVISOR</span>
        </div>

        {/* Magazine Editorial Spread */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-20 items-start">
          {/* Left Column: Monograph Statement */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-1">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent font-semibold block">
                EXECUTIVE MONOGRAPH
              </span>
              <h2 className="font-display text-xl sm:text-2xl uppercase tracking-tight text-text-primary">
                CRISTIAN VĂDUVA
              </h2>
            </div>

            <blockquote className="font-display text-display-lg-fluid text-text-primary tracking-tight leading-[1.15]">
              {biography.shortDescription}
            </blockquote>

            <p className="font-sans text-text-secondary/90 text-body-lead-fluid font-light leading-relaxed pt-2">
              Directing private equity, ultra-prime real estate acquisitions, and board advisory for family offices and institutional investors across Europe.
            </p>
          </div>

          {/* Right Column: Strategic Disciplines Index */}
          <div className="lg:col-span-5 space-y-6">
            <div className="border-b border-white/10 pb-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent font-semibold block">
                STRATEGIC DISCIPLINES
              </span>
            </div>

            <div className="space-y-6 pt-2">
              {disciplines.map((d) => (
                <div
                  key={d.number}
                  className="py-2 border-b border-white/10 space-y-1.5 group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-accent font-semibold">{d.number}</span>
                      <span className="font-mono text-xs uppercase tracking-wider text-text-primary font-semibold group-hover:text-accent transition-colors">
                        {d.title}
                      </span>
                    </div>
                    <span className="font-mono text-xs text-accent/60 group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </div>
                  <p className="font-sans text-xs text-text-secondary/80 font-light pl-7">
                    {d.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
