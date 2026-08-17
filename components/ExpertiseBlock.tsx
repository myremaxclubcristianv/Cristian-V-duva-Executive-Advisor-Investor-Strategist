import Image from 'next/image';
import Link from 'next/link';

interface ExpertiseBlockProps {
  number: string; // e.g., "01"
  title: string; // heading
  description: string;
  imageSrc: string; // path to image in public or assets
  ctaLabel?: string;
  ctaHref?: string;
  reverse?: boolean;
}

export default function ExpertiseBlock({
  number,
  title,
  description,
  imageSrc,
  ctaLabel = 'EXPLORE MANDATE →',
  ctaHref = '/real-estate/properties',
  reverse = false,
}: ExpertiseBlockProps) {
  return (
    <section className="py-12 bg-transparent relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        {/* Text side */}
        <div className={`md:col-span-6 ${reverse ? 'md:order-last' : ''} space-y-6 bg-background/40 backdrop-blur-md border border-surface-secondary/60 p-8 rounded-sm shadow-xl`}> 
          <p className="font-mono text-xs uppercase tracking-widest text-accent">
            PRACTICE AREA · {number}
          </p>
          <h3 className="font-display text-2xl sm:text-3xl md:text-4xl text-text-primary leading-tight">
            {title}
          </h3>
          <p className="text-text-secondary/90 font-light text-sm sm:text-base leading-relaxed">
            {description}
          </p>
          {ctaLabel && ctaHref && (
            <div className="pt-2">
              <Link
                href={ctaHref}
                className="inline-block px-6 py-3 bg-accent text-background font-mono text-xs font-semibold uppercase tracking-wider hover:bg-accent/90 transition-quick shadow-lg"
              >
                {ctaLabel}
              </Link>
            </div>
          )}
        </div>
        {/* Image side */}
        <div className="md:col-span-6 relative aspect-[16/10] w-full rounded-sm overflow-hidden border border-surface-secondary/60 shadow-xl group">
          <Image
            src={imageSrc}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-quick group-hover:scale-105"
            priority={!reverse}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}
