export default function ExecutiveJournal() {
  const principles = [
    {
      number: "01",
      theme: "CAPITAL",
      title: "Conviction precedes liquidity.",
      text: "The most durable acquisitions occur during asymmetric market dislocations when consensus hesitates.",
    },
    {
      number: "02",
      theme: "STRUCTURE",
      title: "Strategy before transaction.",
      text: "Preserving generational resilience requires institutional governance combined with ultra-discreet private execution.",
    },
    {
      number: "03",
      theme: "HORIZON",
      title: "Built for compounding value.",
      text: "Long-term real estate portfolios outperform when architectural distinction meets disciplined capital allocation.",
    },
  ];

  return (
    <section
      id="scene-think"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-transparent py-32 md:py-44 px-6 md:px-16 lg:px-24"
    >
      <div className="max-w-7xl mx-auto w-full space-y-16 my-auto">
        {/* Scene Marker */}
        <div className="flex items-center gap-3 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-accent font-semibold">
          <span>04 / 08</span>
          <span className="w-6 h-[1px] bg-accent/40" />
          <span>THINK</span>
        </div>

        {/* Large Serif Editorial Statement */}
        <div className="max-w-5xl space-y-4">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent font-medium">
            THE EXECUTIVE JOURNAL
          </p>
          <blockquote className="font-display text-3xl sm:text-5xl lg:text-6xl text-text-primary leading-[1.1] tracking-tight">
            &ldquo;Long-term value is rarely created by following the obvious.&rdquo;
          </blockquote>
        </div>

        {/* Minimal Editorial Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14 pt-8 border-t border-surface-secondary/70">
          {principles.map((p) => (
            <div key={p.number} className="space-y-3">
              <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
                <span>{p.number}</span>
                <span className="w-3 h-[1px] bg-accent/40" />
                <span className="text-text-secondary/70">{p.theme}</span>
              </div>
              <h3 className="font-display text-lg sm:text-xl text-text-primary leading-snug">
                {p.title}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-text-secondary/90 font-light leading-relaxed">
                {p.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
