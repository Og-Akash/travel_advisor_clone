import Navbar from "@/components/Navbar";
import SearchSection from "@/components/SearchSection";
import HeroBanner from "@/components/HeroBanner";
import DestinationSection from "@/components/DestinationSection";
import ExperienceSection from "@/components/ExperienceSection";
import KolkataSection from "@/components/KolkataSection";
import ExploreMoreSection from "@/components/ExploreMoreSection";
import DreamTripSection from "@/components/DreamTripSection";
import AwardsBanner from "@/components/AwardsBanner";
import Footer from "@/components/Footer";
import Article from "@/components/Article";
import Advatisements from "@/components/Advatisements";
import Sponsour from "@/components/Sponsour";
import ChatSupport from "@/components/ChatSupport";
import Globe from "@/components/Globe";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
        <Navbar />
      {/* Wrapped in max-w-6xl */}
      <div className="max-w-6xl lg:mx-auto">
        <SearchSection />
        <main className="flex-grow space-y-16">
          <HeroBanner />
          <Globe />
          <Article />
          <DestinationSection />
          <ExperienceSection />
          <KolkataSection />
          <Advatisements />
        </main>
      </div>

      <div className="my-6">
        <ExploreMoreSection />
      </div>

      {/* Back to centered content */}
      <div className="max-w-6xl mx-auto space-y-16">
        <DreamTripSection />
        <Sponsour />
      </div>

      <AwardsBanner />
      <Footer />
      <ChatSupport />
    </div>
  );
};

export default Index;
