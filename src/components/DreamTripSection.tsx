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
    <div className="relative rounded-lg overflow-hidden aspect-square">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
        <h3 className="text-white text-lg sm:text-xl md:text-2xl font-medium">{name}</h3>
      </div>
    </div>
  );
};

const DreamTripSection = () => {
  return (
    <div className="px-4 md:px-6 py-8 space-y-6 max-w-6xl mx-auto">
      <div className="space-y-2">
        <h2 className="text-2xl md:text-3xl font-semibold">Dream Your Next Trip</h2>
        <p className="text-lg md:text-xl font-medium">
          Weekend getaways from Kolkata (Calcutta)
        </p>
      </div>

      {/* Mobile Carousel for India Destinations */}
      <div className="block md:hidden">
        <Carousel
          opts={{
            align: "start",
            slidesToScroll: 1,
          }}
          className="w-full"
        >
          <CarouselContent>
            {indiaDestinations.map((destination, index) => (
              <CarouselItem key={index} className="basis-1/2 pl-4">
                <DestinationCard {...destination} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 text-sm border border-black hover:bg-black hover:text-white" />
          <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 text-sm border border-black hover:bg-black hover:text-white" />
        </Carousel>
      </div>

      {/* Grid for larger screens */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {indiaDestinations.map((destination) => (
          <DestinationCard
            key={destination.name}
            name={destination.name}
            image={destination.image}
          />
        ))}
      </div>

      <h2 className="text-2xl md:text-3xl font-semibold">
        Top destinations for your next vacation
      </h2>

      {/* World Destinations Carousel */}
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent>
          {worldDestinations.map((destination, index) => (
            <CarouselItem 
              key={index} 
              className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 pl-4"
            >
              <DestinationCard {...destination} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 text-sm sm:text-base border border-black hover:bg-black hover:text-white" />
        <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 text-sm sm:text-base border border-black hover:bg-black hover:text-white" />
      </Carousel>
    </div>
  );
};

export default DreamTripSection;