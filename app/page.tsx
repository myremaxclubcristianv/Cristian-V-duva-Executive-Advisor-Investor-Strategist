import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ExecutiveProfile from "@/components/ExecutiveProfile";
import ExecutiveDesk from "@/components/ExecutiveDesk";
import ExecutiveJournal from "@/components/ExecutiveJournal";
import IntelligenceBlock from "@/components/IntelligenceBlock";
import SelectedPropertiesModule from "@/components/SelectedPropertiesModule";
import MediaFeature from "@/components/MediaFeature";
import PrivateCTA from "@/components/PrivateCTA";
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
        {/* 01 / 08 — ARRIVE (Hillside Residence & Arrival) */}
        <Hero />

        {/* 02 / 08 — ENTER & LIVE (Grand Double-Height Salon) */}
        <ExecutiveProfile />

        {/* 03 / 08 — WORK (Dark Walnut Executive Study & Intelligence Desk) */}
        <ExecutiveDesk />

        {/* 04 / 08 — THINK (Private Executive Library & Archive) */}
        <ExecutiveJournal />

        {/* 05 / 08 — ANALYZE (Capital Intelligence Command Suite) */}
        <IntelligenceBlock />

        {/* 06 / 08 — EXHIBIT (Curated Architectural Gallery & Works) */}
        <SelectedPropertiesModule />

        {/* 07 / 08 — WATCH & MEDIA (Acoustic Broadcast Lounge) */}
        <MediaFeature />

        {/* 08 / 08 — RETREAT (Panoramic Infinity Terrace & Private Access) */}
        <PrivateCTA />
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
