import Image from "next/image";
import Link from "next/link";

interface ProjectSlide {
  title: string;
  description: string;
  imageSrc: string;
  href: string;
  number: string;
}

const slides: ProjectSlide[] = [
  {
    number: "01",
    title: "Private Estate Advisory",
    description: "Bespoke acquisition and structural advisory for ultra-prime European residential assets.",
    imageSrc: "/residence/gallery.png",
    href: "/real-estate/properties",
  },
  {
    number: "02",
    title: "Capital Venture Structuring",
    description: "Direct equity placement and corporate strategy for high-yield European enterprises.",
    imageSrc: "/residence/office.png",
    href: "/ecosystem",
  },
  {
    number: "03",
    title: "Macro Intelligence Command",
    description: "Real-time market surveillance, liquidity analysis, and long-term risk preservation.",
    imageSrc: "/residence/command.png",
    href: "/real-estate/market",
  },
];

export default function ProjectShowcase() {
  return (
    <section className="responsive-py px-4 sm:px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-accent font-semibold">
              <span>SELECTED MANDATES</span>
              <span className="w-6 h-[1px] bg-accent/40" />
              <span>CASE STUDIES</span>
            </div>
            <h2 className="font-display text-display-lg-fluid text-text-primary tracking-tight">
              Curated Executive Engagements
            </h2>
          </div>
          <div className="font-mono text-[10px] sm:text-xs text-text-secondary/80 uppercase tracking-widest">
            MONACO · BUCHAREST · EUROPE
          </div>
        </div>

        {/* Architectural Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {slides.map((slide) => (
            <article
              key={slide.number}
              className="bg-surface-primary/80 border border-white/10 overflow-hidden flex flex-col justify-between shadow-xl group hover:border-accent/50 transition-quick touch-active"
            >
              <div className="relative aspect-video w-full overflow-hidden bg-background border-b border-white/10">
                <Image
                  src={slide.imageSrc}
                  alt={slide.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-quick group-hover:scale-105"
                />
              </div>

              <div className="p-5 sm:p-7 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between font-mono text-[10px] text-accent font-medium">
                    <span>MANDATE {slide.number}</span>
                    <span className="text-text-secondary/60">STRATEGIC</span>
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl text-text-primary group-hover:text-accent transition-colors">
                    {slide.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-text-secondary/90 font-light leading-relaxed">
                    {slide.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <Link
                    href={slide.href}
                    className="font-mono text-xs text-accent uppercase tracking-widest hover:underline flex items-center justify-between min-h-[40px] py-1"
                  >
                    <span>EXPLORE MANDATE</span>
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
