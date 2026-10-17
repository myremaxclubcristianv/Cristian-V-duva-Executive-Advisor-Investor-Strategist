import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  BarChart3,
  FileCheck2,
  AlertCircle,
  CheckCircle2,
  Search,
  ArrowRight,
  Layers,
  Scale,
  Database,
  ShieldAlert
} from "lucide-react";
import ExecutiveHeader from "@/components/ExecutiveHeader";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Raport Trimestrial Bucharest Prime | Cadrul Metodologic | Executive",
  description: "Metodologia transparentă și reproductibilă a raportului trimestrial Bucharest Prime privind piața rezidențială de prestigiu. Analiză like-for-like bazată pe surse ANCPI, INS și date verificate.",
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

export default function RaportPiataPage() {
  return (
    <div className="min-h-screen bg-[#07090D] text-[#F5F4EF] selection:bg-[#93C8FF]/25 selection:text-[#F5F4EF]">
      <ExecutiveHeader />

      <main className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 overflow-hidden">
        {/* Glows */}
        <div className="absolute top-24 left-1/4 w-[500px] h-[500px] bg-[#93C8FF]/5 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 w-[450px] h-[450px] bg-[#A97F60]/5 rounded-full blur-[160px] pointer-events-none" />

        <div className="site-container relative z-10 space-y-20 sm:space-y-28">

          {/* HERO */}
          <section className="space-y-6 max-w-4xl border-b border-white/[0.08] pb-14">
            <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-white/[0.03] border border-white/[0.08] font-mono text-[11px] tracking-[0.25em] text-[#A97F60] uppercase">
              <BarChart3 className="w-3.5 h-3.5 text-[#93C8FF]" />
              <span>CERCETARE DE PIAȚĂ · METODOLOGIE REPRODUCTIBILĂ</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F5F4EF] font-normal tracking-tight leading-[1.12]">
              Bucharest Prime Residential Report
            </h1>

            <p className="font-sans text-lg sm:text-xl text-[#B8C2CF] leading-relaxed font-light">
              Un cadru analitic riguros pentru monitorizarea pieței rezidențiale de prestigiu din Capitală. Respingem estimările speculative și prezentăm transparent metodologia pe baza căreia sunt colectate și interpretate datele.
            </p>

            <div className="p-4 bg-[#0C1119] border border-white/[0.08] flex items-center gap-3 font-mono text-xs text-[#8A95A5]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#A97F60] animate-pulse shrink-0" />
              <span>
                STATUS ACTUAL: <strong className="text-[#F5F4EF]">CALIBRARE METODOLOGICĂ ÎN DESFĂȘURARE</strong> · Ediția Inaugurală în curs de agregare a eșantionului
              </span>
            </div>
          </section>

          {/* EDITORIAL COMMITMENT: ZERO FAKE NUMBERS */}
          <section className="p-8 sm:p-10 bg-[#0C1119] border border-white/[0.08] space-y-4">
            <div className="flex items-center gap-3 text-[#93C8FF]">
              <Database className="w-5 h-5" />
              <h2 className="font-serif text-xl sm:text-2xl text-[#F5F4EF]">
                Angajamentul Privind Integritatea Statistică
              </h2>
            </div>
            <p className="font-sans text-sm text-[#8A95A5] leading-relaxed">
              Înainte de publicarea cifrelor finale, un raport respectabil trebuie să aibă o metodologie auditabilă. Refuzăm să inventăm procente de creștere fictive sau randamente garantate. Raportul nu va publica concluzii definitive până când eșantionul de tranzacții nu atinge pragul de reprezentativitate statistică.
            </p>
            <p className="font-sans text-sm text-[#8A95A5] leading-relaxed">
              Publicăm mai jos specificațiile complete ale metodologiei noastre de cercetare, menite să ofere viitorilor cititori și presei economice un instrument de referință 100% verificabil.
            </p>
          </section>

          {/* 8-POINT REPRODUCIBLE METHODOLOGY BLUEPRINT */}
          <section className="space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-[0.28em] text-[#A97F60] font-semibold block">
                SPECIFICAȚII METODOLOGICE
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#F5F4EF]">
                Arhitectura Metodologică în 8 Criterii
              </h2>
              <p className="font-sans text-sm sm:text-base text-[#8A95A5] max-w-2xl">
                Criteriile riguroase aplicate pentru a asigura comparabilitatea datelor:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* 1 */}
              <div className="p-6 sm:p-8 bg-[#0C1119] border border-white/[0.06] space-y-3">
                <div className="flex items-center justify-between font-mono text-xs text-[#93C8FF]">
                  <span>CRITERIUL 01</span>
                  <span>TEMPORALITATE</span>
                </div>
                <h3 className="font-serif text-xl text-[#F5F4EF]">Perioada Analizată și Frecvența de Extragere</h3>
                <p className="font-sans text-sm text-[#8A95A5] leading-relaxed">
                  Datele sunt agregate pe cicluri trimestriale închise (Q1: 1 ianuarie – 31 martie; Q2: 1 aprilie – 30 iunie; Q3: 1 iulie – 30 septembrie; Q4: 1 octombrie – 31 decembrie). Nu se emit concluzii intermediare bazate pe ferestre incomplete sau eșantioane săptămânale.
                </p>
              </div>

              {/* 2 */}
              <div className="p-6 sm:p-8 bg-[#0C1119] border border-white/[0.06] space-y-3">
                <div className="flex items-center justify-between font-mono text-xs text-[#93C8FF]">
                  <span>CRITERIUL 02</span>
                  <span>SURSE DE DATE</span>
                </div>
                <h3 className="font-serif text-xl text-[#F5F4EF]">Surse Verificate și Data Extragerii</h3>
                <p className="font-sans text-sm text-[#8A95A5] leading-relaxed">
                  Datele oficiale de volum sunt preluate din sintezele lunare publicate de Agenția Națională de Cadastru și Publicitate Imobiliară (ANCPI). Indicatorii macroeconomici provin de la Institutul Național de Statistică (INS). Prețurile de ofertă sunt extrase din baze de date de listare verificate, la o dată fixă de referință (ultima zi a fiecărui trimestru).
                </p>
              </div>

              {/* 3 */}
              <div className="p-6 sm:p-8 bg-[#0C1119] border border-white/[0.06] space-y-3">
                <div className="flex items-center justify-between font-mono text-xs text-[#93C8FF]">
                  <span>CRITERIUL 03</span>
                  <span>DELIMITARE ZONALĂ</span>
                </div>
                <h3 className="font-serif text-xl text-[#F5F4EF]">Zona Geografică și Criteriile de Includere</h3>
                <p className="font-sans text-sm text-[#8A95A5] leading-relaxed">
                  Analiza este strict delimitată la enclavele rezidențiale de prestigiu din București: Herăstrău – Șoseaua Nordului, Primăverii, Kiseleff – Aviatorilor, Dorobanți Capitale, Floreasca și zona rezidențială Pipera (exclusiv perimetrul de vile). Sunt excluse proiectele periferice din afara ariei metropolitane nordice.
                </p>
              </div>

              {/* 4 */}
              <div className="p-6 sm:p-8 bg-[#0C1119] border border-white/[0.06] space-y-3">
                <div className="flex items-center justify-between font-mono text-xs text-[#93C8FF]">
                  <span>CRITERIUL 04</span>
                  <span>SEGMENTARE ACTIV</span>
                </div>
                <h3 className="font-serif text-xl text-[#F5F4EF]">Tipul și Segmentul Proprietăților</h3>
                <p className="font-sans text-sm text-[#8A95A5] leading-relaxed">
                  Sunt incluse doar proprietățile rezidențiale de clasă superioară: apartamente penthouse, locuințe de cel puțin 3 camere cu terase generoase, vile individuale și clădiri de patrimoniu reabilitate structural. Se aplică un prag valoric minim de intrare pentru a separa segmentul mass-market de cel prime.
                </p>
              </div>

              {/* 5 */}
              <div className="p-6 sm:p-8 bg-[#0C1119] border border-white/[0.06] space-y-3">
                <div className="flex items-center justify-between font-mono text-xs text-[#93C8FF]">
                  <span>CRITERIUL 05</span>
                  <span>SEPARARE RIGIDĂ</span>
                </div>
                <h3 className="font-serif text-xl text-[#F5F4EF]">Preț de Ofertă vs. Preț de Tranzacție</h3>
                <p className="font-sans text-sm text-[#8A95A5] leading-relaxed">
                  Nu combinăm niciodată prețurile cerute pe portaluri cu prețurile efective de vânzare. Prețul de ofertă (asking price) este tratat ca indicator al sentimentului vânzătorilor, în timp ce prețul de tranzacție (closing price) reflectă valoarea validată prin act autentic notarial.
                </p>
              </div>

              {/* 6 */}
              <div className="p-6 sm:p-8 bg-[#0C1119] border border-white/[0.06] space-y-3">
                <div className="flex items-center justify-between font-mono text-xs text-[#93C8FF]">
                  <span>CRITERIUL 06</span>
                  <span>STANDARDIZARE</span>
                </div>
                <h3 className="font-serif text-xl text-[#F5F4EF]">Moneda, Suprafața și Unitatea de Comparație</h3>
                <p className="font-sans text-sm text-[#8A95A5] leading-relaxed">
                  Toate valorile sunt exprimate în Euro (fără TVA, cu mențiune explicită dacă TVA este aplicabil). Suprafața de referință este strict suprafața utilă (conform definiției Legii Locuinței 114/1996), excluzând balcoanele și terasele, care sunt evaluate separat cu coeficienți ponderați specifici.
                </p>
              </div>

              {/* 7 */}
              <div className="p-6 sm:p-8 bg-[#0C1119] border border-white/[0.06] space-y-3">
                <div className="flex items-center justify-between font-mono text-xs text-[#93C8FF]">
                  <span>CRITERIUL 07</span>
                  <span>FILTRARE ANOMALII</span>
                </div>
                <h3 className="font-serif text-xl text-[#F5F4EF]">Tratarea Extremelor și a Listărilor Duplicate</h3>
                <p className="font-sans text-sm text-[#8A95A5] leading-relaxed">
                  Aplicăm filtrare statistică pentru eliminarea valorilor extreme (outliers) care ar distorsiona mediile. Listările duplicate ale aceleiași proprietăți promovate de agenții diferite sunt curățate manual și reduse la un singur identificator unic de activ.
                </p>
              </div>

              {/* 8 */}
              <div className="p-6 sm:p-8 bg-[#0C1119] border border-white/[0.06] space-y-3">
                <div className="flex items-center justify-between font-mono text-xs text-[#93C8FF]">
                  <span>CRITERIUL 08</span>
                  <span>TRANSPARENȚĂ LIMITE</span>
                </div>
                <h3 className="font-serif text-xl text-[#F5F4EF]">Mărimea Eșantionului și Limitările Analizei</h3>
                <p className="font-sans text-sm text-[#8A95A5] leading-relaxed">
                  Segmentul rezidențial de lux din București înregistrează un număr restrâns de tranzacții per trimestru comparativ cu piața de masă. Fiecare ediție va menționa cu exactitate mărimea eșantionului (N) și marja de eroare asociată, fără extrapolări forțate.
                </p>
              </div>
            </div>
          </section>

          {/* DISCLAIMER INSTITUȚIONAL */}
          <section className="p-8 sm:p-10 bg-white/[0.02] border-l-2 border-[#A97F60] font-sans text-xs sm:text-sm text-[#8A95A5] space-y-2 leading-relaxed">
            <div className="flex items-center gap-2 text-[#F5F4EF] font-medium text-base">
              <ShieldAlert className="w-4 h-4 text-[#A97F60]" />
              <span>Statutul Raportului & Delimitare Legală</span>
            </div>
            <p>
              Bucharest Prime Residential Report este o inițiativă privată de cercetare editorială și metodologică a platformei Executive Cristian Văduva. Nu reprezintă un raport emis de o autoritate publică a statului român și nu înlocuiește rapoartele de evaluare atestate ANEVAR sau analizele de risc financiar furnizate de instituții de credit autorizate.
            </p>
          </section>

          {/* CTA CADRAN */}
          <section className="p-10 sm:p-14 bg-[#0C1119] border border-white/[0.1] text-center space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#F5F4EF]">
              Doriți să primiți metodologia completă la publicare?
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#8A95A5] max-w-xl mx-auto leading-relaxed">
              Puteți solicita o discuție directă sau puteți consulta dosarul de criterii pentru cumpărătorii de proprietăți rezidențiale.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <Link
                href="/ghid-cumparator"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#07090D] font-mono text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#E1E4EA] transition-colors"
              >
                <span>DOSARUL CUMPĂRĂTORULUI</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/programare"
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/[0.15] bg-[#07090D] text-[#F5F4EF] font-mono text-xs uppercase tracking-[0.2em] hover:border-[#93C8FF] transition-colors"
              >
                <span>PROGRAMEAZĂ CONVERSAȚIE</span>
              </Link>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
