import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  /** "light" (default) or "dark" */
  variant?: 'light' | 'dark';
}

export const Section: React.FC<SectionProps> = ({ children, className = '', variant = 'light' }) => {
  const base = 'py-24';
  const bg = variant === 'dark' ? 'bg-[#070707] text-[#F5F5F7]' : 'bg-[#FAFAFA] text-[#1D1D1F]';
  return (
    <section className={`${base} ${bg} ${className}`}>
      {children}
    </section>
  );
};
