"use client";

import React, { useState } from "react";
import EditorialCadran from "./EditorialCadran";
import {
  Mail,
  MessageSquare,
  Phone,
  Send,
  ShieldCheck,
  CheckCircle2,
  ArrowUpRight,
  ExternalLink,
  Share2,
} from "lucide-react";

const LinkedinIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.45 1.45 0 1 0 0-2.9 1.45 1.45 0 0 0 0 2.9m1.4 9.74v-8.37H5.06v8.37h2.8z"/>
  </svg>
);

const YoutubeIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const InstagramIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const FacebookIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

interface ExecutiveContactCadranProps {
  className?: string;
  defaultProperty?: string;
}

export default function ExecutiveContactCadran({
  className = "",
  defaultProperty = "",
}: ExecutiveContactCadranProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: defaultProperty || "Sovereign Real Estate Acquisition",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      handle: "Cristian Văduva",
      url: "https://linkedin.com/in/cristianvăduva",
      icon: LinkedinIcon,
    },
    {
      name: "Instagram",
      handle: "@cristian_vaduva_cristianv",
      url: "https://instagram.com/cristian_vaduva_cristianv",
      icon: InstagramIcon,
    },
    {
      name: "Facebook",
      handle: "Cristian Vaduva CV",
      url: "https://facebook.com/CristianVaduvaCV",
      icon: FacebookIcon,
    },
    {
      name: "YouTube",
      handle: "@CristianVaduvaCV",
      url: "https://youtube.com/@CristianVaduvaCV",
      icon: YoutubeIcon,
    },
    {
      name: "Linktree Hub",
      handle: "All Verified Links",
      url: "https://linktr.ee/CristianVaduvaRealEstate",
      icon: Share2,
    },
    {
      name: "Telegram Channel",
      handle: "@capitalinvestcristianvaduva",
      url: "https://t.me/capitalinvestcristianvaduva",
      icon: Send,
    },
  ];

  return (
    <section className={`py-20 sm:py-28 lg:py-36 px-6 sm:px-12 lg:px-20 border-b border-white/[0.08] bg-[#07090D] relative overflow-hidden ${className}`}>
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Masthead */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-white/[0.08] pb-8">
          <div className="space-y-3">
            <div className="flex items-center gap-3 font-mono text-[10px] sm:text-xs text-[#93C8FF] uppercase tracking-[0.28em] font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#93C8FF] animate-pulse" />
              <span>DIRECT FIDUCIARY ADVISORY DESK</span>
              <span className="text-white/20">|</span>
              <span className="text-[#8A95A5]">CONFIDENTIAL CONSULTATION</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#F5F4EF] leading-[1.08] tracking-tight">
              Initiate a Private Mandate<br />
              <span className="text-[#A97F60] italic font-normal">with Cristian Văduva.</span>
            </h2>
          </div>

          <div className="shrink-0 flex items-center gap-2 font-mono text-xs text-[#93C8FF]">
            <ShieldCheck className="w-4 h-4" />
            <span className="uppercase tracking-[0.2em] font-medium">Encrypted Direct Channels</span>
          </div>
        </div>

        {/* Two-Column Grid: Direct Communication Rails + Inquiry Form */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Direct Communication Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Primary Direct Lines */}
            <EditorialCadran
              accentColor="ice"
              surface="midnight"
              className="p-6 sm:p-8 space-y-6 bg-[#0C1119]"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#93C8FF] font-semibold block border-b border-white/[0.08] pb-3">
                DIRECT PRIVATE CHANNELS
              </span>

              <div className="space-y-5">
                {/* Email */}
                <div className="space-y-1">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-[#8A95A5] block">
                    CONFIDENTIAL INBOX
                  </span>
                  <a
                    href="mailto:cristianvaduva@duck.com"
                    className="font-mono text-sm sm:text-base text-[#F5F4EF] hover:text-[#93C8FF] flex items-center gap-2 transition-colors"
                  >
                    <Mail className="w-4 h-4 text-[#93C8FF]" />
                    <span>cristianvaduva@duck.com</span>
                  </a>
                </div>

                {/* WhatsApp */}
                <div className="space-y-1">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-[#8A95A5] block">
                    ENCRYPTED WHATSAPP LINE
                  </span>
                  <a
                    href="https://wa.me/436509536345"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-sm sm:text-base text-[#F5F4EF] hover:text-[#93C8FF] flex items-center gap-2 transition-colors"
                  >
                    <MessageSquare className="w-4 h-4 text-[#93C8FF]" />
                    <span>+43 650 953 6345</span>
                  </a>
                </div>

                {/* Insurance Dedicated Hotline */}
                <div className="space-y-1">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-[#8A95A5] block">
                    INSURANCE & ASSET PROTECTION HOTLINE
                  </span>
                  <a
                    href="tel:0767110439"
                    className="font-mono text-sm sm:text-base text-[#F5F4EF] hover:text-[#A97F60] flex items-center gap-2 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#A97F60]" />
                    <span>0767 110 439</span>
                  </a>
                </div>

                {/* Telegram Profile */}
                <div className="space-y-1">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-[#8A95A5] block">
                    TELEGRAM DIRECT
                  </span>
                  <a
                    href="https://t.me/CristianVaduva"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-sm sm:text-base text-[#F5F4EF] hover:text-[#93C8FF] flex items-center gap-2 transition-colors"
                  >
                    <Send className="w-4 h-4 text-[#93C8FF]" />
                    <span>@CristianVaduva</span>
                  </a>
                </div>
              </div>
            </EditorialCadran>

            {/* Verified Social & Ecosystem Profiles */}
            <EditorialCadran
              accentColor="copper"
              surface="midnight"
              className="p-6 sm:p-8 space-y-4 bg-[#0C1119]"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#A97F60] font-semibold block border-b border-white/[0.08] pb-3">
                VERIFIED DIGITAL PROFILES
              </span>

              <div className="grid grid-cols-2 gap-3 pt-1">
                {socialLinks.map((s, idx) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={idx}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 border border-white/[0.08] hover:border-[#93C8FF] bg-[#1B2028]/50 hover:bg-[#1B2028] transition-all group block space-y-1"
                    >
                      <div className="flex items-center justify-between text-[#8A95A5] group-hover:text-[#93C8FF]">
                        <span className="font-mono text-[9px] uppercase tracking-wider">{s.name}</span>
                        <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                      <span className="font-mono text-[11px] text-[#F5F4EF] block truncate font-medium">
                        {s.handle}
                      </span>
                    </a>
                  );
                })}
              </div>
            </EditorialCadran>
          </div>

          {/* Right Column: Confidential Mandate Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <EditorialCadran
              watermarkNumber="01"
              accentColor="ice"
              surface="midnight"
              className="p-8 sm:p-12 space-y-8 bg-[#0C1119] border-white/[0.12]"
            >
              <div className="space-y-2 border-b border-white/[0.08] pb-6">
                <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#93C8FF] font-semibold block">
                  STRUCTURED INQUIRY PROTOCOL
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F4EF]">
                  Submit a Retained Advisory Brief
                </h3>
                <p className="font-sans text-xs text-[#B8C2CF] font-light">
                  Directly dispatched to Cristian Văduva. Inquiries are subject to non-disclosure confidentiality covenants.
                </p>
              </div>

              {status === "success" ? (
                <div className="p-8 border border-[#93C8FF] bg-[#93C8FF]/10 text-center space-y-4">
                  <CheckCircle2 className="w-8 h-8 text-[#93C8FF] mx-auto" />
                  <h4 className="font-serif text-2xl text-[#F5F4EF]">Mandate Brief Received</h4>
                  <p className="font-sans text-xs text-[#B8C2CF] max-w-md mx-auto leading-relaxed">
                    Thank you. Your inquiry has been received directly at the executive advisory desk. Cristian Văduva will review your brief and contact you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 font-mono text-xs">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[#8A95A5] uppercase tracking-wider text-[10px] block">
                        PRINCIPAL / ADVISOR NAME *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Marcus Vance"
                        className="w-full px-4 py-3 bg-[#07090D] border border-white/[0.1] text-[#F5F4EF] focus:outline-none focus:border-[#93C8FF] transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[#8A95A5] uppercase tracking-wider text-[10px] block">
                        CONFIDENTIAL EMAIL *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="vance@familyoffice.com"
                        className="w-full px-4 py-3 bg-[#07090D] border border-white/[0.1] text-[#F5F4EF] focus:outline-none focus:border-[#93C8FF] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[#8A95A5] uppercase tracking-wider text-[10px] block">
                        TELEPHONE / WHATSAPP NUMBER
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+43 / +40 / +971 ..."
                        className="w-full px-4 py-3 bg-[#07090D] border border-white/[0.1] text-[#F5F4EF] focus:outline-none focus:border-[#93C8FF] transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="cadran-mandate-select" className="text-[#8A95A5] uppercase tracking-wider text-[10px] block">
                        ADVISORY MANDATE DISCIPLINE
                      </label>
                      <select
                        id="cadran-mandate-select"
                        aria-label="Advisory Mandate Discipline"
                        value={formData.interest}
                        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                        className="w-full px-4 py-3 bg-[#07090D] border border-white/[0.1] text-[#F5F4EF] focus:outline-none focus:border-[#93C8FF] transition-colors cursor-pointer"
                      >
                        <option value="Sovereign Real Estate Acquisition">Sovereign Real Estate Acquisition</option>
                        <option value="Estate & Penthouse Disposition">Off-Market Property Disposition</option>
                        <option value="Financing & Mortgage Structuring">Mortgage & Credit Structuring</option>
                        <option value="Asset Insurance Architecture">Asset Protection & Insurance</option>
                        <option value="PropTech & Strategic Partnership">Technology & Strategic Alliance</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="cadran-message-textarea" className="text-[#8A95A5] uppercase tracking-wider text-[10px] block">
                      MANDATE PARAMETERS & SCOPE *
                    </label>
                    <textarea
                      id="cadran-message-textarea"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Outline acquisition criteria, jurisdiction, asset specifications, or confidential timeline..."
                      className="w-full px-4 py-3 bg-[#07090D] border border-white/[0.1] text-[#F5F4EF] focus:outline-none focus:border-[#93C8FF] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full py-4 bg-[#93C8FF] hover:bg-[#B8C2CF] text-[#07090D] uppercase tracking-[0.22em] font-bold transition-all shadow-xl flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 min-h-[52px]"
                  >
                    <span className="text-[#07090D] font-bold">{status === "submitting" ? "TRANSMITTING BRIEF..." : "TRANSMIT CONFIDENTIAL BRIEF"}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#07090D]" />
                  </button>
                </form>
              )}
            </EditorialCadran>
          </div>
        </div>
      </div>
    </section>
  );
}
