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

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen w-full overflow-x-hidden bg-[#070707] text-[#F4F1EA]">
      {/* WHISPER-QUIET LUXURY EDITORIAL NAVIGATION */}
      <Navigation />

      <main className="relative z-10 flex-1">
        {/* 01 / HERO (Asymmetric Editorial Opening) */}
        <Hero />

        {/* 02 / AUTHORITY (Institutional Decision Statement & Typographic Disciplines) */}
        <AuthoritySection />

        {/* 03 / THE PRACTICE (4 Major Advisory Disciplines) */}
        <ExpertiseBlock />

        {/* 04 / METHODOLOGY (6-Stage Decision Framework) */}
        <DecisionFramework />

        {/* 05 / SELECTED MANDATES (Architectural & Investment Portfolio Compositions) */}
        <ProjectShowcase />

        {/* 06 / CAPITAL & INTELLIGENCE (Institutional Research & Market Stream) */}
        <ExecutiveDesk />

        {/* 07 / PROFILE (Executive Monograph Biography) */}
        <ExecutiveProfile />

        {/* 08 / PHILOSOPHY (Major Visual Statement Pause) */}
        <PrivateCTA />

        {/* 09 / PRIVATE CONSULTATION (Direct Confidential Intake Desk) */}
        <ContactSection />
      </main>

      {/* PUBLICATION COLOPHON FOOTER */}
      <Footer />
    </div>
  );
}
