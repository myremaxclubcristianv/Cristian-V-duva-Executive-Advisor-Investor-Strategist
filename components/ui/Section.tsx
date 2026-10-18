import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  /** "light" | "dark" | "porcelain" | "charcoal" */
  variant?: 'light' | 'dark' | 'porcelain' | 'charcoal';
  id?: string;
}

export const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  variant = 'dark',
  id,
}) => {
  const bg =
    variant === 'light' || variant === 'porcelain'
      ? 'bg-[#F5F4EF] text-[#07090D]'
      : variant === 'charcoal'
      ? 'bg-[#0C1119] text-[#F5F4EF]'
      : 'bg-[#07090D] text-[#F5F4EF]';

  return (
    <section id={id} className={`w-full ${bg} ${className}`}>
      {children}
    </section>
  );
};

export default Section;
