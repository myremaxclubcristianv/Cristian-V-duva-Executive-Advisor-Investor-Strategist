import { timeline } from "@/lib/content/timeline";

export default function Timeline() {
  return (
    <section className="py-24 bg-transparent border-t border-surface-secondary/30 relative z-10 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 md:px-12 space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <p className="font-mono text-xs uppercase tracking-widest text-accent font-medium">
            JOURNEY & STRATEGIC MILESTONES
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-text-primary">
            Executive Timeline
          </h2>
          <p className="max-w-xl mx-auto text-text-secondary/90 font-light text-sm sm:text-base">
            Strategic evolution across capital allocation, real estate advisory, and European leadership.
          </p>
        </div>

        {/* Editorial Timeline */}
        <div className="space-y-6 max-w-4xl mx-auto">
          {timeline.map((entry) => (
            <div
              key={entry.id}
              className="bg-background/40 backdrop-blur-md border border-surface-secondary/60 p-6 sm:p-8 rounded-sm grid grid-cols-1 md:grid-cols-12 gap-4 shadow-xl hover:border-accent/40 transition-quick"
            >
              <div className="md:col-span-4 space-y-1">
                <span className="font-display text-2xl sm:text-3xl text-accent block">
                  {entry.year}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-wider text-text-secondary/80 block">
                  {entry.category}
                </span>
              </div>
              <div className="md:col-span-8 space-y-2">
                <h3 className="font-display text-xl text-text-primary">
                  {entry.title}
                </h3>
                <p className="text-text-secondary/90 text-sm font-light leading-relaxed">
                  {entry.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
