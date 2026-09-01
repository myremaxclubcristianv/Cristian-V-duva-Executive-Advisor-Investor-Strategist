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
    id: "define",
    stepNumber: "01",
    label: "DEFINE",
    title: "Mandate Clarification & Objective Framing",
    description: "Defining exact risk parameters, capital allocation targets, and exit criteria before entering market negotiations.",
    keyAction: "Strategic scope & principal objective alignment",
  },
  {
    id: "diagnose",
    stepNumber: "02",
    label: "DIAGNOSE",
    title: "Deep Valuation & Downside Vulnerability Stress-Test",
    description: "Stress-testing property cash flows, legal encumbrances, and macroeconomic downside risks under adverse conditions.",
    keyAction: "Institutional diligence & structural risk analysis",
  },
  {
    id: "structure",
    stepNumber: "03",
    label: "STRUCTURE",
    title: "Capital Architecture & Collateral Protection",
    description: "Designing bespoke SPVs, private equity trusts, and financing structures tailored to family office governance requirements.",
    keyAction: "Bespoke legal, tax & capital SPV architecture",
  },
  {
    id: "test",
    stepNumber: "04",
    label: "TEST",
    title: "Scenario Modeling & Covenant Verification",
    description: "Simulating liquidity pressures, interest rate fluctuations, and exit strategies to ensure complete capital protection.",
    keyAction: "Downside scenario & covenant verification",
  },
  {
    id: "execute",
    stepNumber: "05",
    label: "EXECUTE",
    title: "Uncompromising Direct Negotiation & Closing",
    description: "Directing high-stakes negotiations to secure optimal acquisition pricing, favorable covenants, and discreet closing timelines.",
    keyAction: "Direct principal negotiation & mandate completion",
  },
  {
    id: "review",
    stepNumber: "06",
    label: "REVIEW",
    title: "Long-Term Oversight & Yield Governance",
    description: "Active post-transaction oversight and portfolio positioning to ensure sustained liquidity, compliance, and wealth compounding.",
    keyAction: "Ongoing portfolio governance & yield protection",
  },
];

export default function DecisionFramework() {
  const [activeId, setActiveId] = useState<string>("define");
  const activeStep = steps.find((s) => s.id === activeId) || steps[0];

  return (
    <section id="methodology" className="site-section bg-[#F7F7F5] text-[#111111] border-b border-black/5">
      <div className="site-container space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="space-y-2 border-b border-black/5 pb-6">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#B89B72] font-semibold block">
            06 / METHODOLOGY
          </span>
          <h2 className="font-display text-3xl sm:text-5xl text-[#111111] tracking-tight">
            The Six-Stage Decision Framework
          </h2>
          <p className="font-sans text-sm text-[#6B6B6B] font-light max-w-2xl leading-relaxed">
            A disciplined institutional methodology sequence designed to evaluate, structure, and protect high-ticket capital investments.
          </p>
        </div>

        {/* 6-Stage Vertical Sequence */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Step Sequence */}
          <div className="lg:col-span-5 space-y-0 divide-y divide-black/5 border-y border-black/5">
            {steps.map((step) => {
              const isActive = step.id === activeId;
              return (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => setActiveId(step.id)}
                  onMouseEnter={() => setActiveId(step.id)}
                  onFocus={() => setActiveId(step.id)}
                  className={`w-full text-left py-4 px-3 transition-colors cursor-pointer flex items-center justify-between min-h-[48px] ${
                    isActive ? "bg-[#FFFFFF] text-[#B89B72] font-semibold" : "hover:bg-[#FFFFFF]/60 text-[#111111]"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`font-mono text-xs ${isActive ? "text-[#B89B72] font-semibold" : "text-[#6B6B6B]"}`}>
                      {step.stepNumber}
                    </span>
                    <span className={`font-mono text-xs uppercase tracking-[0.2em] ${isActive ? "text-[#111111] font-semibold" : "text-[#6B6B6B]"}`}>
                      {step.label}
                    </span>
                  </div>
                  <span className={`font-mono text-xs ${isActive ? "text-[#B89B72]" : "text-black/20"}`}>
                    {isActive ? "ACTIVE →" : "SELECT"}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column: Stage Detail Panel */}
          <div className="lg:col-span-7 p-8 sm:p-12 border border-black/5 bg-[#FFFFFF] space-y-6 shadow-sm">
            <div className="flex items-center justify-between border-b border-black/5 pb-4">
              <span className="font-mono text-xs uppercase tracking-widest text-[#B89B72] font-semibold">
                STAGE {activeStep.stepNumber} · {activeStep.label}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#6B6B6B]">
                METHODOLOGY
              </span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl text-[#111111] tracking-tight">
              {activeStep.title}
            </h3>

            <p className="font-sans text-sm sm:text-base text-[#6B6B6B] font-light leading-relaxed">
              {activeStep.description}
            </p>

            <div className="py-4 px-5 border-l-2 border-[#B89B72] bg-[#F7F7F5] space-y-1">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#B89B72] font-semibold block">
                CORE DELIVERABLE
              </span>
              <span className="font-sans text-xs sm:text-sm text-[#111111] font-medium block">
                {activeStep.keyAction}
              </span>
            </div>

            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-[#111111] hover:text-[#B89B72] transition-colors py-2 touch-active min-h-[48px]"
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
