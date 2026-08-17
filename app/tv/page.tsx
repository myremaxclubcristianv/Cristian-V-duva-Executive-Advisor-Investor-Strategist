import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import MediaFeature from "@/components/MediaFeature";
import VideoLibrary from "@/components/VideoLibrary";
import YouTubeChannelCTA from "@/components/YouTubeChannelCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Executive TV & Digital Broadcasts — Cristian Văduva",
  description: "Official digital broadcasts, luxury real estate commentary, and strategic investment analysis by Cristian Văduva.",
};

export default function TVPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-text-primary pt-20">
      <Navigation />
      <main className="flex-1">
        <MediaFeature />
        <VideoLibrary filterType="video" />
        <YouTubeChannelCTA />
      </main>
      <Footer />
    </div>
  );
}
