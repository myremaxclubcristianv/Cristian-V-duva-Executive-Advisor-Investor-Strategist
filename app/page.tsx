import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import EducationTimeline from "@/components/EducationTimeline";
import ExpertiseBlock from "@/components/ExpertiseBlock";
import RealEstateChapter from "@/components/RealEstateChapter";
import DecisionFramework from "@/components/DecisionFramework";
import MediaSection from "@/components/MediaSection";
import SocialWall from "@/components/SocialWall";
import LifestyleSection from "@/components/LifestyleSection";
import PrivateCTA from "@/components/PrivateCTA";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen w-full overflow-x-hidden bg-[#F7F7F5] text-[#111111]">
      {/* Apple-Style Navigation Header */}
      <Navigation />

      <main className="relative z-10 flex-1">
        {/* 01 / HERO (Personal Brand & Executive Statement Opening) */}
        <Hero />

        {/* 02 / ABOUT (The Person Behind the Professional) */}
        <AboutSection />

        {/* 03 / EDUCATION & JOURNEY (Verified Academic Degrees & Career Trajectory) */}
        <EducationTimeline />

        {/* 04 / EXPERTISE (4 Practice Disciplines) */}
        <ExpertiseBlock />

        {/* 05 / REAL ESTATE & CITIES (Bucharest · Monaco · Dubai) */}
        <RealEstateChapter />

        {/* 06 / METHODOLOGY (Six-Stage Decision Framework) */}
        <DecisionFramework />

        {/* 07 / MEDIA (Official Broadcast, YouTube, Interviews) */}
        <MediaSection />

        {/* 08 / SOCIAL WALL (Verified Platforms) */}
        <SocialWall />

        {/* 09 / BEYOND BUSINESS (Lifestyle, Architecture, Moments) */}
        <LifestyleSection />

        {/* 10 / FINAL CTA (What's Next?) */}
        <PrivateCTA />

        {/* 11 / CONTACT DESK (Direct Intake Desk) */}
        <ContactSection />
      </main>

      {/* Apple-Style Colophon Footer */}
      <Footer />
    </div>
  );
}
