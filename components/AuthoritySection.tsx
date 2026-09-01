import Link from "next/link";

export default function AuthoritySection() {
  const disciplines = [
    {
      num: "01",
      category: "ADVISORY",
      title: "Private Decision-Making & Strategic Counsel",
      description: "Directing high-stakes negotiations, private equity placements, and strategic capital allocation for UHNW principals across European markets.",
    },
    {
      num: "02",
      category: "REAL ESTATE",
      title: "Acquisition, Disposition & Market Positioning",
      description: "Discreet origination, valuation, and acquisition of off-market penthouses, luxury residences, and zoned commercial development parcels.",
    },
    {
      num: "03",
      category: "CAPITAL",
      title: "Investment Strategy & Financial Architecture",
      description: "Combining institutional downside surveillance with ultra-discreet private execution to shield family wealth across volatile economic cycles.",
    },
    {
      num: "04",
      category: "GOVERNANCE",
      title: "Risk, Discipline & Long-Term Architecture",
      description: "Providing unbiased executive advisory for CEOs, family offices, and institutional boards navigating complex capital decisions.",
    },
  ];

  return (
    <section id="scene-live" className="site-section bg-[#070707] text-[#F4F1EA] border-b border-white/10">
      <div className="site-container space-y-12 sm:space-y-16">
        {/* Editorial Split Header */}
        <div className="grid lg:grid-cols-12 gap-10 items-start border-b border-white/10 pb-10">
          <div className="lg:col-span-4 space-y-2">
            <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#E6D5C0] font-semibold block">
              01 / AUTHORITY
            </span>
            <span className="font-mono text-xs uppercase tracking-widest text-[#A1A09B] block">
              EXECUTIVE POSITIONING
            </span>
          </div>

          <div className="lg:col-span-8 space-y-4">
            <h2 className="font-display text-2xl sm:text-4xl text-[#F4F1EA] tracking-tight leading-tight">
              Strategic advice for decisions where capital, property, and long-term value intersect.
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#A1A09B] font-light leading-relaxed max-w-2xl">
              Independent executive advisory bridging private wealth, ultra-prime real estate, and institutional risk management across Europe.
            </p>
          </div>
        </div>

        {/* 4 Disciplines Typographic List */}
        <div className="space-y-0 divide-y divide-white/10 border-b border-white/10">
          {disciplines.map((d) => (
            <div
              key={d.category}
              className="py-8 sm:py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-baseline group hover:bg-[#0D0D0D]/50 transition-colors px-2"
            >
              <div className="lg:col-span-3 flex items-baseline gap-4">
                <span className="font-mono text-xs text-[#E6D5C0] font-semibold">{d.num}</span>
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#F4F1EA] font-semibold group-hover:text-[#E6D5C0] transition-colors">
                  {d.category}
                </span>
              </div>

              <div className="lg:col-span-4">
                <h3 className="font-display text-lg sm:text-xl text-[#F4F1EA] leading-snug">
                  {d.title}
                </h3>
              </div>

              <div className="lg:col-span-5">
                <p className="font-sans text-xs sm:text-sm text-[#A1A09B] font-light leading-relaxed">
                  {d.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Section Action Link */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4">
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#A1A09B]">
            CONFIDENTIAL ENGAGEMENTS ONLY
          </span>
          <Link
            href="/contact"
            className="font-mono text-xs uppercase tracking-[0.2em] text-[#E6D5C0] hover:text-[#F4F1EA] transition-colors flex items-center gap-2 touch-active min-h-[48px]"
          >
            <span>DISCUSS AN ACTIVE MANDATE</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
