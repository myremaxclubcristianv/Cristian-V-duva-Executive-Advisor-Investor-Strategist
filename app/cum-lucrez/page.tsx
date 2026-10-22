import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Scale,
  ShieldCheck,
  AlertCircle,
  CheckCircle2,
  ArrowRight,
  Briefcase,
  Coins,
} from "lucide-react";
import ExecutiveHeader from "@/components/ExecutiveHeader";
import Footer from "@/components/Footer";
import Section from "@/components/ui/Section";
import ChapterDivider from "@/components/ui/ChapterDivider";
import NumberedProcessTimeline, { TimelineStep } from "@/components/ui/NumberedProcessTimeline";
import ClosingFrame from "@/components/ui/ClosingFrame";

export const metadata: Metadata = {
  title: "Cum Lucrez: Etape, Analiză și Reprezentare | Cristian Văduva",
  description:
    "Metodologie structurată de lucru, etapele colaborării, confidențialitatea NDA, due diligence cadastral și delimitarea responsabilităților profesionale în mandatele imobiliare.",
  alternates: {
    canonical: "https://executive.cristianvaduva.com/cum-lucrez",
  },
  openGraph: {
    title: "Cum Lucrez: Etape, Analiză și Reprezentare | Cristian Văduva",
    description:
      "Claritate contractuală, etape de lucru, modele de mandat și delimitarea responsabilităților în consultanța imobiliară privată.",
    url: "https://executive.cristianvaduva.com/cum-lucrez",
    type: "website",
  },
};

const DETAILED_PROCESS_STEPS: TimelineStep[] = [
  {
    number: "01",
    stageName: "Consultație Exploratorie (20 Min)",
    duration: "20 Minute",
    summary: "O sesiune preliminară directă pentru a analiza parametrii tranzacției, obiectivele de preț și compatibilitatea de lucru.",
    details: "Fără obligații contractuale sau costuri ascunse. Înțelegem exact ce doriți să achiziționați sau să vindeți și vă transmitem dacă putem crea valoare demonstrabilă în proiect.",
    deliverables: ["Matrice preliminară de obiective", "Evaluarea fezabilității de piață", "Opțiune de semnare NDA bilateral"],
    accentBadge: "DIAGNOSTIC",
  },
  {
    number: "02",
    stageName: "Mandat Bilateral Scris & KYC",
    duration: "1–2 Zile",
    summary: "Semnarea acordului de reprezentare cu definirea transparentă a onorariilor și verificarea identității conform legii.",
    details: "Stabilim modelul financiar de comun acord: retainer fix, success fee sau structură hibridă. Efectuăm verificările legale de cunoaștere a clientelei (KYC conform Legii 129/2019).",
    deliverables: ["Contract de reprezentare unilaterală", "Acord de confidențialitate (NDA)", "Protocol securizat de lucru"],
    accentBadge: "CONTRACTUAL",
  },
  {
    number: "03",
    stageName: "Filtrare Exhaustivă & Due Diligence",
    duration: "3–6 Săptămâni",
    summary: "Identificarea oportunităților on-market și off-market, urmată de verificarea cadastrală și tehnică a fiecărui activ selectat.",
    details: "Nu vizionăm proprietăți la întâmplare. Fiecare imobil propus este analizat comparativ cu tranzacții reale recente și verificat în prealabil din punct de vedere cadastral.",
    deliverables: ["Dosar analitic like-for-like", "Verificare preliminară carte funciară", "Coordonare inspecție tehnică structurală de specialitate"],
    accentBadge: "AUDIT TEHNIC",
  },
  {
    number: "04",
    stageName: "Negociere Strategică de Preț & Clauze",
    duration: "1–2 Săptămâni",
    summary: "Reprezentare exclusivă la masa negocierilor pentru optimizarea prețului de achiziție și a garanțiilor contractuale.",
    details: "Negociem direct cu proprietarul, dezvoltatorul sau reprezentanții acestora, folosind argumente tehnice și comparative de evaluare, eliminând tensiunea din tranzacție.",
    deliverables: ["Strategie de ofertare fundamentată", "Negociere tranșe de plată și condiții suspensive", "Audit draft antecontract (promisiune)"],
    accentBadge: "NEGOCIERE",
  },
  {
    number: "05",
    stageName: "Autentificare Notarială & Predare Activ",
    duration: "Finalizare",
    summary: "Asistență fizică și tehnică la biroul notarial până la semnarea contractului final de vânzare-cumpărare (SPA).",
    details: "Colaborăm cu biroul notarial desemnat pentru verificarea dovezilor de plată, conturilor escrow, certificatelor de atestare fiscală și a procesului-verbal de predare-primire.",
    deliverables: ["Asistență la biroul notarial", "Verificare protocol escrow", "Recepție tehnică și proces-verbal de predare"],
    accentBadge: "FINALIZARE",
  },
];

export default function CumLucrezPage() {
  return (
    <Section variant="dark" className="min-h-screen bg-[#07090D] text-[#F5F4EF] selection:bg-[#93C8FF]/25 selection:text-[#F5F4EF]">
      <ExecutiveHeader />

      <main className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 overflow-hidden">
        {/* Glows */}
        <div className="absolute top-24 left-1/3 w-[500px] h-[500px] bg-[#93C8FF]/5 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute top-2/3 right-1/4 w-[450px] h-[450px] bg-[#A97F60]/5 rounded-full blur-[160px] pointer-events-none" />

        <div className="site-container relative z-10 space-y-24 sm:space-y-36">
          {/* HERO SECTION */}
          <section className="border-b border-white/[0.08] pb-16 lg:pb-24">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              <div className="lg:col-span-7 space-y-6 sm:space-y-8">
                <div className="inline-flex items-center gap-2.5 px-3.5 py-1 bg-white/[0.03] border border-white/[0.08] font-mono text-[11px] tracking-[0.25em] text-[#A97F60] uppercase rounded-full">
                  <Scale className="w-3.5 h-3.5 text-[#93C8FF]" />
                  <span>METODOLOGIE RIGUROASĂ · TRANSPARENȚĂ DEPLINĂ</span>
                </div>

                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F5F4EF] font-normal tracking-tight leading-[1.08]">
                  Cum Lucrez: Etape, Analiză și Reprezentare
                </h1>

                <p className="font-sans text-base sm:text-lg text-[#B8C2CF] leading-relaxed font-light max-w-2xl">
                  Colaborările de succes se construiesc pe criterii clare, absența conflictelor de interese, rigoare analitică și protecția patrimoniului fiecărui client.
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

              {/* Right Column: Authentic Image Underwriting Desk */}
              <div className="lg:col-span-5">
                <div className="relative aspect-[4/5] bg-[#0C1119] border border-white/[0.12] rounded-3xl overflow-hidden group shadow-2xl">
                  <Image
                    src="/media/cristian-vaduva/personal/cristian-vaduva-office-blueprints-underwriting.jpg"
                    alt="Cristian Văduva — Audit documentar și analiză planuri"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07090D] via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#07090D]/90 backdrop-blur-md border border-white/10 rounded-2xl font-mono text-xs text-[#E1E4EA] flex items-center justify-between">
                    <div>
                      <span className="text-[#A97F60] uppercase block text-[9px] font-semibold">AUDIT DOCUMENTAR</span>
                      <span className="font-sans font-medium text-xs">Analiză cadastrală & planuri tehnice</span>
                    </div>
                    <span className="w-2 h-2 rounded-full bg-[#93C8FF]" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CHAPTER 01 // ETAPELE COLABORĂRII (TIMELINE) */}
          <section className="space-y-12">
            <ChapterDivider
              number="01"
              category="PROCESUL ÎN 5 PAȘI"
              title="Călătoria unui Mandat de la Diagnoză la Încheiere"
              description="Fiecare tranzacție parcurge o succesiune logică, concepută pentru a asigura fundamentarea solidă a fiecărei decizii financiare și eliminarea riscurilor ascunse."
            />

            <NumberedProcessTimeline steps={DETAILED_PROCESS_STEPS} />
          </section>

          {/* CHAPTER 02 // REPREZENTARE STRUCTURATĂ PE TIP DE CLIENT */}
          <section className="space-y-12">
            <ChapterDivider
              number="02"
              category="CADRU STRATEGIC"
              title="Reprezentare Adaptată: Cumpărători · Vânzători · Închiriere · Investitori"
              description="Fiecare mandat este calibrat pe obiectivele specifice ale clientului, asigurând eliminarea oricărui conflict de interese și acționând exclusiv în sprijinul părții reprezentate."
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 1: Cumpărători */}
              <div className="p-8 bg-[#0C1119] border border-white/[0.08] hover:border-[#93C8FF]/50 transition-all flex flex-col justify-between space-y-6 group shadow-lg">
                <div className="space-y-3">
                  <span className="font-mono text-xs text-[#93C8FF] font-semibold tracking-wider uppercase block">
                    01 // CUMPĂRĂTORI
                  </span>
                  <h3 className="font-serif text-2xl text-[#F5F4EF]">Buyer Advisory</h3>
                  <p className="font-sans text-xs text-[#B8C2CF] leading-relaxed font-light">
                    Definirea criteriilor, filtrare riguroasă a ofertelor on & off-market, analiză comparativă de preț și asistență fermă la negociere.
                  </p>
                </div>
                <div className="pt-4 border-t border-white/[0.06] font-mono text-[11px] text-[#A97F60]">
                  Focus: Eficiență, protecție și economisire de timp.
                </div>
              </div>

              {/* Card 2: Vânzători */}
              <div className="p-8 bg-[#0C1119] border border-white/[0.08] hover:border-[#A97F60]/50 transition-all flex flex-col justify-between space-y-6 group shadow-lg">
                <div className="space-y-3">
                  <span className="font-mono text-xs text-[#A97F60] font-semibold tracking-wider uppercase block">
                    02 // VÂNZĂTORI
                  </span>
                  <h3 className="font-serif text-2xl text-[#F5F4EF]">Seller Advisory</h3>
                  <p className="font-sans text-xs text-[#B8C2CF] leading-relaxed font-light">
                    Poziționare corectă pe piață, strategie de preț argumentată, materiale editoriale de prezentare și calificare directă a cumpărătorilor.
                  </p>
                </div>
                <div className="pt-4 border-t border-white/[0.06] font-mono text-[11px] text-[#A97F60]">
                  Focus: Maximizarea valorii și promovare calificată.
                </div>
              </div>

              {/* Card 3: Închiriere */}
              <div className="p-8 bg-[#0C1119] border border-white/[0.08] hover:border-white/[0.2] transition-all flex flex-col justify-between space-y-6 group shadow-lg">
                <div className="space-y-3">
                  <span className="font-mono text-xs text-[#B8C2CF] font-semibold tracking-wider uppercase block">
                    03 // ÎNCHIRIERE
                  </span>
                  <h3 className="font-serif text-2xl text-[#F5F4EF]">Rental Placement</h3>
                  <p className="font-sans text-xs text-[#B8C2CF] leading-relaxed font-light">
                    Poziționarea ofertei vs cererea solventă, selecția atentă a chiriașilor, organizarea vizionărilor și securizarea clauzelor contractuale.
                  </p>
                </div>
                <div className="pt-4 border-t border-white/[0.06] font-mono text-[11px] text-[#A97F60]">
                  Focus: Stabilitate pe termen lung și conservarea activului.
                </div>
              </div>

              {/* Card 4: Investitori */}
              <div className="p-8 bg-[#0C1119] border border-[#93C8FF]/30 bg-[#93C8FF]/[0.02] flex flex-col justify-between space-y-6 shadow-xl shadow-[#93C8FF]/5 group">
                <div className="space-y-3">
                  <span className="font-mono text-xs text-[#93C8FF] font-semibold tracking-wider uppercase block">
                    04 // INVESTITORI
                  </span>
                  <h3 className="font-serif text-2xl text-[#F5F4EF]">Capital Allocation</h3>
                  <p className="font-sans text-xs text-[#B8C2CF] leading-relaxed font-light">
                    Screening metodic de oportunități după buget și lichiditate, separarea prețului cerut de ipoteze și evaluarea riscurilor reale.
                  </p>
                </div>
                <div className="pt-4 border-t border-white/[0.06] font-mono text-[11px] text-[#93C8FF]">
                  Focus: Decizie informată fără garanții speculate.
                </div>
              </div>
            </div>

            {/* Concise Contractual Framework Box */}
            <div className="p-6 sm:p-8 bg-white/[0.02] border-l-2 border-[#93C8FF] font-sans text-xs sm:text-sm text-[#B8C2CF] leading-relaxed space-y-2">
              <strong className="text-[#F5F4EF] font-medium text-base block">
                Transparență Contractuală & Acord Prealabil Scris
              </strong>
              <p>
                Toate condițiile colaborării, obiectivele stabilite și termenii comerciali ai mandatului se definesc în mod transparent, în formă scrisă bilaterală, înainte de demararea oricărei activități. Fiecare mandat acționează exclusiv pentru partea contractantă, garantând absența oricărui conflict de interese.
              </p>
            </div>
          </section>

          {/* CHAPTER 03 // DELIMITAREA COMPETENȚELOR */}
          <section className="space-y-12">
            <ChapterDivider
              number="03"
              category="CADRU LEGAL & PROFESIONAL"
              title="Delimitarea Competențelor: Ce Oferim Direct vs. Profesioniști Externi"
              description="Pentru siguranța tranzacției, delimităm cu strictețe rolul de consiliere strategică de expertizele rezervate exclusiv profesiilor reglementate prin lege."
            />

            <div className="grid md:grid-cols-2 gap-8">
              {/* Direct Services */}
              <div className="p-8 sm:p-10 bg-[#0C1119] border border-white/[0.08] space-y-6">
                <div className="flex items-center gap-2 text-[#93C8FF] font-mono text-xs uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>SERVICII ASIGURATE DIRECT DE CRISTIAN VĂDUVA</span>
                </div>

                <ul className="space-y-4 font-sans text-sm text-[#B8C2CF]">
                  <li className="flex items-start gap-3">
                    <span className="text-[#93C8FF] font-mono text-xs mt-0.5">•</span>
                    <span>Consultanță strategică imobiliară și formulare mandat de căutare / vânzare</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#93C8FF] font-mono text-xs mt-0.5">•</span>
                    <span>Analiză comparativă de piață bazată pe tranzacții reale like-for-like</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#93C8FF] font-mono text-xs mt-0.5">•</span>
                    <span>Filtrare preliminară a proprietăților și eliminarea celor compromise cadastral</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#93C8FF] font-mono text-xs mt-0.5">•</span>
                    <span>Asistență directă în formularea strategiei și poziției de negociere de preț</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#93C8FF] font-mono text-xs mt-0.5">•</span>
                    <span>Coordonarea comunicării între toți experții implicați în tranzacție</span>
                  </li>
                </ul>
              </div>

              {/* External Regulated Professionals */}
              <div className="p-8 sm:p-10 bg-[#0C1119] border border-white/[0.08] space-y-6">
                <div className="flex items-center gap-2 text-[#A97F60] font-mono text-xs uppercase tracking-wider">
                  <AlertCircle className="w-4 h-4" />
                  <span>EXPERTIZE REZERVATE PROFESIILOR REGLEMENTATE</span>
                </div>

                <ul className="space-y-4 font-sans text-sm text-[#8A95A5]">
                  <li className="flex items-start gap-3">
                    <span className="text-[#A97F60] font-mono text-xs mt-0.5">•</span>
                    <div>
                      <strong className="text-[#F5F4EF] font-medium block">Avocați de Barou:</strong>
                      Asistență și redactare formală de acte juridice de proprietate.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#A97F60] font-mono text-xs mt-0.5">•</span>
                    <div>
                      <strong className="text-[#F5F4EF] font-medium block">Notari Publici:</strong>
                      Autentificarea solemnă a transferului de proprietate și verificarea registrelor.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#A97F60] font-mono text-xs mt-0.5">•</span>
                    <div>
                      <strong className="text-[#F5F4EF] font-medium block">Experți Tehnici Atestați în Construcții:</strong>
                      Expertize tehnice de rezistență, structură și cartea tehnică a construcției.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#A97F60] font-mono text-xs mt-0.5">•</span>
                    <div>
                      <strong className="text-[#F5F4EF] font-medium block">Evaluatori ANEVAR:</strong>
                      Rapoarte oficiale de evaluare cerute de bănci sau instituții financiare.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* CLOSING FRAME */}
          <ClosingFrame
            category="INITIERE COLABORARE"
            title="Doriți să discutăm despre condițiile unui mandat dedicat?"
            description="Programați o primă conversație confidențială de 20 de minute. Fără nicio obligație comercială prealabilă."
            primaryCtaText="SOLICITĂ DISCUȚIE DE 20 MINUTE"
            primaryCtaHref="/programare"
            secondaryCtaText="PENTRU CLIENȚI PRIVATAȚI"
            secondaryCtaHref="/pentru-clienti"
            imageSrc="/media/cristian-vaduva/personal/cristian-vaduva-office-gold-desk.png"
          />
        </div>
      </main>

      <Footer />
    </Section>
  );
}
