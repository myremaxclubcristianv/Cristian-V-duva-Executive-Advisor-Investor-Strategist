import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { selectedProperties } from "@/lib/properties";
import SectionHeader from "@/components/editorial/SectionHeader";
import PropertyFeature from "@/components/editorial/PropertyFeature";
import SupportingPropertyCard from "@/components/editorial/SupportingPropertyCard";

export default function SelectedOpportunities() {
  const leadProperty = selectedProperties.find((p) => p.id === "prop-herastrau-duplex-penthouse") || selectedProperties[0];
  const supportingProperties = selectedProperties.filter(
    (p) => p.id === "prop-plevnei" || p.id === "prop-pipera-villas" || p.id === "prop-schei-brasov"
  );
  const conceptualStudies = selectedProperties.filter(
    (p) => p.id === "prop-royal-mansion" || p.id === "prop-monaco-coast"
  );

  return (
    <section id="opportunities" className="relative w-full bg-[#07090D] text-[#F5F4EF] py-28 sm:py-36 lg:py-44 border-b border-white/[0.08] overflow-hidden">
      <div className="site-container space-y-16 sm:space-y-24 relative z-10">
        {/* Chapter Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-8">
          <SectionHeader
            eyebrow="03 // PROPERTY SELECTION & ACQUISITION OPPORTUNITIES"
            badge="CURATED PORTFOLIO"
            title="Prime Residential Holdings & Investment Opportunities"
            description="Structured selection of available properties, evaluated across spatial quality, legal title integrity, and long-term capital preservation."
          />

          <Link
            href="/real-estate/properties"
            className="px-6 py-3.5 border border-white/[0.14] hover:border-[#93C8FF] text-[#F5F4EF] hover:text-[#93C8FF] font-mono text-xs uppercase tracking-[0.2em] font-semibold transition-all shrink-0 flex items-center gap-2"
          >
            <span>COMPLETE PROPERTY CATALOG</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Lead Dominant Signature Property (Pattern A) */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.28em] text-[#93C8FF] font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#93C8FF]" />
            <span>AVAILABLE PRIME RESIDENCE // LEAD MANDATE</span>
          </div>

          <PropertyFeature property={leadProperty} />
        </div>

        {/* Secondary Supporting Opportunities Grid (Pattern B) */}
        <div className="space-y-8 pt-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/[0.06] pb-4">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#A97F60] font-semibold block">
                CURATED OPPORTUNITIES
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F4EF]">
                Available Portfolio Properties
              </h3>
            </div>
            <span className="font-mono text-xs text-[#8A95A5]">
              PRIME RESIDENTIAL & HISTORIC LANDMARKS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportingProperties.map((prop, idx) => (
              <SupportingPropertyCard key={prop.id} property={prop} index={idx + 1} />
            ))}
          </div>
        </div>

        {/* Conceptual Studies Section (Pattern C) */}
        {conceptualStudies.length > 0 && (
          <div className="space-y-8 pt-12 border-t border-white/[0.06]">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/[0.06] pb-4">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#93C8FF] font-semibold block">
                  CONCEPTUAL ARCHITECTURE
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F4EF]">
                  Architectural Concepts & Volumetric Studies
                </h3>
              </div>
              <span className="font-mono text-xs text-[#8A95A5]">
                ILLUSTRATIVE RENDERS & SPATIAL STUDIES
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {conceptualStudies.map((prop, idx) => (
                <div key={prop.id} className="relative">
                  <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-[#07090D]/90 border border-white/20 font-mono text-[9px] uppercase tracking-wider text-[#93C8FF]">
                    Architectural Concept / Illustrative Render
                  </div>
                  <SupportingPropertyCard property={prop} index={idx + 1} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
