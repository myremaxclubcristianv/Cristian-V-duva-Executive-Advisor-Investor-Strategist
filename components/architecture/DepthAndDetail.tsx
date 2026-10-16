"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, ShieldCheck, Compass, FileCheck, Landmark } from "lucide-react";

const PROTOCOL_PHASES = [
  {
    phase: "PHASE 01",
    title: "Intake & Conflict Audit",
    timeline: "DAYS 1 – 5",
    desc: "Rigorous counter-party conflict check and mutual NDA execution. Scoping acquisition parameters, capital liquidity, and sovereign objectives.",
    icon: ShieldCheck,
  },
  {
    phase: "PHASE 02",
    title: "Forensic Due Diligence",
    timeline: "DAYS 6 – 20",
    desc: "Independent architectural valuation, structural inspection, environmental risk audit, and replacement cost modeling decoupled from seller hype.",
    icon: Compass,
  },
  {
    phase: "PHASE 03",
    title: "Entity & Tax Sovereignty",
    timeline: "DAYS 21 – 30",
    desc: "Aligning cross-border legal vehicles across Monaco, Swiss, or EU jurisdictions to ensure optimal fiscal shielding and generational custody.",
    icon: Landmark,
  },
  {
    phase: "PHASE 04",
    title: "Principal Execution & Defense",
    timeline: "CLOSING",
    desc: "Confidential execution under strict fiduciary privilege. Immediate post-closing physical security and asset surveillance deployment.",
    icon: FileCheck,
  },
];

export default function DepthAndDetail() {
  return (
    <section className="relative w-full bg-[#07090D] text-[#F5F4EF] py-28 sm:py-36 border-b border-white/[0.08] overflow-hidden">
      {/* Background Blueprint Grid (Dense) */}
      <div className="absolute inset-0 bg-arch-grid-dense opacity-20 pointer-events-none" />

      {/* SVG Architectural Blueprint Lines in Background */}
      <div className="absolute inset-0 pointer-events-none opacity-15 flex items-center justify-center">
        <svg width="100%" height="100%" viewBox="0 0 1200 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="600" cy="300" r="280" stroke="#93C8FF" strokeWidth="1" strokeDasharray="4 8" />
          <circle cx="600" cy="300" r="180" stroke="#B8C2CF" strokeWidth="0.8" />
          <line x1="100" y1="300" x2="1100" y2="300" stroke="#93C8FF" strokeWidth="0.8" strokeDasharray="6 6" />
          <line x1="600" y1="50" x2="600" y2="550" stroke="#93C8FF" strokeWidth="0.8" strokeDasharray="6 6" />
          <rect x="350" y="150" width="500" height="300" stroke="#B8C2CF" strokeWidth="0.5" />
          <text x="360" y="170" fill="#93C8FF" fontSize="10" fontFamily="monospace">TECHNICAL ELEVATION AXIS 07 // ARCHITECTURAL BLUEPRINT</text>
        </svg>
      </div>

      <div className="site-container relative z-10 space-y-16 sm:space-y-20">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.1] pb-6">
          <div className="space-y-3">
            <div className="flex items-center gap-3 font-mono text-[10px] sm:text-xs uppercase tracking-[0.28em] text-[#93C8FF]">
              <span className="w-2 h-2 rounded-full bg-[#93C8FF] animate-pulse" />
              <span>07 // DEPTH & DETAIL</span>
              <span className="text-white/20">/</span>
              <span className="text-[#B8C2CF]">BLUEPRINT PROTOCOL</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#F5F4EF] tracking-tight">
              Architectural Advisory Protocol.
            </h2>
          </div>

          <p className="font-mono text-xs text-[#B8C2CF] max-w-sm tracking-wider uppercase">
            Four sequential phases designed to eliminate asymmetrical risk and guarantee execution velocity.
          </p>
        </div>

        {/* 4 Sequential Protocol Cards / Horizontal Flow */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROTOCOL_PHASES.map((p) => {
            const Icon = p.icon;

            return (
              <div
                key={p.phase}
                className="border border-white/[0.1] bg-[#0C1119]/80 backdrop-blur-md p-6 sm:p-7 space-y-5 hover:border-[#93C8FF]/60 transition-all duration-300 relative group"
              >
                {/* Corner markers */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#93C8FF]/40 group-hover:border-[#93C8FF]" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#93C8FF]/40 group-hover:border-[#93C8FF]" />

                <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#93C8FF] font-semibold">
                    {p.phase}
                  </span>
                  <span className="font-mono text-[10px] text-[#8A95A5]">
                    {p.timeline}
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="w-8 h-8 rounded border border-white/[0.1] flex items-center justify-center text-[#93C8FF] bg-white/[0.02]">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl text-[#F5F4EF] leading-snug">
                    {p.title}
                  </h3>
                </div>

                <p className="font-sans text-xs text-[#B8C2CF] font-light leading-relaxed">
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Operational Jurisdictions Matrix */}
        <div className="p-6 border border-white/[0.1] bg-[#0C1119]/60 backdrop-blur-md grid sm:grid-cols-4 gap-6 font-mono text-xs">
          <div>
            <span className="text-[#93C8FF] block text-[10px] uppercase tracking-widest">BUCHAREST DESK</span>
            <span className="text-[#F5F4EF] font-sans font-medium text-sm">Central Europe Headquarters</span>
            <span className="text-[#8A95A5] block text-[10px] mt-1">44.4396° N · 26.0963° E</span>
          </div>

          <div>
            <span className="text-[#93C8FF] block text-[10px] uppercase tracking-widest">MONACO DESK</span>
            <span className="text-[#F5F4EF] font-sans font-medium text-sm">Ultra-Prime Riviera Mandates</span>
            <span className="text-[#8A95A5] block text-[10px] mt-1">43.7384° N · 07.4246° E</span>
          </div>

          <div>
            <span className="text-[#93C8FF] block text-[10px] uppercase tracking-widest">DUBAI DESK</span>
            <span className="text-[#F5F4EF] font-sans font-medium text-sm">Middle East Capital Axis</span>
            <span className="text-[#8A95A5] block text-[10px] mt-1">25.2048° N · 55.2708° E</span>
          </div>

          <div>
            <span className="text-[#93C8FF] block text-[10px] uppercase tracking-widest">ZURICH CORRESPONDENT</span>
            <span className="text-[#F5F4EF] font-sans font-medium text-sm">Private Banking Alignment</span>
            <span className="text-[#8A95A5] block text-[10px] mt-1">47.3769° N · 08.5417° E</span>
          </div>
        </div>
      </div>
    </section>
  );
}
