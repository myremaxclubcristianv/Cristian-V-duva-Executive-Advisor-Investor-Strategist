import Image from "next/image";
import Link from "next/link";

interface CityInfo {
  name: string;
  role: string;
  description: string;
  imageSrc: string;
}

const cities: CityInfo[] = [
  {
    name: "BUCHAREST",
    role: "HOME MARKET & DOMESTIC CAPITALS",
    description: "Prime residential penthouses, landmark architectural restorations, and zoned commercial development parcels across Bucharest’s most prestigious corridors.",
    imageSrc: "/residence/exterior.png",
  },
  {
    name: "MONACO",
    role: "MEDITERRANEAN LUXURY & PRIVATE WEALTH",
    description: "Off-market ultra-prime penthouses, yachting holdings, and cross-border private equity placement in Monaco’s premier wealth ecosystem.",
    imageSrc: "/residence/terrace.png",
  },
  {
    name: "DUBAI",
    role: "INTERNATIONAL GROWTH & ASSET DIVERSIFICATION",
    description: "High-yield commercial parcels, luxury waterfront towers, and tax-efficient capital allocation in Middle Eastern growth hubs.",
    imageSrc: "/residence/gallery.png",
  },
];

const services = [
  { num: "01", title: "BUYER REPRESENTATION", desc: "Confidential acquisition origination, due diligence, and direct negotiation for private buyers." },
  { num: "02", title: "SELLER REPRESENTATION", desc: "Targeted off-market disposition strategies protecting privacy and securing optimal valuations." },
  { num: "03", title: "PORTFOLIO POSITIONING", desc: "Strategic asset positioning, risk hedging, and multi-asset real estate curation." },
  { num: "04", title: "OFF-MARKET ORIGINATION", desc: "Access to unlisted penthouses, commercial development sites, and private estates." },
];

export default function RealEstateChapter() {
  return (
    <section id="real-estate" className="site-section bg-[#FFFFFF] text-[#111111] border-b border-black/5">
      <div className="site-container space-y-16 sm:space-y-24">
        {/* Editorial Section Header */}
        <div className="space-y-4 border-b border-black/5 pb-8">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#B89B72] font-semibold block">
            05 / LUXURY REAL ESTATE
          </span>
          <h2 className="font-display text-3xl sm:text-5xl text-[#111111] tracking-tight leading-tight">
            REAL ESTATE IS MORE THAN PROPERTY.<br />
            <span className="text-[#B89B72] italic font-normal">IT IS CAPITAL IN PHYSICAL FORM.</span>
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#6B6B6B] font-light max-w-3xl leading-relaxed">
            Representing buyers, family offices, and private principals across prime European and international luxury real estate markets.
          </p>
        </div>

        {/* 3 International Cities Cinematic Grid */}
        <div className="space-y-8">
          <div className="font-mono text-xs uppercase tracking-[0.25em] text-[#111111] font-semibold border-b border-black/10 pb-3">
            INTERNATIONAL ADVISORY CENTERS
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {cities.map((c) => (
              <div key={c.name} className="space-y-4 group">
                <div className="relative aspect-[16/10] w-full border border-black/10 overflow-hidden bg-[#E8E8E5] shadow-sm">
                  <Image
                    src={c.imageSrc}
                    alt={`${c.name} Real Estate Advisory`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-[#111111] text-[#F7F7F5] font-mono text-[10px] uppercase tracking-widest px-3 py-1">
                    {c.name}
                  </div>
                </div>

                <div className="space-y-2 pt-1">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#B89B72] font-semibold block">
                    {c.role}
                  </span>
                  <p className="font-sans text-xs text-[#6B6B6B] font-light leading-relaxed">
                    {c.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Real Estate Advisory Services Index */}
        <div className="space-y-8 pt-6">
          <div className="font-mono text-xs uppercase tracking-[0.25em] text-[#111111] font-semibold border-b border-black/10 pb-3">
            CORE REAL ESTATE MANDATES
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((s) => (
              <div key={s.num} className="p-6 border border-black/5 bg-[#F7F7F5] space-y-3">
                <div className="flex items-center justify-between border-b border-black/5 pb-2">
                  <span className="font-mono text-xs text-[#B89B72] font-semibold">{s.num}</span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#6B6B6B]">MANDATE</span>
                </div>
                <h3 className="font-display text-lg text-[#111111]">{s.title}</h3>
                <p className="font-sans text-xs text-[#6B6B6B] font-light leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-4 flex justify-end">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-[#111111] hover:text-[#B89B72] transition-colors py-2 touch-active"
          >
            <span>DISCUSS AN ACTIVE REAL ESTATE MANDATE →</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
