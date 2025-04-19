import { indiaDestinations, worldDestinations } from "@/constants";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface DestinationCardProps {
  name: string;
  image: string;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ name, image }) => {
  return (
    <div className="destination-card">
      <img src={image} alt={name} />
      <div className="overlay">
        <h3 className="text-[28px]">{name}</h3>
      </div>
    </div>
  );
};

const DreamTripSection = () => {
  return (
    <div className="px-4 md:px-6 py-8 space-y-4">
      <h2 className="text-[1.6rem] font-semibold">Dream Your Next Trip</h2>
      <p className="text-[1.2rem] font-medium">
        Weekend getaways from Kolkata (Calcutta)
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        {indiaDestinations.map((destination) => (
          <DestinationCard
            key={destination.name}
            name={destination.name}
            image={destination.image}
          />
        ))}
      </div>

      <h2 className="section-heading">
        Top destinations for your next vacation
      </h2>

      <Carousel
        opts={{
          align: "start",
          slidesToScroll: 4,
        }}
        className="w-full max-w-6xl mx-auto relative"
      >
        <CarouselContent className="-ml-4">
          {worldDestinations.map((destination, index) => (
            <CarouselItem
              key={index}
              className="basis-1/4 pl-4" // 4 cards visible
            >
              <DestinationCard {...destination} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-0 top-[150px] z-10 w-10 h-10 text-lg md:text-xl border border-black hover:bg-black hover:text-white hover:border-white transition-all duration-100" />
        <CarouselNext className="absolute right-0 top-[150px] z-10 w-10 h-10 text-lg md:text-xl border border-black hover:bg-black hover:text-white hover:border-white transition-all duration-100" />
      </Carousel>
    </div>
  );
};

export default DreamTripSection;
