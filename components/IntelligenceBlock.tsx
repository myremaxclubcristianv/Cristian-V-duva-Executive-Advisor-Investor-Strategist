export default function IntelligenceBlock() {
  const metrics = [
    {
      category: "MARKET",
      value: "€250M+",
      label: "TRANSACTIONS ADVISED",
      detail: "Prime European acquisitions & portfolio structuring",
    },
    {
      category: "CAPITAL",
      value: "PRIVATE EQUITY",
      label: "ALLOCATION MANDATE",
      detail: "Direct equity placement & credit vehicles",
    },
    {
      category: "REAL ESTATE",
      value: "TOP-TIER",
      label: "EUROPEAN ASSETS",
      detail: "Monaco · Zurich · Bucharest · Riviera",
    },
    {
      category: "OPPORTUNITY",
      value: "DISCREET",
      label: "OFF-MARKET PIPELINE",
      detail: "Proprietary access to high-value parcels & estates",
    },
  ];

  return (
    <section
      id="scene-analyze"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-transparent py-32 md:py-44 px-6 md:px-16 lg:px-24"
    >
      <div className="max-w-7xl mx-auto w-full space-y-16 my-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-surface-secondary/70 pb-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-accent font-semibold">
              <span>05 / 08</span>
              <span className="w-6 h-[1px] bg-accent/40" />
              <span>ANALYZE</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-text-primary leading-[1.08] tracking-tight">
              Capital Intelligence
            </h2>
          </div>

          <div className="font-mono text-xs text-text-secondary/80 uppercase tracking-widest">
            RESEARCH PUBLICATION · MACRO SURVEILLANCE
          </div>
        </div>

        {/* Intelligence Publication Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14">
          {metrics.map((m) => (
            <div key={m.category} className="space-y-3 border-t border-accent/40 pt-5">
              <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
                <span>{m.category}</span>
              </div>

              <div className="space-y-1">
                <p className="font-display text-2xl sm:text-3xl text-text-primary tracking-tight">
                  {m.value}
                </p>
                <p className="font-mono text-[9px] sm:text-[10px] text-text-secondary/70 uppercase tracking-widest">
                  {m.label}
                </p>
              </div>

              <p className="font-sans text-xs text-text-secondary/90 font-light leading-relaxed pt-2 border-t border-surface-secondary/60">
                {m.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
