import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import ExecutiveProfile from "@/components/ExecutiveProfile";
import ExecutivePortrait from "@/components/ExecutivePortrait";
import Timeline from "@/components/Timeline";
import WatchCristian from "@/components/WatchCristian";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About — Cristian Văduva",
  description: "Learn about Cristian Văduva's background in luxury real estate, insurance, and investments.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-1">
        <section className="py-section-lg sm:py-section-xl bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-4 sm:space-y-6">
              <p className="text-accent uppercase tracking-wider text-xs sm:text-sm">
                About
              </p>
              <h1 className="font-serif text-hero-lg sm:text-hero-xl text-text-primary">
                The Story
              </h1>
              <p className="text-text-secondary text-body-md sm:text-body-lg px-4">
                Luxury real estate expert with a rich background in sales, financial markets,
                and strategic advisory across Monaco, Dubai, Bucharest, and Europe.
              </p>
            </div>
          </div>
        </section>
        <ExecutivePortrait />
        <ExecutiveProfile />
        <Timeline />
        <WatchCristian />
      </main>
      <Footer />
    </div>
  );
}
