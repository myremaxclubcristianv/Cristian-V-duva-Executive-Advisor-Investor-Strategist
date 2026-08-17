import Navigation from "@/components/Navigation";
import RealEstateNewsModule from "@/components/RealEstateNewsModule";
import Footer from "@/components/Footer";

export default async function NewsPage() {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden pt-20">
      <Navigation />
      <main className="flex-1">
        <RealEstateNewsModule />
      </main>
      <Footer />
    </div>
  );
}
