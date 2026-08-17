import Navigation from "@/components/Navigation";
import IntelligenceBlock from "@/components/IntelligenceBlock";
import Footer from "@/components/Footer";

export default function MarketPage() {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden pt-20">
      <Navigation />
      <main className="flex-1">
        <section className="py-16 bg-background text-center px-4">
          <p className="font-sans text-xs uppercase tracking-widest text-accent mb-2">
            REAL ESTATE MARKET INTELLIGENCE
          </p>
          <h1 className="font-display text-4xl md:text-6xl text-text-primary">
            Market Pulse & Analytics
          </h1>
        </section>
        <IntelligenceBlock />
      </main>
      <Footer />
    </div>
  );
}
