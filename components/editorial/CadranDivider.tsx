import React from "react";

interface CadranDividerProps {
  number?: string;
  title?: string;
  subtitle?: string;
  className?: string;
}

/**
 * CadranDivider
 * Hairline architectural separator with center coordinates or label,
 * providing editorial rhythm and distinct section identity.
 */
export default function CadranDivider({
  number,
  title,
  subtitle,
  className = "",
}: CadranDividerProps) {
  return (
    <div className={`relative py-8 sm:py-12 ${className}`}>
      <div className="flex items-center gap-4 sm:gap-6">
        <div className="flex-1 h-px bg-white/[0.08]" />

        {(number || title) && (
          <div className="flex items-center gap-3 px-4 py-1.5 border border-white/[0.08] bg-[#0C1119] shrink-0 font-mono text-[10px] sm:text-xs">
            {number && (
              <span className="text-[#93C8FF] font-semibold tracking-[0.25em]">
                {number}
              </span>
            )}
            {number && title && <span className="text-white/20">|</span>}
            {title && (
              <span className="text-[#F5F4EF] uppercase tracking-[0.2em] font-medium">
                {title}
              </span>
            )}
            {subtitle && (
              <span className="text-[#8A95A5] hidden md:inline tracking-wider">
                — {subtitle}
              </span>
            )}
          </div>
        )}

        <div className="flex-1 h-px bg-white/[0.08]" />
      </div>
    </div>
  );
}
