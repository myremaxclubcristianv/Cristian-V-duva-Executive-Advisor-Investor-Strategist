"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import ExecutiveHeader from "@/components/ExecutiveHeader";
import Footer from "@/components/Footer";
import Section from "@/components/ui/Section";
import { Lock, Phone, Send, Mail, ShieldCheck, MapPin, ArrowUpRight, CheckCircle2 } from "lucide-react";

function ContactFormContent() {
  const searchParams = useSearchParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [interest, setInterest] = useState("Buyer representation");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!searchParams) return;
    const rawInterest = searchParams.get("interest") || "";
    const rawProperty = searchParams.get("property") || "";

    const validInterests = [
      "Buyer representation",
      "Seller representation",
      "Investor advisory",
      "Property sourcing",
      "Strategic consultation",
      "Other"
    ];

    if (rawInterest && validInterests.includes(rawInterest)) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setInterest(rawInterest);
    }

    if (rawProperty) {
      const sanitizedProperty = rawProperty
        .replace(/[<>{}[\]\\^`~|]/g, "")
        .replace(/[\u0000-\u001F\u007F-\u009F]/g, "")
        .slice(0, 160)
        .trim();

      if (sanitizedProperty) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMessage(
          `Referință proprietate: ${sanitizedProperty}\nSolicit analiză preliminară și asistență la tranzacție.`
        );
      }
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) return;
    setLoading(true);

    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          interest,
          message,
          website: honeypot,
        }),
      });

      if (res.ok) {
        setSubmitted(true);
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
      } else {
        window.open(
          `https://wa.me/436509536345?text=${encodeURIComponent(
            `Consultation Request:\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMandate: ${interest}\nMessage: ${message}`
          )}`,
          "_blank"
        );
        setSubmitted(true);
      }
    } catch {
      window.open(
        `https://wa.me/436509536345?text=${encodeURIComponent(
          `Consultation Request:\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMandate: ${interest}\nMessage: ${message}`
        )}`,
        "_blank"
      );
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-3xl border border-white/[0.08] bg-[#121721]/90 backdrop-blur-2xl p-8 sm:p-12 relative shadow-2xl">
      <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-6">
        <span className="font-mono text-xs uppercase tracking-[0.24em] text-[#93C8FF] font-semibold flex items-center gap-2">
          <Lock className="w-3.5 h-3.5" />
          <span>INTAKE DOSSIER FORM</span>
        </span>
        <span className="px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.1] font-mono text-[10px] text-[#8A95A5]">CONFIDENTIAL</span>
      </div>

      {submitted ? (
        <div className="py-12 text-center space-y-4">
          <div className="w-12 h-12 rounded-full border border-[#93C8FF] flex items-center justify-center mx-auto text-[#93C8FF]">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h4 className="font-serif text-2xl text-[#F5F4EF]">Solicitare Transmisă</h4>
          <p className="font-sans text-xs text-[#B8C2CF] max-w-sm mx-auto leading-relaxed">
            Vă mulțumim. Detaliile au fost înregistrate. Cristian Văduva sau biroul privat vă vor răspunde direct în termen de 24 de ore.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="btn-apple-pill-secondary mt-4"
          >
            Trimite o nouă solicitare
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Honeypot field for anti-spam */}
          <div style={{ position: "absolute", left: "-9999px", opacity: 0, height: 0, width: 0, overflow: "hidden", pointerEvents: "none" }} aria-hidden="true">
            <label htmlFor="contact-website-trap">Leave blank</label>
            <input
              id="contact-website-trap"
              type="text"
              name="website"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />
          </div>

          <div className="space-y-1.5">
            <label className="font-mono text-[10px] uppercase tracking-widest text-[#B8C2CF]">
              Nume Principal / Reprezentant *
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="ex. Cristian Popescu"
              className="w-full rounded-xl bg-[#0C1119] border border-white/[0.1] px-4 py-3.5 font-sans text-sm text-[#F5F4EF] placeholder-white/20 focus:outline-none focus:border-[#93C8FF] transition-colors"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="font-mono text-[10px] uppercase tracking-widest text-[#B8C2CF]">
                Email Direct *
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="principal@familyoffice.com"
                className="w-full rounded-xl bg-[#0C1119] border border-white/[0.1] px-4 py-3.5 font-sans text-sm text-[#F5F4EF] placeholder-white/20 focus:outline-none focus:border-[#93C8FF] transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label className="font-mono text-[10px] uppercase tracking-widest text-[#B8C2CF]">
                Telefon / Signal Direct
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+40 ... / +43 ..."
                className="w-full rounded-xl bg-[#0C1119] border border-white/[0.1] px-4 py-3.5 font-sans text-sm text-[#F5F4EF] placeholder-white/20 focus:outline-none focus:border-[#93C8FF] transition-colors"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="contact-mandate-select" className="font-mono text-[10px] uppercase tracking-widest text-[#B8C2CF]">
              Tipologie Solicitare / Mandat *
            </label>
            <select
              id="contact-mandate-select"
              aria-label="Tipologie Solicitare / Mandat"
              value={interest}
              onChange={(e) => setInterest(e.target.value)}
              className="w-full rounded-xl bg-[#0C1119] border border-white/[0.1] px-4 py-3.5 font-sans text-sm text-[#F5F4EF] focus:outline-none focus:border-[#93C8FF] transition-colors"
            >
              <option value="Buyer representation">Reprezentare Cumpărător (Căutare proprietăți, due diligence, achiziție)</option>
              <option value="Seller representation">Reprezentare Vânzător (Poziționare, promovare privată, tranzacționare)</option>
              <option value="Investor advisory">Consultanță Investiții (Screening piață, analiză financiară, underwriting)</option>
              <option value="Property sourcing">Sourcing Proprietăți (Identificare oportunități on-market & off-market)</option>
              <option value="Strategic consultation">Consultanță Strategică (Imobiliară & capital)</option>
              <option value="Other">Alt tip de mandat dedicat</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="font-mono text-[10px] uppercase tracking-widest text-[#B8C2CF]">
              Note Executive / Briefing
            </label>
            <textarea
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Descrieți cerințele tranzacției, zona geografică vizată, parametrii de capital sau calendarul de execuție..."
              className="w-full rounded-xl bg-[#0C1119] border border-white/[0.1] px-4 py-3.5 font-sans text-sm text-[#F5F4EF] placeholder-white/20 focus:outline-none focus:border-[#93C8FF] transition-colors resize-none"
            />
          </div>

          {/* GDPR / Privacy Consent Checkbox */}
          <div className="flex items-start gap-2.5 pt-1">
            <input
              id="contact-gdpr-consent"
              type="checkbox"
              required
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="mt-1 h-4 w-4 rounded border-white/20 bg-[#0C1119] text-[#93C8FF] focus:ring-[#93C8FF] cursor-pointer"
            />
            <label htmlFor="contact-gdpr-consent" className="text-[11px] text-[#B8C2CF] leading-relaxed cursor-pointer">
              Sunt de acord cu prelucrarea datelor transmise pentru a primi un răspuns la solicitare, conform{" "}
              <Link href="/privacy" className="text-[#93C8FF] hover:underline" target="_blank">
                Politicii de Confidențialitate
              </Link>.
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn-apple-pill-primary w-full shadow-xl"
          >
            <span>{loading ? "SE TRANSMITE..." : "TRANSMITE SOLICITAREA CONFIDENȚIALĂ"}</span>
            <Send className="w-4 h-4" />
          </button>

          <div className="font-mono text-[9px] uppercase tracking-wider text-center text-[#8A95A5]">
            Solicitările sunt tratate cu discreție maximă. Un acord separat de confidențialitate (NDA) poate fi discutat și semnat înainte de partajarea informațiilor sensibile.
          </div>
        </form>
      )}
    </div>
  );
}

export default function Contact() {
  return (
    <Section variant="dark" className="flex flex-col min-h-screen bg-[#07090D] text-[#F5F4EF] selection:bg-[#93C8FF]/25 selection:text-[#F5F4EF]">
      <ExecutiveHeader />

      <main className="flex-1 pt-28 sm:pt-36">
        {/* ======================================================== */}
        {/* 01 // ARCHITECTURAL INTAKE HERO                          */}
        {/* ======================================================== */}
        <section className="site-chapter border-b border-white/[0.08] relative overflow-hidden bg-arch-grid">
          {/* Corner Crosshairs */}
          <div className="absolute top-10 left-6 lg:left-16 w-3 h-3 border-t border-l border-[#93C8FF]" />
          <div className="absolute top-10 right-6 lg:right-16 w-3 h-3 border-t border-r border-[#93C8FF]" />

          <div className="site-container space-y-12 relative z-10">
            <div className="flex items-center justify-between border-b border-white/[0.1] pb-4 font-mono text-[10px] sm:text-xs uppercase tracking-[0.16em] sm:tracking-[0.28em] text-[#93C8FF]">
              <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                <span className="w-2 h-2 rounded-full bg-[#93C8FF] animate-pulse shrink-0" />
                <span>01 // BIROU PRIVAT DE CONSULTANȚĂ</span>
                <span className="text-white/20 hidden xs:inline">/</span>
                <span className="text-[#B8C2CF] hidden xs:inline">CONSULTANȚĂ CONFIDENȚIALĂ</span>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-[#8A95A5]">
                <Lock className="w-3.5 h-3.5 text-[#93C8FF]" />
                <span>CANAL DIRECT CONFIDENȚIAL</span>
              </div>
            </div>

            <div className="max-w-4xl space-y-6">
              <h1 className="font-serif text-3xl sm:text-6xl lg:text-7xl xl:text-8xl text-[#F5F4EF] leading-[0.98] tracking-tight break-words">
                Inițiați un Dialog<br />
                <span className="text-[#A97F60] italic font-normal">Strategic & Dedicat.</span>
              </h1>

              <p className="font-sans text-base sm:text-xl text-[#B8C2CF] font-light max-w-2xl leading-relaxed">
                Interacțiune directă pentru achiziții imobiliare de anvergură, analiză tranzacțională și consultanță strategică de proprietate. Solicitările sunt evaluate direct de Cristian Văduva.
              </p>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 02 // DUAL-COLUMN INTAKE MATRIX                          */}
        {/* ======================================================== */}
        <section className="site-chapter bg-[#0C1119]">
          <div className="site-container">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Left Column: Direct Encrypted Channels & Governance */}
              <div className="lg:col-span-5 space-y-8">
                <div className="space-y-4">
                  <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#A97F60] font-semibold block">
                    ACCES DIRECT PRINCIPAL
                  </span>
                  <h3 className="font-serif text-3xl sm:text-4xl text-[#F5F4EF]">
                    Canale Discrete de Comunicare
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#B8C2CF] font-light leading-relaxed">
                    Principals și mandatele private beneficiază de acces direct, fără intermediari auxiliari. Puteți opta pentru comunicare directă securizată sau transmiterea unui dosar scris.
                  </p>
                </div>

                <div className="space-y-4 font-mono text-xs">
                  <a
                    href="https://wa.me/436509536345"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-5 rounded-2xl border border-white/[0.08] bg-[#121721] hover:border-white/[0.22] hover:bg-[#161c28] transition-colors group shadow-lg"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-full border border-white/[0.1] bg-white/[0.04] flex items-center justify-center text-[#93C8FF]">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[#8A95A5] block text-[10px]">DIRECT WHATSAPP / SIGNAL</span>
                        <span className="text-[#F5F4EF] font-sans font-medium text-sm">+43 650 953 6345</span>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#B8C2CF] group-hover:text-[#93C8FF] transition-colors" />
                  </a>

                  <div className="p-5 rounded-2xl border border-white/[0.08] bg-[#121721] space-y-2 shadow-lg">
                    <div className="text-[#93C8FF] text-[10px] uppercase tracking-widest font-semibold flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>OFFICE OF CRISTIAN VĂDUVA</span>
                    </div>
                    <div className="text-[#B8C2CF] text-xs font-sans space-y-1">
                      <p>București, România (Birou Principal)</p>
                      <p>Coridoare imobiliare internaționale & parteneriate dedicate</p>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl border border-white/[0.08] bg-[#07090D] text-[#B8C2CF] text-[11px] leading-relaxed flex items-start gap-3 shadow-lg">
                    <ShieldCheck className="w-4 h-4 text-[#93C8FF] mt-0.5 shrink-0" />
                    <span>
                      Confidențialitate contractuală. Posibilitate de încheiere a unui acord bilateral NDA înainte de schimbul de informații private.
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Encrypted Intake Form */}
              <div className="lg:col-span-7">
                <Suspense
                  fallback={
                    <div className="border border-white/[0.14] bg-[#1B2028]/90 p-8 sm:p-12 text-center font-mono text-xs text-[#8A95A5]">
                      SE ÎNCARCĂ FORMULARUL...
                    </div>
                  }
                >
                  <ContactFormContent />
                </Suspense>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </Section>
  );
}
