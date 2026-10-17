"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FileText,
  Download,
  CheckCircle2,
  AlertCircle,
  Printer,
  ShieldCheck,
  ArrowRight,
  Lock,
  Search,
  HelpCircle
} from "lucide-react";
import ExecutiveHeader from "@/components/ExecutiveHeader";
import Footer from "@/components/Footer";

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
    <div className="min-h-screen bg-[#07090D] text-[#F5F4EF] selection:bg-[#93C8FF]/25 selection:text-[#F5F4EF]">
      <ExecutiveHeader />

      <main className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 overflow-hidden">
        {/* Glows */}
        <div className="absolute top-24 left-1/4 w-[500px] h-[500px] bg-[#93C8FF]/5 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 w-[450px] h-[450px] bg-[#A97F60]/5 rounded-full blur-[160px] pointer-events-none" />

        <div className="site-container relative z-10 space-y-16 sm:space-y-24">

          {/* HERO */}
          <section className="space-y-6 max-w-4xl border-b border-white/[0.08] pb-12">
            <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-white/[0.03] border border-white/[0.08] font-mono text-[11px] tracking-[0.25em] text-[#A97F60] uppercase">
              <FileText className="w-3.5 h-3.5 text-[#93C8FF]" />
              <span>RESURSĂ DE CERCETARE & DILIGENCE</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F5F4EF] font-normal tracking-tight leading-[1.12]">
              Dosarul Cumpărătorului: Criterii și Verificări Înainte de Achiziție
            </h1>

            <p className="font-sans text-lg sm:text-xl text-[#B8C2CF] leading-relaxed font-light">
              Ghidul metodologic esențial pentru evaluarea proprietăților rezidențiale de mare valoare. 7 capitole concepute pentru a elimina capcanele tehnice, asimetriile de informație și riscurile cadastrale.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-[#07090D] font-mono text-xs uppercase tracking-[0.18em] font-semibold hover:bg-[#E1E4EA] transition-colors"
              >
                <Printer className="w-4 h-4" />
                <span>TIPĂREȘTE / SALVEAZĂ PDF</span>
              </button>
              <a
                href="#formular-descarcare"
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-white/[0.15] bg-[#0C1119] text-[#F5F4EF] font-mono text-xs uppercase tracking-[0.18em] hover:border-[#93C8FF] transition-colors"
              >
                <Download className="w-4 h-4 text-[#93C8FF]" />
                <span>SOLICITĂ TRANSMITERE PE EMAIL</span>
              </a>
            </div>
          </section>

          {/* COMPREHENSIVE DOSSIER CONTENT — 7 DETAILED CHAPTERS */}
          <section className="space-y-12">
            <div className="space-y-2 border-b border-white/[0.08] pb-6">
              <span className="font-mono text-xs uppercase tracking-[0.28em] text-[#A97F60] font-semibold block">
                STRUCTURA MATERIALULUI
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#F5F4EF]">
                Conținutul Complet al Dosarului de Verificare
              </h2>
            </div>

            <div className="space-y-8">
              {/* CAPITOLUL 1 */}
              <div className="p-8 bg-[#0C1119] border border-white/[0.08] space-y-4">
                <div className="flex items-center justify-between font-mono text-xs text-[#93C8FF]">
                  <span>CAPITOLUL 01</span>
                  <span>PREMISE STRATEGICE</span>
                </div>
                <h3 className="font-serif text-2xl text-[#F5F4EF]">1. Definirea Clară a Obiectivului de Achiziție</h3>
                <p className="font-sans text-sm text-[#8A95A5] leading-relaxed">
                  O eroare frecventă în segmentul de lux este amestecarea criteriilor emoționale ale reședinței unifamiliale cu indicatorii financiari ai unei proprietăți de investiție. Definiți clar rolul principal al activului:
                </p>
                <ul className="space-y-2 font-sans text-sm text-[#B8C2CF]">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#93C8FF] shrink-0 mt-0.5" />
                    <span><strong>Reședință principală de familie:</strong> Prioritizați intimitatea, calitatea aerului, siguranța perimetrală și proximitatea de școli internaționale.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#93C8FF] shrink-0 mt-0.5" />
                    <span><strong>Pied-à-terre urban / Reședință secundară:</strong> Prioritizați securitatea facilă la plecare (lock-and-leave), serviciile de concierge și accesul rapid la centrul de afaceri.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#93C8FF] shrink-0 mt-0.5" />
                    <span><strong>Conservare de capital pe termen lung:</strong> Prioritizați raritatea de neînlocuit a terenului (lângă parc sau lac) și rezistența la depreciere arhitecturală.</span>
                  </li>
                </ul>
              </div>

              {/* CAPITOLUL 2 */}
              <div className="p-8 bg-[#0C1119] border border-white/[0.08] space-y-4">
                <div className="flex items-center justify-between font-mono text-xs text-[#93C8FF]">
                  <span>CAPITOLUL 02</span>
                  <span>ANALIZĂ FINANCIARĂ</span>
                </div>
                <h3 className="font-serif text-2xl text-[#F5F4EF]">2. Buget Total și Costuri Conexe de Tranzacție</h3>
                <p className="font-sans text-sm text-[#8A95A5] leading-relaxed">
                  Prețul de achiziție reprezintă doar o parte din alocarea totală de capital. Înainte de a avansa o ofertă fermă, bugetați transparent:
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono text-xs text-[#8A95A5] pt-2">
                  <div className="p-4 bg-black/40 border border-white/[0.05] space-y-1">
                    <span className="text-[#93C8FF] block">ONORARIU NOTARIAL</span>
                    <p className="text-[#E1E4EA]">Conform grilei notariale oficiale UNNPR (în general 0.5% – 1% din valoare + TVA).</p>
                  </div>
                  <div className="p-4 bg-black/40 border border-white/[0.05] space-y-1">
                    <span className="text-[#93C8FF] block">TAXE ANCPI</span>
                    <p className="text-[#E1E4EA]">Taxa de intabulare a dreptului de proprietate (0.15% pentru persoane fizice, 0.5% pentru persoane juridice).</p>
                  </div>
                  <div className="p-4 bg-black/40 border border-white/[0.05] space-y-1">
                    <span className="text-[#93C8FF] block">REGIM TVA</span>
                    <p className="text-[#E1E4EA]">Verificați dacă prețul include sau nu TVA (19% aplicabil la dezvoltatori pentru locuințe ce depășesc plafonul redus).</p>
                  </div>
                  <div className="p-4 bg-black/40 border border-white/[0.05] space-y-1">
                    <span className="text-[#93C8FF] block">MENTENANȚĂ & SERVICII</span>
                    <p className="text-[#E1E4EA]">Costul lunar estimat pentru paza privată, întreținerea spațiilor comune, generatoare și peisagistică.</p>
                  </div>
                </div>
              </div>

              {/* CAPITOLUL 3 */}
              <div className="p-8 bg-[#0C1119] border border-white/[0.08] space-y-4">
                <div className="flex items-center justify-between font-mono text-xs text-[#93C8FF]">
                  <span>CAPITOLUL 03</span>
                  <span>FILTRU DE EXCLUDERE</span>
                </div>
                <h3 className="font-serif text-2xl text-[#F5F4EF]">3. Locație, Suprafață și Criterii Eliminatorii</h3>
                <p className="font-sans text-sm text-[#8A95A5] leading-relaxed">
                  Definiți criterii „non-negociabile” încă din prima zi pentru a nu irosi săptămâni pe vizionări neproductive:
                </p>
                <ul className="space-y-2 font-sans text-sm text-[#B8C2CF]">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#93C8FF] shrink-0 mt-0.5" />
                    <span><strong>Retragere fonică & poluare:</strong> Măsurați nivelul de decibeli la ore de vârf și în serile de weekend; distanța față de artere majore de tranzit.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#93C8FF] shrink-0 mt-0.5" />
                    <span><strong>Orientare cardinală:</strong> Zonele de zi și terasele principale orientate Sud / Sud-Vest beneficiază de lumină naturală pe tot parcursul zilei.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#93C8FF] shrink-0 mt-0.5" />
                    <span><strong>Vecinătăți și regim de înălțime viitor:</strong> Solicitați certificatul de urbanism pentru parcelele adiacente libere pentru a preveni blocarea vederii de către un viitor bloc.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#93C8FF] shrink-0 mt-0.5" />
                    <span><strong>Număr de locuri de parcare:</strong> Pentru proprietățile de mare valoare, minimum 2 locuri de parcare subterane individuale reprezintă un criteriu eliminatoriu.</span>
                  </li>
                </ul>
              </div>

              {/* CAPITOLUL 4 */}
              <div className="p-8 bg-[#0C1119] border border-white/[0.08] space-y-4">
                <div className="flex items-center justify-between font-mono text-xs text-[#93C8FF]">
                  <span>CAPITOLUL 04</span>
                  <span>DUE DILIGENCE JURIDIC</span>
                </div>
                <h3 className="font-serif text-2xl text-[#F5F4EF]">4. Verificarea Documentelor și a Istoricului Cadastral</h3>
                <p className="font-sans text-sm text-[#8A95A5] leading-relaxed">
                  Înainte de semnarea oricărei promisiuni de vânzare și plata vreunui avans, asigurați-vă că dosarul juridic conține în original sau copie certificată:
                </p>
                <div className="grid sm:grid-cols-2 gap-4 font-mono text-xs text-[#B8C2CF] pt-2">
                  <div className="p-4 bg-black/40 border border-white/[0.05] space-y-2">
                    <strong className="text-[#93C8FF] block">DOCUMENTE DE PROPRIETATE</strong>
                    <ul className="space-y-1 list-disc list-inside text-[#8A95A5]">
                      <li>Extras de Carte Funciară pentru Informare (proaspăt emis, &lt; 30 zile)</li>
                      <li>Titlu de proprietate complet (contract de vânzare, donație, certificat moștenitor)</li>
                      <li>Istoric complet pe ultimii 30 de ani (evitarea riscurilor Legii 10/2001)</li>
                      <li>Certificat fiscal fără debite către bugetul local</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-black/40 border border-white/[0.05] space-y-2">
                    <strong className="text-[#93C8FF] block">DOCUMENTE TEHNICO-URBANISTICE</strong>
                    <ul className="space-y-1 list-disc list-inside text-[#8A95A5]">
                      <li>Autorizație de construire + planurile vizate spre neschimbare</li>
                      <li>Proces-verbal de recepție la terminarea lucrărilor</li>
                      <li>Certificat de atestare a edificării construcției</li>
                      <li>Releveul cadastral (verificare dacă pereții existenți corespund cu schița)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* CAPITOLUL 5 */}
              <div className="p-8 bg-[#0C1119] border border-white/[0.08] space-y-4">
                <div className="flex items-center justify-between font-mono text-xs text-[#93C8FF]">
                  <span>CAPITOLUL 05</span>
                  <span>INSPECȚIE TEHNICĂ</span>
                </div>
                <h3 className="font-serif text-2xl text-[#F5F4EF]">5. Evaluarea Proprietății și a Riscurilor Structurale</h3>
                <p className="font-sans text-sm text-[#8A95A5] leading-relaxed">
                  Nu vă bazați exclusiv pe finisaje estetice de suprafață. O vizionare tehnică dedicată alături de un diriginte de șantier sau inginer constructor atestat trebuie să investigheze:
                </p>
                <ul className="space-y-2 font-sans text-sm text-[#B8C2CF]">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#93C8FF] shrink-0 mt-0.5" />
                    <span><strong>Termoviziune și izolație:</strong> Verificarea punților termice, a calității tâmplăriei exterioare și a riscului de condens în colțuri sau terase.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#93C8FF] shrink-0 mt-0.5" />
                    <span><strong>Hidroizolația teraselor și a subsolului:</strong> Istoric de infiltrații la garajele subterane sau pe tavanele ultimului nivel.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#93C8FF] shrink-0 mt-0.5" />
                    <span><strong>Capacitatea rețelelor electrice și sanitare:</strong> Putere electrică instalată (trifazic pentru pompe de căldură și stații auto electrice).</span>
                  </li>
                </ul>
              </div>

              {/* CAPITOLUL 6 */}
              <div className="p-8 bg-[#0C1119] border border-white/[0.08] space-y-4">
                <div className="flex items-center justify-between font-mono text-xs text-[#93C8FF]">
                  <span>CAPITOLUL 06</span>
                  <span>CHESTIONAR DIRECT</span>
                </div>
                <h3 className="font-serif text-2xl text-[#F5F4EF]">6. Întrebări Esențiale pentru Vânzător și Agenți</h3>
                <p className="font-sans text-sm text-[#8A95A5] leading-relaxed">
                  Formulați aceste întrebări în scris sau solicitați răspunsuri documentate:
                </p>
                <div className="space-y-2 font-mono text-xs text-[#B8C2CF]">
                  <div className="p-3 bg-black/40 border border-white/[0.05]">
                    „Care este motivul real al vânzării și care este orizontul de timp dorit pentru eliberare?”
                  </div>
                  <div className="p-3 bg-black/40 border border-white/[0.05]">
                    „Există litigii, somații de plată sau dispute de hotar înregistrate sau iminente?”
                  </div>
                  <div className="p-3 bg-black/40 border border-white/[0.05]">
                    „Au fost efectuate modificări interioare de recompartimentare față de releveul din cartea funciară?”
                  </div>
                  <div className="p-3 bg-black/40 border border-white/[0.05]">
                    „Există vreo cotă indiviză de teren privată necesară pentru căile de acces, și este ea inclusă în preț?”
                  </div>
                </div>
              </div>

              {/* CAPITOLUL 7 */}
              <div className="p-8 bg-[#0C1119] border border-white/[0.08] space-y-4">
                <div className="flex items-center justify-between font-mono text-xs text-[#93C8FF]">
                  <span>CAPITOLUL 07</span>
                  <span>FINALIZARE FORMALĂ</span>
                </div>
                <h3 className="font-serif text-2xl text-[#F5F4EF]">7. Pași de Parcurs Înainte de Semnarea Actului Notarial</h3>
                <p className="font-sans text-sm text-[#8A95A5] leading-relaxed">
                  Securizarea juridică a tranzacției necesită respectarea unei proceduri stricte:
                </p>
                <ul className="space-y-2 font-sans text-sm text-[#B8C2CF]">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#93C8FF] shrink-0 mt-0.5" />
                    <span><strong>Ofertă scrisă condiționată:</strong> Oferta dumneavoastră trebuie să stipuleze clar condiționarea de rezultatul satisfăcător al due diligence-ului tehnic și juridic.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#93C8FF] shrink-0 mt-0.5" />
                    <span><strong>Antecontract notarial notat în CF:</strong> Notarea promisiunii bilaterale în cartea funciară împiedică înstrăinarea către un terț pe perioada verificărilor.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#93C8FF] shrink-0 mt-0.5" />
                    <span><strong>Utilizarea contului fiduciar / escrow:</strong> Fondurile majore se eliberează doar la transferul efectiv al proprietății și predarea procesului-verbal de primire a cheilor.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* FORMULAR DE SOLICITARE PE EMAIL (CU VALIDARE SERVER-SIDE & ACORD GDPR SEPARAT) */}
          <section id="formular-descarcare" className="p-8 sm:p-12 lg:p-16 bg-[#0C1119] border border-white/[0.1] space-y-8">
            <div className="space-y-3 max-w-2xl">
              <span className="font-mono text-xs uppercase tracking-[0.28em] text-[#93C8FF] font-semibold block">
                TRANSMITERE DIGITALĂ
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#F5F4EF]">
                Solicitați Exemplarul Complet în Format PDF
              </h2>
              <p className="font-sans text-sm text-[#8A95A5] leading-relaxed">
                Completați formularul de mai jos pentru a primi dosarul direct pe email. Respectăm confidențialitatea datelor dumneavoastră și nu transmitem comunicări nesolicitate.
              </p>
            </div>

            {success ? (
              <div className="p-8 bg-white/[0.03] border border-[#93C8FF]/40 space-y-4">
                <div className="flex items-center gap-3 text-[#93C8FF]">
                  <CheckCircle2 className="w-6 h-6" />
                  <h3 className="font-serif text-2xl text-[#F5F4EF]">Solicitare Înregistrată cu Succes</h3>
                </div>
                <p className="font-sans text-sm text-[#B8C2CF] leading-relaxed">
                  Vă mulțumim, <strong>{fullName}</strong>. Solicitarea dumneavoastră a fost înregistrată pe server.
                </p>
                <div className="pt-2 flex flex-wrap gap-4">
                  <button
                    onClick={handlePrint}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#07090D] font-mono text-xs uppercase tracking-wider font-semibold hover:bg-[#E1E4EA]"
                  >
                    <Download className="w-4 h-4" />
                    <span>DESCARCĂ / SALVEAZĂ PDF ACUM</span>
                  </button>
                  <Link
                    href="/programare"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-[#F5F4EF] font-mono text-xs uppercase tracking-wider hover:border-[#93C8FF]"
                  >
                    <span>PROGRAMEAZĂ CONVERSAȚIE INIȚIALĂ</span>
                  </Link>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
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
                      <strong className="text-[#F5F4EF]">Consimțământ Obligatoriu:</strong> Sunt de acord cu prelucrarea datelor mele cu caracter personal furnizate mai sus în scopul exclusiv de a mi se transmite Dosarul Cumpărătorului, în conformitate cu <Link href="/privacy" className="text-[#93C8FF] underline">Politica de Confidențialitate</Link>.
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
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#07090D] font-mono text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#E1E4EA] disabled:opacity-50 transition-colors"
                  >
                    <span>{loading ? "SE PROCESEAZĂ..." : "SOLICITĂ DOSARUL CUMPĂRĂTORULUI"}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </section>

          {/* LEGAL NOTICE */}
          <section className="p-6 bg-white/[0.02] border-l-2 border-[#A97F60] font-sans text-xs text-[#8A95A5] leading-relaxed">
            <strong className="text-[#F5F4EF] font-medium block mb-1">
              Delimitare de responsabilitate:
            </strong>
            Prezentul dosar are un scop strict informativ și educativ. Nu reprezintă o opinie juridică formală și nu ține loc de asistență acordată de un avocat înscris în Barou sau de un evaluator atestat ANEVAR. Pentru fiecare achiziție individuală se recomandă auditarea documentelor de către profesioniști licențiați.
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
