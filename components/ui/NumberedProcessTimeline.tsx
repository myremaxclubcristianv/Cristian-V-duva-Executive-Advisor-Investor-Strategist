import React from "react";
import { CheckCircle2, Clock } from "lucide-react";

export interface TimelineStep {
  number: string;
  stageName: string;
  duration?: string;
  summary: string;
  details?: string;
  deliverables?: string[];
  note?: string;
  accentBadge?: string;
}

interface NumberedProcessTimelineProps {
  steps: TimelineStep[];
  className?: string;
}

export default function NumberedProcessTimeline({
  steps,
  className = "",
}: NumberedProcessTimelineProps) {
  return (
    <div className={`relative w-full space-y-6 ${className}`}>
      <div className="grid gap-6 lg:gap-8">
        {steps.map((step) => (
          <div
            key={step.number}
            className="relative p-6 sm:p-8 lg:p-10 bg-[#0C1119] border border-white/[0.08] hover:border-[#93C8FF]/40 transition-colors group"
          >
            {/* Top Wireline & Number Badge */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/[0.06]">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs px-2.5 py-1 bg-white/[0.04] border border-white/[0.1] text-[#93C8FF] font-semibold">
                  ETAPA {step.number}
                </span>
                {step.accentBadge && (
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#A97F60]">
                    {step.accentBadge}
                  </span>
                )}
              </div>

              {step.duration && (
                <div className="inline-flex items-center gap-1.5 font-mono text-xs text-[#8A95A5]">
                  <Clock className="w-3.5 h-3.5 text-[#93C8FF]" />
                  <span>{step.duration}</span>
                </div>
              )}
            </div>

            {/* Step Body */}
            <div className="grid lg:grid-cols-12 gap-6 pt-6">
              {/* Left / Main Column */}
              <div className="lg:col-span-7 space-y-4">
                <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F4EF] font-normal leading-tight">
                  {step.stageName}
                </h3>
                <p className="font-sans text-sm sm:text-base text-[#B8C2CF] leading-relaxed">
                  {step.summary}
                </p>
                {step.details && (
                  <p className="font-sans text-xs sm:text-sm text-[#8A95A5] leading-relaxed">
                    {step.details}
                  </p>
                )}
              </div>

              {/* Right / Deliverables & Note Column */}
              <div className="lg:col-span-5 space-y-4 p-5 bg-black/40 border border-white/[0.04]">
                {step.deliverables && step.deliverables.length > 0 && (
                  <div className="space-y-2">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A97F60] font-semibold block">
                      LIVRABILE FACTUALE
                    </span>
                    <ul className="space-y-2">
                      {step.deliverables.map((item, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2.5 font-sans text-xs text-[#E1E4EA]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#93C8FF] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {step.note && (
                  <div className="pt-3 border-t border-white/[0.06] font-sans text-[11px] text-[#8A95A5] leading-relaxed">
                    <strong className="text-[#F5F4EF] font-medium block">Notă procedurală:</strong>
                    {step.note}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
