import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Cristian Văduva — Executive Advisor · Investor · Strategist",
  description: "Bespoke advisory for ultra-prime real estate acquisitions, strategic capital allocation, and executive leadership across Europe.",
  metadataBase: new URL("https://cristianvaduva.com"),
  alternates: {
    canonical: "https://cristianvaduva.com",
  },
  openGraph: {
    title: "Cristian Văduva — Executive Advisor · Investor · Strategist",
    description: "Bespoke advisory for ultra-prime real estate acquisitions, strategic capital allocation, and executive leadership across Europe.",
    url: "https://cristianvaduva.com",
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
      "@id": "https://cristianvaduva.com/#person",
      "name": "Cristian Văduva",
      "jobTitle": "Executive Advisor · Investor · Strategist",
      "description": "Bespoke advisory for ultra-prime real estate acquisitions, strategic capital allocation, and executive leadership across Europe.",
      "url": "https://cristianvaduva.com",
      "image": "https://cristianvaduva.com/residence/exterior.png",
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
      "@id": "https://cristianvaduva.com/#website",
      "url": "https://cristianvaduva.com",
      "name": "Cristian Văduva",
      "description": "Private Digital Residence & Executive Advisory of Cristian Văduva",
      "publisher": {
        "@id": "https://cristianvaduva.com/#person"
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
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col overflow-x-hidden bg-background text-text-primary">
        {children}
      </body>
    </html>
  );
}
