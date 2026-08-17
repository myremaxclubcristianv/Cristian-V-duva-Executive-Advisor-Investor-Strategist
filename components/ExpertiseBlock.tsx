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
    <section className="py-20 md:py-28 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-center">
        {/* Text side */}
        <div className={`md:col-span-6 ${reverse ? 'md:order-last' : ''} space-y-6 bg-surface-primary border border-surface-secondary/80 p-8 md:p-12 shadow-2xl`}> 
          <div className="space-y-2">
            <div className="flex items-center gap-3 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-accent font-semibold">
              <span>PRACTICE AREA</span>
              <span className="w-6 h-[1px] bg-accent/40" />
              <span>{number}</span>
            </div>
            <h3 className="font-display text-3xl sm:text-4xl text-text-primary leading-tight">
              {title}
            </h3>
          </div>
          <p className="font-sans text-sm sm:text-base text-text-secondary/90 font-light leading-relaxed">
            {description}
          </p>
          {ctaLabel && ctaHref && (
            <div className="pt-4 border-t border-surface-secondary/60">
              <Link
                href={ctaHref}
                className="inline-block px-7 py-3.5 bg-accent text-background font-mono text-xs font-semibold uppercase tracking-[0.2em] hover:bg-accent/90 transition-quick shadow-xl"
              >
                {ctaLabel}
              </Link>
            </div>
          )}
        </div>

        {/* Image side */}
        <div className="md:col-span-6 relative aspect-video w-full overflow-hidden border border-surface-secondary/80 shadow-2xl group bg-background">
          <Image
            src={imageSrc}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-quick group-hover:scale-105"
            priority={!reverse}
          />
        </div>
      </div>
    </section>
  );
}
