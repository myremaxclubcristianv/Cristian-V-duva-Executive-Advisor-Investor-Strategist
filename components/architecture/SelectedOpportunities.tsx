import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { selectedProperties } from "@/lib/properties";
import SectionHeader from "@/components/editorial/SectionHeader";
import PropertyFeature from "@/components/editorial/PropertyFeature";
import SupportingPropertyCard from "@/components/editorial/SupportingPropertyCard";

export default function SelectedOpportunities() {
  const leadProperty = selectedProperties.find((p) => p.id === "prop-plevnei") || selectedProperties[0];
  const supportingProperties = selectedProperties.filter(
    (p) => p.id === "prop-pipera-villas" || p.id === "prop-royal-mansion" || p.id === "prop-nautical-home"
  );

  return (
    <section id="opportunities" className="relative w-full bg-[#07090D] text-[#F5F4EF] py-28 sm:py-36 lg:py-44 border-b border-white/[0.08] overflow-hidden">
      <div className="site-container space-y-16 sm:space-y-24 relative z-10">
        {/* Chapter Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-8">
          <SectionHeader
            eyebrow="03 // SELECTED ACQUISITIONS & DEVELOPMENTS"
            badge="OFF-MARKET & VERIFIED"
            title="Curated Sovereign Property Portfolio"
            description="Verified real estate acquisitions, private residential masterplans, and off-market trophy assets across Bucharest, the Romanian Heritage Corridor, Monaco, and Dubai."
          />

          <Link
            href="/real-estate/properties"
            className="px-6 py-3.5 border border-white/[0.14] hover:border-[#93C8FF] text-[#F5F4EF] hover:text-[#93C8FF] font-mono text-xs uppercase tracking-[0.2em] font-semibold transition-all shrink-0 flex items-center gap-2"
          >
            <span>VIEW ALL {selectedProperties.length} CONFIRMED ASSETS</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Lead Dominant Signature Property (Pattern A) */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.28em] text-[#93C8FF] font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#93C8FF]" />
            <span>FEATURED DOMINANT ASSET // PATTERN A</span>
          </div>

          <PropertyFeature property={leadProperty} />
        </div>

        {/* Secondary Supporting Opportunities Grid (Pattern B) */}
        <div className="space-y-8 pt-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/[0.06] pb-4">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#A97F60] font-semibold block">
                SUPPORTING MANDATES & DEVELOPMENTS
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F4EF]">
                Additional Curated Opportunities
              </h3>
            </div>
            <span className="font-mono text-xs text-[#8A95A5]">
              VERIFIED RESIDENTIAL & MARITIME ASSETS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportingProperties.map((prop) => (
              <SupportingPropertyCard key={prop.id} property={prop} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
