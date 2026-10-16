import React from "react";
import EditorialText from "./EditorialText";

interface SectionHeaderProps {
  eyebrow?: string;
  badge?: string;
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  align?: "left" | "center";
  accentColor?: "ice" | "copper" | "silver";
  className?: string;
  action?: React.ReactNode;
}

export default function SectionHeader({
  eyebrow,
  badge,
  title,
  description,
  align = "left",
  accentColor = "ice",
  className = "",
  action,
}: SectionHeaderProps) {
  const accentClasses = {
    ice: "text-[#93C8FF] bg-[#93C8FF]/40 border-[#93C8FF]/30",
    copper: "text-[#A97F60] bg-[#A97F60]/40 border-[#A97F60]/30",
    silver: "text-[#B8C2CF] bg-[#B8C2CF]/40 border-[#B8C2CF]/30",
  };

  const isCenter = align === "center";

  return (
    <div
      className={`space-y-4 sm:space-y-6 ${
        isCenter ? "text-center mx-auto items-center flex flex-col" : "text-left"
      } ${className}`}
    >
      {/* Eyebrow & Metadata */}
      {(eyebrow || badge) && (
        <div
          className={`flex items-center gap-3 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.28em] font-semibold ${
            isCenter ? "justify-center" : "justify-start"
          } ${
            accentColor === "ice"
              ? "text-[#93C8FF]"
              : accentColor === "copper"
              ? "text-[#A97F60]"
              : "text-[#B8C2CF]"
          }`}
        >
          {badge && (
            <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
          )}
          {eyebrow && <span>{eyebrow}</span>}
          {badge && (
            <>
              <span
                className={`w-8 h-[1px] ${
                  accentColor === "ice"
                    ? "bg-[#93C8FF]/40"
                    : accentColor === "copper"
                    ? "bg-[#A97F60]/40"
                    : "bg-[#B8C2CF]/40"
                }`}
              />
              <span className="text-[#8A95A5]">{badge}</span>
            </>
          )}
        </div>
      )}

      {/* Dominant Headline */}
      <div
        className={`flex flex-col ${
          action ? "md:flex-row md:items-end md:justify-between gap-6" : ""
        }`}
      >
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-[#F5F4EF] leading-[1.08] tracking-tight">
          {title}
        </h2>
        {action && <div className="shrink-0 pt-2 md:pt-0">{action}</div>}
      </div>

      {/* Editorial Subheading / Description */}
      {description && (
        <EditorialText
          size="lg"
          maxWidth="prose"
          color="secondary"
          className={`${isCenter ? "mx-auto text-center" : "text-left"}`}
        >
          {description}
        </EditorialText>
      )}
    </div>
  );
}
