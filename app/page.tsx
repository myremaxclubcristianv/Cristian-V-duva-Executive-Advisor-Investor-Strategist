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
        {/* SCENE 01 / IDENTITY */}
        <Hero />

        {/* SCENE 02 / PHOTOGRAPHY */}
        <VisualBreathingSpace />

        {/* SCENE 03 / PERSON */}
        <AboutSection />

        {/* SCENE 04 / REAL ESTATE */}
        <RealEstateChapter />

        {/* SCENE 05 / CAPITAL */}
        <CapitalStrategyVisual />

        {/* SCENE 06 / WORLD */}
        <GeographicalSequence />

        {/* SCENE 07 & 08 / LIFE & ARCHIVE */}
        <LifestyleSection />

        {/* SCENE 09 / CONVERSATION */}
        <ContactSection />
      </main>

      {/* Minimal Colophon Footer */}
      <Footer />
    </div>
  );
}
