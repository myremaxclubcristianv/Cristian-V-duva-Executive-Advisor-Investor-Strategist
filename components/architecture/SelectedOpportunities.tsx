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
            eyebrow="03 // SELECȚIE DE PROPRIETĂȚI ȘI OPORTUNITĂȚI"
            badge="PORTOFOLIU SELECTAT"
            title="Proprietăți Rezidențiale și Oportunități de Investiție"
            description="Selecție structurată de proprietăți disponibile la ofertare, analizate din perspectiva calității spațiale, a cadrului juridic și a potențialului pe termen lung."
          />

          <Link
            href="/real-estate/properties"
            className="px-6 py-3.5 border border-white/[0.14] hover:border-[#93C8FF] text-[#F5F4EF] hover:text-[#93C8FF] font-mono text-xs uppercase tracking-[0.2em] font-semibold transition-all shrink-0 flex items-center gap-2"
          >
            <span>CATALOG COMPLET PROPRIETĂȚI</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Lead Dominant Signature Property (Pattern A) */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.28em] text-[#93C8FF] font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#93C8FF]" />
            <span>PROPRIETATE DISPONIBILĂ LA OFERTARE // REPREZENTATIV</span>
          </div>

          <PropertyFeature property={leadProperty} />
        </div>

        {/* Secondary Supporting Opportunities Grid (Pattern B) */}
        <div className="space-y-8 pt-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/[0.06] pb-4">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#A97F60] font-semibold block">
                OPORTUNITĂȚI SELECTATE
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F4EF]">
                Proprietăți Disponibile în Portofoliu
              </h3>
            </div>
            <span className="font-mono text-xs text-[#8A95A5]">
              REZIDENȚIAL PRIME & PATRIMONIU ISTORIC
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
                  GALERIE CONCEPTUALĂ
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F4EF]">
                  Concepte & Studii Arhitecturale
                </h3>
              </div>
              <span className="font-mono text-xs text-[#8A95A5]">
                RANDĂRI ILUSTRATIVE & STUDII DE VOLUMETRIE
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {conceptualStudies.map((prop, idx) => (
                <div key={prop.id} className="relative">
                  <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-[#07090D]/90 border border-white/20 font-mono text-[9px] uppercase tracking-wider text-[#93C8FF]">
                    Concept Arhitectural / Randare Ilustrativă
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
