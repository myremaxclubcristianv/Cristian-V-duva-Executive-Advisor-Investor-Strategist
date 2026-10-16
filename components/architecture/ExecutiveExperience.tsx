"use client";

import React from "react";
import ArchitecturalHero from "./ArchitecturalHero";
import EditorialInterruption from "./EditorialInterruption";
import SelectedOpportunities from "./SelectedOpportunities";
import InvestmentIntelligence from "./InvestmentIntelligence";
import InternationalPerspective from "./InternationalPerspective";
import EcosystemDirectory from "@/components/editorial/EcosystemDirectory";
import SignatureClosing from "./SignatureClosing";
import PersonalPerspectiveSection from "@/components/editorial/PersonalPerspectiveSection";

/**
 * EXECUTIVE DIGITAL FLAGSHIP — MASTER EXPERIENCE
 * Art-directed 8-chapter architectural narrative:
 * 01 // Cinematic Opening & Perspective Orientation
 * 02 // The Principal's Fiduciary Mandate (Real Estate, Investment, Asset Protection)
 * 03 // The Human Advisor: Cristian Văduva — Authentic Photographs & Strategic Advisory Thesis
 * 04 // Selected Real Estate Opportunities (Pattern A Signature & Pattern B Supporting)
 * 05 // Empirical Investment Intelligence & Macroeconomic Surveillance
 * 06 // International Perspective & Cross-Border Corridors (Romania · Monaco · Dubai)
 * 07 // The Integrated Operating Ecosystem (All 13 Platforms with Pre-Launch Status)
 * 08 // The Closing Fiduciary Statement & Direct Engagement
 */
export default function ExecutiveExperience() {
  return (
    <div className="w-full bg-[#07090D] text-[#F5F4EF] selection:bg-[#93C8FF]/25 selection:text-[#F5F4EF]">
      {/* CHAPTER 01 // CINEMATIC OPENING */}
      <ArchitecturalHero />

      {/* CHAPTER 02 // THE PRINCIPAL'S MANDATE */}
      <EditorialInterruption />

      {/* CHAPTER 03 // THE HUMAN STRATEGIST — CRISTIAN VĂDUVA */}
      <div id="perspectives">
        <PersonalPerspectiveSection />
      </div>

      {/* CHAPTER 04 // SELECTED OPPORTUNITIES */}
      <SelectedOpportunities />

      {/* CHAPTER 05 // INVESTMENT INTELLIGENCE */}
      <InvestmentIntelligence />

      {/* CHAPTER 06 // INTERNATIONAL PERSPECTIVE */}
      <InternationalPerspective />

      {/* CHAPTER 07 // THE INTEGRATED ECOSYSTEM */}
      <div id="ecosystem">
        <EcosystemDirectory />
      </div>

      {/* CHAPTER 08 // THE CLOSING STATEMENT & INTAKE */}
      <SignatureClosing />
    </div>
  );
}
