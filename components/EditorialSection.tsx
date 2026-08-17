import React from 'react';
import Link from 'next/link';

interface EditorialSectionProps {
  label?: string;
  heading: string;
  description?: string;
  children?: React.ReactNode;
  ctaLabel?: string;
  ctaHref?: string;
  reverse?: boolean;
}

export default function EditorialSection({
  label,
  heading,
  description,
  children,
  ctaLabel,
  ctaHref,
  reverse = false,
}: EditorialSectionProps) {
  return (
    <section className="py-24 md:py-32 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-center">
        <div className={`md:col-span-6 ${reverse ? 'md:order-last' : ''}`}> 
          {children}
        </div>
        <div className="md:col-span-6 space-y-6 bg-surface-primary border border-surface-secondary/80 p-8 md:p-12 shadow-2xl">
          {label && (
            <div className="flex items-center gap-3 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-accent font-semibold">
              <span>EDITORIAL</span>
              <span className="w-6 h-[1px] bg-accent/40" />
              <span>{label}</span>
            </div>
          )}
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-text-primary leading-tight">
            {heading}
          </h2>
          {description && (
            <p className="font-sans text-sm sm:text-base text-text-secondary/90 font-light leading-relaxed">
              {description}
            </p>
          )}
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
      </div>
    </section>
  );
}
