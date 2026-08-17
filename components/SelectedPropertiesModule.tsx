import Link from "next/link";
import { getSelectedProperties } from "@/lib/properties";

export default function SelectedPropertiesModule() {
  const properties = getSelectedProperties();
  const dominantProperty = properties[0];

  return (
    <section
      id="scene-exhibit"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-transparent py-32 md:py-44 px-6 md:px-16 lg:px-24"
    >
      <div className="max-w-7xl mx-auto w-full space-y-12 my-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-surface-secondary/70 pb-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-accent font-semibold">
              <span>06 / 08</span>
              <span className="w-6 h-[1px] bg-accent/40" />
              <span>EXHIBIT</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-text-primary leading-[1.08] tracking-tight">
              Selected Architectural Works
            </h2>
          </div>

          <Link
            href="/real-estate/properties"
            className="font-mono text-xs uppercase tracking-widest text-accent hover:underline"
          >
            VIEW FULL CURATION →
          </Link>
        </div>

        {/* Dominant Architectural Exhibit */}
        {dominantProperty && (
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Architectural Details */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-3 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-accent">
                  <span>{dominantProperty.type}</span>
                  <span className="text-text-secondary/40">·</span>
                  <span className="text-text-secondary/80">{dominantProperty.status}</span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl text-text-primary leading-tight">
                  {dominantProperty.title}
                </h3>

                <p className="font-mono text-xs text-text-secondary/80 uppercase tracking-wider">
                  {dominantProperty.location} · {dominantProperty.area}
                </p>
              </div>

              <p className="font-sans text-xs sm:text-sm text-text-secondary/90 font-light leading-relaxed">
                {dominantProperty.description}
              </p>

              {/* Advisory Positioning */}
              <div className="space-y-1.5 pt-3 border-t border-surface-secondary/70">
                <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-text-secondary/70 block">
                  ADVISORY POSITIONING
                </span>
                <p className="font-display text-sm sm:text-base italic text-accent/90">
                  &ldquo;{dominantProperty.advisoryPerspective}&rdquo;
                </p>
              </div>

              {/* Pricing & CTA */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-3">
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-text-secondary/70 block mb-0.5">
                    VALUATION
                  </span>
                  <span className="font-display text-xl sm:text-2xl text-text-primary">
                    {dominantProperty.price}
                  </span>
                </div>

                <Link
                  href="/contact"
                  className="px-6 py-3.5 bg-accent text-background font-mono text-xs font-semibold uppercase tracking-[0.2em] hover:bg-accent/90 transition-quick text-center shadow-xl"
                >
                  REQUEST PRIVATE DOSSIER
                </Link>
              </div>
            </div>

            {/* Right Column: Secondary Curation List */}
            <div className="lg:col-span-6 space-y-5 lg:pl-8 lg:border-l border-surface-secondary/70">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent pb-1">
                ACTIVE PORTFOLIO CURATION
              </p>

              {properties.slice(1, 3).map((prop) => (
                <div
                  key={prop.id}
                  className="space-y-2 pb-5 border-b border-surface-secondary/60 last:border-0"
                >
                  <div className="flex items-center justify-between font-mono text-[10px] text-text-secondary/80">
                    <span className="text-accent uppercase tracking-wider">{prop.type}</span>
                    <span>{prop.location}</span>
                  </div>

                  <h4 className="font-display text-lg sm:text-xl text-text-primary">
                    {prop.title}
                  </h4>

                  <p className="font-sans text-xs text-text-secondary/90 font-light line-clamp-2 leading-relaxed">
                    {prop.description}
                  </p>

                  <div className="flex items-center justify-between pt-1">
                    <span className="font-display text-base text-text-primary">{prop.price}</span>
                    <Link
                      href="/contact"
                      className="font-mono text-xs text-accent uppercase tracking-widest hover:underline"
                    >
                      INQUIRE →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
