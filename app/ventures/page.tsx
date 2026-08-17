import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Ventures — Cristian Văduva",
  description: "Detailed showcase of ventures and projects by Cristian Văduva.",
};

export default function VenturesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-1">
        <section className="py-section-lg sm:py-section-xl bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-4 sm:space-y-6">
              <p className="text-accent uppercase tracking-wider text-xs sm:text-sm">
                Ventures
              </p>
              <h1 className="font-serif text-hero-lg sm:text-hero-xl text-text-primary">
                Strategic Initiatives
              </h1>
              <p className="text-text-secondary text-body-md sm:text-body-lg px-4">
                Strategic initiatives across real estate, technology, and
                business intelligence.
              </p>
            </div>
          </div>
        </section>
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  );
}
