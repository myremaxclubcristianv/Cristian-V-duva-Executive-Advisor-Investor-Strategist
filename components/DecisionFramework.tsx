"use client";

import { useState } from "react";
import Link from "next/link";

interface Step {
  id: string;
  stepNumber: string;
  label: string;
  title: string;
  description: string;
  keyAction: string;
}

const steps: Step[] = [
  {
    id: "opportunity",
    stepNumber: "01",
    label: "OPPORTUNITY",
    title: "Off-Market Origination & Asymmetric Sourcing",
    description: "Filtering deal flow to identify non-public opportunities where capital dislocation creates outsized risk-adjusted potential.",
    keyAction: "Private sourcing & proprietary network intelligence",
  },
  {
    id: "analysis",
    stepNumber: "02",
    label: "ANALYSIS",
    title: "Rigor & Valuation Under Stress Conditions",
    description: "Stress-testing asset cash flows, legal encumbrances, and macroeconomic downside risks before capital commitment.",
    keyAction: "Institutional financial modeling & structural review",
  },
  {
    id: "risk",
    stepNumber: "03",
    label: "RISK MITIGATION",
    title: "Downside Insulation & Asset Protection",
    description: "Structuring transactions with defensive mechanisms, insurance collateral, and strict exit governance to safeguard capital.",
    keyAction: "Collateral structuring & risk containment",
  },
  {
    id: "structure",
    stepNumber: "04",
    label: "STRUCTURE",
    title: "Tax, Legal & Co-Investment Architecture",
    description: "Designing bespoke SPVs, private equity trusts, and financing structures tailored to family office and principal objectives.",
    keyAction: "Bespoke capital & SPV architecture",
  },
  {
    id: "decision",
    stepNumber: "05",
    label: "DECISION",
    title: "Uncompromising Execution & Negotiation",
    description: "Directing high-stakes negotiations to secure optimal pricing, favorable covenants, and discreet closing timelines.",
    keyAction: "Direct principal negotiation & execution",
  },
  {
    id: "value",
    stepNumber: "06",
    label: "LONG-TERM VALUE",
    title: "Generational Wealth & Asset Preservation",
    description: "Active oversight and asset positioning to ensure sustained liquidity, governance compliance, and compounding capital value.",
    keyAction: "Ongoing portfolio governance & yield preservation",
  },
];

export default function DecisionFramework() {
  const [activeId, setActiveId] = useState<string>("opportunity");
  const activeStep = steps.find((s) => s.id === activeId) || steps[0];

  return (
    <section className="relative bg-[#080808] text-[#F5F3EF] py-24 sm:py-32 md:py-40 px-4 sm:px-6 md:px-12 lg:px-24 border-b border-white/10">
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="space-y-3 border-b border-white/10 pb-6">
          <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.3em] text-accent font-semibold block">
            04 / DECISION FRAMEWORK
          </span>
          <h2 className="font-display text-display-lg-fluid text-text-primary tracking-tight">
            How I Think: The Strategic Advisory Process
          </h2>
          <p className="font-sans text-xs sm:text-sm text-text-secondary/80 font-light max-w-2xl leading-relaxed">
            A disciplined 6-stage methodology designed to evaluate, structure, and protect high-ticket capital investments.
          </p>
        </div>

        {/* Interactive Framework Flow */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Horizontal Step Index */}
          <div className="lg:col-span-5 space-y-2">
            {steps.map((step) => {
              const isActive = step.id === activeId;
              return (
                <div
                  key={step.id}
                  onClick={() => setActiveId(step.id)}
                  onMouseEnter={() => setActiveId(step.id)}
                  className={`p-4 border-b border-white/10 cursor-pointer transition-all ${
                    isActive ? "bg-white/5 border-l-2 border-l-accent" : "hover:bg-white/[0.02]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className={`font-mono text-xs ${isActive ? "text-accent font-semibold" : "text-text-secondary/50"}`}>
                        {step.stepNumber}
                      </span>
                      <span className={`font-mono text-xs uppercase tracking-wider ${isActive ? "text-text-primary font-semibold" : "text-text-secondary/70"}`}>
                        {step.label}
                      </span>
                    </div>
                    <span className={`font-mono text-xs ${isActive ? "text-accent" : "text-text-secondary/30"}`}>
                      {isActive ? "ACTIVE →" : "SELECT"}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Active Stage Detail Card */}
          <div className="lg:col-span-7 p-8 sm:p-12 border border-white/10 bg-white/[0.02] space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold">
                STAGE {activeStep.stepNumber} · {activeStep.label}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-wider text-text-secondary/60">
                METHODOLOGY
              </span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl text-text-primary tracking-tight">
              {activeStep.title}
            </h3>

            <p className="font-sans text-sm sm:text-base text-text-secondary/90 font-light leading-relaxed">
              {activeStep.description}
            </p>

            <div className="py-4 px-5 border-l-2 border-accent bg-accent/5 space-y-1">
              <span className="font-mono text-[10px] uppercase tracking-wider text-accent font-semibold block">
                CORE DELIVERABLE
              </span>
              <span className="font-sans text-xs sm:text-sm text-text-primary font-medium block">
                {activeStep.keyAction}
              </span>
            </div>

            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-accent hover:text-text-primary transition-quick py-2"
              >
                <span>REQUEST PROCESS DOSSIER →</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
