import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import VisualBreathingSpace from "@/components/VisualBreathingSpace";
import AboutSection from "@/components/AboutSection";
import RealEstateChapter from "@/components/RealEstateChapter";
import CapitalStrategyVisual from "@/components/CapitalStrategyVisual";
import GeographicalSequence from "@/components/GeographicalSequence";
import LifestyleSection from "@/components/LifestyleSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen w-full overflow-x-hidden bg-[#F6F6F3] text-[#111111]">
      {/* Minimal Navigation Header */}
      <Navigation />

      <main className="relative z-10 flex-1">
        {/* 01 / HERO (100svh, Visual Brand Signature Opening) */}
        <Hero />

        {/* 02 / VISUAL BREATHING SPACE (Full-Width Architectural Pause) */}
        <VisualBreathingSpace />

        {/* 03 / PERSONAL INTRODUCTION & VISUAL ARCHIVE FRAGMENTS */}
        <AboutSection />

        {/* 04 / REAL ESTATE CINEMATIC SEQUENCE (Image -> Location -> Statement) */}
        <RealEstateChapter />

        {/* 05 / CAPITAL VISUAL STATEMENT & STRATEGY EXECUTION SEQUENCE */}
        <CapitalStrategyVisual />

        {/* 06 / GEOGRAPHICAL SPHERE (Full-Width Hub Compositions) */}
        <GeographicalSequence />

        {/* 07 / PERSONAL LIFE ARCHIVE (Asymmetric Photo Composition) */}
        <LifestyleSection />

        {/* 08 / PRIVATE CONVERSATION & DIRECT CONTACT DESK */}
        <ContactSection />
      </main>

      {/* Minimal Colophon Footer */}
      <Footer />
    </div>
  );
}
