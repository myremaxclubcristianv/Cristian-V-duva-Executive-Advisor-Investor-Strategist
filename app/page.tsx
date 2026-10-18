// app/page.tsx - Architectural Executive Homepage
import ExecutiveHeader from "@/components/ExecutiveHeader";
import ExecutiveExperience from "@/components/architecture/ExecutiveExperience";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full flex flex-col overflow-x-hidden bg-[#07090D] text-[#F5F4EF] selection:bg-[#A97F60]/20 selection:text-[#F5F4EF]">
      {/* 00 / Architectural Navigation */}
      <ExecutiveHeader />

      <main className="relative z-10 flex-1 w-full">
        {/* The 8-Chapter Masterpiece Experience */}
        <ExecutiveExperience />
      </main>

      {/* 08 / Architectural Colophon Footer */}
      <Footer />
    </div>
  );
}
