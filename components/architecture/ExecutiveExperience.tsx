"use client";

import React from "react";
import ArchitecturalHero from "./ArchitecturalHero";
import EditorialInterruption from "./EditorialInterruption";
import ArchitecturalIndex from "./ArchitecturalIndex";
import ImmersiveImageField from "./ImmersiveImageField";
import SpatialComposition from "./SpatialComposition";
import OversizedStatement from "./OversizedStatement";
import DepthAndDetail from "./DepthAndDetail";
import SignatureClosing from "./SignatureClosing";

export default function ExecutiveExperience() {
  return (
    <div className="w-full bg-[#07090D] text-[#F5F4EF] selection:bg-[#93C8FF]/25 selection:text-[#F5F4EF]">
      {/* 01 // WORLD 01: THE VOID (MONUMENTAL HERO OPENING) */}
      <ArchitecturalHero />

      {/* 02 // WORLD 02: THE WHITE CHAMBER (PORCELAIN EDITORIAL INTERRUPTION) */}
      <EditorialInterruption />

      {/* 03 // WORLD 03: THE INDEX (PRACTICE TAXONOMIC CATALOG) */}
      <ArchitecturalIndex />

      {/* 04 // WORLD 04: THE IMMERSIVE GALLERY (COASTAL ASSET FIELD) */}
      <ImmersiveImageField />

      {/* 05 // WORLD 05: THE SPATIAL COLLISION (LAYERED PRACTICE SALON) */}
      <SpatialComposition />

      {/* 06 // WORLD 06: THE STATEMENT (MAXIMAL DISPLAY TYPOGRAPHY) */}
      <OversizedStatement />

      {/* 07 // WORLD 07: THE BLUEPRINT (TECHNICAL PROTOCOL & JURISDICTIONS) */}
      <DepthAndDetail />

      {/* 08 // WORLD 08: THE FINAL FRAME (INTAKE & PUBLICATION COLOPHON) */}
      <SignatureClosing />
    </div>
  );
}
