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
    statement: "Selection, positioning, and acquisition representation for ultra-prime residential developments in Herăstrău and Primaverii.",
    imageSrc: "/residence/exterior.png",
  },
  {
    city: "MONACO",
    country: "PRINCIPALITY OF MONACO",
    title: "MEDITERRANEAN CAPITAL PLACEMENT",
    statement: "Cross-border real estate strategy, private holdings, and liquidity optimization on the French Riviera.",
    imageSrc: "/residence/terrace.png",
  },
  {
    city: "DUBAI",
    country: "UNITED ARAB EMIRATES",
    title: "GLOBAL PROPERTY MANDATES",
    statement: "High-value commercial acquisitions, luxury residential assets, and Middle Eastern family office structuring.",
    imageSrc: "/residence/living.png",
  },
];

export default function RealEstateChapter() {
  return (
    <section id="real-estate" className="site-chapter bg-[#111111] text-[#F6F6F3] border-b border-[#2B2B28]">
      <div className="site-container space-y-20">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#2B2B28] pb-6">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#B89B72] font-semibold">
            REAL ESTATE PRACTICE
          </span>
          <Link
            href="/real-estate"
            className="font-mono text-xs uppercase tracking-[0.2em] text-[#B89B72] hover:text-[#FFFFFF] transition-colors touch-active"
          >
            <span>EXPLORE REAL ESTATE →</span>
          </Link>
        </div>

        {/* Visual Sequence: IMAGE -> LOCATION -> STATEMENT */}
        <div className="space-y-24">
          {properties.map((p, index) => (
            <div key={p.city} className="space-y-6">
              {/* Huge Image */}
              <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full border border-[#2B2B28] overflow-hidden bg-black group">
                <Image
                  src={p.imageSrc}
                  alt={`${p.city} Real Estate Asset`}
                  fill
                  sizes="100vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute top-4 left-4 bg-black/80 text-[#B89B72] font-mono text-[10px] uppercase tracking-widest px-3 py-1.5 backdrop-blur-md border border-white/10">
                  {p.country} · 0{index + 1}
                </div>
              </div>

              {/* Location & Supporting Statement */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end pt-2">
                <div className="md:col-span-4">
                  <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#B89B72] font-semibold block">
                    LOCATION
                  </span>
                  <h3 className="font-display text-3xl sm:text-4xl text-[#F6F6F3] font-semibold">
                    {p.city}
                  </h3>
                </div>

                <div className="md:col-span-8 space-y-2">
                  <h4 className="font-display text-xl text-[#F6F6F3] font-normal">
                    {p.title}
                  </h4>
                  <p className="font-sans text-sm text-[#888884] font-light leading-relaxed max-w-2xl">
                    {p.statement}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
