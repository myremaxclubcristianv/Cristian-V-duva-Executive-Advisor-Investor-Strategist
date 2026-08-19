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
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 md:gap-16 items-center">
        {/* Text Monograph Column */}
        <div
          className={`md:col-span-6 ${
            reverse ? "md:order-last" : ""
          } space-y-5 sm:space-y-6 bg-surface-primary/90 border border-white/10 p-6 sm:p-8 md:p-12 shadow-2xl`}
        >
          <div className="space-y-2">
            <div className="flex items-center gap-3 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-accent font-semibold">
              <span>PRACTICE AREA</span>
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
            <div className="pt-4 border-t border-white/10">
              <Link
                href={ctaHref}
                className="block sm:inline-block w-full sm:w-auto px-7 py-3.5 bg-accent text-background font-mono text-xs font-semibold uppercase tracking-[0.2em] hover:bg-accent/90 transition-quick text-center shadow-xl touch-active min-h-[44px]"
              >
                {ctaLabel}
              </Link>
            </div>
          )}
        </div>

        {/* Architectural Image Column */}
        <div className="md:col-span-6 relative aspect-video w-full overflow-hidden border border-white/10 shadow-2xl group bg-background">
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
