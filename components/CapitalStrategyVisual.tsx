export default function CapitalStrategyVisual() {
  const capitalItems = [
    { word: "VALUE", text: "Identifying true intrinsic worth beyond market sentiment and price volatility." },
    { word: "RISK", text: "Structuring asymmetric downside protection to preserve principal in downturns." },
    { word: "TIME", text: "Compounding generational capital with patience and long-term discipline." },
    { word: "OPTIONALITY", text: "Maintaining liquidity to capitalize quickly on high-conviction market distress." },
  ];

  const strategySteps = [
    { num: "01", name: "UNDERSTAND", desc: "Define objective & constraints." },
    { num: "02", name: "ASSESS", desc: "Examine downside exposure." },
    { num: "03", name: "STRUCTURE", desc: "Engineer transaction terms." },
    { num: "04", name: "EXECUTE", desc: "Conduct discrete negotiation." },
    { num: "05", name: "PROTECT", desc: "Secure legal & asset titles." },
    { num: "06", name: "REVIEW", desc: "Monitor ongoing liquidity." },
  ];

  return (
    <section id="scene-05-capital" className="site-chapter bg-[#F6F6F3] text-[#111111] border-b border-[#E1E1DD]">
      <div className="site-container space-y-24">
        {/* SCENE 05 / CAPITAL TYPOGRAPHIC STATEMENT */}
        <div className="space-y-12">
          <div className="flex items-center justify-between border-b border-[#E1E1DD] pb-4">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#B89B72] font-semibold">
              SCENE 05 / CAPITAL TYPOGRAPHIC STATEMENT
            </span>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#5F5F5B]">
              PRINCIPLES
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {capitalItems.map((item) => (
              <div key={item.word} className="space-y-2 border-l-2 border-[#B89B72] pl-6 py-2">
                <h3 className="font-display text-4xl sm:text-6xl text-[#111111] font-bold tracking-tight">
                  {item.word}
                </h3>
                <p className="font-sans text-sm sm:text-base text-[#5F5F5B] font-light leading-relaxed max-w-md">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* STRATEGIC EXECUTION SEQUENCE */}
        <div className="space-y-12 pt-12 border-t border-[#E1E1DD]">
          <div className="flex items-center justify-between border-b border-[#E1E1DD] pb-4">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#B89B72] font-semibold">
              STRATEGIC METHODOLOGY
            </span>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#5F5F5B]">
              EXECUTION PROCESS
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
            {strategySteps.map((step) => (
              <div key={step.num} className="space-y-3 p-5 bg-[#FFFFFF] border border-[#E1E1DD] shadow-sm">
                <span className="font-mono text-xs text-[#B89B72] font-bold block">
                  {step.num}
                </span>
                <h4 className="font-display text-base text-[#111111] font-semibold tracking-tight">
                  {step.name}
                </h4>
                <p className="font-sans text-xs text-[#5F5F5B] font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
