"use client";

import React from "react";
import ArchitecturalHero from "./ArchitecturalHero";
import EditorialInterruption from "./EditorialInterruption";
import SelectedOpportunities from "./SelectedOpportunities";
import InvestmentIntelligence from "./InvestmentIntelligence";
import InternationalPerspective from "./InternationalPerspective";
import EcosystemGrid from "./EcosystemGrid";
import SignatureClosing from "./SignatureClosing";

/**
 * EXECUTIVE DIGITAL FLAGSHIP — MASTER EXPERIENCE
 * Art-directed 7-chapter architectural narrative:
 * 01 // Cinematic Opening & Perspective Orientation
 * 02 // The Principal's Fiduciary Mandate (Real Estate, Investment, Asset Protection)
 * 03 // Selected Real Estate Opportunities (Pattern A Signature & Pattern B Supporting)
 * 04 // Empirical Investment Intelligence & Macroeconomic Surveillance
 * 05 // International Perspective & Cross-Border Corridors (Romania · Monaco · Dubai)
 * 06 // The Integrated Operating Ecosystem
 * 07 // The Closing Fiduciary Statement & Direct Engagement
 */
export default function ExecutiveExperience() {
  return (
    <div className="w-full bg-[#07090D] text-[#F5F4EF] selection:bg-[#93C8FF]/25 selection:text-[#F5F4EF]">
      {/* CHAPTER 01 // CINEMATIC OPENING */}
      <ArchitecturalHero />

      {/* CHAPTER 02 // THE PRINCIPAL'S MANDATE */}
      <EditorialInterruption />

      {/* CHAPTER 03 // SELECTED OPPORTUNITIES */}
      <SelectedOpportunities />

      {/* CHAPTER 04 // INVESTMENT INTELLIGENCE */}
      <InvestmentIntelligence />

      {/* CHAPTER 05 // INTERNATIONAL PERSPECTIVE */}
      <InternationalPerspective />

      {/* CHAPTER 06 // THE INTEGRATED ECOSYSTEM */}
      <EcosystemGrid />

      {/* CHAPTER 07 // THE CLOSING STATEMENT & INTAKE */}
      <SignatureClosing />
    </div>
  );
}
