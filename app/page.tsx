import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import VisualBreathingSpace from "@/components/VisualBreathingSpace";
import AboutSection from "@/components/AboutSection";
import RealEstateChapter from "@/components/RealEstateChapter";
import CapitalStrategyVisual from "@/components/CapitalStrategyVisual";
import LifestyleSection from "@/components/LifestyleSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen w-full overflow-x-hidden bg-[#F6F6F3] text-[#111111]">
      {/* Minimal Navigation Header */}
      <Navigation />

      <main className="relative z-10 flex-1">
        {/* MOVEMENT 01 / THE PORTRAIT */}
        <Hero />

        {/* MOVEMENT 02 / THE IMAGE */}
        <VisualBreathingSpace />

        {/* MOVEMENT 03 / THE PERSON */}
        <AboutSection />

        {/* MOVEMENT 04 / THE WORLD OF REAL ESTATE */}
        <RealEstateChapter />

        {/* MOVEMENT 05 / THE MIND */}
        <CapitalStrategyVisual />

        {/* MOVEMENT 06 / LIFE & ARCHIVE */}
        <LifestyleSection />

        {/* MOVEMENT 07 / THE CONVERSATION */}
        <ContactSection />
      </main>

      {/* Minimal Colophon Footer */}
      <Footer />
    </div>
  );
}
