import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Building2,
  ShieldCheck,
  ArrowRight,
  Globe,
} from "lucide-react";
import ExecutiveHeader from "@/components/ExecutiveHeader";
import Footer from "@/components/Footer";
import ChapterDivider from "@/components/ui/ChapterDivider";
import ArchitecturalFeaturePanel from "@/components/ui/ArchitecturalFeaturePanel";
import ComparisonMatrix, { ComparisonRow } from "@/components/ui/ComparisonMatrix";
import NumberedProcessTimeline, { TimelineStep } from "@/components/ui/NumberedProcessTimeline";
import ClosingFrame from "@/components/ui/ClosingFrame";

export const metadata: Metadata = {
  title: "Consultanță Imobiliară Premium pentru Clienți Privați | Executive",
  description:
    "Servicii de consultanță strategică, reprezentare unilaterală dedicată și due diligence imobiliar pentru achiziția și vânzarea de proprietăți rezidențiale de prestigiu în București și internațional.",
  alternates: {
    canonical: "https://executive.cristianvaduva.com/pentru-clienti",
  },
  openGraph: {
    title: "Consultanță Imobiliară Premium pentru Clienți Privați | Cristian Văduva",
    description:
      "Orientare strategică independentă pentru decizii de achiziție și vânzare imobiliară premium în București și internațional.",
    url: "https://executive.cristianvaduva.com/pentru-clienti",
    type: "website",
  },
};

const COMPARISON_ROWS: ComparisonRow[] = [
  {
    dimension: "Alinierea Interesului",
    traditional: "Agenție tranzacțională clasică (adesea comision din ambele părți ale tranzacției).",
    advisory: "Mandat de reprezentare unilateral scris, apărând exclusiv interesele dumneavoastră.",
    note: "Fără conflict de interese",
  },
  {
    dimension: "Filtrarea Pieței",
    traditional: "Promovarea agresivă a proprietăților proprii din portofoliu pentru comision imediat.",
    advisory: "Căutare pe întreaga piață, inclusiv oportunități off-market și analiză obiectivă a dezavantajelor.",
    note: "Filtrare obiectivă",
  },
  {
    dimension: "Verificare & Due Diligence",
    traditional: "Superficială; se bazează adesea doar pe promisiunile vânzătorului și ale dezvoltatorului.",
    advisory: "Coordonare formală de due diligence: carte funciară, cadastru, ingineri MLPAT, avocați de barou.",
    note: "Risc structural atenuat",
  },
  {
    dimension: "Negociere de Preț & Termeni",
    traditional: "Interes ca prețul să rămână cât mai ridicat pentru a maximiza comisionul procentual.",
    advisory: "Negociere riguroasă pe bază de prețuri reale de închidere (like-for-like), nu pe prețuri de listare.",
    note: "Economii demonstrate",
  },
  {
    dimension: "Confidențialitate & Date",
    traditional: "Datele clientului sunt distribuite adesea informal în grupuri de intermediari.",
    advisory: "Acord bilateral de confidențialitate (NDA) semnat înainte de partajarea oricărei informații.",
    note: "Protecție strictă a identității",
  },
];

const ADVISORY_STEPS: TimelineStep[] = [
  {
    number: "01",
    stageName: "Consultație Inițială Confidențială",
    duration: "20 Minute",
    summary: "O discuție preliminară structurată pentru a stabili obiectivele dumneavoastră patrimoniale și compatibilitatea cu practica noastră.",
    details: "Clarificăm profilul căutat (locație, buget, arhitectură, termene) sau strategia de lichidare/poziționare a activului deținut.",
    deliverables: ["Profil de investiție clarificat", "Identificarea cerințelor specifice", "Acord preliminar de confidențialitate"],
    accentBadge: "DIAGNOSTIC",
  },
  {
    number: "02",
    stageName: "Semnarea Mandatului & Acord NDA",
    duration: "1–2 Zile",
    summary: "Formalizarea cadrului juridic de reprezentare și stabilirea modelului de remunerare agreat în scris.",
    details: "Se definește în mod transparent dacă proiectul va fi remunerat pe bază de retainer, success fee sau model hibrid, conform complexității.",
    deliverables: ["Contract de mandat bilateral", "Acord de confidențialitate (NDA)", "Protocol de comunicare directă securizată"],
    accentBadge: "CADRU LEGAL",
  },
  {
    number: "03",
    stageName: "Scanare Completă & Filtrare Tehnică",
    duration: "2–4 Săptămâni",
    summary: "Evaluarea întregii piețe relevante, inclusiv acces la coridoare off-market și rețeaua internațională Chestertons.",
    details: "Eliminăm activele compromise cadastral, cu litigii sau cu vicii de construire. Prezentăm doar opțiuni validate în amănunt.",
    deliverables: ["Dosar comparativ like-for-like", "Analiză preț cerut vs. preț estimat de tranzacție", "Selecție privată de vizionări asistate"],
    accentBadge: "CURATORIAT",
  },
  {
    number: "04",
    stageName: "Negociere Asistată & Încheiere Notarială",
    duration: "Finalizare",
    summary: "Asistență continuă pe parcursul negocierii clauzelor contractuale (SPA) și coordonarea semnării autentice la notar.",
    details: "Colaborăm cu avocații și notarii dumneavoastră sau vă conectăm cu cabinete de elită pentru auditul formal al titlurilor de proprietate.",
    deliverables: ["Audit contractual pre-semnare", "Asistență fizică la autentificare notarială", "Protocol de predare-primire a activului"],
    accentBadge: "EXECUȚIE",
  },
];

export default function PentruClientiPage() {
  return (
    <div className="min-h-screen bg-[#07090D] text-[#F5F4EF] selection:bg-[#93C8FF]/25 selection:text-[#F5F4EF]">
      <ExecutiveHeader />

      <main className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 overflow-hidden">
        {/* Background ambient lighting */}
        <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-[#93C8FF]/5 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute top-1/2 right-10 w-[450px] h-[450px] bg-[#A97F60]/5 rounded-full blur-[160px] pointer-events-none" />

        <div className="site-container relative z-10 space-y-24 sm:space-y-36">
          {/* HERO SECTION: Asymmetric Composition with Authentic Photography */}
          <section className="border-b border-white/[0.08] pb-16 lg:pb-24">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column: Editorial Headline & Narrative */}
              <div className="lg:col-span-7 space-y-6 sm:space-y-8">
                <div className="inline-flex items-center gap-2.5 px-3.5 py-1 bg-white/[0.03] border border-white/[0.08] font-mono text-[11px] tracking-[0.25em] text-[#A97F60] uppercase">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#93C8FF]" />
                  <span>CONSULTANȚĂ PRIVATĂ · REPREZENTARE EXCLUSIVĂ</span>
                </div>

                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F5F4EF] font-normal tracking-tight leading-[1.08]">
                  Consultanță și Orientare pentru Decizii Imobiliare de Mare Valoare.
                </h1>

                <p className="font-sans text-base sm:text-lg text-[#B8C2CF] leading-relaxed font-light max-w-2xl">
                  Executive oferă asistență strategică privată cumpărătorilor și proprietarilor de active rezidențiale de prestigiu. Lucrăm exclusiv pe bază de mandat scris bilateral, eliminând conflictele de interese și oferind o analiză obiectivă, documentată riguros.
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <Link
                    href="/programare"
                    className="inline-flex items-center gap-2 px-7 py-4 bg-[#93C8FF] text-[#07090D] font-mono text-xs uppercase tracking-[0.2em] font-bold hover:bg-white transition-all shadow-xl shadow-[#93C8FF]/20 min-h-[48px]"
                  >
                    <span>SOLICITĂ DISCUȚIE DE 20 MINUTE</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    href="/cum-lucrez"
                    className="inline-flex items-center gap-2 px-7 py-4 border border-white/[0.15] bg-[#0C1119] text-[#F5F4EF] font-mono text-xs uppercase tracking-[0.2em] hover:border-[#93C8FF] transition-colors min-h-[48px]"
                  >
                    <span>CUM FUNCȚIONEAZĂ REMUNERAȚIA</span>
                  </Link>
                </div>

                {/* Key Quick Indicators */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6 border-t border-white/[0.08] font-mono text-[11px] text-[#8A95A5]">
                  <div>
                    <span className="text-[#93C8FF] block font-semibold">100% UNILATERAL</span>
                    <span>Zero dublu comision</span>
                  </div>
                  <div>
                    <span className="text-[#93C8FF] block font-semibold">ACORD NDA</span>
                    <span>Confidențialitate formală</span>
                  </div>
                  <div>
                    <span className="text-[#93C8FF] block font-semibold">REȚEA GLOBALĂ</span>
                    <span>Partener Chestertons</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Authentic Office Consultation Photo */}
              <div className="lg:col-span-5">
                <div className="relative aspect-[4/5] bg-black border border-white/[0.12] overflow-hidden group shadow-2xl">
                  <Image
                    src="/media/cristian-vaduva/personal/cristian-vaduva-office-armchair-consultation.png"
                    alt="Cristian Văduva — Consultanță privată pentru clienți"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07090D] via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#07090D]/90 backdrop-blur-md border border-white/10 font-mono text-xs text-[#E1E4EA] flex items-center justify-between">
                    <div>
                      <span className="text-[#A97F60] uppercase block text-[9px]">CADRAN CONSULTAȚIE</span>
                      <span className="font-sans font-medium text-xs">Cristian Văduva · Birou București</span>
                    </div>
                    <span className="w-2 h-2 rounded-full bg-[#93C8FF]" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CHAPTER 01 // CELE 3 CAPABILITĂȚI PRINCIPALE */}
          <section className="space-y-12">
            <ChapterDivider
              number="01"
              category="CAPABILITĂȚI & ASISTENȚĂ PRACTICĂ"
              title="Trei Direcții de Asistență Strategică pentru Active Prime"
              description="O abordare structurată concepută pentru a proteja capitalul și timpul decidentului, de la selecția preliminară până la finalizarea formală a tranzacției."
            />

            <div className="space-y-10">
              {/* Feature Panel 1: Buyer Advisory */}
              <ArchitecturalFeaturePanel
                tag="DIRECȚIA 01 // MANDAT DE ACHIZIȚIE (BUYER ADVISORY)"
                title="Căutare Dedicată & Negociere Exclusivă pentru Cumpărători"
                description="Definim împreună profilul exact al proprietății dorite, filtrăm întreaga piață publică și identificăm oportunități off-market din rețeaua privată. Evaluăm riscurile ascunse și negociem exclusiv în interesul dumneavoastră financiar și patrimonial."
                imageSrc="/media/cristian-vaduva/personal/cristian-vaduva-residence-curved-glass-terrace.png"
                imageAlt="Reședință privată cu terasă curbată — Achiziții Prime"
                imageCaption="Proprietate de referință · Zonă rezidențială prime"
                imagePosition="right"
                bullets={[
                  {
                    title: "Filtrare obiectivă fără bias comercial",
                    desc: "Nu promovăm dezvoltatori anume; recomandăm strict proprietăți care trec testul de valoare.",
                  },
                  {
                    title: "Analiză comparativă like-for-like",
                    desc: "Raportăm prețul cerut la tranzacții reale încheiate pe același palier de calitate.",
                  },
                  {
                    title: "Negociere asistată de preț și termeni",
                    desc: "Protejăm capitalul prin structurarea tranșelor și a garanțiilor contractuale.",
                  },
                ]}
                ctaText="SOLICITĂ MANDAT DE ACHIZIȚIE"
                ctaHref="/programare"
                stats={[
                  { value: "100%", label: "Aliniere Unilaterală" },
                  { value: "0€", label: "Dublu Comision Ascuns" },
                  { value: "24h", label: "Confirmare Solicitare" },
                ]}
              />

              {/* Feature Panel 2: Seller Advisory (Reversed) */}
              <ArchitecturalFeaturePanel
                tag="DIRECȚIA 02 // VÂNZARE ASISTATĂ & POZIȚIONARE"
                title="Pregătirea Dosarului Tehnic & Acces Discret la Cumpărători Calificați"
                description="Pentru proprietarii de reședințe excepționale, pregătim un dosar de prezentare impecabil din punct de vedere tehnic și juridic, stabilim prețul optim fundamentat pe date reale și gestionăm discret accesul potențialilor cumpărători precalificați."
                imageSrc="/media/cristian-vaduva/personal/cristian-vaduva-development-skytower-inspection.png"
                imageAlt="Inspecție tehnică și poziționare de proprietate"
                imageCaption="Audit de conformitate și vizionare asistată"
                imagePosition="left"
                bullets={[
                  {
                    title: "Audit prealabil al cărții funciare și cadastrului",
                    desc: "Rezolvăm eventualele neconcordanțe înainte de prima vizionare a unui cumpărător.",
                  },
                  {
                    title: "Precalificarea financiară a cumpărătorilor",
                    desc: "Evităm pierderea timpului cu vizionări de curiozitate; primim doar cumpărători cu fonduri verificate.",
                  },
                  {
                    title: "Prezentare discretă fără listări spam",
                    desc: "Păstrăm confidențialitatea adresei și a identității proprietarului prin acorduri stricte.",
                  },
                ]}
                ctaText="DISCUTĂ POZIȚIONAREA PROPRIETĂȚII"
                ctaHref="/programare"
                stats={[
                  { value: "Privat", label: "Canal de Prezentare" },
                  { value: "1:1", label: "Asistență la Vizionări" },
                  { value: "Riguros", label: "Dosar Tehnic Complet" },
                ]}
              />

              {/* Feature Panel 3: Due Diligence Coordination */}
              <ArchitecturalFeaturePanel
                tag="DIRECȚIA 03 // COORDONARE DUE DILIGENCE"
                title="Audit Multidisciplinar: Titlu, Urbanism & Calitate Structurală"
                description="Coordonăm verificarea istoricului complet de proprietate, a conformității urbanistice și a stării tehnice structurale prin intermediul experților independenți atestați (avocați de barou, notari publici, ingineri atestați MLPAT, evaluatori ANEVAR)."
                imageSrc="/media/cristian-vaduva/personal/cristian-vaduva-office-blueprints-underwriting.jpg"
                imageAlt="Analiză planuri arhitecturale și carte tehnică"
                imageCaption="Verificare tehnică de specialitate"
                imagePosition="right"
                bullets={[
                  {
                    title: "Verificare cadastrală și istoric de proprietate",
                    desc: "Depistarea sarcinilor, ipotecilor, proceselor sau revendicărilor istorice.",
                  },
                  {
                    title: "Inspecție tehnică MLPAT a structurii și instalațiilor",
                    desc: "Analiza calității execuției, cărții tehnice a construcției și a rezistenței seismice.",
                  },
                  {
                    title: "Asistență până la semnarea actului autentic",
                    desc: "Colaborare directă cu biroul notarial pentru siguranța deplină a transferului de proprietate.",
                  },
                ]}
                ctaText="DESCARCĂ DOSARUL CUMPĂRĂTORULUI"
                ctaHref="/ghid-cumparator"
                stats={[
                  { value: "7 Etape", label: "Ghid de Verificare" },
                  { value: "MLPAT", label: "Ingineri Structuriști" },
                  { value: "Barou", label: "Avocați Independenți" },
                ]}
              />
            </div>
          </section>

          {/* CHAPTER 02 // COMPARAȚIE STRUCTURALĂ: INTERMEDIERE VS. CONSULTANȚĂ */}
          <section className="space-y-12">
            <ChapterDivider
              number="02"
              category="ANALIZĂ COMPARATIVĂ DE MODEL"
              title="De Ce Contează Mandatul Unilateral de Reprezentare"
              description="Diferențele fundamentale dintre o agenție tranzacțională generalistă și o practică dedicată de consultanță executivă."
            />

            <ComparisonMatrix
              title="Model Tradițional vs. Practica Executive"
              subtitle="O comparație transparentă între intermedierea imobiliară clasică și reprezentarea exclusivă a clientului privat."
              traditionalHeader="INTERMEDIERE TRADIȚIONALĂ"
              advisoryHeader="PRACTICA EXECUTIVE (CRISTIAN VĂDUVA)"
              rows={COMPARISON_ROWS}
            />
          </section>

          {/* CHAPTER 03 // PIEȚE ȘI ZONARE */}
          <section className="space-y-12">
            <ChapterDivider
              number="03"
              category="ARIA GEOGRAFICĂ & SEGMENTE ACOPERITE"
              title="Piețe Relevante: București Prime & Coridoare Globale"
              description="Ne concentrăm exclusiv pe segmentele rezidențiale unde calitatea construcției, raritatea urbanistică și valoarea patrimonială justifică o abordare personalizată."
            />

            <div className="grid md:grid-cols-2 gap-8">
              {/* Cadran 1: București Prime */}
              <div className="p-8 sm:p-10 bg-[#0C1119] border border-white/[0.08] space-y-6">
                <div className="flex items-center gap-2 font-mono text-xs text-[#93C8FF] uppercase tracking-[0.2em]">
                  <Building2 className="w-4 h-4" />
                  <span>BUCUREȘTI & POLUL REZIDENȚIAL DE NORD</span>
                </div>

                <h3 className="font-serif text-2xl text-[#F5F4EF]">
                  Micro-Piețe Rezidențiale Consacrate
                </h3>

                <p className="font-sans text-sm text-[#8A95A5] leading-relaxed">
                  Monitorizăm permanent micro-piețele premium din Capitală, unde densitatea patrimonială și cererea solventă mențin valoarea activelor pe termen lung:
                </p>

                <div className="grid grid-cols-2 gap-3 font-mono text-xs text-[#E1E4EA] pt-2">
                  <div className="p-3 bg-black/40 border border-white/[0.05]">Herăstrău & Șoseaua Nordului</div>
                  <div className="p-3 bg-black/40 border border-white/[0.05]">Primăverii & Aviatorilor</div>
                  <div className="p-3 bg-black/40 border border-white/[0.05]">Kiseleff & Dorobanți Capitale</div>
                  <div className="p-3 bg-black/40 border border-white/[0.05]">Floreasca & Lacul Tei</div>
                  <div className="p-3 bg-black/40 border border-white/[0.05]">Pipera Rezidențial (Vile)</div>
                  <div className="p-3 bg-black/40 border border-white/[0.05]">Proprietăți Istorice / Centru</div>
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-[#8A95A5]">
                  <span>CATALOG LIVE DISPONIBIL</span>
                  <Link href="/real-estate/properties" className="text-[#93C8FF] hover:underline flex items-center gap-1">
                    <span>VEZI 433 PROPRIETĂȚI</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>

              {/* Cadran 2: Chestertons Global Corridors */}
              <div className="p-8 sm:p-10 bg-[#0C1119] border border-white/[0.08] space-y-6">
                <div className="flex items-center gap-2 font-mono text-xs text-[#A97F60] uppercase tracking-[0.2em]">
                  <Globe className="w-4 h-4" />
                  <span>CORIDOARE INTERNAȚIONALE (REȚEAUA CHESTERTONS)</span>
                </div>

                <h3 className="font-serif text-2xl text-[#F5F4EF]">
                  Acces Direct la Portofoliul Global Partener
                </h3>

                <p className="font-sans text-sm text-[#8A95A5] leading-relaxed">
                  Prin afilierea profesională cu rețeaua internațională Chestertons Global, facilităm accesul clienților privați din România direct către birourile locale partenere din marile capitale:
                </p>

                <div className="grid grid-cols-2 gap-3 font-mono text-xs text-[#E1E4EA] pt-2">
                  <div className="p-3 bg-black/40 border border-white/[0.05]">Londra (Prime Central London)</div>
                  <div className="p-3 bg-black/40 border border-white/[0.05]">Riviera Franceză & Cap d&apos;Ail</div>
                  <div className="p-3 bg-black/40 border border-white/[0.05]">Monaco (Parteneriate Locale)</div>
                  <div className="p-3 bg-black/40 border border-white/[0.05]">Dubai & Zona Golfului</div>
                  <div className="p-3 bg-black/40 border border-white/[0.05]">Madrid & Marbella (Spania)</div>
                  <div className="p-3 bg-black/40 border border-white/[0.05]">Insulele Baleare (Mallorca)</div>
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-[#8A95A5]">
                  <span>REȚEA FONDATĂ LA LONDRA 1805</span>
                  <Link href="/parteneri" className="text-[#93C8FF] hover:underline flex items-center gap-1">
                    <span>DETALII PARTENERI</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* CHAPTER 04 // CICLUL DE COLABORARE ÎN 4 ETAPE */}
          <section className="space-y-12">
            <ChapterDivider
              number="04"
              category="METODOLOGIE DE LUCRU"
              title="Etapele unui Mandat Privat de Consultanță"
              description="O relație profesională bazată pe claritate totală, etape documentate și remunerare agreată în avans prin contract scris bilateral."
            />

            <NumberedProcessTimeline steps={ADVISORY_STEPS} />
          </section>

          {/* CLOSING FRAME */}
          <ClosingFrame
            category="DEMARARE MANDAT PRIVAT"
            title="Doriți să discutați despre o achiziție sau o vânzare de proprietate prime?"
            description="Fiecare mandat este asumat personal de Cristian Văduva. Oferim o sesiune confidențială de 20 de minute pentru a evalua compatibilitatea proiectului dumneavoastră."
            primaryCtaText="SOLICITĂ DISCUȚIE DE 20 MINUTE"
            primaryCtaHref="/programare"
            secondaryCtaText="VEZI DETALII REMUNERAȚIE"
            secondaryCtaHref="/cum-lucrez"
            imageSrc="/media/cristian-vaduva/personal/cristian-vaduva-office-armchair-consultation.png"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
