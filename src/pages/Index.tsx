import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import OfficersSection from "@/components/OfficersSection";
import NewsBoard from "@/components/NewsBoard";
import VillageInfo from "@/components/VillageInfo";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <StatsSection />
      <OfficersSection />
      <NewsBoard />
      <VillageInfo />
      <Footer />
    </div>
  );
};

export default Index;
