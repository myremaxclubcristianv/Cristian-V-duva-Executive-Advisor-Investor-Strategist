import Navigation from "@/components/Navigation";
import SelectedPropertiesModule from "@/components/SelectedPropertiesModule";
import RealEstateNewsModule from "@/components/RealEstateNewsModule";
import IntelligenceBlock from "@/components/IntelligenceBlock";
import Footer from "@/components/Footer";

export default function RealEstateHubPage() {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden pt-20">
      <Navigation />
      <main className="flex-1 space-y-12">
        <section className="py-16 bg-background text-center px-6">
          <div className="max-w-4xl mx-auto space-y-4">
            <p className="font-sans text-xs uppercase tracking-widest text-accent font-medium">
              CRISTIAN VĂDUVA REAL ESTATE ADVISORY
            </p>
            <h1 className="font-display text-4xl md:text-6xl text-text-primary">
              Luxury Real Estate, Capital & Market Intelligence
            </h1>
            <p className="text-text-secondary text-body-lg max-w-2xl mx-auto">
              Strategic acquisitions, portfolio management, and institutional market intelligence across Bucharest and core European markets.
            </p>
          </div>
        </section>

        <SelectedPropertiesModule />
        <IntelligenceBlock />
        <RealEstateNewsModule />
      </main>
      <Footer />
    </div>
  );
}
