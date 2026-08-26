import Image from "next/image";
import Link from "next/link";

interface ProjectSlide {
  title: string;
  category: string;
  role: string;
  description: string;
  imageSrc: string;
  href: string;
  number: string;
}

const slides: ProjectSlide[] = [
  {
    number: "01",
    title: "Prime Northern Bucharest Penthouse & Residence",
    category: "LUXURY RESIDENTIAL",
    role: "ACQUISITION & STRUCTURAL ADVISORY",
    description: "Architectural masterpiece overlooking Herăstrău park with private terrace, custom Italian craftsmanship, and dedicated security positioning.",
    imageSrc: "/residence/gallery.png",
    href: "/real-estate/properties",
  },
  {
    number: "02",
    title: "Strategic Commercial Development Site",
    category: "LAND & COMMERCIAL",
    role: "CAPITAL PLACEMENT & MANDATE",
    description: "Zoned commercial development parcel with existing infrastructure permits, ideal for premium mixed-use or high-density residential.",
    imageSrc: "/residence/office.png",
    href: "/ecosystem",
  },
];

export default function ProjectShowcase() {
  return (
    <section id="scene-exhibit" className="site-section bg-[#080808]">
      <div className="site-container space-y-12 sm:space-y-16">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-accent font-semibold">
              <span>05 / SELECTED MANDATES</span>
              <span className="w-6 h-[1px] bg-accent/40" />
              <span>PRIVATE PORTFOLIO</span>
            </div>
            <h2 className="font-display text-display-lg-fluid text-text-primary tracking-tight">
              Selected Architectural & Private Mandates
            </h2>
          </div>
          <div className="font-mono text-[10px] sm:text-xs text-text-secondary/80 uppercase tracking-widest">
            EXECUTIVE CURATION · EUROPE
          </div>
        </div>

        {/* Editorial Case Studies Stream */}
        <div className="space-y-16 sm:space-y-24">
          {slides.map((slide, idx) => (
            <article
              key={slide.number}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center border-b border-white/10 pb-16 sm:pb-24 group"
            >
              {/* Image Container */}
              <div className={`lg:col-span-7 relative aspect-[16/10] w-full overflow-hidden border border-white/10 bg-[#0D0D0D] ${
                idx % 2 === 1 ? "lg:order-last" : ""
              }`}>
                <Image
                  src={slide.imageSrc}
                  alt={slide.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Metadata & Narrative Monograph */}
              <div className="lg:col-span-5 space-y-6">
                <div className="flex items-center gap-2 font-mono text-[10px] text-accent font-medium uppercase tracking-widest">
                  <span>MANDATE {slide.number}</span>
                  <span>·</span>
                  <span>{slide.category}</span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl text-text-primary tracking-tight group-hover:text-accent transition-colors">
                  {slide.title}
                </h3>

                <div className="space-y-2 pt-2 border-t border-white/10">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-text-secondary/70 block">
                    STRATEGIC ROLE
                  </span>
                  <span className="font-mono text-xs uppercase tracking-wider text-accent font-medium block">
                    {slide.role}
                  </span>
                </div>

                <p className="font-sans text-xs sm:text-sm text-text-secondary/90 font-light leading-relaxed">
                  {slide.description}
                </p>

                <div className="pt-4">
                  <Link
                    href={slide.href}
                    className="inline-flex items-center gap-3 font-mono text-xs text-accent uppercase tracking-widest hover:text-text-primary transition-quick py-2 touch-active"
                  >
                    <span>REQUEST MANDATE DOSSIER</span>
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
