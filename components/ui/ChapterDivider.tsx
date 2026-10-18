import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ChapterDividerProps {
  number: string;
  category: string;
  title: string;
  description?: string;
  subtitle?: string;
  actionText?: string;
  actionHref?: string;
  accentColor?: "ice" | "copper" | "silver";
  className?: string;
}

export default function ChapterDivider({
  number,
  category,
  title,
  description,
  subtitle,
  actionText,
  actionHref,
  accentColor = "copper",
  className = "",
}: ChapterDividerProps) {
  const effectiveDescription = description || subtitle;
  const accentText =
    accentColor === "ice"
      ? "text-[#93C8FF]"
      : accentColor === "copper"
      ? "text-[#A97F60]"
      : "text-[#B8C2CF]";

  const accentNode =
    accentColor === "ice"
      ? "bg-[#93C8FF] shadow-[0_0_8px_rgba(147,200,255,0.7)]"
      : accentColor === "copper"
      ? "bg-[#A97F60] shadow-[0_0_8px_rgba(169,127,96,0.7)]"
      : "bg-[#B8C2CF]";

  return (
    <div className={`relative w-full space-y-6 sm:space-y-8 ${className}`}>
      {/* Top Architectural Wireline & Accent */}
      <div className="flex items-center gap-4">
        <span className={`w-1.5 h-1.5 rounded-full ${accentNode}`} />
        <span className={`font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.3em] font-semibold ${accentText}`}>
          {number} {"//"} {category}
        </span>
        <div className="flex-1 h-px bg-gradient-to-r from-white/[0.12] via-white/[0.04] to-transparent" />
      </div>

      {/* Main Grid: Title + Description & Action */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8">
        <div className="max-w-3xl space-y-3">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#F5F4EF] font-normal tracking-tight leading-[1.14]">
            {title}
          </h2>
          {effectiveDescription && (
            <p className="font-sans text-sm sm:text-base text-[#8A95A5] leading-relaxed">
              {effectiveDescription}
            </p>
          )}
        </div>

        {actionText && actionHref && (
          <Link
            href={actionHref}
            className="inline-flex items-center gap-2 px-5 py-3 border border-white/[0.12] bg-[#0C1119] hover:bg-white/[0.04] hover:border-[#93C8FF] text-[#F5F4EF] font-mono text-xs uppercase tracking-[0.2em] transition-all duration-300 self-start lg:self-end shrink-0"
          >
            <span>{actionText}</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#93C8FF]" />
          </Link>
        )}
      </div>
    </div>
  );
}
