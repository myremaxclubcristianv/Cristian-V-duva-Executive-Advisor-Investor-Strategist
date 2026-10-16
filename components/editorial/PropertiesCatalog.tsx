"use client";

import React, { useState } from "react";
import { selectedProperties, Property } from "@/lib/properties";
import PropertyFeature from "./PropertyFeature";
import ProjectFeature from "./ProjectFeature";
import CTASection from "./CTASection";

type FilterTab = "all" | "penthouse" | "villa" | "development" | "marine" | "international";

export default function PropertiesCatalog() {
  const [activeTab, setActiveTab] = useState<FilterTab>("all");

  const filteredProperties = selectedProperties.filter((p) => {
    if (activeTab === "all") return true;
    return p.category === activeTab;
  });

  const tabs: { id: FilterTab; label: string; count: number }[] = [
    { id: "all", label: "TOATE ACTIVELE", count: selectedProperties.length },
    {
      id: "penthouse",
      label: "PENTHOUSE & ROOFTOP",
      count: selectedProperties.filter((p) => p.category === "penthouse").length,
    },
    {
      id: "villa",
      label: "VILE & DOMENII",
      count: selectedProperties.filter((p) => p.category === "villa").length,
    },
    {
      id: "development",
      label: "DEZVOLTĂRI REZIDENȚIALE",
      count: selectedProperties.filter((p) => p.category === "development").length,
    },
    {
      id: "marine",
      label: "WATERFRONT & MARITIM",
      count: selectedProperties.filter((p) => p.category === "marine").length,
    },
    {
      id: "international",
      label: "INTERNAȚIONAL (MONACO · DUBAI)",
      count: selectedProperties.filter((p) => p.category === "international").length,
    },
  ];

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* Category Filter Navigation Bar */}
      <div className="border-b border-white/[0.08] sticky top-20 z-30 bg-[#07090D]/95 backdrop-blur-md py-4">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 flex items-center gap-2 sm:gap-4 overflow-x-auto no-scrollbar">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 sm:px-5 py-2.5 font-mono text-[11px] sm:text-xs uppercase tracking-[0.2em] font-medium transition-all whitespace-nowrap flex items-center gap-2 border ${
                  isActive
                    ? "bg-[#93C8FF] text-[#07090D] border-[#93C8FF] font-bold shadow-lg shadow-[#93C8FF]/20"
                    : "text-[#B8C2CF] border-white/[0.08] hover:border-[#93C8FF]/50 hover:text-[#F5F4EF] bg-[#0C1119]/50"
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`text-[9px] px-1.5 py-0.2 rounded-full ${
                    isActive ? "bg-[#07090D]/20 text-[#07090D]" : "bg-white/[0.06] text-[#8A95A5]"
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Properties Exhibition Stream */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 space-y-16 sm:space-y-24">
        {filteredProperties.map((property, idx) => {
          // If the property is marked as a development or project with custom developer details
          if (property.id === "prop-pipera-villas") {
            return (
              <ProjectFeature
                key={property.id}
                title={property.title}
                subtitle={property.subtitle}
                location={property.location}
                phase="ANSAMBLU REZIDENȚIAL FINALIZAT · DISPONIBIL IMEDIAT"
                unitsSummary="36 VILE (14 TIP 1 + 22 TIP 2)"
                description={property.description}
                developerNote="Infrastructură urbană completă: străzi asfaltate, rețele edilitare subterane, acces securizat și proximitate directă față de polul de școli internaționale din Pipera."
                image={property.heroImage}
                specs={property.specs}
                highlights={property.features}
                sourceUrl={property.sourceUrl}
                sourceName={property.sourceName}
              />
            );
          }

          if (property.id === "prop-dubai-brabus") {
            return (
              <ProjectFeature
                key={property.id}
                title={property.title}
                subtitle={property.subtitle}
                location={property.location}
                phase="PROIECT ÎN DEZVOLTARE · DATE PUBLICATE DE DEZVOLTATOR"
                unitsSummary="WATERFRONT SKY MANSIONS & WATER VILLAS"
                description={property.description}
                developerNote="Informații de proiect publicate de dezvoltator. Randamentele estimate și calendarele de predare fac obiectul contractului bilateral de rezervare (SPA) și nu constituie garanții comerciale implicite."
                image={property.heroImage}
                specs={property.specs}
                highlights={property.features}
                sourceUrl={property.sourceUrl}
                sourceName={property.sourceName}
              />
            );
          }

          return (
            <PropertyFeature
              key={property.id}
              property={property}
              reversed={idx % 2 === 1}
            />
          );
        })}

        {filteredProperties.length === 0 && (
          <div className="text-center py-24 border border-white/[0.08] bg-[#0C1119] p-12 space-y-4">
            <span className="font-mono text-xs uppercase tracking-[0.24em] text-[#93C8FF]">
              PROTOCOL CONFIDENȚIAL
            </span>
            <h3 className="font-serif text-2xl text-[#F5F4EF]">
              Activele din această categorie sunt gestionate exclusiv off-market.
            </h3>
            <p className="font-sans text-sm text-[#B8C2CF] max-w-xl mx-auto font-light">
              Pentru a accesa oportunități private protejate sub acord de confidențialitate (NDA), vă rugăm să trimiteți un mandat de căutare.
            </p>
          </div>
        )}
      </div>

      {/* Final Fiduciary CTA */}
      <CTASection
        eyebrow="REPREZENTARE EXCLUSIVĂ ÎN ACHIZIȚIE & VÂNZARE"
        title="Dorești reprezentare fiduciară pentru o proprietate de patrimoniu?"
        description="Fie că analizezi o achiziție privată pe axa București – Monaco – Dubai sau dorești listarea confidențială a unei proprietăți de peste 1M €, acționăm exclusiv în interesul mandatarului, fără conflicte de agenție dublă."
        primaryActionText="STABILEȘTE O AUDIENȚĂ FIDUCIARĂ"
        primaryActionHref="/contact"
      />
    </div>
  );
}
