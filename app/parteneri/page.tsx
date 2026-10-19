import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Globe,
  ShieldCheck,
  Building2,
  ArrowRight,
  Scale,
  FileText,
} from "lucide-react";
import ExecutiveHeader from "@/components/ExecutiveHeader";
import Footer from "@/components/Footer";
import Section from "@/components/ui/Section";
import ChapterDivider from "@/components/ui/ChapterDivider";
import ArchitecturalFeaturePanel from "@/components/ui/ArchitecturalFeaturePanel";
import ClosingFrame from "@/components/ui/ClosingFrame";

export const metadata: Metadata = {
  title: "Parteneriate și Afilieri Instituționale | Executive Cristian Văduva",
  description:
    "Relațiile profesionale confirmate ale lui Cristian Văduva: partener asociat în rețeaua internațională Chestertons Global și partener autorizat Generali România pentru asigurarea activelor de mare valoare.",
  alternates: {
    canonical: "https://cristianvaduva.com/parteneri",
  },
  openGraph: {
    title: "Parteneriate & Afilieri Profesionale | Cristian Văduva",
    description:
      "Afilieri factuale cu Chestertons Global Network și Generali România, completate de colaborări cu experți independenți acreditați.",
    url: "https://cristianvaduva.com/parteneri",
    type: "website",
  },
};

export default function ParteneriPage() {
  return (
    <Section variant="dark" className="min-h-screen bg-[#07090D] text-[#F5F4EF] selection:bg-[#93C8FF]/25 selection:text-[#F5F4EF]">
      <ExecutiveHeader />

      <main className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 overflow-hidden">
        {/* Background atmospheric glows */}
        <div className="absolute top-24 left-1/4 w-[500px] h-[500px] bg-[#93C8FF]/5 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 w-[450px] h-[450px] bg-[#A97F60]/5 rounded-full blur-[160px] pointer-events-none" />

        <div className="site-container relative z-10 space-y-24 sm:space-y-36">
          {/* HERO SECTION */}
          <section className="border-b border-white/[0.08] pb-16 lg:pb-24">
            <div className="max-w-4xl space-y-6 sm:space-y-8">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1 bg-white/[0.03] border border-white/[0.08] font-mono text-[11px] tracking-[0.25em] text-[#A97F60] uppercase rounded-full">
                <Globe className="w-3.5 h-3.5 text-[#93C8FF]" />
                <span>AFILIERI & COORDONARE DE SPECIALITATE</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F5F4EF] font-normal tracking-tight leading-[1.08]">
                Parteneriate și Relații Profesionale Confirmate
              </h1>

              <p className="font-sans text-base sm:text-lg text-[#B8C2CF] leading-relaxed font-light max-w-3xl">
                Executive colaborează cu rețele imobiliare globale de prestigiu și asigurători instituționali de top. Fiecare parteneriat are roluri clar delimitate, garantând clienților noștri acces nemijlocit la expertiză internațională și protecție patrimonială veritabilă.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  href="/programare"
                  className="btn-apple-pill-primary inline-flex items-center gap-2 min-h-[48px]"
                >
                  <span>SOLICITĂ DISCUȚIE DE 20 MINUTE</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/pentru-clienti"
                  className="btn-apple-pill-secondary inline-flex items-center gap-2 min-h-[48px]"
                >
                  <span>PENTRU CLIENȚI PRIVATAȚI</span>
                </Link>
              </div>
            </div>
          </section>

          {/* CHAPTER 01 // CHESTERTONS GLOBAL NETWORK */}
          <section className="space-y-12">
            <ChapterDivider
              number="01"
              category="REȚEA IMOBILIARĂ INTERNAȚIONALĂ"
              title="Chestertons Global Network — Fondată la Londra în 1805"
              description="Parteneriat profesional asociat care deschide clienților privați din România acces direct către marile piețe rezidențiale din Marea Britanie, Europa Occidentală și Emiratele Arabe Unite."
            />

            <ArchitecturalFeaturePanel
              tag="AFILIERE CONFIRMATĂ // CHESTERTONS GLOBAL"
              title="Acces Direct la Portofoliul Rezidențial Global de Lux"
              description="Cristian Văduva activează în calitate de partener/asociat internațional pe piața din România în cadrul rețelei Chestertons Global. Asigură filtrarea preliminară a proprietăților și colaborarea directă cu birourile partenere din Londra, Riviera Franceză, Monaco, Dubai și Spania."
              imageSrc="/media/cristian-vaduva/personal/cristian-vaduva-office-chestertons-global-network.png"
              imageAlt="Cristian Văduva la biroul Chestertons Global Network"
              imageCaption="Cristian Văduva · Rețeaua Chestertons Global"
              imagePosition="right"
              bullets={[
                {
                  title: "Prezență în peste 30 de țări",
                  desc: "Rețea de peste 100 de birouri locale pe cele mai lichide piețe rezidențiale din lume.",
                },
                {
                  title: "Proprietăți on & off-market",
                  desc: "Acces la reședințe istorice, penthouse-uri și vile care nu sunt promovate pe portalurile publice.",
                },
                {
                  title: "Asistență bilingvă la București",
                  desc: "Coordonarea comunicării, selecției și documentației înainte de deplasarea la vizionare externă.",
                },
              ]}
              ctaText="CONSULTĂ PORTOFOLIUL GLOBAL"
              ctaHref="/programare"
              stats={[
                { value: "1805", label: "Anul Fondării" },
                { value: "30+ Țări", label: "Acoperire Globală" },
                { value: "100+", label: "Birouri Partenere" },
              ]}
            />

            {/* Disclaimer Chestertons */}
            <div className="p-5 bg-white/[0.02] border-l-2 border-[#A97F60] font-sans text-xs text-[#8A95A5] leading-relaxed">
              <strong className="text-[#F5F4EF] font-medium block mb-1">Delimitare juridică factuală a mărcii:</strong>
              Chestertons Global este o entitate internațională independentă, iar marca aparține deținătorilor săi de drept. Platforma Executive nu deține și nu operează brandul Chestertons, ci activează în calitate de partener/asociat internațional pentru mandate imobiliare specifice.
            </div>
          </section>

          {/* CHAPTER 02 // GENERALI ROMÂNIA */}
          <section className="space-y-12">
            <ChapterDivider
              number="02"
              category="PROTECȚIE PATRIMONIALĂ & ASIGURARE"
              title="Partener Autorizat Generali România Asigurare Reasigurare S.A."
              description="Soluții specializate de asigurare patrimonială și management al riscului fizic pentru clădiri și proprietăți rezidențiale de mare valoare."
            />

            <ArchitecturalFeaturePanel
              tag="CONTRACT AUTORIZAT // GENERALI ROMÂNIA"
              title="Protecția Patrimoniului Imobiliar & Managementul Riscului Fizic"
              description="Cristian Văduva deține un contract autorizat de agent/partener de asigurare cu Generali România Asigurare Reasigurare S.A. Oferim consiliere de specialitate în structurarea polițelor complete de asigurare a clădirilor de lux, calculul corect al valorii de reconstrucție (evitând subasigurarea) și protecția finisajelor premium."
              imageSrc="/media/cristian-vaduva/personal/cristian-vaduva-office-generali-portfolio-protection.png"
              imageAlt="Cristian Văduva — Certificare și activitate Generali România"
              imageCaption="Cristian Văduva · Soluții de Asigurare Clădiri Prime"
              imagePosition="left"
              bullets={[
                {
                  title: "Polițe complete pentru proprietăți de mare valoare",
                  desc: "Acoperire completă a riscurilor catastrofice, incendiilor, infiltrațiilor și viciilor de structură.",
                },
                {
                  title: "Calculul valorii de înlocuire la cost real",
                  desc: "Evaluarea realistă a costurilor de manoperă și materiale de import pentru a preveni subasigurarea.",
                },
                {
                  title: "Cadru reglementat ASF",
                  desc: "Toate produsele sunt intermediate conform normelor Autorității de Supraveghere Financiară.",
                },
              ]}
              ctaText="DISCUTĂ AUDITUL DE ASIGURARE"
              ctaHref="/programare"
              stats={[
                { value: "ASF", label: "Cadru Reglementat" },
                { value: "Generali", label: "Emitent Instituțional" },
                { value: "100%", label: "Protecție Activ" },
              ]}
            />

            {/* Disclaimer Generali */}
            <div className="p-5 bg-white/[0.02] border-l-2 border-[#93C8FF] font-sans text-xs text-[#8A95A5] leading-relaxed">
              <strong className="text-[#F5F4EF] font-medium block mb-1">Delimitare de autoritate:</strong>
              Polițele de asigurare sunt emise exclusiv de către Generali România Asigurare Reasigurare S.A. în conformitate cu termenii contractuali și condițiile generale de asigurare aprobate. Executive furnizează consultanța de încadrare și analiza riscului fizic al activului.
            </div>
          </section>

          {/* CHAPTER 03 // REȚEAUA DESCHISĂ DE COLABORATORI ACREDITAȚI */}
          <section className="space-y-12">
            <ChapterDivider
              number="03"
              category="EXPERTIZĂ SPECIALIZATĂ INDEPENDENTĂ"
              title="Rețeaua Deschisă de Profesioniști Acreditați"
              description="Nicio tranzacție imobiliară responsabilă nu poate fi condusă de o singură persoană. În funcție de cerințele mandatului, colaborăm deschis cu consilierii dumneavoastră existenți sau vă punem în contact cu experți verificați."
            />

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 font-sans text-xs sm:text-sm text-[#8A95A5]">
              <div className="p-8 bg-[#0C1119] border border-white/[0.08] space-y-4 hover:border-[#93C8FF]/40 transition-colors">
                <div className="w-10 h-10 rounded-none bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-[#93C8FF]">
                  <Scale className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl text-[#F5F4EF]">Avocați de Barou</h3>
                <p className="leading-relaxed">
                  Cabinete de avocatură specializate în drept imobiliar, urbanism și litigii de proprietate pentru auditul formal al titlurilor.
                </p>
                <div className="pt-2 font-mono text-[10px] text-[#A97F60] uppercase tracking-wider">
                  BAROUL BUCUREȘTI
                </div>
              </div>

              <div className="p-8 bg-[#0C1119] border border-white/[0.08] space-y-4 hover:border-[#93C8FF]/40 transition-colors">
                <div className="w-10 h-10 rounded-none bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-[#93C8FF]">
                  <FileText className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl text-[#F5F4EF]">Notari Publici</h3>
                <p className="leading-relaxed">
                  Birouri notariale cu experiență în tranzacții rezidențiale de mare valoare, garantând legalitatea autentificării și a transferului.
                </p>
                <div className="pt-2 font-mono text-[10px] text-[#A97F60] uppercase tracking-wider">
                  AUTENTIFICARE SOLEMNĂ
                </div>
              </div>

              <div className="p-8 bg-[#0C1119] border border-white/[0.08] space-y-4 hover:border-[#93C8FF]/40 transition-colors">
                <div className="w-10 h-10 rounded-none bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-[#93C8FF]">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl text-[#F5F4EF]">Experți Tehnici Atestați în Construcții</h3>
                <p className="leading-relaxed">
                  Ingineri structuriști atestați și diriginți de șantier autorizați pentru inspectarea rezistenței, instalațiilor și calității execuției.
                </p>
                <div className="pt-2 font-mono text-[10px] text-[#A97F60] uppercase tracking-wider">
                  STRUCTURĂ & INSTALAȚII
                </div>
              </div>

              <div className="p-8 bg-[#0C1119] border border-white/[0.08] space-y-4 hover:border-[#93C8FF]/40 transition-colors">
                <div className="w-10 h-10 rounded-none bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-[#93C8FF]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl text-[#F5F4EF]">Evaluatori ANEVAR</h3>
                <p className="leading-relaxed">
                  Evaluatori atestați conform standardelor internaționale de evaluare pentru estimarea valorii de piață și de creditare.
                </p>
                <div className="pt-2 font-mono text-[10px] text-[#A97F60] uppercase tracking-wider">
                  STANDARDE IVS / ANEVAR
                </div>
              </div>
            </div>
          </section>

          {/* CLOSING FRAME */}
          <ClosingFrame
            category="INITIERE PARTENERIAT SAU MANDAT"
            title="Doriți să valorificați rețeaua noastră de parteneri pentru proiectul dumneavoastră?"
            description="Fie că aveți nevoie de acces la proprietăți internaționale prin Chestertons sau doriți protejarea unui activ de mare valoare cu Generali, vă punem la dispoziție canale directe verificate."
            primaryCtaText="SOLICITĂ DISCUȚIE (20 MIN)"
            primaryCtaHref="/programare"
            secondaryCtaText="REPREZENTARE CLIENȚI"
            secondaryCtaHref="/pentru-clienti"
            imageSrc="/media/cristian-vaduva/personal/cristian-vaduva-office-chestertons-global-network.png"
          />
        </div>
      </main>

      <Footer />
    </Section>
  );
}
