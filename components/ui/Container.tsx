import React from 'react';

// Reusable container that centers content and provides responsive horizontal padding matching the premium design system.
export const Container: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`mx-auto max-w-7xl px-6 sm:px-12 lg:px-24 ${className}`}>{children}</div>
);
