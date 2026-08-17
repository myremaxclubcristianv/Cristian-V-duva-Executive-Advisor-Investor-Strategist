const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Cristian Văduva",
  "jobTitle": "Executive Advisor",
  "description": "Executive advisor and entrepreneur focused on real estate, investments, insurance, AI and business intelligence.",
  "url": "https://executive.cristianvaduva.com",
  "sameAs": [
    "https://linkedin.com/in/cristianvaduva",
    "https://facebook.com/cristianvaduva",
    "https://instagram.com/cristianvaduva",
  ],
  "knowsAbout": [
    "Real Estate",
    "Investments",
    "Insurance",
    "Artificial Intelligence",
    "Business Intelligence",
    "Strategic Advisory",
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
