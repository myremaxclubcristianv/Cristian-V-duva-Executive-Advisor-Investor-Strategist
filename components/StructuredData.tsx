const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Cristian Văduva",
  "jobTitle": "Executive Advisor · Investor · Strategist",
  "description": "Independent, mandate-based real estate advisory, property sourcing and transaction strategy across Romania and selected international markets.",
  "url": "https://executive.cristianvaduva.com",
  "email": "mailto:contact@cristianvaduva.com",
  "telephone": "+43 650 953 6345",
  "sameAs": [
    "https://www.linkedin.com/in/cristianvăduva",
    "https://youtube.com/@CristianVaduvaCV",
    "https://t.me/CristianVaduva",
    "https://t.me/capitalinvestcristianvaduva",
    "https://wa.me/436509536345",
    "https://www.facebook.com/CristianVaduvaCV",
    "https://instagram.com/cristian_vaduva_cristianv",
    "https://linktr.ee/cristianvaduvarealestate",
    "https://cristianvaduva.com"
  ],
  "knowsAbout": [
    "Real Estate Advisory",
    "Property Sourcing",
    "Transaction Strategy",
    "Asset Protection",
    "Strategic Investment Analysis",
  ],
};

export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
