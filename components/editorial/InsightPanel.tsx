import React from "react";
import { TrendingUp, TrendingDown, Minus, ExternalLink } from "lucide-react";
import EditorialText from "./EditorialText";

interface InsightPanelProps {
  title: string;
  metric?: string;
  change?: string;
  trend?: "up" | "down" | "neutral";
  category?: string;
  source: string;
  date: string;
  description: string;
  actionUrl?: string;
  className?: string;
}

export default function InsightPanel({
  title,
  metric,
  change,
  trend = "neutral",
  category,
  source,
  date,
  description,
  actionUrl,
  className = "",
}: InsightPanelProps) {
  return (
    <div
      className={`relative p-6 sm:p-8 border border-white/[0.08] bg-[#0C1119] hover:border-[#93C8FF]/50 transition-all duration-300 flex flex-col justify-between space-y-6 shadow-xl hover:-translate-y-1 group ${className}`}
    >
      {/* Corner Architectural Ticks */}
      <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#93C8FF]/40 group-hover:border-[#93C8FF] pointer-events-none transition-colors" />
      <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#93C8FF]/40 group-hover:border-[#93C8FF] pointer-events-none transition-colors" />
      <span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#93C8FF]/40 group-hover:border-[#93C8FF] pointer-events-none transition-colors" />
      <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#93C8FF]/40 group-hover:border-[#93C8FF] pointer-events-none transition-colors" />

      <div className="space-y-4">
        {/* Top Meta Line */}
        <div className="flex items-center justify-between font-mono text-[10px] text-[#8A95A5]">
          {category && (
            <span className="uppercase tracking-[0.25em] text-[#93C8FF] font-semibold">
              {category}
            </span>
          )}
          <span className="tracking-wider">{date}</span>
        </div>

        {/* Headline */}
        <h3 className="font-serif text-xl sm:text-2xl text-[#F5F4EF] leading-snug group-hover:text-[#93C8FF] transition-colors">
          {title}
        </h3>

        {/* Metric Callout if present */}
        {metric && (
          <div className="flex items-baseline gap-3 py-2 border-y border-white/[0.06]">
            <span className="font-mono text-2xl sm:text-3xl text-[#93C8FF] font-bold">
              {metric}
            </span>
            {change && (
              <span
                className={`font-mono text-xs flex items-center gap-1 ${
                  trend === "up"
                    ? "text-[#4cff72]"
                    : trend === "down"
                    ? "text-[#ff9800]"
                    : "text-[#B8C2CF]"
                }`}
              >
                {trend === "up" && <TrendingUp className="w-3.5 h-3.5" />}
                {trend === "down" && <TrendingDown className="w-3.5 h-3.5" />}
                {trend === "neutral" && <Minus className="w-3.5 h-3.5" />}
                <span>{change}</span>
              </span>
            )}
          </div>
        )}

        {/* Body Text */}
        <EditorialText size="sm" maxWidth="prose" color="secondary" className="leading-relaxed">
          {description}
        </EditorialText>
      </div>

      {/* Footer Citation & Source Link */}
      <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between font-mono text-[10px] sm:text-[11px] text-[#8A95A5]">
        <span>Source: {source}</span>
        {actionUrl && (
          <a
            href={actionUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#93C8FF] hover:underline flex items-center gap-1"
          >
            <span>DISPATCH ↗</span>
          </a>
        )}
      </div>
    </div>
  );
}
