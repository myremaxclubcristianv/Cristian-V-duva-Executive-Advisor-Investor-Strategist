"use client";

import { useState } from "react";
import { MessageSquare, Send, Mail, Phone, ShieldCheck, ArrowUpRight, Share2, Sparkles, CheckCircle2 } from "lucide-react";
import { YoutubeIcon, LinkedinIcon } from "@/components/icons/SocialIcons";

export default function AppleContactDesk() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [intent, setIntent] = useState("Acquisition");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          interest: intent,
          message,
        }),
      });

      if (res.ok) {
        setSuccess(true);
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
      } else {
        // Fallback open direct WhatsApp if API response is not ok
        window.open(
          `https://wa.me/436509536345?text=${encodeURIComponent(
            `Hello Cristian, my name is ${name} (${email}, ${phone}). Mandate interest: ${intent}. Brief: ${message}`
          )}`,
          "_blank"
        );
        setSuccess(true);
      }
    } catch {
      window.open(
        `https://wa.me/436509536345?text=${encodeURIComponent(
          `Hello Cristian, my name is ${name} (${email}, ${phone}). Mandate interest: ${intent}. Brief: ${message}`
        )}`,
        "_blank"
      );
      setSuccess(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative w-full py-20 sm:py-28 bg-[#090909] text-[#F5F5F7] border-t border-white/10">
      <div className="site-container space-y-12 sm:space-y-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-[#B89B72]">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>CONTACT DESK & PRIVATE ADVISORY</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white">
              Initiate a Strategic Dialogue
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 font-light">
              Direct and confidential communication channels for prime real estate acquisitions, capital advisory, and private representation.
            </p>
          </div>

          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-[#B89B72]">
            <ShieldCheck className="w-4 h-4 text-[#B89B72]" />
            <span>STRICT UHNW CONFIDENTIALITY</span>
          </div>
        </div>

        {/* 2-Column Apple Cadran Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left: Verified Official Accounts (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#121212] border border-white/10 rounded-3xl p-6 sm:p-8 space-y-6">
              <h3 className="text-xl font-semibold text-white">
                Verified Official Channels
              </h3>
              <p className="text-xs text-neutral-400 font-light leading-relaxed">
                Verify official Cristian Văduva communication channels for all secure transactions and direct advisory correspondence.
              </p>

              {/* Direct Channels */}
              <div className="space-y-3">
                
                {/* WhatsApp */}
                <a
                  href="https://wa.me/436509536345"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-white/[0.03] hover:bg-emerald-500/10 border border-white/10 hover:border-emerald-500/30 flex items-center justify-between group transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-mono uppercase text-neutral-400">WhatsApp Direct</div>
                      <div className="text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors">
                        +43 650 953 6345
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-emerald-400 transition-all" />
                </a>

                {/* Telegram */}
                <a
                  href="https://t.me/capitalinvestcristianvaduva"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-white/[0.03] hover:bg-sky-500/10 border border-white/10 hover:border-sky-500/30 flex items-center justify-between group transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-sky-500/15 border border-sky-500/30 text-sky-400 flex items-center justify-center">
                      <Send className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-mono uppercase text-neutral-400">Telegram Channel</div>
                      <div className="text-sm font-semibold text-white group-hover:text-sky-400 transition-colors">
                        @capitalinvestcristianvaduva
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-sky-400 transition-all" />
                </a>

                {/* Email */}
                <a
                  href="mailto:cristianvaduva@duck.com"
                  className="p-4 rounded-2xl bg-white/[0.03] hover:bg-[#B89B72]/10 border border-white/10 hover:border-[#B89B72]/30 flex items-center justify-between group transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#B89B72]/15 border border-[#B89B72]/30 text-[#B89B72] flex items-center justify-center">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-mono uppercase text-neutral-400">Executive Email</div>
                      <div className="text-sm font-semibold text-white group-hover:text-[#B89B72] transition-colors">
                        cristianvaduva@duck.com
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-[#B89B72] transition-all" />
                </a>

                {/* YouTube */}
                <a
                  href="https://www.youtube.com/@CristianVaduvaCV"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-white/[0.03] hover:bg-red-500/10 border border-white/10 hover:border-red-500/30 flex items-center justify-between group transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-red-500/15 border border-red-500/30 text-red-400 flex items-center justify-center">
                      <YoutubeIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-mono uppercase text-neutral-400">YouTube Channel</div>
                      <div className="text-sm font-semibold text-white group-hover:text-red-400 transition-colors">
                        @CristianVaduvaCV
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-red-400 transition-all" />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/in/cristianvaduva"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-white/[0.03] hover:bg-blue-500/10 border border-white/10 hover:border-blue-500/30 flex items-center justify-between group transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/15 border border-blue-500/30 text-blue-400 flex items-center justify-center">
                      <LinkedinIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-mono uppercase text-neutral-400">LinkedIn Profile</div>
                      <div className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">
                        cristianvaduva
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-blue-400 transition-all" />
                </a>

                {/* Linktree */}
                <a
                  href="https://linktr.ee/cristianvaduvarealestate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-white/[0.03] hover:bg-emerald-500/10 border border-white/10 hover:border-emerald-500/30 flex items-center justify-between group transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center">
                      <Share2 className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-mono uppercase text-neutral-400">Linktree Hub</div>
                      <div className="text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors">
                        cristianvaduvarealestate
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-emerald-400 transition-all" />
                </a>

              </div>
            </div>
          </div>

          {/* Right: Direct Consultation Intake Form (7 Cols) */}
          <div className="lg:col-span-7 bg-[#121212] border border-white/10 rounded-3xl p-6 sm:p-10 space-y-6">
            <div className="space-y-2 border-b border-white/10 pb-6">
              <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase text-[#B89B72]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>STRATEGIC INTAKE DESK</span>
              </div>
              <h3 className="text-2xl font-semibold text-white">
                Schedule Executive Consultation
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 font-light">
                Complete the brief below to schedule a private advisory consultation with Cristian Văduva.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-neutral-300">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="e.g. Alexandru Popescu"
                    className="w-full px-4 py-3 bg-black/50 border border-white/15 rounded-2xl text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#B89B72]"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-neutral-300">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="alexandru@company.com"
                    className="w-full px-4 py-3 bg-black/50 border border-white/15 rounded-2xl text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#B89B72]"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-neutral-300">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+40 7XX XXX XXX"
                    className="w-full px-4 py-3 bg-black/50 border border-white/15 rounded-2xl text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#B89B72]"
                  />
                </div>

                {/* Intent Type */}
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-neutral-300">
                    Mandate Objective / Area of Interest
                  </label>
                  <select
                    value={intent}
                    onChange={(e) => setIntent(e.target.value)}
                    className="w-full px-4 py-3 bg-[#1A1A1A] border border-white/15 rounded-2xl text-white text-sm focus:outline-none focus:border-[#B89B72]"
                  >
                    <option value="Acquisition">Prime Real Estate Acquisition (Bucharest / Monaco)</option>
                    <option value="Seller">Seller Mandate / Exclusive Representation</option>
                    <option value="Capital">Investment & Capital Structuring</option>
                    <option value="Insurance">Asset Protection & Generali Partnership</option>
                    <option value="Advisory">General Strategic Advisory</option>
                  </select>
                </div>

                {/* Message */}
                <div className="sm:col-span-2 space-y-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-neutral-300">
                    Inquiry Details
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    placeholder="Briefly outline transaction parameters, asset typology, or search criteria..."
                    className="w-full px-4 py-3 bg-black/50 border border-white/15 rounded-2xl text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#B89B72] resize-none"
                  />
                </div>

              </div>

              {success && (
                <div className="p-4 rounded-2xl bg-green-500/10 border border-green-500/30 text-green-400 text-sm flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Your inquiry has been submitted successfully. You will be contacted shortly.</span>
                </div>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-4 rounded-2xl bg-[#B89B72] hover:bg-[#C9AE85] text-black font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-[#B89B72]/20 disabled:opacity-50 cursor-pointer"
              >
                {submitting ? (
                  <span className="inline-block animate-spin w-4 h-4 border-2 border-black border-t-transparent rounded-full" />
                ) : (
                  <>
                    <span>Submit Advisory Inquiry</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
