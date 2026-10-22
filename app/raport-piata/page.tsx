import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  BarChart3,
  CheckCircle2,
  ArrowRight,
  Scale,
  Database,
  ShieldAlert,
  Filter,
  Building,
} from "lucide-react";
import ExecutiveHeader from "@/components/ExecutiveHeader";
import Footer from "@/components/Footer";
import ChapterDivider from "@/components/ui/ChapterDivider";
import ClosingFrame from "@/components/ui/ClosingFrame";

export const metadata: Metadata = {
  title: "Raport Trimestrial Bucharest Prime | Cadrul Metodologic | Executive",
  description:
    "Metodologia transparentă și reproductibilă a raportului trimestrial Bucharest Prime privind piața rezidențială de prestigiu. Analiză like-for-like bazată pe surse ANCPI, INS și date verificate.",
  alternates: {
    canonical: "https://executive.cristianvaduva.com/raport-piata",
  },
  openGraph: {
    title: "Bucharest Prime Residential Report — Metodologie | Cristian Văduva",
    description: "Infrastructura de cercetare trimestrială pentru piața rezidențială prime din București.",
    url: "https://executive.cristianvaduva.com/raport-piata",
    type: "website",
  },
};

const methodologyCriteria = [
  {
    number: "01",
    tag: "TEMPORALITATE",
    title: "Perioada Analizată și Frecvența de Extragere",
    description:
      "Datele sunt agregate pe cicluri trimestriale închise (Q1: 1 ianuarie – 31 martie; Q2: 1 aprilie – 30 iunie; Q3: 1 iulie – 30 septembrie; Q4: 1 octombrie – 31 decembrie). Nu se emit concluzii intermediare bazate pe ferestre incomplete sau eșantioane săptămânale de scurtă durată.",
    deliverable: "Serii de date trimestriale continue, fără interpolări speculative",
  },
  {
    number: "02",
    tag: "SURSE DE DATE",
    title: "Surse Oficiale Verificate și Data Extragerii",
    description:
      "Datele oficiale de volum sunt preluate din sintezele lunare publicate de Agenția Națională de Cadastru și Publicitate Imobiliară (ANCPI). Indicatorii macroeconomici provin de la Institutul Național de Statistică (INS). Prețurile de ofertă sunt extrase din baze de date verificate la o dată fixă de referință (ultima zi a trimestrului).",
    deliverable: "Protocol de citare complet și timestamping exact al extragerilor",
  },
  {
    number: "03",
    tag: "DELIMITARE ZONALĂ",
    title: "Zona Geografică și Criteriile de Includere",
    description:
      "Analiza este strict delimitată la enclavele rezidențiale de prestigiu din București: Herăstrău – Șoseaua Nordului, Primăverii, Kiseleff – Aviatorilor, Dorobanți Capitale, Floreasca și zona rezidențială Pipera (exclusiv perimetrul de vile). Sunt excluse proiectele periferice din afara ariei metropolitane nordice.",
    deliverable: "Hartă topografică de delimitare cadastrală a micro-zonelor prime",
  },
  {
    number: "04",
    tag: "SEGMENTARE ACTIV",
    title: "Tipul și Segmentul Proprietăților Monitorizate",
    description:
      "Sunt incluse doar proprietățile rezidențiale de clasă superioară: apartamente penthouse, locuințe de cel puțin 3 camere cu terase generoase, vile individuale și clădiri de patrimoniu reabilitate structural. Se aplică un prag valoric minim de intrare pentru a separa segmentul mass-market de cel prime.",
    deliverable: "Eșantion omogen strict pe segmentul upper-prime și trofee arhitecturale",
  },
  {
    number: "05",
    tag: "SEPARARE RIGIDĂ",
    title: "Preț de Ofertă (Asking) vs. Preț Notarial (Closing)",
    description:
      "Nu combinăm niciodată prețurile cerute pe portaluri cu prețurile efective de vânzare. Prețul de ofertă (asking price) este tratat exclusiv ca indicator al sentimentului vânzătorilor, în timp ce prețul de tranzacție (closing price) reflectă valoarea validată prin act autentic notarial.",
    deliverable: "Grafic de dispersie distinct: Asking Price Sentiment vs. Closing Reality",
  },
  {
    number: "06",
    tag: "STANDARDIZARE",
    title: "Moneda, Suprafața Utilă și Unitatea de Măsură",
    description:
      "Toate valorile sunt exprimate în Euro (fără TVA, cu mențiune explicită dacă TVA este aplicabil). Suprafața de referință este strict suprafața utilă (conform definiției Legii Locuinței 114/1996), excluzând balcoanele și terasele, care sunt evaluate separat cu coeficienți ponderați specifici.",
    deliverable: "Metodologie de comparabilitate ca/mp util standardizat pe clasă de activ",
  },
  {
    number: "07",
    tag: "FILTRARE ANOMALII",
    title: "Tratarea Extremelor și a Listărilor Duplicate",
    description:
      "Aplicăm filtrare statistică pentru eliminarea valorilor extreme (outliers) care ar distorsiona mediile. Listările duplicate ale aceleiași proprietăți promovate de agenții diferite sunt curățate manual și reduse la un singur identificator unic de activ.",
    deliverable: "Deduplicare 1-la-1 și izolare statistică a tranzacțiilor atipice",
  },
  {
    number: "08",
    tag: "TRANSPARENȚĂ LIMITE",
    title: "Mărimea Eșantionului și Limitările Analizei",
    description:
      "Segmentul rezidențial de lux din București înregistrează un număr restrâns de tranzacții per trimestru comparativ cu piața de masă. Fiecare ediție va menționa cu exactitate mărimea eșantionului (N) și marja de eroare asociată, fără extrapolări forțate.",
    deliverable: "Raportare deschisă a limitelor metodologice și a intervalelor de confidență",
  },
];

export default function RaportPiataPage() {
  return (
    <div className="min-h-screen bg-[#07090D] text-[#F5F4EF] selection:bg-[#93C8FF]/25 selection:text-[#F5F4EF]">
      <ExecutiveHeader />

      <main className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 overflow-hidden">
        {/* Architectural Grid & Ambient Aura */}
        <div className="absolute inset-0 bg-arch-grid opacity-25 pointer-events-none" />
        <div className="absolute top-24 left-1/4 w-[600px] h-[600px] bg-[#93C8FF]/5 rounded-full blur-[180px] pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-[#A97F60]/5 rounded-full blur-[180px] pointer-events-none" />

        <div className="site-container relative z-10 space-y-24 sm:space-y-32">

          {/* ======================================================== */}
          {/* HERO EDITORIAL COMPOSITION WITH PHOTO APERTURE            */}
          {/* ======================================================== */}
          <section className="space-y-12">
            <ChapterDivider
              number="01"
              category="INTELLIGENCE & RESEARCH ARCHITECTURE"
              title="Bucharest Prime Residential Report"
              subtitle="Cadrul Metodologic Reproductibil"
            />

            <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column: Narrative & Status */}
              <div className="lg:col-span-7 space-y-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-white/[0.03] border border-white/[0.08] font-mono text-[11px] tracking-[0.25em] text-[#A97F60] uppercase">
                    <BarChart3 className="w-3.5 h-3.5 text-[#93C8FF]" />
                    <span>CERCETARE RIGUROASĂ · ZERO DATE INVENTATE</span>
                  </div>

                  <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F5F4EF] font-normal tracking-tight leading-[1.08]">
                    Infrastructură analitică pentru piața rezidențială de prestigiu.
                  </h1>
                </div>

                <p className="font-sans text-base sm:text-lg text-[#B8C2CF] leading-relaxed font-light">
                  Un cadru metodologic audibil și transparent pentru monitorizarea activelor prime din București. Respingem estimările speculative și prezentăm public specificațiile exacte pe baza cărora este agregat și filtrat eșantionul trimestrial.
                </p>

                {/* Calibration Status Badge */}
                <div className="p-5 bg-[#0C1119] border border-white/[0.1] space-y-3">
                  <div className="flex items-center gap-3 font-mono text-xs text-[#8A95A5]">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#A97F60] animate-pulse shrink-0" />
                    <span>
                      STATUS ACTUAL: <strong className="text-[#F5F4EF]">CALIBRARE METODOLOGICĂ ÎN DESFĂȘURARE</strong>
                    </span>
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-[#8A95A5] leading-relaxed">
                    Ediția Inaugurală este în curs de agregare a eșantionului de tranzacții. Raportul nu va publica cifre agregate până când nu se atinge pragul de robustețe statistică stabilit în specificațiile de mai jos.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a
                    href="#criterii"
                    className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-[#07090D] font-mono text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#E1E4EA] transition-colors"
                  >
                    <span>EXPLOREAZĂ CELE 8 CRITERII</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <Link
                    href="/ghid-cumparator"
                    className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/[0.15] bg-[#0C1119] text-[#F5F4EF] font-mono text-xs uppercase tracking-[0.2em] hover:border-[#93C8FF] transition-colors"
                  >
                    <span>DOSARUL CUMPĂRĂTORULUI</span>
                  </Link>
                </div>
              </div>

              {/* Right Column: Architectural Visual Aperture */}
              <div className="lg:col-span-5">
                <div className="relative border border-white/[0.12] bg-[#0C1119] p-3 shadow-2xl">
                  {/* Structural Crosshairs */}
                  <div className="absolute -top-1.5 -left-1.5 w-3 h-3 border-t border-l border-[#93C8FF]" />
                  <div className="absolute -top-1.5 -right-1.5 w-3 h-3 border-t border-r border-[#93C8FF]" />
                  <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 border-b border-l border-[#93C8FF]" />
                  <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 border-b border-r border-[#93C8FF]" />

                  <div className="relative aspect-[4/3] w-full bg-[#1B2028] overflow-hidden">
                    <Image
                      src="/media/cristian-vaduva/personal/cristian-vaduva-office-blueprints-underwriting.jpg"
                      alt="Cristian Văduva — Analiză metodologică și audit de planuri"
                      fill
                      sizes="(max-width: 1024px) 100vw, 42vw"
                      className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07090D] via-transparent to-transparent opacity-80" />

                    <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#07090D]/90 backdrop-blur-md border border-white/[0.1] space-y-1">
                      <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#93C8FF] block">
                        CADRU METODOLOGIC AUDITABIL
                      </span>
                      <p className="font-serif text-sm text-[#F5F4EF]">
                        Analiză like-for-like pe micro-zone și standarde cadastrale omogene.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ======================================================== */}
          {/* DATA PIPELINE FLOW DIAGRAM                                */}
          {/* ======================================================== */}
          <section className="space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-[0.28em] text-[#A97F60] font-semibold block">
                ARHITECTURA DATELOR
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#F5F4EF]">
                Fluxul de Ingestie, Filtrare și Standardizare
              </h2>
              <p className="font-sans text-sm sm:text-base text-[#8A95A5] max-w-2xl">
                Cum transformăm datele primare eterogene într-o bază curată, auditabilă și reproductibilă:
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 font-mono text-xs">
              {/* Step 1 */}
              <div className="p-6 bg-[#0C1119] border border-white/[0.08] space-y-4 relative">
                <div className="flex items-center justify-between text-[#93C8FF]">
                  <span className="text-[10px] uppercase tracking-widest font-semibold">ETAPA 01</span>
                  <Database className="w-4 h-4" />
                </div>
                <h3 className="font-serif text-lg text-[#F5F4EF] font-normal">
                  Ingestie Surse Primare
                </h3>
                <p className="font-sans text-xs text-[#8A95A5] leading-relaxed">
                  Preluare volume oficiale ANCPI, indicatori macroeconomici INS și snapshot-uri ale bazelor de listare la final de trimestru.
                </p>
                <div className="pt-2 text-[10px] text-[#93C8FF] border-t border-white/[0.06]">
                  Surse publice + baze agreate
                </div>
              </div>

              {/* Step 2 */}
              <div className="p-6 bg-[#0C1119] border border-white/[0.08] space-y-4 relative">
                <div className="flex items-center justify-between text-[#A97F60]">
                  <span className="text-[10px] uppercase tracking-widest font-semibold">ETAPA 02</span>
                  <Filter className="w-4 h-4" />
                </div>
                <h3 className="font-serif text-lg text-[#F5F4EF] font-normal">
                  Deduplicare & Outliers
                </h3>
                <p className="font-sans text-xs text-[#8A95A5] leading-relaxed">
                  Eliminarea anunțurilor multi-broker pentru același imobil și curățarea extremelor statistice (tranzacții forțate sau atipice).
                </p>
                <div className="pt-2 text-[10px] text-[#A97F60] border-t border-white/[0.06]">
                  1 identificator unic per activ
                </div>
              </div>

              {/* Step 3 */}
              <div className="p-6 bg-[#0C1119] border border-white/[0.08] space-y-4 relative">
                <div className="flex items-center justify-between text-[#93C8FF]">
                  <span className="text-[10px] uppercase tracking-widest font-semibold">ETAPA 03</span>
                  <Building className="w-4 h-4" />
                </div>
                <h3 className="font-serif text-lg text-[#F5F4EF] font-normal">
                  Filtrare Micro-Zonală
                </h3>
                <p className="font-sans text-xs text-[#8A95A5] leading-relaxed">
                  Selectarea strictă a activelor situate în enclavele Herăstrău, Primăverii, Kiseleff, Dorobanți, Floreasca și Pipera Rezidențial.
                </p>
                <div className="pt-2 text-[10px] text-[#93C8FF] border-t border-white/[0.06]">
                  Zero proiecte periferice
                </div>
              </div>

              {/* Step 4 */}
              <div className="p-6 bg-[#0C1119] border border-white/[0.08] space-y-4 relative">
                <div className="flex items-center justify-between text-[#A97F60]">
                  <span className="text-[10px] uppercase tracking-widest font-semibold">ETAPA 04</span>
                  <Scale className="w-4 h-4" />
                </div>
                <h3 className="font-serif text-lg text-[#F5F4EF] font-normal">
                  Raportare Separată
                </h3>
                <p className="font-sans text-xs text-[#8A95A5] leading-relaxed">
                  Prețul cerut (sentimentul pieței) este ținut rigid separat de prețul autentificat notarial (valoarea validată tranzacționat).
                </p>
                <div className="pt-2 text-[10px] text-[#A97F60] border-t border-white/[0.06]">
                  Asking vs. Closing decuplat
                </div>
              </div>
            </div>
          </section>

          {/* ======================================================== */}
          {/* 8-POINT METHODOLOGICAL CRITERIA BLUEPRINT                */}
          {/* ======================================================== */}
          <section id="criterii" className="space-y-12">
            <ChapterDivider
              number="02"
              category="SPECIFICAȚII METODOLOGICE DETALIATE"
              title="Arhitectura Cercetării în 8 Criterii"
              subtitle="Criteriile riguroase aplicate pentru a asigura comparabilitatea datelor"
            />

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {methodologyCriteria.map((criterion) => (
                <div
                  key={criterion.number}
                  className="p-8 sm:p-10 bg-[#0C1119] border border-white/[0.08] hover:border-white/[0.2] transition-colors space-y-5 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between font-mono text-xs">
                      <span className="px-2.5 py-1 bg-white/[0.04] border border-white/[0.08] text-[#93C8FF] tracking-widest font-semibold">
                        CRITERIUL {criterion.number}
                      </span>
                      <span className="text-[#A97F60] tracking-widest uppercase font-semibold">
                        {criterion.tag}
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl text-[#F5F4EF] leading-snug">
                      {criterion.title}
                    </h3>

                    <p className="font-sans text-sm text-[#8A95A5] leading-relaxed">
                      {criterion.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/[0.06] font-mono text-[11px] text-[#B8C2CF] flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#93C8FF] shrink-0 mt-0.5" />
                    <span><strong>Standard de livrare:</strong> {criterion.deliverable}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ======================================================== */}
          {/* STATUT ȘI DELIMITARE LEGALĂ RIGUROASĂ                    */}
          {/* ======================================================== */}
          <section className="p-8 sm:p-10 bg-white/[0.02] border-l-2 border-[#A97F60] font-sans text-xs sm:text-sm text-[#8A95A5] space-y-3 leading-relaxed">
            <div className="flex items-center gap-2 text-[#F5F4EF] font-medium text-base">
              <ShieldAlert className="w-4 h-4 text-[#A97F60]" />
              <span>Statutul Raportului & Delimitare Legală</span>
            </div>
            <p>
              Bucharest Prime Residential Report este o inițiativă privată de cercetare editorială și metodologică a platformei Executive Cristian Văduva. Nu reprezintă un raport emis de o autoritate publică a statului român și nu înlocuiește rapoartele de evaluare atestate ANEVAR sau analizele de risc financiar furnizate de instituții de credit autorizate.
            </p>
          </section>

          {/* ======================================================== */}
          {/* HIGH-IMPACT CLOSING FRAME                                */}
          {/* ======================================================== */}
          <ClosingFrame
            category="03 // INIȚIERE DIALOG STRATEGIC"
            title="Doriți să primiți metodologia completă la publicare?"
            description="Puteți solicita o discuție directă sau puteți consulta dosarul de criterii tehnice conceput pentru cumpărătorii de proprietăți rezidențiale de mare valoare."
            primaryAction={{
              label: "CONSULTĂ DOSARUL CUMPĂRĂTORULUI",
              href: "/ghid-cumparator",
            }}
            secondaryAction={{
              label: "PROGRAMEAZĂ DISCUȚIE STRATEGICĂ",
              href: "/programare",
            }}
          />

        </div>
      </main>

      <Footer />
    </div>
  );
}
