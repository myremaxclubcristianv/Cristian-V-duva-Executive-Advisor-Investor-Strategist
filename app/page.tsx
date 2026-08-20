import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AuthoritySection from "@/components/AuthoritySection";
import ExpertiseBlock from "@/components/ExpertiseBlock";
import DecisionFramework from "@/components/DecisionFramework";
import ProjectShowcase from "@/components/ProjectShowcase";
import ExecutiveDesk from "@/components/ExecutiveDesk";
import ExecutiveProfile from "@/components/ExecutiveProfile";
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
        {/* 01 / HERO (Arrival & Authority) */}
        <Hero />

        {/* 02 / AUTHORITY (Why Cristian?) */}
        <AuthoritySection />

        {/* 03 / WHAT HE DOES (Disciplines Practice Index) */}
        <ExpertiseBlock />

        {/* 04 / HOW HE THINKS (Decision Framework) */}
        <DecisionFramework />

        {/* 05 / SELECTED WORK (Architectural Case Studies) */}
        <ProjectShowcase />

        {/* 06 / INTELLIGENCE (Market & Advisory Stream) */}
        <ExecutiveDesk />

        {/* 07 / PERSONAL PROFILE (Warm Ivory Monograph Spread) */}
        <ExecutiveProfile />

        {/* 08 / PRIVATE CONSULTATION (Commercial Climax Statement) */}
        <PrivateCTA />

        {/* 09 / CONTACT DESK (Stationery Intake Desk) */}
        <ContactSection />
      </main>

      {/* PUBLICATION COLOPHON FOOTER */}
      <Footer />
    </div>
  );
}
