import { tours } from "@/constants";
import { Card } from "./carousel/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const KolkataSection = () => {
  return (
    <div className="px-4 md:px-6 mb-8">
      <h2 className="section-heading">Ways to tour Kolkata (Calcutta)</h2>
      <p className="section-subheading">
        Book these experiences for a close-up look at Kolkata (Calcutta)
      </p>

      <Carousel
        opts={{
          align: "start",
          slidesToScroll:"auto"
        }}
        className="w-full max-w-6xl mx-auto relative"
      >
        <CarouselContent className="-ml-4">
          {tours.map((tour, index) => (
            <CarouselItem
              key={index}
             className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 pl-2 md:pl-4"
            >
              <Card {...tour} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-0 top-[150px] z-10 w-10 h-10 text-lg md:text-xl border border-black hover:bg-black hover:text-white hover:border-white transition-all duration-100" />
        <CarouselNext className="absolute right-0 top-[150px] z-10 w-10 h-10 text-lg md:text-xl border border-black hover:bg-black hover:text-white hover:border-white transition-all duration-100" />
      </Carousel>
    </div>
  );
};

export default KolkataSection;
