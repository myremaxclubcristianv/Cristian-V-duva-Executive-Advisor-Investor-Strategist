import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ExecutiveProfile from "@/components/ExecutiveProfile";
import ExpertiseBlock from "@/components/ExpertiseBlock";
import ExecutiveDesk from "@/components/ExecutiveDesk";
import ProjectShowcase from "@/components/ProjectShowcase";
import PrivateCTA from "@/components/PrivateCTA";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ResidenceViewport from "@/components/ResidenceViewport";

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen w-full overflow-x-hidden bg-background">
      {/* FULLSCREEN CINEMATIC RESIDENCE VIEWPORT */}
      <ResidenceViewport />

      {/* WHISPER-QUIET LUXURY NAVIGATION */}
      <Navigation />

      <main className="relative z-10 flex-1">
        {/* 01 / 06 — ARRIVE (Architectural Cover Arrival) */}
        <Hero />

        {/* 02 / 06 — THE ADVISOR (Warm Ivory Editorial Monograph) */}
        <ExecutiveProfile />

        {/* 03 / 06 — DISCIPLINES (Interactive Strategic Practice Index) */}
        <ExpertiseBlock />

        {/* 04 / 06 — CAPITAL INTELLIGENCE (Executive Desk Stream) */}
        <ExecutiveDesk />

        {/* 05 / 06 — SELECTED ENGAGEMENTS (Architectural Case Studies) */}
        <ProjectShowcase />

        {/* 06 / 06 — PRIVATE OFFICE (Emotional Climax Statement & Access) */}
        <PrivateCTA />

        {/* CONTACT DESK (Warm Ivory Stationery Intake Desk) */}
        <ContactSection />
      </main>

      {/* PUBLICATION COLOPHON FOOTER */}
      <Footer />
    </div>
  );
}
