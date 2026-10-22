import React from "react";
import { Check, X } from "lucide-react";

export interface ComparisonRow {
  dimension: string;
  traditional: string;
  advisory: string;
  note?: string;
}

interface ComparisonMatrixProps {
  title: string;
  subtitle?: string;
  traditionalHeader: string;
  advisoryHeader: string;
  rows: ComparisonRow[];
  className?: string;
}

export default function ComparisonMatrix({
  title,
  subtitle,
  traditionalHeader,
  advisoryHeader,
  rows,
  className = "",
}: ComparisonMatrixProps) {
  return (
    <div className={`w-full space-y-6 ${className}`}>
      {(title || subtitle) && (
        <div className="space-y-2">
          {title && (
            <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F4EF]">
              {title}
            </h3>
          )}
          {subtitle && (
            <p className="font-sans text-sm text-[#8A95A5] max-w-2xl">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {/* Responsive Table / Cadran Grid */}
      <div className="border border-white/[0.1] bg-[#0C1119] overflow-hidden">
        {/* Table Headers */}
        <div className="grid grid-cols-12 border-b border-white/[0.1] bg-black/60 font-mono text-xs uppercase tracking-wider">
          <div className="col-span-4 p-4 sm:p-5 text-[#8A95A5]">DIMENSIUNE / CRITERIU</div>
          <div className="col-span-4 p-4 sm:p-5 text-[#8A95A5] border-l border-white/[0.08]">
            {traditionalHeader}
          </div>
          <div className="col-span-4 p-4 sm:p-5 text-[#93C8FF] border-l border-white/[0.08] bg-[#93C8FF]/[0.03]">
            {advisoryHeader}
          </div>
        </div>

        {/* Rows */}
        <div className="divide-y divide-white/[0.06]">
          {rows.map((row, idx) => (
            <div key={idx} className="grid grid-cols-12 text-xs sm:text-sm">
              {/* Dimension */}
              <div className="col-span-4 p-4 sm:p-5 font-mono text-xs text-[#E1E4EA] flex flex-col justify-center">
                <span className="font-semibold text-[#F5F4EF]">{row.dimension}</span>
                {row.note && (
                  <span className="text-[10px] text-[#8E9AA8] mt-1 hidden sm:block">
                    {row.note}
                  </span>
                )}
              </div>

              {/* Traditional */}
              <div className="col-span-4 p-4 sm:p-5 text-[#8A95A5] border-l border-white/[0.08] flex items-center gap-2">
                <X className="w-4 h-4 text-red-400/70 shrink-0 hidden sm:block" />
                <span className="leading-relaxed">{row.traditional}</span>
              </div>

              {/* Advisory (Highlighted) */}
              <div className="col-span-4 p-4 sm:p-5 text-[#F5F4EF] border-l border-white/[0.08] bg-[#93C8FF]/[0.02] flex items-center gap-2">
                <Check className="w-4 h-4 text-[#93C8FF] shrink-0 hidden sm:block" />
                <span className="leading-relaxed font-medium">{row.advisory}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
