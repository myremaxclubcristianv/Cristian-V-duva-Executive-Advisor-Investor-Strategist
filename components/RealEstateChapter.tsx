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
    <section id="scene-04-real-estate" className="site-chapter bg-[#111111] text-[#F6F6F3] border-b border-[#2B2B28]">
      <div className="site-container space-y-20">
        {/* Scene Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#2B2B28] pb-6">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#B89B72] font-semibold">
            SCENE 04 / REAL ESTATE CINEMATIC
          </span>
          <Link
            href="/real-estate"
            className="font-mono text-xs uppercase tracking-[0.2em] text-[#B89B72] hover:text-[#FFFFFF] transition-colors touch-active"
          >
            <span>EXPLORE REAL ESTATE →</span>
          </Link>
        </div>

        {/* Visual Flow: Enormous Location -> Image -> Statement */}
        <div className="space-y-24">
          {properties.map((p, index) => (
            <div key={p.city} className="space-y-6">
              {/* Enormous Location Name Header */}
              <div className="flex items-baseline justify-between border-b border-[#2B2B28]/60 pb-3">
                <h3 className="font-display text-5xl sm:text-7xl font-bold tracking-tight text-[#F6F6F3]">
                  {p.city}
                </h3>
                <span className="font-mono text-xs text-[#B89B72] uppercase tracking-widest font-semibold">
                  {p.country} · 0{index + 1}
                </span>
              </div>

              {/* Full-Bleed Image */}
              <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full border border-[#2B2B28] overflow-hidden bg-black group shadow-2xl">
                <Image
                  src={p.imageSrc}
                  alt={`${p.city} Real Estate Asset`}
                  fill
                  sizes="100vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
              </div>

              {/* Supporting Statement */}
              <div className="space-y-2 pt-2 max-w-3xl">
                <h4 className="font-display text-xl sm:text-2xl text-[#F6F6F3] font-normal">
                  {p.title}
                </h4>
                <p className="font-sans text-sm text-[#888884] font-light leading-relaxed">
                  {p.statement}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
