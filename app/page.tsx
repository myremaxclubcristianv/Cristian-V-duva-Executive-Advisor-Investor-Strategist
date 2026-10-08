import Navigation from "@/components/Navigation";
import MasterBentoExperience from "@/components/MasterBentoExperience";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen w-full overflow-x-hidden bg-[#080809] text-[#F5F5F7] selection:bg-[#B89B72]/30 selection:text-white">
      {/* 00 / Apple Glassmorphic Navigation */}
      <Navigation />

      <main className="relative z-10 flex-1">
        {/* The 9-Cadran Bento Masterpiece Architecture */}
        <MasterBentoExperience />
      </main>

      {/* 07 / Apple Colophon Footer */}
      <Footer />
    </div>
  );
}
