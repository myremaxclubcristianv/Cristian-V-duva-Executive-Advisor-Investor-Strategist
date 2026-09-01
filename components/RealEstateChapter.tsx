import Image from "next/image";
import Link from "next/link";

interface CityProperty {
  city: string;
  country: string;
  tagline: string;
  description: string;
  imageSrc: string;
}

const cities: CityProperty[] = [
  {
    city: "Bucharest",
    country: "Romania",
    tagline: "HERĂSTRĂU & PRIMAVERII PRIME ASSETS",
    description: "Acquisition advisory and portfolio positioning for ultra-prime residential developments and commercial land holdings.",
    imageSrc: "/residence/exterior.png",
  },
  {
    city: "Monaco",
    country: "Principality of Monaco",
    tagline: "MEDITERRANEAN CAPITAL PLACEMENT",
    description: "Cross-border real estate strategy, family office holdings, and private liquidity optimization on the French Riviera.",
    imageSrc: "/residence/terrace.png",
  },
  {
    city: "Dubai",
    country: "United Arab Emirates",
    tagline: "GLOBAL PROPERTY ADVISORY",
    description: "High-value commercial mandates, luxury residential assets, and strategic Middle Eastern capital structuring.",
    imageSrc: "/residence/living.png",
  },
];

export default function RealEstateChapter() {
  return (
    <section id="real-estate" className="site-chapter bg-[#111111] text-[#F6F6F3] border-b border-[#2B2B28]">
      <div className="site-container space-y-16">
        {/* Chapter Header */}
        <div className="flex items-center justify-between border-b border-[#2B2B28] pb-6">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#B89B72] font-semibold">
            CHAPTER III / THE WORLD
          </span>
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#888884]">
            LUXURY REAL ESTATE ARCHITECTURE
          </span>
        </div>

        {/* Section Headline */}
        <div className="space-y-4 max-w-4xl">
          <h2 className="font-display text-4xl sm:text-6xl text-[#F6F6F3] tracking-tight leading-none">
            REAL ESTATE IS MORE<br />
            <span className="text-[#B89B72] italic font-normal">THAN PROPERTY.</span>
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#888884] font-light leading-relaxed max-w-2xl pt-2">
            Real estate represents capital preservation, generational liquidity, and physical sovereignty. We advise principals across prime European and international markets.
          </p>
        </div>

        {/* Cities & Properties Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {cities.map((c) => (
            <div key={c.city} className="space-y-6 group p-6 bg-[#181818] border border-[#2B2B28] hover:border-[#B89B72]/40 transition-colors">
              <div className="relative aspect-[4/3] w-full border border-[#2B2B28] overflow-hidden bg-black">
                <Image
                  src={c.imageSrc}
                  alt={`${c.city} Real Estate Advisory`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute top-3 left-3 bg-black/80 text-[#B89B72] font-mono text-[9px] uppercase tracking-widest px-2.5 py-1 backdrop-blur-sm border border-white/10">
                  {c.country}
                </div>
              </div>

              <div className="space-y-2">
                <div className="font-mono text-xs uppercase tracking-widest text-[#B89B72] font-semibold">
                  {c.city}
                </div>
                <h3 className="font-display text-xl text-[#F6F6F3] leading-snug">
                  {c.tagline}
                </h3>
                <p className="font-sans text-xs text-[#888884] font-light leading-relaxed">
                  {c.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Section Action Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-[#2B2B28]">
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#888884]">
            INDEPENDENT ACQUISITION & PORTFOLIO COUNSEL
          </span>
          <Link
            href="/real-estate"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-[#B89B72] hover:text-[#FFFFFF] transition-colors py-2 touch-active"
          >
            <span>EXPLORE REAL ESTATE PRACTICE →</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
