import Image from "next/image";
import Link from "next/link";

interface ExpertiseBlockProps {
  number: string;
  title: string;
  description: string;
  imageSrc: string;
  ctaLabel?: string;
  ctaHref?: string;
  reverse?: boolean;
}

export default function ExpertiseBlock({
  number,
  title,
  description,
  imageSrc,
  ctaLabel = "EXPLORE MANDATE →",
  ctaHref = "/real-estate/properties",
  reverse = false,
}: ExpertiseBlockProps) {
  return (
    <section className="responsive-py px-4 sm:px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 md:gap-20 items-center">
        {/* Editorial Monograph Column */}
        <div
          className={`md:col-span-6 ${
            reverse ? "md:order-last" : ""
          } space-y-6`}
        >
          <div className="space-y-3">
            <div className="flex items-center gap-3 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-accent font-semibold">
              <span>03 / DISCIPLINES</span>
              <span className="w-6 h-[1px] bg-accent/40" />
              <span>{number}</span>
            </div>
            <h3 className="font-display text-display-lg-fluid text-text-primary tracking-tight">
              {title}
            </h3>
          </div>

          <p className="font-sans text-xs sm:text-base text-text-secondary/90 font-light leading-relaxed">
            {description}
          </p>

          {ctaLabel && ctaHref && (
            <div className="pt-4">
              <Link
                href={ctaHref}
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-accent hover:text-text-primary transition-quick py-2"
              >
                <span>{ctaLabel}</span>
              </Link>
            </div>
          )}
        </div>

        {/* Uncovered Architectural Photograph */}
        <div className="md:col-span-6 relative aspect-[16/10] w-full overflow-hidden group bg-surface-primary">
          <Image
            src={imageSrc}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority={!reverse}
          />
        </div>
      </div>
    </section>
  );
}
