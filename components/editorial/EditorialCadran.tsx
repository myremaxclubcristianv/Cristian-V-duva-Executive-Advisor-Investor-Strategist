import React from "react";

interface EditorialCadranProps {
  children: React.ReactNode;
  className?: string;
  watermarkNumber?: string;
  badge?: string;
  eyebrow?: string;
  accentColor?: "ice" | "copper" | "silver";
  surface?: "midnight" | "graphite" | "porcelain";
  bordered?: boolean;
  cornerMarks?: boolean;
}

/**
 * EditorialCadran
 * Architectural frame with fine hairline borders, precision corner marks,
 * optional subtle outlined numeral watermark, and structured information zones.
 */
export default function EditorialCadran({
  children,
  className = "",
  watermarkNumber,
  badge,
  eyebrow,
  accentColor = "ice",
  surface = "midnight",
  bordered = true,
  cornerMarks = true,
}: EditorialCadranProps) {
  const surfaceClasses = {
    midnight: "bg-[#0C1119] text-[#F5F4EF]",
    graphite: "bg-[#1B2028] text-[#F5F4EF]",
    porcelain: "bg-[#F5F4EF] text-[#07090D]",
  };

  const accentBorder = {
    ice: "border-[#93C8FF]",
    copper: "border-[#A97F60]",
    silver: "border-[#B8C2CF]",
  };

  const accentText = {
    ice: "text-[#93C8FF]",
    copper: "text-[#A97F60]",
    silver: "text-[#B8C2CF]",
  };

  return (
    <div
      className={`relative ${surfaceClasses[surface]} ${
        bordered ? "border border-white/[0.1]" : ""
      } shadow-2xl overflow-hidden transition-all duration-300 ${className}`}
    >
      {/* Corner Architectural Tick Marks */}
      {cornerMarks && (
        <>
          <span
            className={`absolute top-0 left-0 w-2.5 h-2.5 border-t border-l ${accentBorder[accentColor]} pointer-events-none z-10`}
          />
          <span
            className={`absolute top-0 right-0 w-2.5 h-2.5 border-t border-r ${accentBorder[accentColor]} pointer-events-none z-10`}
          />
          <span
            className={`absolute bottom-0 left-0 w-2.5 h-2.5 border-b border-l ${accentBorder[accentColor]} pointer-events-none z-10`}
          />
          <span
            className={`absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r ${accentBorder[accentColor]} pointer-events-none z-10`}
          />
        </>
      )}

      {/* Outlined Watermark Number */}
      {watermarkNumber && (
        <div
          aria-hidden="true"
          className="absolute -bottom-6 -right-3 font-serif text-[110px] sm:text-[140px] font-light leading-none select-none pointer-events-none opacity-[0.035] text-white"
        >
          {watermarkNumber}
        </div>
      )}

      {/* Optional Top Meta Bar */}
      {(eyebrow || badge) && (
        <div className="flex items-center justify-between gap-4 px-6 sm:px-8 py-3.5 border-b border-white/[0.08] font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.22em]">
          {eyebrow && <span className={`${accentText[accentColor]} font-semibold`}>{eyebrow}</span>}
          {badge && <span className="text-[#8A95A5]">{badge}</span>}
        </div>
      )}

      {/* Cadran Body */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
