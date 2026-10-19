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
  description: "Independent, mandate-based real estate advisory, property sourcing and transaction strategy across Romania and selected international markets.",
  metadataBase: new URL("https://cristianvaduva.com"),
  alternates: {
    canonical: "https://cristianvaduva.com/",
    languages: {
      "en-US": "https://cristianvaduva.com/",
      "ro-RO": "https://cristianvaduva.com/",
      "fr-FR": "https://cristianvaduva.com/",
      "de-DE": "https://cristianvaduva.com/",
      "ar": "https://cristianvaduva.com/",
    },
  },
  openGraph: {
    title: "Cristian Văduva — Executive Advisor · Investor · Strategist",
    description: "Independent, mandate-based real estate advisory, property sourcing and transaction strategy across Romania and selected international markets.",
    url: "https://cristianvaduva.com/",
    siteName: "Cristian Văduva",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/og-executive.jpg",
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
    description: "Independent, mandate-based real estate advisory, property sourcing and transaction strategy across Romania and selected international markets.",
    images: ["/images/og-executive.jpg"],
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
      "@id": "https://cristianvaduva.com/#person",
      "name": "Cristian Văduva",
      "jobTitle": "Executive Advisor · Investor · Strategist",
      "description": "Independent, mandate-based real estate advisory, property sourcing and transaction strategy across Romania and selected international markets.",
      "url": "https://cristianvaduva.com/",
      "image": "https://cristianvaduva.com/media/cristian-vaduva/personal/cristian-vaduva-portrait-navy-suit.jpg",
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
        "Real Estate Advisory",
        "Property Sourcing",
        "Transaction Strategy",
        "Asset Protection",
        "Strategic Investment Analysis"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://cristianvaduva.com/#website",
      "url": "https://cristianvaduva.com/",
      "name": "Cristian Văduva — Executive Advisory",
      "description": "Executive Real Estate Advisory & Strategic Investment Architecture of Cristian Văduva",
      "publisher": {
        "@id": "https://cristianvaduva.com/#person"
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
        lang="en"
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
