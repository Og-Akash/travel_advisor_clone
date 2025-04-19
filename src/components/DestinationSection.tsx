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
    <div className="destination-card group">
      <img src={image} alt={name} />
      <div className="overlay">
        <h3>{name}</h3>
      </div>
    </div>
  );
};

const DestinationSection = () => {
  return (
    <div className="px-4 md:px-6">
      <div>
        <h2 className="section-heading">
          Explore the world’s most stunning seasides
        </h2>
        <p className="section-subheading">
          2025’s Travelers’ Choice Awards Best of the Best Beaches
        </p>
      </div>

      <Carousel
        opts={{
          align: "start",
          slidesToScroll:4
        }}
        className="relative w-full max-w-6xl mx-auto"
      >
        <CarouselContent className="-ml-4">
          {destinations.map((destination, index) => (
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

export default DestinationSection;
