import Footer from "@/components/layout/Footer/Footer";
import Navbar from "@/components/layout/header/navbar";
import FeaturesSection from "@/components/layout/sections/FeaturesSection/Cards";
import HeroSection from "@/components/layout/sections/HeroSection/Hero";
import StatsSection from "@/components/layout/sections/StatsSection/data/Stats";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-900">
      {/* Header */}
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection/>
        <StatsSection/>
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
}
