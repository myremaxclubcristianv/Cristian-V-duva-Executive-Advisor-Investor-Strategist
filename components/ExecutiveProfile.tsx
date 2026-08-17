import { biography } from "@/lib/content/biography";

export default function ExecutiveProfile() {
  return (
    <section
      id="scene-live"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-transparent py-32 md:py-44 px-6 md:px-16 lg:px-24"
    >
      <div className="max-w-7xl mx-auto w-full space-y-12 my-auto">
        {/* Scene Indicator */}
        <div className="flex items-center gap-3 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-accent font-semibold">
          <span>02 / 08</span>
          <span className="w-6 h-[1px] bg-accent/40" />
          <span>ENTER & LIVE</span>
        </div>

        {/* Editorial Wall Inscription */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-end">
          {/* Left Column: Statement & Inscription */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-1.5">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent font-medium">
                ABOUT
              </p>
              <h2 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-text-primary">
                CRISTIAN VĂDUVA
              </h2>
            </div>

            <blockquote className="font-display text-3xl sm:text-4xl lg:text-5xl text-text-primary leading-[1.12] tracking-tight">
              {biography.shortDescription}
            </blockquote>
          </div>

          {/* Right Column: Narrative & Strategic Disciplines */}
          <div className="lg:col-span-5 space-y-8">
            <p className="font-sans text-text-secondary/90 text-sm sm:text-base leading-relaxed font-light">
              Directing private equity, ultra-prime real estate acquisitions, and board advisory for family offices and institutional investors across Europe.
            </p>

            {/* Strategic Disciplines - Clean Inscription */}
            <div className="space-y-3 pt-4 border-t border-surface-secondary/70">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-text-secondary/70">
                STRATEGIC DISCIPLINES
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {biography.focusAreas.slice(0, 4).map((area, idx) => (
                  <div key={area} className="flex items-center gap-2">
                    <span className="font-mono text-[10px] text-accent">0{idx + 1}</span>
                    <span className="font-sans text-xs text-text-primary/90 font-light">
                      {area}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
