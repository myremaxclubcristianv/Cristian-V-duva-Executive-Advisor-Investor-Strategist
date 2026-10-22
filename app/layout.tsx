import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import CookieConsent from "@/components/CookieConsent";
import VisitorIntelligenceProvider from "@/components/VisitorIntelligenceProvider";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600"],
  adjustFontFallback: false,
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
  adjustFontFallback: false,
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  adjustFontFallback: false,
});

export const viewport: Viewport = {
  themeColor: "#07090D",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Cristian Văduva — Executive Advisor · Investor · Strategist",
  description: "Consultanță imobiliară strategică, selecție de active și structurare de tranzacții în România și piețe internaționale selectate.",
  metadataBase: new URL("https://executive.cristianvaduva.com"),
  alternates: {
    canonical: "https://executive.cristianvaduva.com/",
  },
  openGraph: {
    title: "Cristian Văduva — Executive Advisor · Investor · Strategist",
    description: "Consultanță imobiliară strategică, selecție de active și structurare de tranzacții în România și piețe internaționale selectate.",
    url: "https://executive.cristianvaduva.com/",
    siteName: "Cristian Văduva — Executive",
    type: "website",
    locale: "ro_RO",
    images: [
      {
        url: "https://executive.cristianvaduva.com/images/og-executive.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Cristian Văduva — Executive Real Estate Advisory & Capital Strategy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cristian Văduva — Executive Advisor · Investor · Strategist",
    description: "Consultanță imobiliară strategică, selecție de active și structurare de tranzacții în România și piețe internaționale selectate.",
    images: ["https://executive.cristianvaduva.com/images/og-executive.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://executive.cristianvaduva.com/#person",
      "name": "Cristian Văduva",
      "jobTitle": "Executive Advisor · Investor · Strategist",
      "description": "Consultanță imobiliară strategică, selecție de active și structurare de tranzacții în România și piețe internaționale selectate.",
      "url": "https://executive.cristianvaduva.com/",
      "image": "https://executive.cristianvaduva.com/media/cristian-vaduva/personal/cristian-vaduva-portrait-navy-suit.jpg",
      "email": "mailto:cristianvaduva@duck.com",
      "telephone": "+43 650 953 6345",
      "sameAs": [
        "https://linkedin.com/in/cristianvaduva",
        "https://www.youtube.com/@CristianVaduvaCV",
        "https://t.me/CristianVaduva",
        "https://t.me/capitalinvestcristianvaduva",
        "https://wa.me/436509536345",
        "https://www.facebook.com/CristianVaduvaCV",
        "https://instagram.com/cristian_vaduva_cristianv"
      ],
      "knowsAbout": [
        "Consultanță Imobiliară Strategică",
        "Selecție de Active",
        "Structurare Tranzacții",
        "Analiză de Investiții Strategice",
        "Consultanță Privată"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://executive.cristianvaduva.com/#website",
      "url": "https://executive.cristianvaduva.com/",
      "name": "Cristian Văduva — Executive Advisory",
      "description": "Consultanță Imobiliară Strategică și Analiză de Investiții — Cristian Văduva",
      "publisher": {
        "@id": "https://executive.cristianvaduva.com/#person"
      }
    }
  ]
};

import { LocaleProvider } from './context/LocaleContext';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LocaleProvider>
      <html
        lang="ro"
        dir="ltr"
        className={`${manrope.variable} ${cormorant.variable} ${jetbrainsMono.variable} h-full antialiased dark`}
      >
        <head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        </head>
        <body className="min-h-full flex flex-col overflow-x-hidden bg-[#07090D] text-[#F5F4EF] font-sans selection:bg-[#A97F60]/20 selection:text-[#F5F4EF]">
          {children}
          <CookieConsent />
          <VisitorIntelligenceProvider />
        </body>
      </html>
    </LocaleProvider>
  );
}
