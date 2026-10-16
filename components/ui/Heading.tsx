import React from 'react';

type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface HeadingProps {
  as?: Variant;
  children: React.ReactNode;
  className?: string;
}

export const Heading: React.FC<HeadingProps> = ({ as = 'h2', children, className = '' }) => {
  const Tag = as as React.ElementType;
  const baseClasses: Record<Variant, string> = {
    h1: 'text-5xl sm:text-7xl font-bold tracking-tight leading-tight',
    h2: 'text-4xl sm:text-5xl font-semibold tracking-tight',
    h3: 'text-3xl sm:text-4xl font-medium',
    h4: 'text-2xl font-medium',
    h5: 'text-xl font-medium',
    h6: 'text-lg font-medium',
  };
  return React.createElement(
    Tag,
    { className: `${baseClasses[as]} ${className}`.trim() },
    children
  );
};
