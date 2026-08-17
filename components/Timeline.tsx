import { timeline } from "@/lib/content/timeline";

export default function Timeline() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-16 lg:px-24 border-b border-surface-secondary/40">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-surface-secondary/70 pb-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-accent font-semibold">
              <span>02</span>
              <span className="w-6 h-[1px] bg-accent/40" />
              <span>STRATEGIC TRAJECTORY</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-text-primary leading-[1.08] tracking-tight">
              Executive Timeline
            </h2>
          </div>
          <div className="font-mono text-xs text-text-secondary/80 uppercase tracking-widest">
            CAREER MILESTONES & LEADERSHIP
          </div>
        </div>

        {/* Editorial Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {timeline.map((entry) => (
            <div
              key={entry.id}
              className="bg-surface-primary border border-surface-secondary/80 p-8 space-y-4 flex flex-col justify-between hover:border-accent/40 transition-quick shadow-xl"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="text-accent text-xl font-display">{entry.year}</span>
                  <span className="text-text-secondary/60 uppercase tracking-widest text-[10px]">{entry.category}</span>
                </div>
                <h3 className="font-display text-xl text-text-primary leading-snug">
                  {entry.title}
                </h3>
                <p className="font-sans text-text-secondary/90 text-sm font-light leading-relaxed">
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
