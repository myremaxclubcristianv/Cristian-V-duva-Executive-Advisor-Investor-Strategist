import React from "react";
import ArchitecturalHero from "./ArchitecturalHero";
import EditorialInterruption from "./EditorialInterruption";
import ClientBenefits from "@/components/editorial/ClientBenefits";
import FeaturedVenturesShowcase from "./FeaturedVenturesShowcase";
import HomeFindPortfolio from "@/components/editorial/HomeFindPortfolio";
import PersonalPerspectiveSection from "@/components/editorial/PersonalPerspectiveSection";
import RepresentationDifference from "@/components/editorial/RepresentationDifference";
import MediaInsightsShowcase from "./MediaInsightsShowcase";
import SignatureClosing from "./SignatureClosing";

/**
 * EXECUTIVE DIGITAL FLAGSHIP — APPLE-LEVEL EDITORIAL HOMEPAGE
 * Carefully directed narrative sequence:
 * 01 // Navigation (ExecutiveHeader in app/page.tsx)
 * 02 // Hero: Monumental impact, authentic positioning & portrait (ArchitecturalHero)
 * 03 // Value Proposition: Light canvas editorial contrast & dedicated advisory (EditorialInterruption & ClientBenefits)
 * 04 // Featured Ventures: Distinct Apple-style product bento & billboards (FeaturedVenturesShowcase)
 * 05 // Real Estate: Curated BUY & RENT properties from HomeFind network (HomeFindPortfolio)
 * 06 // About & Credibility: Authentic professional trajectory & rigorous posture (PersonalPerspectiveSection)
 * 07 // The Representation Difference: Empirical comparison (RepresentationDifference)
 * 08 // Media & Insights: Official video broadcasts & research dispatches (MediaInsightsShowcase)
 * 09 // Final CTA & Footer: Confidential consultation prompt & Apple directory (SignatureClosing & Footer)
 */
export default function ExecutiveExperience() {
  return (
    <div className="w-full bg-[#07090D] text-[#F5F4EF] selection:bg-[#93C8FF]/25 selection:text-[#F5F4EF]">
      {/* 01 // HERO (APPLE MONUMENTAL LAUNCH STYLE) */}
      <ArchitecturalHero />

      {/* 02 // VALUE PROPOSITION (LIGHT/PORCELAIN CANVAS CONTRAST) */}
      <div id="services">
        <EditorialInterruption />
      </div>

      {/* 03 // ROLE-BASED CONCRETE VALUE FOR CLIENTS */}
      <ClientBenefits />

      {/* 04 // FEATURED VENTURES SHOWCASE (APPLE PRODUCT BENTO & BILLBOARDS) */}
      <FeaturedVenturesShowcase />

      {/* 05 // REAL ESTATE PORTFOLIO — LIVE HOMEFIND CURATED SELECTION */}
      <div id="portfolio">
        <HomeFindPortfolio />
      </div>

      {/* 06 // ABOUT & CREDIBILITY (FOUNDER PROFILE & RIGOR) */}
      <div id="about">
        <PersonalPerspectiveSection />
      </div>

      {/* 07 // THE REPRESENTATION DIFFERENCE (EMPIRICAL COMPARISON) */}
      <RepresentationDifference />

      {/* 08 // MEDIA & INSIGHTS (YOUTUBE MASTERCLASSES & RESEARCH MEMORANDA) */}
      <div id="insights">
        <MediaInsightsShowcase />
      </div>

      {/* 09 // SIGNATURE CLOSING (CONFIDENTIAL INTAKE DESK) */}
      <SignatureClosing />
    </div>
  );
}
