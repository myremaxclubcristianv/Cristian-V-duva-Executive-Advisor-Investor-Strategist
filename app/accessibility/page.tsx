import { Metadata } from "next";
import LegalPageLayout from "@/components/LegalPageLayout";
import { contactInfo } from "@/lib/content/contact";

export const metadata: Metadata = {
  title: "Accessibility Statement — Cristian Văduva",
  description: "Accessibility standards, assistive technology support, keyboard navigation, and inclusive design commitments on Cristian Văduva digital platforms.",
  alternates: {
    canonical: "https://cristianvaduva.com/accessibility",
  },
};

export default function AccessibilityPage() {
  const features = [
    {
      title: "Semantic HTML5 Structure",
      desc: "Pages utilize proper landmark tags (<header>, <nav>, <main>, <section>, <footer>, <aside>) and hierarchical heading levels (H1–H3) for predictable screen-reader navigation.",
    },
    {
      title: "Keyboard Navigation & Focus Management",
      desc: "All interactive elements, buttons, links, modal dialogues, and navigation drawers are fully navigable via standard keyboard controls (Tab, Shift+Tab, Enter, Escape, Space).",
    },
    {
      title: "High-Contrast Typography & Readability",
      desc: "Text elements meet enhanced contrast ratios with warm off-white tones against deep black surfaces, avoiding low-contrast grey-on-grey styling for critical text.",
    },
    {
      title: "Respect for Reduced Motion",
      desc: "Platform animations and cinematic camera transitions honor the user's operating system preference (prefers-reduced-motion: reduce) by disabling parallax drifts and scaling animations.",
    },
    {
      title: "Accessible Media & Video Embeds",
      desc: "Video players feature descriptive accessible labels (aria-label), standard play control overlays, and native YouTube player controls supporting closed captions.",
    },
    {
      title: "Responsive Multi-Viewport Layout",
      desc: "Layouts adapt seamlessly from 360px mobile viewports to ultra-wide displays without horizontal clipping, text truncation, or unreadable scaling.",
    },
  ];

  return (
    <LegalPageLayout
      kicker="INCLUSIVE DESIGN"
      title="Accessibility Statement"
      subtitle="Our commitment to delivering an accessible, barrier-free digital experience across all devices and assistive technologies."
      lastUpdated="August 2026"
    >
      <div className="space-y-12 text-text-secondary/90 font-light leading-relaxed">
        {/* Commitment Banner */}
        <section className="bg-surface-primary border border-surface-secondary/80 p-8 space-y-4 shadow-xl">
          <div className="space-y-1">
            <span className="font-mono text-[10px] text-accent uppercase tracking-widest block">COMMITMENT</span>
            <h2 className="font-display text-2xl text-text-primary">Universal Digital Access</h2>
          </div>
          <p className="text-sm">
            We are dedicated to ensuring that digital content on <span className="font-mono text-text-primary">cristianvaduva.com</span> is accessible to all individuals, including people with visual, auditory, motor, or cognitive disabilities, aligning with Web Content Accessibility Guidelines (WCAG 2.1 Level AA) best practices.
          </p>
        </section>

        {/* Implemented Accessibility Features */}
        <section className="space-y-6">
          <div className="space-y-1 border-b border-surface-secondary/60 pb-3">
            <span className="font-mono text-[10px] text-accent uppercase tracking-widest block">IMPLEMENTATION</span>
            <h2 className="font-display text-2xl text-text-primary">Technical Measures Implemented</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-surface-primary border border-surface-secondary/80 p-6 space-y-3 shadow-md"
              >
                <h3 className="font-display text-lg text-text-primary">{f.title}</h3>
                <p className="font-sans text-xs sm:text-sm text-text-secondary/90 font-light leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Feedback & Contact */}
        <section className="bg-surface-primary border border-surface-secondary/80 p-8 space-y-4 shadow-xl">
          <div className="space-y-1">
            <span className="font-mono text-[10px] text-accent uppercase tracking-widest block">ASSISTANCE & FEEDBACK</span>
            <h2 className="font-display text-2xl text-text-primary">Accessibility Assistance</h2>
          </div>
          <p className="text-sm">
            If you encounter any difficulty accessing any content on this website or require assistance with any feature, please reach out to our accessibility support desk:
          </p>
          <div className="p-4 border border-surface-secondary/70 bg-background/50 font-mono text-xs text-text-primary">
            <div>
              <span className="text-accent block uppercase tracking-widest text-[10px]">EMAIL INQUIRIES:</span>
              <a href={`mailto:${contactInfo.email}?subject=Accessibility%20Support`} className="text-accent underline">
                {contactInfo.email}
              </a>
            </div>
          </div>
        </section>
      </div>
    </LegalPageLayout>
  );
}
