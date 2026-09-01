import Image from "next/image";
import { biography } from "@/lib/content/biography";

export default function ExecutiveProfile() {
  const indexItems = [
    { number: "01", title: "ADVISORY PHILOSOPHY", desc: "Uncompromised independence, discretion, and fiduciary alignment with principal objectives." },
    { number: "02", title: "INVESTMENT CRITERIA", desc: "Asymmetric downside protection, prime tangible asset backing, and defensible economic moats." },
    { number: "03", title: "EXECUTIVE COUNSEL", desc: "Direct, high-touch strategic advisory for family offices, boards, and UHNW principals." },
    { number: "04", title: "GLOBAL GEOGRAPHY", desc: "Focused strategic execution across Bucharest, Monaco, London, and key European centers." },
  ];

  return (
    <section id="scene-watch" className="site-section bg-[#070707] text-[#F4F1EA] border-b border-white/10">
      <div className="site-container space-y-12 sm:space-y-16">
        {/* Chapter Marker */}
        <div className="flex items-center gap-3 font-mono text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#E6D5C0] font-semibold">
          <span>07 / EXECUTIVE PROFILE</span>
          <span className="w-6 h-[1px] bg-[#E6D5C0]/40" />
          <span>THE ADVISOR</span>
        </div>

        {/* Headline Statement */}
        <div className="border-b border-white/10 pb-8 space-y-3">
          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl text-[#F4F1EA] tracking-tight leading-tight">
            THE ADVISOR BEHIND THE DECISION.
          </h2>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#E6D5C0]">
            CRISTIAN VĂDUVA · EXECUTIVE ADVISOR · INVESTOR · STRATEGIST
          </p>
        </div>

        {/* Editorial Spread */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Portrait Monograph Panel */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative aspect-[4/5] w-full border border-white/15 overflow-hidden bg-[#0D0D0D]">
              <Image
                src="/residence/command.png"
                alt="Cristian Văduva Executive Advisor"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700 opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between border-t border-white/20 pt-3 font-mono text-[10px] uppercase tracking-widest text-[#F4F1EA]">
                <span>CRISTIAN VĂDUVA</span>
                <span className="text-[#E6D5C0]">EXECUTIVE OFFICE</span>
              </div>
            </div>

            <p className="font-sans text-xs text-[#A1A09B] font-light leading-relaxed">
              Directing private equity placements, ultra-prime real estate acquisitions, and executive board advisory across European markets.
            </p>
          </div>

          {/* Right Column: Narrative Biography & Typographic Index */}
          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#E6D5C0] font-semibold block">
                EXECUTIVE MONOGRAPH
              </span>
              <p className="font-sans text-base sm:text-lg text-[#F4F1EA] font-light leading-relaxed">
                {biography.shortDescription}
              </p>
              <p className="font-sans text-xs sm:text-sm text-[#A1A09B] font-light leading-relaxed">
                Combining institutional finance discipline with high-discretion private execution, Cristian Văduva advises family offices, property principals, and corporate boards on complex capital structuring, downside risk containment, and strategic acquisition positioning.
              </p>
            </div>

            {/* Credentials Typographic Editorial Index (NO cards) */}
            <div className="space-y-0 divide-y divide-white/10 border-y border-white/10">
              <div className="py-3 font-mono text-[10px] uppercase tracking-[0.25em] text-[#E6D5C0] font-semibold">
                EXECUTIVE CREDENTIALS & CRITERIA
              </div>
              {indexItems.map((item) => (
                <div key={item.number} className="py-5 grid grid-cols-1 sm:grid-cols-12 gap-4 items-baseline">
                  <div className="sm:col-span-4 flex items-baseline gap-3">
                    <span className="font-mono text-xs text-[#E6D5C0] font-semibold">{item.number}</span>
                    <span className="font-mono text-xs uppercase tracking-wider text-[#F4F1EA] font-semibold">
                      {item.title}
                    </span>
                  </div>
                  <div className="sm:col-span-8">
                    <p className="font-sans text-xs text-[#A1A09B] font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
