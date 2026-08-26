import { biography } from "@/lib/content/biography";

export default function ExecutiveProfile() {
  const indexItems = [
    { number: "01", title: "ADVISORY PHILOSOPHY", desc: "Uncompromised independence, discretion, and fiduciary alignment with principal objectives." },
    { number: "02", title: "INVESTMENT CRITERIA", desc: "Asymmetric downside protection, prime tangible asset backing, and defensible economic moats." },
    { number: "03", title: "EXECUTIVE COUNSEL", desc: "Direct, high-touch strategic advisory for family offices, boards, and UHNW principals." },
    { number: "04", title: "GLOBAL GEOGRAPHY", desc: "Focused strategic execution across Bucharest, Monaco, London, and key European centers." },
  ];

  return (
    <section id="scene-watch" className="site-section bg-[#080808] text-[#F5F3EF] border-b border-white/10">
      <div className="site-container space-y-12 sm:space-y-16">
        {/* Chapter Marker */}
        <div className="flex items-center gap-3 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-accent font-semibold">
          <span>07 / EXECUTIVE PROFILE</span>
          <span className="w-6 h-[1px] bg-accent/40" />
          <span>THE ADVISOR</span>
        </div>

        {/* Editorial Spread */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Large Serif Quote & Biography */}
          <div className="lg:col-span-7 space-y-8">
            <blockquote className="font-display text-display-lg-fluid text-text-primary tracking-tight leading-[1.15]">
              &ldquo;Strategy is not about doing more. It is about making better decisions.&rdquo;
            </blockquote>

            <div className="space-y-4 pt-4 border-t border-white/10">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent font-semibold block">
                EXECUTIVE MONOGRAPH
              </span>
              <p className="font-sans text-body-lead-fluid text-text-secondary font-light leading-relaxed">
                {biography.shortDescription}
              </p>
              <p className="font-sans text-xs sm:text-sm text-text-secondary/80 font-light leading-relaxed">
                Directing private equity, ultra-prime real estate acquisitions, and board advisory for family offices and institutional investors across Europe.
              </p>
            </div>
          </div>

          {/* Right Column: Monograph Index */}
          <div className="lg:col-span-5 space-y-4">
            <div className="border-b border-white/10 pb-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent font-semibold block">
                EXECUTIVE CRITERIA
              </span>
            </div>

            <div className="space-y-3">
              {indexItems.map((item) => (
                <div
                  key={item.number}
                  className="p-5 border border-white/10 bg-[#0D0D0D] hover:bg-[#141414] transition-all space-y-2 group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-accent font-semibold">{item.number}</span>
                      <span className="font-mono text-xs uppercase tracking-wider text-text-primary font-semibold group-hover:text-accent transition-colors">
                        {item.title}
                      </span>
                    </div>
                  </div>
                  <p className="font-sans text-xs text-text-secondary/80 font-light leading-relaxed">
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
