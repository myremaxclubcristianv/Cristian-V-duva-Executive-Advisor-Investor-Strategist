import Image from 'next/image';
import Link from 'next/link';

interface ProjectSlide {
  title: string;
  description: string;
  imageSrc: string;
  href: string;
}

const slides: ProjectSlide[] = [
  {
    title: 'Private Estate Advisory',
    description: 'Bespoke acquisition and structural advisory for ultra-prime European residential assets.',
    imageSrc: '/residence/gallery.png',
    href: '/real-estate/properties',
  },
  {
    title: 'Capital Venture Structuring',
    description: 'Direct equity placement and corporate strategy for high-yield European enterprises.',
    imageSrc: '/residence/office.png',
    href: '/ecosystem',
  },
  {
    title: 'Macro Intelligence Command',
    description: 'Real-time market surveillance, liquidity analysis, and long-term risk preservation.',
    imageSrc: '/residence/command.png',
    href: '/real-estate/market',
  },
];

export default function ProjectShowcase() {
  return (
    <section className="py-20 bg-transparent relative z-10 overflow-hidden border-t border-surface-secondary/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-8">
        <div className="space-y-2">
          <p className="font-mono text-xs uppercase tracking-widest text-accent font-medium">
            SELECTED MANDATES & CASE STUDIES
          </p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-text-primary">
            Curated Executive Engagements
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {slides.map((slide, i) => (
            <article
              key={i}
              className="bg-background/40 backdrop-blur-md border border-surface-secondary/60 rounded-sm overflow-hidden flex flex-col justify-between shadow-xl group hover:border-accent/40 transition-quick"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={slide.imageSrc}
                  alt={slide.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-quick group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
              </div>
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="font-display text-xl text-text-primary">{slide.title}</h3>
                  <p className="text-sm text-text-secondary/90 font-light leading-relaxed">{slide.description}</p>
                </div>
                <div className="pt-4 border-t border-surface-secondary/50">
                  <Link
                    href={slide.href}
                    className="font-mono text-xs text-accent uppercase tracking-widest hover:underline flex items-center gap-1"
                  >
                    EXPLORE MANDATE →
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
