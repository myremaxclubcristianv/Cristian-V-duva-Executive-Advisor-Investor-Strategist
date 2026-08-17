import Navigation from "@/components/Navigation";
import MediaFeature from "@/components/MediaFeature";
import Footer from "@/components/Footer";

export default function VideosPage() {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden pt-20">
      <Navigation />
      <main className="flex-1">
        <MediaFeature />
      </main>
      <Footer />
    </div>
  );
}
