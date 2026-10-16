// app/page.tsx - Architectural Executive Homepage
import ExecutiveHeader from "@/components/ExecutiveHeader";
import ExecutiveExperience from "@/components/architecture/ExecutiveExperience";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen w-full overflow-x-hidden bg-[#07090D] text-[#F5F4EF] selection:bg-[#93C8FF]/25 selection:text-[#F5F4EF]">
      {/* 00 / Architectural Navigation */}
      <ExecutiveHeader />

      <main className="relative z-10 flex-1">
        {/* The 8-Chapter Masterpiece Experience */}
        <ExecutiveExperience />
      </main>

      {/* 08 / Architectural Colophon Footer */}
      <Footer />
    </div>
  );
}
