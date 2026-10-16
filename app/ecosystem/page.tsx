import { Metadata } from "next";
import Link from "next/link";
import ExecutiveHeader from "@/components/ExecutiveHeader";
import Footer from "@/components/Footer";
import { getFeaturedProjects } from "@/lib/projects";
import { ArrowUpRight, Compass, ShieldCheck, Layers, Cpu } from "lucide-react";

export const metadata: Metadata = {
  title: "Ecosystem & Digital Infrastructure — Cristian Văduva",
  description: "An integrated network of specialized investment vehicles, real estate advisory, and media platforms directed by Cristian Văduva.",
};

export default function EcosystemPage() {
  const projects = getFeaturedProjects();

  return (
    <div className="flex flex-col min-h-screen bg-[#07090D] text-[#F5F4EF] selection:bg-[#93C8FF]/25 selection:text-[#F5F4EF]">
      <ExecutiveHeader />

      <main className="flex-1 pt-28 sm:pt-36 pb-24">
        {/* ======================================================== */}
        {/* 01 // ARCHITECTURAL HEADER                               */}
        {/* ======================================================== */}
        <section className="site-chapter border-b border-white/[0.08] relative overflow-hidden bg-arch-grid">
          {/* Corner Crosshairs */}
          <div className="absolute top-10 left-6 lg:left-16 w-3 h-3 border-t border-l border-[#93C8FF]" />
          <div className="absolute top-10 right-6 lg:right-16 w-3 h-3 border-t border-r border-[#93C8FF]" />

          <div className="site-container space-y-12 relative z-10">
            <div className="flex items-center justify-between border-b border-white/[0.1] pb-4 font-mono text-[10px] sm:text-xs uppercase tracking-[0.28em] text-[#93C8FF]">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#93C8FF] animate-pulse" />
                <span>01 // VENTURE INFRASTRUCTURE</span>
                <span className="text-white/20">/</span>
                <span className="text-[#B8C2CF]">THE ECOSYSTEM</span>
              </div>
              <span className="text-[#8A95A5] hidden sm:block">EUROPEAN OPERATIONAL AXES</span>
            </div>

            <div className="max-w-4xl space-y-6">
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl xl:text-8xl text-[#F5F4EF] leading-[0.98] tracking-tight">
                Building Intelligent<br />
                <span className="text-[#A97F60] italic font-normal">Capital Systems.</span>
              </h1>

              <p className="font-sans text-base sm:text-xl text-[#B8C2CF] font-light max-w-2xl leading-relaxed">
                An integrated matrix of proprietary operating platforms, advisory vehicles, and digital media entities directed by Cristian Văduva across Europe.
              </p>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 02 // ECOSYSTEM INDEX (NUMBERED ARCHITECTURAL ROWS)      */}
        {/* ======================================================== */}
        <section className="site-chapter border-b border-white/[0.08] bg-[#0C1119]">
          <div className="site-container space-y-12">
            <div className="space-y-3 border-b border-white/[0.08] pb-6">
              <div className="flex items-center gap-3 font-mono text-[10px] sm:text-xs uppercase tracking-[0.28em] text-[#93C8FF]">
                <span className="w-2 h-2 rounded-full bg-[#93C8FF] animate-pulse" />
                <span>02 // THE INFRASTRUCTURE CATALOG</span>
                <span className="text-white/20">/</span>
                <span className="text-[#B8C2CF]">ACTIVE PLATFORMS</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#F5F4EF] tracking-tight">
                Specialized Entities & Ventures
              </h2>
            </div>

            <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
              {projects.map((project, idx) => (
                <div
                  key={project.id}
                  className="py-10 grid lg:grid-cols-12 gap-8 items-baseline hover:bg-[#1B2028]/40 transition-colors px-2 group"
                >
                  <div className="lg:col-span-2 flex items-baseline justify-between lg:justify-start gap-4">
                    <span className="font-monumental text-5xl text-[#1B2028] group-hover:text-[#93C8FF] transition-colors">
                      0{idx + 1}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-emerald-400 border border-emerald-500/30 px-2 py-0.5 bg-emerald-500/10 lg:hidden">
                      {project.status}
                    </span>
                  </div>

                  <div className="lg:col-span-4 space-y-2">
                    <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#A97F60] font-semibold">
                      {project.category}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F4EF] group-hover:text-[#93C8FF] transition-colors">
                      {project.name}
                    </h3>
                  </div>

                  <div className="lg:col-span-4 space-y-2">
                    <p className="font-sans text-xs sm:text-sm text-[#B8C2CF] font-light leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="lg:col-span-2 flex lg:justify-end items-center">
                    {project.url && project.url !== "#" ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 border border-white/[0.12] group-hover:border-[#93C8FF] group-hover:text-[#93C8FF] font-mono text-[11px] uppercase tracking-wider transition-colors"
                      >
                        <span>ACCESS PLATFORM</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <span className="font-mono text-[10px] uppercase tracking-wider text-[#8A95A5]">
                        INTERNAL INTELLIGENCE
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 03 // SYNDICATE INTAKE CALLOUT                           */}
        {/* ======================================================== */}
        <section className="site-chapter bg-[#07090D]">
          <div className="site-container">
            <div className="p-10 sm:p-14 border border-white/[0.14] bg-[#0C1119] flex flex-col md:flex-row md:items-center justify-between gap-8 shadow-2xl relative">
              <div className="space-y-3 max-w-xl">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#93C8FF]">
                  STRATEGIC SYNDICATE
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-[#F5F4EF]">
                  Partnering on High-Yield Digital Infrastructure
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#B8C2CF] font-light leading-relaxed">
                  We originate and co-develop software, property intelligence, and capital allocation frameworks with strategic co-investors.
                </p>
              </div>

              <Link
                href="/contact"
                className="px-8 py-4 bg-[#93C8FF] hover:bg-[#B8C2CF] text-[#07090D] font-mono text-xs uppercase tracking-[0.2em] font-bold transition-all shadow-xl shrink-0"
              >
                PROPOSE PARTNERSHIP
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
