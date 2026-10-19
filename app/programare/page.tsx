"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Calendar,
  Clock,
  ShieldCheck,
  Lock,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
} from "lucide-react";
import ExecutiveHeader from "@/components/ExecutiveHeader";
import Footer from "@/components/Footer";

export default function ProgramarePage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [consultationType, setConsultationType] = useState("Achiziție rezidențială prime (Buyer Advisory)");
  const [preferredTimeframe, setPreferredTimeframe] = useState("După-amiaza (14:00 - 18:00)");
  const [requestPriorNDA, setRequestPriorNDA] = useState(false);
  const [notes, setNotes] = useState("");
  const [consentPrivacy, setConsentPrivacy] = useState(false);

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!fullName.trim()) {
      setErrorMsg("Vă rugăm să introduceți numele dumneavoastră.");
      return;
    }
    if (!email.trim() || !email.includes("@")) {
      setErrorMsg("Vă rugăm să introduceți o adresă de email validă.");
      return;
    }
    if (!phone.trim()) {
      setErrorMsg("Vă rugăm să introduceți numărul de telefon.");
      return;
    }
    if (!consentPrivacy) {
      setErrorMsg("Este necesar acordul pentru prelucrarea datelor în vederea confirmării programării.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/programare", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          email,
          phone,
          consultationType,
          preferredTimeframe,
          requestPriorNDA,
          notes,
          consentPrivacy,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "A apărut o problemă la transmiterea solicitării.");
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

  return (
    <div className="min-h-screen bg-[#07090D] text-[#F5F4EF] selection:bg-[#93C8FF]/25 selection:text-[#F5F4EF]">
      <ExecutiveHeader />

      <main className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 overflow-hidden">
        {/* Architectural Grid & Ambient Aura */}
        <div className="absolute inset-0 bg-arch-grid opacity-25 pointer-events-none" />
        <div className="absolute top-24 left-1/4 w-[500px] h-[500px] bg-[#93C8FF]/5 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 w-[450px] h-[450px] bg-[#A97F60]/5 rounded-full blur-[160px] pointer-events-none" />

        <div className="site-container relative z-10 space-y-20 sm:space-y-28">

          {/* ======================================================== */}
          {/* HERO ARCHITECTURAL MASTHEAD                              */}
          {/* ======================================================== */}
          <section className="space-y-8 max-w-4xl border-b border-white/[0.08] pb-14">
            <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-white/[0.03] border border-white/[0.08] font-mono text-[10px] sm:text-[11px] tracking-[0.16em] sm:tracking-[0.25em] text-[#A97F60] uppercase max-w-full">
              <Calendar className="w-3.5 h-3.5 text-[#93C8FF] shrink-0" />
              <span className="truncate sm:overflow-visible">SESIUNE STRATEGICĂ · 20 MINUTE CONFIDENȚIALE</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#F5F4EF] font-normal tracking-tight leading-[1.12] break-words">
              Programare Conversație Inițială
            </h1>

            <p className="font-sans text-lg sm:text-xl text-[#B8C2CF] leading-relaxed font-light">
              O sesiune structurată de 20 de minute pentru a evalua obiectivele dumneavoastră imobiliare și compatibilitatea cu metodologia de lucru Executive. Fără obligații comerciale sau costuri asociate.
            </p>
          </section>

          {/* ======================================================== */}
          {/* ASYMMETRIC DUAL-COLUMN INTAKE SUITE                      */}
          {/* ======================================================== */}
          <section className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column: Guidelines, NDA & Direct Contact (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Photo Aperture */}
              <div className="relative rounded-3xl border border-white/[0.08] bg-[#0C1119] p-3 shadow-xl overflow-hidden">
                <div className="relative aspect-[16/10] w-full rounded-2xl bg-[#1B2028] overflow-hidden">
                  <Image
                    src="/media/cristian-vaduva/personal/cristian-vaduva-office-armchair-consultation.png"
                    alt="Cristian Văduva — Consultanță privată în biroul executiv"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07090D] via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-3 left-3 right-3 font-mono text-[10px] text-[#8A95A5] flex items-center justify-between">
                    <span>BIROU EXECUTIVE BUCUREȘTI</span>
                    <span className="text-[#93C8FF]">DIALOG DIRECT</span>
                  </div>
                </div>
              </div>

              {/* Expectations Cadran */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#0C1119] border border-white/[0.08] space-y-4 shadow-xl">
                <span className="font-mono text-xs uppercase tracking-wider text-[#93C8FF] font-semibold block">
                  CE VA AVEA LOC ÎN CELE 20 DE MINUTE:
                </span>
                <ul className="space-y-4 font-sans text-xs sm:text-sm text-[#8A95A5]">
                  <li className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-[#93C8FF] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#F5F4EF] block font-mono text-xs mb-0.5">CLARIFICAREA OBIECTIVULUI</strong>
                      Înțelegerea profilului proprietății căutate sau a activului propus spre valorificare pe termen lung.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="w-4 h-4 text-[#93C8FF] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#F5F4EF] block font-mono text-xs mb-0.5">EVALUAREA COMPATIBILITĂȚII</strong>
                      Verificarea dacă cerințele dumneavoastră se aliniază cu expertiza și aria noastră de acțiune.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#93C8FF] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#F5F4EF] block font-mono text-xs mb-0.5">FĂRĂ PRESIUNE COMERCIALĂ</strong>
                      Conversația este strict analitică. Nu vă vom propune proprietăți nepotrivite sau contracte forțate.
                    </div>
                  </li>
                </ul>
              </div>

              {/* Protocol NDA box */}
              <div className="p-6 rounded-2xl bg-[#0C1119] border border-white/[0.08] space-y-3 shadow-xl">
                <div className="flex items-center gap-2 text-[#A97F60] font-mono text-xs uppercase tracking-wider">
                  <Lock className="w-4 h-4" />
                  <span>Opțiunea de Confidențialitate (NDA)</span>
                </div>
                <p className="font-sans text-xs text-[#8A95A5] leading-relaxed">
                  Dacă discuția vizează active private sensibile sau proprietăți off-market, puteți bifa opțiunea de a semna un Acord Bilateral de Confidențialitate (NDA) în prealabil, înainte de dezvăluirea datelor particulare.
                </p>
                <div className="text-[11px] font-mono text-[#6B7280]">
                  *Un NDA este o convenție contractuală civilă încheiată în scris între părți.
                </div>
              </div>

              {/* Procedură de confirmare */}
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-2">
                <h4 className="font-serif text-sm text-[#F5F4EF]">Confirmare manuală în maximum 24h:</h4>
                <p className="font-sans text-xs text-[#8A95A5] leading-relaxed">
                  Nu utilizăm calendare automate care simulează disponibilități artificiale. Cristian Văduva verifică agenda personală și vă va contacta direct în termen de 24 de ore lucrătoare pentru a stabili data și ora convenită.
                </p>
              </div>
            </div>

            {/* Right Column: High-End Booking Form (7 cols) */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-12 rounded-3xl bg-[#0C1119] border border-white/[0.08] relative shadow-2xl">
                {success ? (
                  <div className="space-y-6 text-center py-8">
                    <div className="w-14 h-14 mx-auto rounded-full bg-white/[0.03] border border-[#93C8FF]/40 flex items-center justify-center text-[#93C8FF]">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F4EF]">
                        Solicitare Transmisă cu Succes
                      </h3>
                      <p className="font-sans text-sm text-[#8A95A5] max-w-md mx-auto leading-relaxed">
                        Vă mulțumim, <strong>{fullName}</strong>. Solicitarea dumneavoastră a fost înregistrată. Vă vom contacta la adresa <strong>{email}</strong> sau telefonic în maximum 24 de ore lucrătoare pentru a stabili ora exactă.
                      </p>
                    </div>

                    {requestPriorNDA && (
                      <div className="p-4 rounded-xl bg-black/40 border border-[#A97F60]/40 font-mono text-xs text-[#A97F60] max-w-md mx-auto">
                        Ați solicitat semnarea unui acord de confidențialitate (NDA) în prealabil. Draftul acordului va fi transmis înainte de desfășurarea sesiunii.
                      </div>
                    )}

                    <div className="pt-4 flex flex-wrap justify-center gap-3">
                      <Link
                        href="/"
                        className="btn-apple-pill-primary shadow-lg"
                      >
                        <span>ÎNAPOI LA PAGINA PRINCIPALĂ</span>
                      </Link>
                      <Link
                        href="/cum-lucrez"
                        className="btn-apple-pill-secondary"
                      >
                        <span>CONSULTĂ ETAPELE COLABORĂRII</span>
                      </Link>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-1">
                      <span className="font-mono text-xs uppercase tracking-widest text-[#93C8FF] block">
                        INTAKE PROTOCOL
                      </span>
                      <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F4EF]">
                        Formular de Solicitare Discuție
                      </h3>
                      <p className="font-sans text-xs sm:text-sm text-[#8A95A5]">
                        Introduceți datele necesare pentru a pregăti conversația.
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
                          placeholder="Ex: Cristian Ionescu"
                          className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-white/[0.1] text-sm text-[#F5F4EF] focus:outline-none focus:border-[#93C8FF] font-sans"
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
                          placeholder="nume@exemplu.ro"
                          className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-white/[0.1] text-sm text-[#F5F4EF] focus:outline-none focus:border-[#93C8FF] font-sans"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="font-mono text-xs uppercase tracking-wider text-[#B8C2CF] block">
                          Număr de Telefon <span className="text-[#93C8FF]">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+40 7..."
                          className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-white/[0.1] text-sm text-[#F5F4EF] focus:outline-none focus:border-[#93C8FF] font-sans"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="font-mono text-xs uppercase tracking-wider text-[#B8C2CF] block">
                          Interval Orar Preferat
                        </label>
                        <select
                          value={preferredTimeframe}
                          onChange={(e) => setPreferredTimeframe(e.target.value)}
                          className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-white/[0.1] text-sm text-[#F5F4EF] focus:outline-none focus:border-[#93C8FF] font-sans"
                        >
                          <option value="Dimineața (09:00 - 12:00)">Dimineața (09:00 - 12:00)</option>
                          <option value="Prânz (12:00 - 15:00)">Prânz (12:00 - 15:00)</option>
                          <option value="După-amiaza (15:00 - 18:00)">După-amiaza (15:00 - 18:00)</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-mono text-xs uppercase tracking-wider text-[#B8C2CF] block">
                        Subiectul Principal al Conversației
                      </label>
                      <select
                        value={consultationType}
                        onChange={(e) => setConsultationType(e.target.value)}
                        className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-white/[0.1] text-sm text-[#F5F4EF] focus:outline-none focus:border-[#93C8FF] font-sans"
                      >
                        <option value="Achiziție rezidențială prime (Buyer Advisory)">
                          Mandat de Achiziție Rezidențială Prime (București)
                        </option>
                        <option value="Vânzare asistată & poziționare (Seller Advisory)">
                          Vânzare Asistată & Poziționare Proprietate De Lux
                        </option>
                        <option value="Proprietăți internaționale (Parteneriat Chestertons)">
                          Achiziție Internațională (Londra, Coasta de Azur, Dubai etc.)
                        </option>
                        <option value="Protecție patrimonială / Asigurare de valoare mare">
                          Consultanță Protecție Clădiri & Bunuri (Generali)
                        </option>
                        <option value="Alt subiect / Consultanță generală">
                          Alt subiect de consultanță imobiliară privată
                        </option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-mono text-xs uppercase tracking-wider text-[#B8C2CF] block">
                        Detalii Suplimentare / Context (Opțional)
                      </label>
                      <textarea
                        rows={3}
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="Menționați pe scurt criteriile cheie (zonă, tip imobil, orizont temporal)..."
                        className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-white/[0.1] text-sm text-[#F5F4EF] focus:outline-none focus:border-[#93C8FF] font-sans resize-none"
                      />
                    </div>

                    {/* BIFĂ NDA ÎN PREALABIL */}
                    <div className="p-4 rounded-xl bg-black/40 border border-white/[0.08] space-y-2">
                      <label className="flex items-start gap-3 cursor-pointer text-xs text-[#E1E4EA] leading-relaxed">
                        <input
                          type="checkbox"
                          checked={requestPriorNDA}
                          onChange={(e) => setRequestPriorNDA(e.target.checked)}
                          className="mt-1 h-4 w-4 rounded border-white/20 bg-black text-[#A97F60] focus:ring-0 cursor-pointer"
                        />
                        <span>
                          <strong className="text-[#A97F60]">Solicit Acord de Confidențialitate (NDA) în prealabil:</strong> Doresc transmiterea unui acord bilateral de confidențialitate înainte de a divulga detalii specifice privind activele sau planurile mele.
                        </span>
                      </label>
                    </div>

                    {/* BIFĂ GDPR OBLIGATORIE */}
                    <div className="pt-1">
                      <label className="flex items-start gap-3 cursor-pointer text-xs text-[#8A95A5] leading-relaxed">
                        <input
                          type="checkbox"
                          required
                          checked={consentPrivacy}
                          onChange={(e) => setConsentPrivacy(e.target.checked)}
                          className="mt-1 h-4 w-4 rounded border-white/20 bg-black text-[#93C8FF] focus:ring-0 cursor-pointer"
                        />
                        <span>
                          Sunt de acord cu prelucrarea datelor mele cu caracter personal furnizate în scopul stabilirii și desfășurării conversației inițiale, conform <Link href="/privacy" className="text-[#93C8FF] underline">Politicii de Confidențialitate</Link>. Datele nu sunt înstrăinate către terți.
                        </span>
                      </label>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={loading}
                        className="btn-apple-pill-primary w-full shadow-xl"
                      >
                        <span>{loading ? "SE TRANSMITE..." : "SOLICITĂ PROGRAMAREA CONVERSAȚIEI"}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="font-mono text-[11px] text-[#6B7280] text-center sm:text-left pt-2 border-t border-white/[0.06]">
                      Canal direct alternativ: <a href="mailto:cristianvaduva@duck.com" className="text-[#93C8FF] underline">cristianvaduva@duck.com</a> · Signal / WhatsApp: <a href="https://wa.me/436509536345" target="_blank" rel="noopener noreferrer" className="text-[#F5F4EF] hover:underline">+43 650 953 6345</a>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
