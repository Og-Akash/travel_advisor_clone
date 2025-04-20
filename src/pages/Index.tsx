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
      <div className="max-w-6xl mx-auto">
        <SearchSection />
        <main className="flex-grow space-y-16">
          <HeroBanner />
          <Globe />
          <Article
            image="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/ec/17/e3/caption.jpg?w=400&h=400&s=1&cx=4846&cy=1237&chk=v1_7e9a38335d35a46edbee"
            tag="In partnership with CESAR"
            heading="Your guide to dog-friendly travels"
            subHeading="Life is better shared with your dog. So, CESAR® Canine Cuisine and Tripadvisor are joining forces to help create a more dog-friendly world—one where best friends can always be together. We're working to make it easier for you to travel with your dog, so you can experience more together."
            bg="bg-tripadvisor-pink"
            buttonText="Read now"
          />
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
