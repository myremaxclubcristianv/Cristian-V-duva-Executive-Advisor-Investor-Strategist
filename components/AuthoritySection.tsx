import Link from "next/link";

export default function AuthoritySection() {
  const pillars = [
    {
      num: "01",
      category: "ADVISORY",
      title: "High-Ticket B2B & Capital Structuring",
      description: "Directing high-stakes negotiations, private equity placements, and strategic capital allocation for principals across European markets.",
    },
    {
      num: "02",
      category: "REAL ESTATE",
      title: "Luxury Residential & Commercial Parcels",
      description: "Discreet origination, valuation, and acquisition of off-market penthouses, luxury residences, and zoned development parcels.",
    },
    {
      num: "03",
      category: "CAPITAL",
      title: "Institutional Downside Surveillance",
      description: "Combining institutional governance with ultra-discreet private execution to shield family wealth across volatile economic cycles.",
    },
    {
      num: "04",
      category: "GOVERNANCE",
      title: "Independent Executive Counsel",
      description: "Providing unbiased strategic advisory for CEOs, family offices, and institutional boards navigating complex capital decisions.",
    },
  ];

  return (
    <section id="scene-live" className="site-section bg-[#080808] text-[#F5F3EF] border-b border-white/10">
      <div className="site-container space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="grid lg:grid-cols-12 gap-8 items-end border-b border-white/10 pb-8">
          <div className="lg:col-span-8 space-y-3">
            <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.3em] text-accent font-semibold block">
              02 / EXECUTIVE AUTHORITY
            </span>
            <h2 className="font-display text-display-lg-fluid text-text-primary tracking-tight">
              Why Cristian Văduva?
            </h2>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <p className="font-sans text-xs sm:text-sm text-text-secondary/80 font-light leading-relaxed">
              Unbiased executive advisory bridging private capital, ultra-prime real estate, and strategic risk management.
            </p>
          </div>
        </div>

        {/* 4 Pillars Architectural Stream */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {pillars.map((p) => (
            <div
              key={p.category}
              className="p-6 sm:p-8 border border-white/10 bg-[#0D0D0D] hover:bg-[#141414] transition-all space-y-4 group"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent font-semibold">
                  {p.category}
                </span>
                <span className="font-mono text-xs text-text-secondary/50 font-semibold">
                  {p.num}
                </span>
              </div>

              <h3 className="font-display text-lg text-text-primary group-hover:text-accent transition-colors leading-snug pt-1">
                {p.title}
              </h3>

              <p className="font-sans text-xs text-text-secondary/80 font-light leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>

        {/* Section Action Link */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-white/10">
          <span className="font-mono text-[10px] uppercase tracking-widest text-text-secondary/60">
            DISCREET MANDATES ONLY
          </span>
          <Link
            href="/contact"
            className="font-mono text-xs uppercase tracking-[0.2em] text-accent hover:text-text-primary transition-colors flex items-center gap-2 touch-active"
          >
            <span>DISCUSS AN ACTIVE MANDATE</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
