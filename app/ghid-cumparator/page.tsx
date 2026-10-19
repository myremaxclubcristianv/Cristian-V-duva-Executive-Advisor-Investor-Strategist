"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FileText,
  Download,
  CheckCircle2,
  AlertCircle,
  Printer,
  ArrowRight,
} from "lucide-react";
import ExecutiveHeader from "@/components/ExecutiveHeader";
import Footer from "@/components/Footer";
import Section from "@/components/ui/Section";
import ChapterDivider from "@/components/ui/ChapterDivider";
import ClosingFrame from "@/components/ui/ClosingFrame";

const chapters = [
  { id: "capitolul-1", num: "01", title: "Definirea Obiectivului de Achiziție" },
  { id: "capitolul-2", num: "02", title: "Buget Total și Costuri Conexe" },
  { id: "capitolul-3", num: "03", title: "Verificarea Situației Juridice" },
  { id: "capitolul-4", num: "04", title: "Auditul Tehnic și Structural" },
  { id: "capitolul-5", num: "05", title: "Analiza Micro-Zonei & Mediu" },
  { id: "capitolul-6", num: "06", title: "Negocierea și Structurarea" },
  { id: "capitolul-7", num: "07", title: "Post-Achiziție & Protecție" },
];

export default function GhidCumparatorPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [consentPrivacy, setConsentPrivacy] = useState(false);
  const [consentMarketing, setConsentMarketing] = useState(false);

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!fullName.trim()) {
      setErrorMsg("Vă rugăm să introduceți numele complet.");
      return;
    }
    if (!email.trim() || !email.includes("@")) {
      setErrorMsg("Vă rugăm să introduceți o adresă de email validă.");
      return;
    }
    if (!consentPrivacy) {
      setErrorMsg("Este necesar consimțământul pentru prelucrarea datelor în vederea transmiterii ghidului.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/ghid-cumparator", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          email,
          phone,
          consentPrivacy,
          consentMarketing,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "A apărut o problemă la înregistrare.");
      }

      setSuccess(true);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setErrorMsg(err.message);
      } else {
        setErrorMsg("A apărut o problemă neprevăzută.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <Section variant="dark" className="min-h-screen bg-[#07090D] text-[#F5F4EF] selection:bg-[#93C8FF]/25 selection:text-[#F5F4EF]">
      <ExecutiveHeader />

      <main className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 overflow-hidden">
        {/* Glows */}
        <div className="absolute inset-0 bg-arch-grid opacity-25 pointer-events-none" />
        <div className="absolute top-24 left-1/4 w-[500px] h-[500px] bg-[#93C8FF]/5 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 w-[450px] h-[450px] bg-[#A97F60]/5 rounded-full blur-[160px] pointer-events-none" />

        <div className="site-container relative z-10 space-y-20 sm:space-y-28">

          {/* ======================================================== */}
          {/* HERO EDITORIAL INTRODUCTION                              */}
          {/* ======================================================== */}
          <section className="space-y-8 max-w-4xl border-b border-white/[0.08] pb-14">
            <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-white/[0.03] border border-white/[0.08] font-mono text-[11px] tracking-[0.25em] text-[#A97F60] uppercase">
              <FileText className="w-3.5 h-3.5 text-[#93C8FF]" />
              <span>RESURSĂ DE CERCETARE & DILIGENCE TEHNICĂ</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F5F4EF] font-normal tracking-tight leading-[1.12]">
              Dosarul Cumpărătorului: Criterii și Verificări Înainte de Achiziție
            </h1>

            <p className="font-sans text-lg sm:text-xl text-[#B8C2CF] leading-relaxed font-light">
              Ghidul metodologic esențial pentru evaluarea proprietăților rezidențiale de mare valoare. 7 capitole structurate pentru a elimina riscurile tehnice, asimetriile informaționale și vulnerabilitățile cadastrale.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-[#07090D] font-mono text-xs uppercase tracking-[0.18em] font-semibold hover:bg-[#E1E4EA] transition-colors"
              >
                <Printer className="w-4 h-4" />
                <span>TIPĂREȘTE / SALVEAZĂ PDF</span>
              </button>
              <a
                href="#formular-descarcare"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/[0.15] bg-[#0C1119] text-[#F5F4EF] font-mono text-xs uppercase tracking-[0.18em] hover:border-[#93C8FF] transition-colors"
              >
                <Download className="w-4 h-4 text-[#93C8FF]" />
                <span>SOLICITĂ TRANSMITERE PE EMAIL</span>
              </a>
            </div>
          </section>

          {/* ======================================================== */}
          {/* QUICK CHAPTER NAVIGATION STRIP                           */}
          {/* ======================================================== */}
          <nav aria-label="Index Capitole" className="space-y-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#8A95A5] block">
              NAVIGARE RAPIDĂ ÎN DOSAR (7 CAPITOLE)
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 font-mono text-xs">
              {chapters.map((ch) => (
                <a
                  key={ch.id}
                  href={`#${ch.id}`}
                  className="p-3 bg-[#0C1119] border border-white/[0.08] hover:border-[#93C8FF] transition-colors group flex flex-col justify-between"
                >
                  <span className="text-[10px] text-[#93C8FF] font-semibold block">CAP. {ch.num}</span>
                  <span className="text-[11px] text-[#8A95A5] group-hover:text-[#F5F4EF] line-clamp-2 leading-snug mt-1 font-sans">
                    {ch.title}
                  </span>
                </a>
              ))}
            </div>
          </nav>

          {/* ======================================================== */}
          {/* COMPREHENSIVE DOSSIER CONTENT — 7 DETAILED CHAPTERS       */}
          {/* ======================================================== */}
          <section className="space-y-16">
            <ChapterDivider
              number="01"
              category="CORPUL DOSARULUI METODOLOGIC"
              title="Conținutul Complet al Dosarului de Verificare"
              subtitle="Specificații practice, riscuri critice și liste de control pentru achiziții prime"
            />

            <div className="space-y-10">
              {/* CAPITOLUL 1 */}
              <div id="capitolul-1" className="p-8 sm:p-10 bg-[#0C1119] border border-white/[0.08] space-y-6">
                <div className="flex items-center justify-between font-mono text-xs text-[#93C8FF] border-b border-white/[0.06] pb-3">
                  <span className="tracking-widest font-semibold">CAPITOLUL 01</span>
                  <span className="text-[#A97F60] uppercase tracking-widest font-semibold">PREMISE STRATEGICE</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F4EF]">
                  1. Definirea Clară a Obiectivului de Achiziție
                </h3>
                <p className="font-sans text-sm text-[#8A95A5] leading-relaxed">
                  O eroare frecventă în segmentul de lux este amestecarea criteriilor emoționale ale reședinței unifamiliale cu indicatorii financiari ai unei proprietăți de investiție. Definiți clar rolul principal al activului:
                </p>
                <div className="grid md:grid-cols-3 gap-4 pt-2">
                  <div className="p-5 bg-black/40 border border-white/[0.06] space-y-2">
                    <span className="font-mono text-xs text-[#93C8FF] block font-semibold">01 // REȘEDINȚĂ DE FAMILIE</span>
                    <p className="font-sans text-xs text-[#B8C2CF] leading-relaxed">
                      Prioritizați intimitatea, calitatea aerului, securitatea perimetrală, spațiul verde și proximitatea școlilor internaționale.
                    </p>
                  </div>
                  <div className="p-5 bg-black/40 border border-white/[0.06] space-y-2">
                    <span className="font-mono text-xs text-[#A97F60] block font-semibold">02 // PIED-À-TERRE URBAN</span>
                    <p className="font-sans text-xs text-[#B8C2CF] leading-relaxed">
                      Prioritizați securitatea lock-and-leave, serviciile de concierge, managementul facil al clădirii și accesul rapid la centrul de afaceri.
                    </p>
                  </div>
                  <div className="p-5 bg-black/40 border border-white/[0.06] space-y-2">
                    <span className="font-mono text-xs text-[#93C8FF] block font-semibold">03 // CONSERVARE CAPITAL</span>
                    <p className="font-sans text-xs text-[#B8C2CF] leading-relaxed">
                      Prioritizați raritatea de neînlocuit a amplasamentului (malul lacului, parc), calitatea semnăturii arhitecturale și rezistența la depreciere.
                    </p>
                  </div>
                </div>
              </div>

              {/* CAPITOLUL 2 */}
              <div id="capitolul-2" className="p-8 sm:p-10 bg-[#0C1119] border border-white/[0.08] space-y-6">
                <div className="flex items-center justify-between font-mono text-xs text-[#93C8FF] border-b border-white/[0.06] pb-3">
                  <span className="tracking-widest font-semibold">CAPITOLUL 02</span>
                  <span className="text-[#A97F60] uppercase tracking-widest font-semibold">ANALIZĂ FINANCIARĂ</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F4EF]">
                  2. Buget Total și Costuri Conexe de Tranzacție
                </h3>
                <p className="font-sans text-sm text-[#8A95A5] leading-relaxed">
                  Prețul de achiziție reprezintă doar o parte din alocarea totală de capital. Înainte de a avansa o ofertă fermă, bugetați transparent toate capitolele conexe:
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono text-xs text-[#8A95A5] pt-2">
                  <div className="p-4 bg-black/40 border border-white/[0.05] space-y-1">
                    <span className="text-[#93C8FF] block">ONORARIU NOTARIAL</span>
                    <p className="text-[#E1E4EA] font-sans text-xs">Conform grilei UNNPR (aprox. 0.5% – 1% din valoare + TVA).</p>
                  </div>
                  <div className="p-4 bg-black/40 border border-white/[0.05] space-y-1">
                    <span className="text-[#93C8FF] block">TAXĂ ANCPI</span>
                    <p className="text-[#E1E4EA] font-sans text-xs">0.15% pentru persoane fizice; 0.5% pentru persoane juridice.</p>
                  </div>
                  <div className="p-4 bg-black/40 border border-white/[0.05] space-y-1">
                    <span className="text-[#A97F60] block">AUDIT JURIDIC & TEHNIC</span>
                    <p className="text-[#E1E4EA] font-sans text-xs">Onorarii pentru avocat Barou și expertiză tehnică atestată.</p>
                  </div>
                  <div className="p-4 bg-black/40 border border-white/[0.05] space-y-1">
                    <span className="text-[#A97F60] block">SERVICII & MENTENANȚĂ</span>
                    <p className="text-[#E1E4EA] font-sans text-xs">Costuri lunare de administrare complex, mentenanță și pază.</p>
                  </div>
                </div>
              </div>

              {/* CAPITOLUL 3 */}
              <div id="capitolul-3" className="p-8 sm:p-10 bg-[#0C1119] border border-white/[0.08] space-y-6">
                <div className="flex items-center justify-between font-mono text-xs text-[#93C8FF] border-b border-white/[0.06] pb-3">
                  <span className="tracking-widest font-semibold">CAPITOLUL 03</span>
                  <span className="text-[#A97F60] uppercase tracking-widest font-semibold">AUDIT LEGAL & CADASTRAL</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F4EF]">
                  3. Verificarea Situației Juridice și a Cărții Funciare
                </h3>
                <p className="font-sans text-sm text-[#8A95A5] leading-relaxed">
                  Cele mai mari vulnerabilități financiare survin din vicii juridice sau discordanțe de publicitate imobiliară. Lista minimă de verificat obligatoriu prin avocat:
                </p>
                <div className="grid md:grid-cols-2 gap-4 pt-2 font-sans text-xs sm:text-sm text-[#B8C2CF]">
                  <div className="p-4 bg-black/40 border border-white/[0.05] flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#93C8FF] shrink-0 mt-1" />
                    <div>
                      <strong className="text-[#F5F4EF] block font-mono text-xs mb-1">LANȚUL TITLURILOR DE PROPRIETATE</strong>
                      Verificarea transmisiunilor succesive pe o perioadă de cel puțin 30 de ani pentru a exclude riscul revendicărilor în baza Legii 10/2001.
                    </div>
                  </div>
                  <div className="p-4 bg-black/40 border border-white/[0.05] flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#93C8FF] shrink-0 mt-1" />
                    <div>
                      <strong className="text-[#F5F4EF] block font-mono text-xs mb-1">EXTRAS CF DE AUTENTIFICARE</strong>
                      Verificarea sarcinilor înscrise (ipoteci, privilegii, sechestre, interdicții de înstrăinare sau drepturi de uzufruct).
                    </div>
                  </div>
                  <div className="p-4 bg-black/40 border border-white/[0.05] flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#93C8FF] shrink-0 mt-1" />
                    <div>
                      <strong className="text-[#F5F4EF] block font-mono text-xs mb-1">CONCORDANȚĂ CADASTRALĂ</strong>
                      Releveul cadastral vizat OCPI trebuie să corespundă 100% cu realitatea din teren. Orice recompartimentare neautorizată atrage sancțiuni.
                    </div>
                  </div>
                  <div className="p-4 bg-black/40 border border-white/[0.05] flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#93C8FF] shrink-0 mt-1" />
                    <div>
                      <strong className="text-[#F5F4EF] block font-mono text-xs mb-1">DREPTURI DE PREEMȚIUNE</strong>
                      Verificarea dreptului de preemțiune al Ministerului Culturii dacă imobilul este clasat monument istoric sau în zonă de protecție.
                    </div>
                  </div>
                </div>
              </div>

              {/* CAPITOLUL 4 */}
              <div id="capitolul-4" className="p-8 sm:p-10 bg-[#0C1119] border border-white/[0.08] space-y-6">
                <div className="flex items-center justify-between font-mono text-xs text-[#93C8FF] border-b border-white/[0.06] pb-3">
                  <span className="tracking-widest font-semibold">CAPITOLUL 04</span>
                  <span className="text-[#A97F60] uppercase tracking-widest font-semibold">DILIGENCE TEHNIC</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F4EF]">
                  4. Auditul Tehnic și Structural al Imobilului
                </h3>
                <p className="font-sans text-sm text-[#8A95A5] leading-relaxed">
                  Finisajele de lux pot ascunde probleme de execuție structurală sau de izolație. O inspecție fizică realizată de un inginer structurist / expert tehnic atestat trebuie să vizeze:
                </p>
                <div className="grid sm:grid-cols-3 gap-4 pt-2 font-mono text-xs text-[#8A95A5]">
                  <div className="p-4 bg-black/40 border border-white/[0.05] space-y-2">
                    <span className="text-[#93C8FF] block font-semibold">STRUCTURĂ & FIZICĂ</span>
                    <p className="font-sans text-xs text-[#B8C2CF] leading-relaxed">
                      Calitatea betonului, lipsa infiltrațiilor la subsoluri/terase și starea hidroizolației acoperișului.
                    </p>
                  </div>
                  <div className="p-4 bg-black/40 border border-white/[0.05] space-y-2">
                    <span className="text-[#A97F60] block font-semibold">INSTALAȚII & CLIMATIZARE</span>
                    <p className="font-sans text-xs text-[#B8C2CF] leading-relaxed">
                      Sisteme VRF/HVAC, pompe de căldură, capacitatea branșamentului electric trifazat și circuite de rezervă.
                    </p>
                  </div>
                  <div className="p-4 bg-black/40 border border-white/[0.05] space-y-2">
                    <span className="text-[#93C8FF] block font-semibold">ACUSTICĂ & EFICIENȚĂ</span>
                    <p className="font-sans text-xs text-[#B8C2CF] leading-relaxed">
                      Fonoizolația planșeelor și a pereților despărțitori; coeficientul termic al tâmplăriei exterioare.
                    </p>
                  </div>
                </div>
              </div>

              {/* CAPITOLUL 5 */}
              <div id="capitolul-5" className="p-8 sm:p-10 bg-[#0C1119] border border-white/[0.08] space-y-6">
                <div className="flex items-center justify-between font-mono text-xs text-[#93C8FF] border-b border-white/[0.06] pb-3">
                  <span className="tracking-widest font-semibold">CAPITOLUL 05</span>
                  <span className="text-[#A97F60] uppercase tracking-widest font-semibold">CONTEXT URBANISTIC</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F4EF]">
                  5. Analiza Micro-Zonei și Factori de Mediu
                </h3>
                <p className="font-sans text-sm text-[#8A95A5] leading-relaxed">
                  Proprietatea nu există în vid. Valoarea pe termen lung este dictată de evoluția perimetrului urban imediat:
                </p>
                <div className="space-y-3 font-sans text-xs sm:text-sm text-[#B8C2CF]">
                  <div className="p-4 bg-black/40 border border-white/[0.05] flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#93C8FF] mt-2 shrink-0" />
                    <span><strong>Statutul urbanistic adiacent (PUZ/PUD):</strong> Verificați ce se poate construi pe parcelele vecine. Riscul ridicării unui imobil cu înălțime superioară care să obtureze lumina sau intimitatea.</span>
                  </div>
                  <div className="p-4 bg-black/40 border border-white/[0.05] flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#93C8FF] mt-2 shrink-0" />
                    <span><strong>Presiunea de trafic și accesibilitatea:</strong> Testați fluxurile de circulație în orele de vârf (dimineața 07:30 - 09:00 și seara 17:30 - 19:30).</span>
                  </div>
                  <div className="p-4 bg-black/40 border border-white/[0.05] flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#93C8FF] mt-2 shrink-0" />
                    <span><strong>Infrastructura de utilități:</strong> Stabilitatea rețelelor locale de alimentare cu apă, canalizare pluvială și presiunea gazului în perioadele de iarnă.</span>
                  </div>
                </div>
              </div>

              {/* CAPITOLUL 6 */}
              <div id="capitolul-6" className="p-8 sm:p-10 bg-[#0C1119] border border-white/[0.08] space-y-6">
                <div className="flex items-center justify-between font-mono text-xs text-[#93C8FF] border-b border-white/[0.06] pb-3">
                  <span className="tracking-widest font-semibold">CAPITOLUL 06</span>
                  <span className="text-[#A97F60] uppercase tracking-widest font-semibold">STRATEGIE CONTRACTUALĂ</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F4EF]">
                  6. Negocierea și Structurarea Tranzacției
                </h3>
                <p className="font-sans text-sm text-[#8A95A5] leading-relaxed">
                  O negociere eficientă nu se bazează pe presiune emoțională, ci pe argumente tehnice derivate din raportul de due diligence:
                </p>
                <div className="grid md:grid-cols-2 gap-4 pt-2 font-sans text-xs sm:text-sm text-[#B8C2CF]">
                  <div className="p-5 bg-black/40 border border-white/[0.05] space-y-2">
                    <strong className="text-[#F5F4EF] font-mono text-xs block text-[#93C8FF]">CLAUZE SUSPENSIVE STRICTE</strong>
                    <p className="text-xs text-[#8A95A5] leading-relaxed">
                      Promisiunea bilaterală de vânzare-cumpărare trebuie să includă condiții suspensive clare legate de auditul juridic, starea tehnică și obținerea finanțării.
                    </p>
                  </div>
                  <div className="p-5 bg-black/40 border border-white/[0.05] space-y-2">
                    <strong className="text-[#F5F4EF] font-mono text-xs block text-[#A97F60]">CALENDAR EȘALONAT DE PLATĂ</strong>
                    <p className="text-xs text-[#8A95A5] leading-relaxed">
                      Reținerea unei garanții escrow sau a unei tranșe finale de plată până la predarea efectivă a tuturor documentelor tehnice și procesului-verbal fără obiecțiuni.
                    </p>
                  </div>
                </div>
              </div>

              {/* CAPITOLUL 7 */}
              <div id="capitolul-7" className="p-8 sm:p-10 bg-[#0C1119] border border-white/[0.08] space-y-6">
                <div className="flex items-center justify-between font-mono text-xs text-[#93C8FF] border-b border-white/[0.06] pb-3">
                  <span className="tracking-widest font-semibold">CAPITOLUL 07</span>
                  <span className="text-[#A97F60] uppercase tracking-widest font-semibold">GESTIUNE PATRIMONIALĂ</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F4EF]">
                  7. Post-Achiziție și Protecția Patrimoniului
                </h3>
                <p className="font-sans text-sm text-[#8A95A5] leading-relaxed">
                  Finalizarea tranzacției la notar marchează începutul perioadei de administrare responsabilă:
                </p>
                <div className="grid sm:grid-cols-3 gap-4 pt-2 font-mono text-xs text-[#8A95A5]">
                  <div className="p-4 bg-black/40 border border-white/[0.05] space-y-2">
                    <span className="text-[#93C8FF] block font-semibold">ASIGURARE PATRIMONIALĂ</span>
                    <p className="font-sans text-xs text-[#B8C2CF] leading-relaxed">
                      Încheierea unei polițe la valoarea reală de reconstrucție (prin parteneriatul cu Generali România), nu la valoarea impozabilă minimă.
                    </p>
                  </div>
                  <div className="p-4 bg-black/40 border border-white/[0.05] space-y-2">
                    <span className="text-[#A97F60] block font-semibold">FISCALITATE & DECLARAȚII</span>
                    <p className="font-sans text-xs text-[#B8C2CF] leading-relaxed">
                      Depunerea declarației fiscale în termen de 30 de zile la Direcția de Impozite și Taxe Locale și transferul rolului fiscal.
                    </p>
                  </div>
                  <div className="p-4 bg-black/40 border border-white/[0.05] space-y-2">
                    <span className="text-[#93C8FF] block font-semibold">CONTRACTE UTILITĂȚI</span>
                    <p className="font-sans text-xs text-[#B8C2CF] leading-relaxed">
                      Preluarea contoarelor și perfectarea noilor contracte de furnizare cu furnizorii acreditați.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ======================================================== */}
          {/* LEAD CAPTURE & DOSSIER DELIVERY FORM                      */}
          {/* ======================================================== */}
          <section id="formular-descarcare" className="space-y-6">
            <ChapterDivider
              number="02"
              category="TRANSMITERE DOSAR PE EMAIL"
              title="Solicitați Transmiterea Dosarului Complet"
              subtitle="Introduceți datele pentru a primi versiunea tipăribilă și actualizările metodologice"
            />

            <div className="p-8 sm:p-12 bg-[#0C1119] border border-white/[0.1] relative">
              {/* Corner crosshairs */}
              <div className="absolute -top-1 -left-1 w-3 h-3 border-t border-l border-[#93C8FF]" />
              <div className="absolute -top-1 -right-1 w-3 h-3 border-t border-r border-[#93C8FF]" />

              {success ? (
                <div className="space-y-6 text-center py-8">
                  <div className="w-14 h-14 mx-auto rounded-full bg-white/[0.03] border border-[#93C8FF]/40 flex items-center justify-center text-[#93C8FF]">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F4EF]">
                      Dosarul a fost deblocat cu succes
                    </h3>
                    <p className="font-sans text-sm text-[#8A95A5] max-w-md mx-auto leading-relaxed">
                      Vă mulțumim, <strong>{fullName}</strong>. Dosarul a fost transmis către adresa <strong>{email}</strong>. Îl puteți consulta oricând online sau descărca în format PDF.
                    </p>
                  </div>
                  <div className="pt-4 flex flex-wrap justify-center gap-4">
                    <button
                      onClick={handlePrint}
                      className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-[#07090D] font-mono text-xs uppercase tracking-wider font-semibold hover:bg-[#E1E4EA]"
                    >
                      <Printer className="w-4 h-4" />
                      <span>SALVEAZĂ PDF ACUM</span>
                    </button>
                    <Link
                      href="/programare"
                      className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/20 text-[#F5F4EF] font-mono text-xs uppercase tracking-wider hover:border-[#93C8FF]"
                    >
                      <span>PROGRAMEAZĂ CONVERSAȚIE PRIVATĂ</span>
                    </Link>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
                  <div className="space-y-1 text-center sm:text-left">
                    <h3 className="font-serif text-2xl text-[#F5F4EF]">
                      Formular de Transmitere Dosar
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-[#8A95A5]">
                      Datele sunt procesate exclusiv pentru livrarea materialului solicitat.
                    </p>
                  </div>

                  {errorMsg && (
                    <div className="p-4 bg-red-950/40 border border-red-500/40 text-red-200 text-xs sm:text-sm font-sans flex items-center gap-3">
                      <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="font-mono text-xs uppercase tracking-wider text-[#B8C2CF] block">
                        Nume Complet <span className="text-[#93C8FF]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Ex: Alexandru Popescu"
                        className="w-full px-4 py-3 bg-black/60 border border-white/[0.1] text-sm text-[#F5F4EF] focus:outline-none focus:border-[#93C8FF] font-sans"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-mono text-xs uppercase tracking-wider text-[#B8C2CF] block">
                        Adresă de Email <span className="text-[#93C8FF]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="adresa@domeniu.ro"
                        className="w-full px-4 py-3 bg-black/60 border border-white/[0.1] text-sm text-[#F5F4EF] focus:outline-none focus:border-[#93C8FF] font-sans"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-mono text-xs uppercase tracking-wider text-[#B8C2CF] block">
                      Telefon Mobil (Opțional)
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+40 7..."
                      className="w-full px-4 py-3 bg-black/60 border border-white/[0.1] text-sm text-[#F5F4EF] focus:outline-none focus:border-[#93C8FF] font-sans"
                    />
                  </div>

                  {/* CONSENT SEPARAT GDPR (OBLIGATORIU) */}
                  <div className="space-y-3 pt-2 border-t border-white/[0.08]">
                    <label className="flex items-start gap-3 cursor-pointer text-xs text-[#8A95A5] leading-relaxed">
                      <input
                        type="checkbox"
                        required
                        checked={consentPrivacy}
                        onChange={(e) => setConsentPrivacy(e.target.checked)}
                        className="mt-1 h-4 w-4 rounded-none bg-black border-white/20 text-[#93C8FF] focus:ring-0 cursor-pointer"
                      />
                      <span>
                        <strong className="text-[#F5F4EF]">Consimțământ Obligatoriu:</strong> Sunt de acord cu prelucrarea datelor mele cu caracter personal furnizate mai sus în scopul exclusiv de a mi se transmite Dosarul Cumpărătorului, conform <Link href="/privacy" className="text-[#93C8FF] underline">Politicii de Confidențialitate</Link>.
                      </span>
                    </label>

                    {/* CONSENT SEPARAT MARKETING (OPȚIONAL) */}
                    <label className="flex items-start gap-3 cursor-pointer text-xs text-[#8A95A5] leading-relaxed">
                      <input
                        type="checkbox"
                        checked={consentMarketing}
                        onChange={(e) => setConsentMarketing(e.target.checked)}
                        className="mt-1 h-4 w-4 rounded-none bg-black border-white/20 text-[#93C8FF] focus:ring-0 cursor-pointer"
                      />
                      <span>
                        <strong className="text-[#B8C2CF]">Opțional:</strong> Doresc să primesc actualizări trimestriale din partea Executive privind raportul pieței imobiliare prime din București. Pot revoca acest consimțământ în orice moment.
                      </span>
                    </label>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#07090D] font-mono text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#E1E4EA] disabled:opacity-50 transition-colors"
                    >
                      <span>{loading ? "SE PROCESEAZĂ..." : "SOLICITĂ DOSARUL CUMPĂRĂTORULUI"}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </section>

          {/* ======================================================== */}
          {/* LEGAL NOTICE                                             */}
          {/* ======================================================== */}
          <section className="p-6 sm:p-8 bg-white/[0.02] border-l-2 border-[#A97F60] font-sans text-xs text-[#8A95A5] leading-relaxed space-y-1">
            <strong className="text-[#F5F4EF] font-medium block">
              Delimitare de responsabilitate:
            </strong>
            <p>
              Prezentul dosar are un scop strict informativ și educativ. Nu reprezintă o opinie juridică formală și nu ține loc de asistență acordată de un avocat înscris în Barou sau de un evaluator atestat ANEVAR. Pentru fiecare achiziție individuală se recomandă auditarea documentelor de către profesioniști licențiați.
            </p>
          </section>

          {/* ======================================================== */}
          {/* HIGH-IMPACT CLOSING FRAME                                */}
          {/* ======================================================== */}
          <ClosingFrame
            category="03 // ASISTENȚĂ LA ACHIZIȚIE"
            title="Doriți asistență profesională dedicată pentru o proprietate identificată?"
            description="Programați o sesiune de 20 de minute cu Cristian Văduva pentru a analiza oportunitatea, a verifica riscurile preliminare și a stabili mandatul de reprezentare."
            primaryAction={{
              label: "PROGRAMEAZĂ CONVERSAȚIE INIȚIALĂ",
              href: "/programare",
            }}
            secondaryAction={{
              label: "CONSULTĂ ETAPELE DE LUCRU",
              href: "/cum-lucrez",
            }}
          />

        </div>
      </main>

      <Footer />
    </Section>
  );
}
