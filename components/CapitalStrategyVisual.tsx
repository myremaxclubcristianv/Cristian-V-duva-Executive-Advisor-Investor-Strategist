export default function CapitalStrategyVisual() {
  const capitalItems = [
    { word: "VALUE", text: "Identifying true intrinsic worth beyond market sentiment and price volatility." },
    { word: "RISK", text: "Structuring downside protection to preserve principal in turbulent downturns." },
    { word: "TIME", text: "Compounding generational capital with patience and long-term discipline." },
    { word: "OPTIONALITY", text: "Maintaining liquidity to capitalize quickly on high-conviction market distress." },
  ];

  return (
    <section id="movement-05-mind" className="site-chapter bg-[#F6F6F3] text-[#111111] border-b border-[#E1E1DD]">
      <div className="site-container space-y-16">
        <div className="flex items-center justify-between border-b border-[#E1E1DD] pb-4 font-mono text-xs uppercase tracking-[0.3em]">
          <span className="text-[#B89B72] font-semibold">MOVEMENT 05 / THE MIND</span>
          <span className="text-[#5F5F5B]">TYPOGRAPHIC CAPITAL STATEMENT</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {capitalItems.map((item) => (
            <div key={item.word} className="space-y-2 border-l-2 border-[#B89B72] pl-6 py-2">
              <h3 className="font-display text-5xl sm:text-7xl text-[#111111] font-bold tracking-tight select-none">
                {item.word}
              </h3>
              <p className="font-sans text-sm sm:text-base text-[#5F5F5B] font-light leading-relaxed max-w-md">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
