import React from 'react';

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
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto grid grid-12 gap-8 items-center">
        <div className={`col-span-6 ${reverse ? 'order-last' : ''}`}> 
          {children}
        </div>
        <div className="col-span-6 space-y-4">
          {label && (
            <p className="font-sans text-sm uppercase tracking-wider text-accent transition-quick">
              {label}
            </p>
          )}
          <h2 className="font-display text-4xl md:text-5xl text-text-primary leading-tight">
            {heading}
          </h2>
          {description && (
            <p className="max-w-lg text-body-lg text-text-secondary">
              {description}
            </p>
          )}
          {ctaLabel && ctaHref && (
            <a href={ctaHref} className="inline-block mt-4 px-6 py-3 bg-accent text-background font-medium hover:bg-accent/90 transition-quick">
              {ctaLabel}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
