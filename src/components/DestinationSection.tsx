import React from "react";
import { destinations } from "@/constants";
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
    <div className="relative group aspect-square overflow-hidden rounded-lg shadow-md">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent flex items-end p-4">
        <h3 className="text-white text-lg md:text-xl font-semibold">{name}</h3>
      </div>
    </div>
  );
};

const DestinationSection = () => {
  return (
    <div className="px-4 md:px-6 py-8">
      <div className="mb-6 md:mb-8">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center md:text-left">
          Explore the world's most stunning seasides
        </h2>
        <p className="text-base md:text-lg text-gray-600 text-center md:text-left mt-2">
          2025's Travelers' Choice Awards Best of the Best Beaches
        </p>
      </div>

      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-6xl mx-auto relative"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {destinations.map((destination, index) => (
            <CarouselItem
              key={index}
              className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 pl-2 md:pl-4"
            >
              <DestinationCard {...destination} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-2 md:left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 md:w-10 md:h-10 text-base md:text-xl border border-black hover:bg-black hover:text-white transition-all duration-100" />
        <CarouselNext className="absolute right-2 md:right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 md:w-10 md:h-10 text-base md:text-xl border border-black hover:bg-black hover:text-white transition-all duration-100" />
      </Carousel>
    </div>
  );
};

export default DestinationSection;