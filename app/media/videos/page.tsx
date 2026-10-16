import ExecutiveHeader from "@/components/ExecutiveHeader";
import MediaFeature from "@/components/MediaFeature";
import Footer from "@/components/Footer";

export default function VideosPage() {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden bg-[#07090D] text-[#F5F4EF] pt-24">
      <ExecutiveHeader />
      <main className="flex-1">
        <MediaFeature />
      </main>
      <Footer />
    </div>
  );
}
