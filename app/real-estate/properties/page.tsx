import { Metadata } from "next";
import ExecutiveHeader from "@/components/ExecutiveHeader";
import Footer from "@/components/Footer";
import PropertiesCatalog from "@/components/editorial/PropertiesCatalog";
import { SectionHeader } from "@/components/editorial";

export const metadata: Metadata = {
  title: "Portofoliu Rezidențial & Proprietăți Verificate — Cristian Văduva",
  description: "Selecție editorială de proprietăți de prestigiu, penthouse-uri, ansambluri rezidențiale și oportunități internaționale verificate pe axa București · Monaco · Dubai.",
};

export default function PropertiesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#07090D] text-[#F5F4EF] selection:bg-[#93C8FF]/25 selection:text-[#F5F4EF]">
      <ExecutiveHeader />

      <main className="flex-1 pt-32 sm:pt-40 lg:pt-44">
        {/* ======================================================== */}
        {/* EDITORIAL HERO SECTION                                   */}
        {/* ======================================================== */}
        <section className="py-20 sm:py-28 lg:py-36 px-6 sm:px-12 lg:px-20 border-b border-white/[0.08] bg-arch-grid relative overflow-hidden">
          {/* Subtle Corner Markers */}
          <div className="absolute top-10 left-6 sm:left-12 lg:left-20 w-3 h-3 border-t border-l border-[#93C8FF]" />
          <div className="absolute top-10 right-6 sm:right-12 lg:right-20 w-3 h-3 border-t border-r border-[#93C8FF]" />

          <div className="max-w-7xl mx-auto space-y-8">
            <SectionHeader
              eyebrow="PORTOFOLIU & ACTIVE VERIFICATE"
              badge="HOMEFIND × AIXLUXURY"
              title={
                <>
                  Selecție Editorială de<br />
                  <span className="text-[#A97F60] italic font-normal">Active Imobiliare de Patrimoniu.</span>
                </>
              }
              description="Fiecare proprietate prezentată a fost auditată conform rigorilor noastre de reprezentare: raritate urbanistică, soliditate structurală, documentație cadastrală verificată și potențial cert de conservare sau apreciere a capitalului."
            />

            {/* Fiduciary Standards Ticker */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/[0.06] font-mono text-[10px] sm:text-[11px] text-[#8A95A5]">
              <div>
                <span className="text-[#93C8FF] block font-semibold">STANDARDE DE AUDIT</span>
                <span>Fără promisiuni neverificate</span>
              </div>
              <div>
                <span className="text-[#93C8FF] block font-semibold">SURSE CONFIRMATE</span>
                <span>HomeFind & CristianVaduva.com</span>
              </div>
              <div>
                <span className="text-[#93C8FF] block font-semibold">CONFIDENȚIALITATE</span>
                <span>Preț la cerere când este privat</span>
              </div>
              <div>
                <span className="text-[#93C8FF] block font-semibold">REPREZENTARE</span>
                <span>Single-Client Fiduciary Only</span>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* PROPERTIES EXHIBITION CATALOG                            */}
        {/* ======================================================== */}
        <div className="py-16 sm:py-24">
          <PropertiesCatalog />
        </div>
      </main>

      <Footer />
    </div>
  );
}
