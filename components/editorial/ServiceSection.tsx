import React from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import SectionHeader from "./SectionHeader";
import EditorialText from "./EditorialText";

export interface ServiceItem {
  number: string;
  category: string;
  title: string;
  description: string;
  deliverables: string[];
  linkHref: string;
  linkText: string;
  external?: boolean;
}

interface ServiceSectionProps {
  eyebrow?: string;
  badge?: string;
  title: string;
  description?: string;
  services: ServiceItem[];
  className?: string;
}

export default function ServiceSection({
  eyebrow = "STRATEGIC PRACTICE PILLARS",
  badge = "EXECUTIVE CAPABILITIES",
  title = "Architecture of Strategic Mandates & Services",
  description = "Every engagement is architected at the intersection of quantitative market analysis, due diligence coordination, and strategic asset protection.",
  services,
  className = "",
}: ServiceSectionProps) {
  return (
    <section className={`py-28 sm:py-36 lg:py-44 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto space-y-20 ${className}`}>
      {/* Section Header */}
      <SectionHeader
        eyebrow={eyebrow}
        badge={badge}
        title={title}
        description={description}
      />

      {/* Services Bento Cards */}
      <div className="space-y-8">
        {services.map((srv) => (
          <div
            key={srv.number}
            className="p-8 sm:p-12 rounded-3xl border border-white/[0.08] bg-[#0C1119] grid lg:grid-cols-12 gap-8 lg:gap-12 items-start hover:border-white/[0.22] hover:bg-[#101622] transition-all duration-300 shadow-xl"
          >
            {/* Number Column */}
            <div className="lg:col-span-2 space-y-2">
              <span className="font-serif text-4xl sm:text-5xl text-[#647082]/60 font-light block">
                {srv.number}
              </span>
              <span className="px-3 py-1 rounded-full bg-[#93C8FF]/10 border border-[#93C8FF]/20 font-mono text-[9px] uppercase tracking-[0.2em] text-[#93C8FF] inline-block font-semibold">
                {srv.category}
              </span>
            </div>

            {/* Description & Details Column */}
            <div className="lg:col-span-6 space-y-4">
              <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F4EF] leading-snug">
                {srv.title}
              </h3>
              <EditorialText size="base" maxWidth="prose" color="secondary" className="leading-relaxed">
                {srv.description}
              </EditorialText>

              {/* Deliverables */}
              {srv.deliverables && srv.deliverables.length > 0 && (
                <div className="pt-3 space-y-2">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#A97F60] font-semibold block">
                    DELIVERABLES & QUALITY BENCHMARKS:
                  </span>
                  <ul className="space-y-1.5 font-sans text-xs sm:text-sm text-[#B8C2CF]/90 font-light">
                    {srv.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#93C8FF] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Action Column */}
            <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-6 lg:pl-8 lg:border-l lg:border-white/[0.06]">
              <div className="p-4 rounded-2xl bg-[#1B2028]/60 border border-white/[0.06] font-mono text-xs text-[#8A95A5] space-y-1">
                <span className="text-[#93C8FF] block text-[10px] uppercase tracking-widest font-semibold">
                  MANDATE STATUS
                </span>
                <span>Dedicated representation under written bilateral agreement</span>
              </div>

              {srv.external ? (
                <a
                  href={srv.linkHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-apple-pill-primary w-full text-center"
                >
                  <span>{srv.linkText}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              ) : (
                <Link
                  href={srv.linkHref}
                  className="btn-apple-pill-primary w-full text-center"
                >
                  <span>{srv.linkText}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
