import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import VisualBreathingSpace from "@/components/VisualBreathingSpace";
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
        {/* 01 / HERO (Cristian Văduva Digital Monograph & Signature Opening) */}
        <Hero />

        {/* 02 / THE PERSON (Human Profile, Personality & Multidisciplinary Foundation) */}
        <AboutSection />

        {/* 03 / THE WORLD (Architectural Landscape & Visual Breathing Space) */}
        <VisualBreathingSpace />

        {/* 04 / REAL ESTATE (Bucharest · Monaco · Dubai Continuous Canvas) */}
        <RealEstateChapter />

        {/* 05 / CAPITAL & MIND (Typographic Statement & Strategic Execution) */}
        <CapitalStrategyVisual />

        {/* 06 / LIFE & ARCHIVE (Personal Photographic Collage) */}
        <LifestyleSection />

        {/* 07 / CONVERSATION (Quiet Contact Desk & Direct Intake) */}
        <ContactSection />
      </main>

      {/* Minimal Colophon Footer */}
      <Footer />
    </div>
  );
}
