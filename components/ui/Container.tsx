import React from 'react';

// Reusable container that centers content and provides responsive horizontal padding.
export const Container: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <section className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`} data-testid="container">
    {children}
  </section>
);
