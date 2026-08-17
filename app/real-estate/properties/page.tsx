import Navigation from "@/components/Navigation";
import SelectedPropertiesModule from "@/components/SelectedPropertiesModule";
import Footer from "@/components/Footer";

export default function PropertiesPage() {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden pt-20">
      <Navigation />
      <main className="flex-1">
        <SelectedPropertiesModule />
      </main>
      <Footer />
    </div>
  );
}
