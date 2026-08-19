import { biography } from "@/lib/content/biography";

export default function ExecutiveProfile() {
  const indexItems = [
    { number: "01", title: "CAPITAL", desc: "Private equity allocation & venture structuring" },
    { number: "02", title: "REAL ESTATE", desc: "Ultra-prime acquisition & portfolio development" },
    { number: "03", title: "RISK", desc: "Asset protection & market surveillance" },
    { number: "04", title: "STRATEGY", desc: "Executive board advisory & mandates" },
  ];

  return (
    <section
      id="scene-live"
      className="relative min-h-screen flex flex-col justify-center bg-[#F3F0EA] text-[#080808] py-24 sm:py-32 md:py-44 px-4 sm:px-6 md:px-12 lg:px-24 transition-colors"
    >
      <div className="max-w-7xl mx-auto w-full space-y-12 sm:space-y-16 my-auto">
        {/* Chapter Marker */}
        <div className="flex items-center gap-3 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-[#8C8983] font-semibold">
          <span>02 / 06</span>
          <span className="w-6 h-[1px] bg-[#8C8983]/40" />
          <span>THE ADVISOR</span>
        </div>

        {/* Light Editorial Spread */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-20 items-start">
          {/* Left Column: Large Serif Quote & Biography */}
          <div className="lg:col-span-7 space-y-8">
            <blockquote className="font-display text-display-lg-fluid text-[#080808] tracking-tight leading-[1.15]">
              &ldquo;Strategy is not about doing more. It is about making better decisions.&rdquo;
            </blockquote>

            <div className="space-y-4 pt-2 border-t border-[#D8D2C8]">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#8C8983] font-semibold block">
                EXECUTIVE MONOGRAPH
              </span>
              <p className="font-sans text-[#171717] text-body-lead-fluid font-light leading-relaxed">
                {biography.shortDescription}
              </p>
              <p className="font-sans text-xs sm:text-sm text-[#8C8983] font-light leading-relaxed">
                Directing private equity, ultra-prime real estate acquisitions, and board advisory for family offices and institutional investors across Europe.
              </p>
            </div>
          </div>

          {/* Right Column: Quiet Index */}
          <div className="lg:col-span-5 space-y-6">
            <div className="border-b border-[#D8D2C8] pb-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#8C8983] font-semibold block">
                STRATEGIC INDEX
              </span>
            </div>

            <div className="space-y-6 pt-2">
              {indexItems.map((item) => (
                <div
                  key={item.number}
                  className="py-3 border-b border-[#D8D2C8] space-y-1.5 group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-[#CDB99F] font-semibold">{item.number}</span>
                      <span className="font-mono text-xs uppercase tracking-wider text-[#080808] font-semibold group-hover:text-[#CDB99F] transition-colors">
                        {item.title}
                      </span>
                    </div>
                    <span className="font-mono text-xs text-[#8C8983] group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </div>
                  <p className="font-sans text-xs text-[#8C8983] font-light pl-7">
                    {item.desc}
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
