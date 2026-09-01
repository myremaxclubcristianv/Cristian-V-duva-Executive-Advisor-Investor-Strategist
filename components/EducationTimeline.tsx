interface EducationItem {
  year: string;
  degree: string;
  field: string;
  location: string;
  description: string;
}

const educationData: EducationItem[] = [
  {
    year: "ACADEMIC",
    degree: "BACHELOR DEGREES",
    field: "Economics, Ecology & Law",
    location: "Romania & Europe",
    description: "Multidisciplinary academic grounding combining quantitative economic analysis, ecological sustainability frameworks, and legal principles.",
  },
  {
    year: "INTERNATIONAL",
    degree: "MASTER'S DEGREES",
    field: "Financial Management & Environmental Assessment",
    location: "Madrid & Amiens",
    description: "Advanced post-graduate studies focusing on corporate financial strategy, asset evaluation, and environmental risk mitigation across European markets.",
  },
  {
    year: "SPECIALIZED",
    degree: "EXECUTIVE MASTER'S",
    field: "Information Security & Asset Surveillance",
    location: "Malta & European Union",
    description: "Specialized training in data governance, confidential asset surveillance, and institutional compliance for family offices and private principals.",
  },
];

const journeySteps = [
  { stage: "01", title: "FINANCIAL MARKETS", desc: "Capital markets, trading infrastructure & risk management" },
  { stage: "02", title: "SALES & NEGOTIATION", desc: "High-stakes corporate negotiations & deal structuring" },
  { stage: "03", title: "REAL ESTATE PRACTICE", desc: "Luxury property acquisition, valuation & off-market origination" },
  { stage: "04", title: "ADVISORY & ASSET PROTECTION", desc: "Downside risk surveillance, insurance & capital placement" },
  { stage: "05", title: "CURRENT PRACTICE", desc: "Executive advisor, investor & strategist across Monaco, Dubai & Bucharest" },
];

export default function EducationTimeline() {
  return (
    <section className="site-section bg-[#F7F7F5] text-[#111111] border-b border-black/5">
      <div className="site-container space-y-16 sm:space-y-24">
        {/* Section Header */}
        <div className="space-y-3 border-b border-black/5 pb-8">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#B89B72] font-semibold block">
            03 / EDUCATION & PROFESSIONAL JOURNEY
          </span>
          <h2 className="font-display text-3xl sm:text-5xl text-[#111111] tracking-tight">
            Academic Grounding & Executive Trajectory
          </h2>
        </div>

        {/* Apple-Style Education Grid */}
        <div className="space-y-12">
          <div className="font-mono text-xs uppercase tracking-[0.25em] text-[#111111] font-semibold border-b border-black/10 pb-3">
            VERIFIED ACADEMIC CREDENTIALS
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {educationData.map((item) => (
              <div
                key={item.field}
                className="p-8 bg-[#FFFFFF] border border-black/5 shadow-sm space-y-4 hover:border-[#B89B72]/40 transition-colors"
              >
                <div className="flex items-center justify-between border-b border-black/5 pb-3">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#B89B72] font-semibold">
                    {item.year}
                  </span>
                  <span className="font-mono text-xs text-[#6B6B6B]">
                    {item.location}
                  </span>
                </div>

                <div className="space-y-2 pt-1">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#6B6B6B] block">
                    {item.degree}
                  </span>
                  <h3 className="font-display text-xl text-[#111111] leading-snug">
                    {item.field}
                  </h3>
                </div>

                <p className="font-sans text-xs text-[#6B6B6B] font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Visual Career Evolution Timeline */}
        <div className="space-y-8 pt-6">
          <div className="font-mono text-xs uppercase tracking-[0.25em] text-[#111111] font-semibold border-b border-black/10 pb-3">
            CAREER EVOLUTION TRAJECTORY
          </div>

          <div className="space-y-0 divide-y divide-black/5 border-y border-black/5">
            {journeySteps.map((step) => (
              <div
                key={step.stage}
                className="py-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline hover:bg-[#FFFFFF]/60 transition-colors px-2"
              >
                <div className="md:col-span-3 flex items-baseline gap-3">
                  <span className="font-mono text-xs text-[#B89B72] font-semibold">{step.stage}</span>
                  <span className="font-mono text-xs uppercase tracking-wider text-[#111111] font-semibold">
                    {step.title}
                  </span>
                </div>
                <div className="md:col-span-9">
                  <p className="font-sans text-xs sm:text-sm text-[#6B6B6B] font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
