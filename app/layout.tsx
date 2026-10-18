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
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

export const viewport: Viewport = {
  themeColor: "#07090D",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Cristian Văduva — Executive Advisor · Investor · Strategist",
  description: "Bespoke advisory for ultra-prime real estate acquisitions, strategic capital allocation, and executive leadership across Europe.",
  metadataBase: new URL("https://executive.cristianvaduva.com"),
  alternates: {
    canonical: "https://executive.cristianvaduva.com/",
  },
  openGraph: {
    title: "Cristian Văduva — Executive Advisor · Investor · Strategist",
    description: "Bespoke advisory for ultra-prime real estate acquisitions, strategic capital allocation, and executive leadership across Europe.",
    url: "https://executive.cristianvaduva.com/",
    siteName: "Cristian Văduva",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/residence/exterior.png",
        width: 1920,
        height: 1080,
        alt: "Cristian Văduva — Private Residence & Executive Advisory",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cristian Văduva — Executive Advisor · Investor · Strategist",
    description: "Bespoke advisory for ultra-prime real estate acquisitions, strategic capital allocation, and executive leadership across Europe.",
    images: ["/residence/exterior.png"],
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
      "description": "Bespoke advisory for ultra-prime real estate acquisitions, strategic capital allocation, and executive leadership across Europe.",
      "url": "https://executive.cristianvaduva.com/",
      "image": "https://executive.cristianvaduva.com/images/personal/portraits/cristian-headshot.jpg",
      "sameAs": [
        "https://linkedin.com/in/cristianvaduva",
        "https://www.youtube.com/@CristianVaduvaCV",
        "https://linktr.ee/cristianvaduvarealestate",
        "https://t.me/capitalinvestcristianvaduva",
        "https://wa.me/436509536345"
      ],
      "knowsAbout": [
        "Luxury Real Estate Advisory",
        "Private Equity Allocation",
        "Capital Structuring",
        "Asset Protection",
        "Strategic European Acquisitions"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://executive.cristianvaduva.com/#website",
      "url": "https://executive.cristianvaduva.com/",
      "name": "Cristian Văduva — Executive Advisory",
      "description": "Private Digital Residence & Executive Advisory of Cristian Văduva",
      "publisher": {
        "@id": "https://executive.cristianvaduva.com/#person"
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
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
  );
}
