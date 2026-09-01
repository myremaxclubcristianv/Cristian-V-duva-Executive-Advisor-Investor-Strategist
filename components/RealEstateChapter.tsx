import Image from "next/image";
import Link from "next/link";

interface PropertyVisual {
  city: string;
  country: string;
  title: string;
  statement: string;
  imageSrc: string;
}

const properties: PropertyVisual[] = [
  {
    city: "BUCHAREST",
    country: "ROMANIA",
    title: "PRIVATE RESIDENCES & PRIME LAND",
    statement: "Selection, positioning, and acquisition representation for ultra-prime developments.",
    imageSrc: "/residence/exterior.png",
  },
  {
    city: "MONACO",
    country: "PRINCIPALITY OF MONACO",
    title: "MEDITERRANEAN CAPITAL PLACEMENT",
    statement: "Cross-border real estate strategy and liquidity optimization on the French Riviera.",
    imageSrc: "/residence/terrace.png",
  },
  {
    city: "DUBAI",
    country: "UNITED ARAB EMIRATES",
    title: "GLOBAL PROPERTY MANDATES",
    statement: "High-value commercial acquisitions and Middle Eastern family office structuring.",
    imageSrc: "/residence/living.png",
  },
];

export default function RealEstateChapter() {
  return (
    <section id="movement-04-real-estate" className="site-chapter bg-[#111111] text-[#F6F6F3] border-b border-[#2B2B28]">
      <div className="site-container space-y-20">
        {/* Movement Header */}
        <div className="flex items-center justify-between border-b border-[#2B2B28] pb-4 font-mono text-xs uppercase tracking-[0.3em]">
          <span className="text-[#B89B72] font-semibold">MOVEMENT 04 / THE WORLD OF REAL ESTATE</span>
          <span className="text-[#888884]">CONTINUOUS VISUAL CANVAS</span>
        </div>

        {/* Continuous Visual Canvas */}
        <div className="space-y-24">
          {properties.map((p, index) => (
            <div key={p.city} className="space-y-6">
              <div className="flex items-baseline justify-between border-b border-[#2B2B28]/60 pb-3">
                <h3 className="font-display text-5xl sm:text-7xl font-bold tracking-tight text-[#F6F6F3]">
                  {p.city}
                </h3>
                <span className="font-mono text-xs text-[#B89B72] uppercase tracking-widest font-semibold">
                  {p.country} · 0{index + 1}
                </span>
              </div>

              <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full border border-[#2B2B28] overflow-hidden bg-black shadow-2xl group">
                <Image
                  src={p.imageSrc}
                  alt={`${p.city} Real Estate Asset`}
                  fill
                  sizes="100vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
              </div>

              <div className="space-y-1 pt-2">
                <h4 className="font-display text-xl text-[#F6F6F3] font-normal">
                  {p.title}
                </h4>
                <p className="font-sans text-xs sm:text-sm text-[#888884] font-light leading-relaxed">
                  {p.statement}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Single Link at End */}
        <div className="pt-8 border-t border-[#2B2B28]">
          <Link
            href="/real-estate"
            className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#B89B72] hover:text-[#FFFFFF] transition-colors py-2 touch-active"
          >
            <span>EXPLORE REAL ESTATE →</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
