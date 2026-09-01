import Image from "next/image";

export default function GeographicalSequence() {
  const locations = [
    { city: "BUCHAREST", role: "PRIMARY HEADQUARTERS & EASTERN EUROPEAN HUB", image: "/residence/office.png" },
    { city: "MONACO", role: "MEDITERRANEAN CAPITAL & PRIVATE HOLDINGS", image: "/residence/study.png" },
    { city: "DUBAI", role: "MIDDLE EASTERN COMMERCIAL & INVESTMENT MANDATES", image: "/residence/living.png" },
    { city: "EUROPE", role: "CROSS-BORDER ADVISORY & FAMILY OFFICE ALLOCATION", image: "/residence/library.png" },
  ];

  return (
    <section id="geographical-sequence" className="site-chapter bg-[#111111] text-[#F6F6F3] border-b border-[#2B2B28]">
      <div className="site-container space-y-16">
        <div className="flex items-center justify-between border-b border-[#2B2B28] pb-6">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#B89B72] font-semibold">
            THE WORLD
          </span>
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#888884]">
            GEOGRAPHICAL SPHERE
          </span>
        </div>

        <div className="space-y-16">
          {locations.map((loc) => (
            <div key={loc.city} className="space-y-4">
              <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full border border-[#2B2B28] overflow-hidden bg-black group">
                <Image
                  src={loc.image}
                  alt={`${loc.city} Geographic Hub`}
                  fill
                  sizes="100vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute bottom-6 left-6 bg-black/80 text-[#F6F6F3] px-5 py-3 backdrop-blur-md border border-white/10 space-y-1">
                  <h3 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight">
                    {loc.city}
                  </h3>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-[#B89B72]">
                    {loc.role}
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
