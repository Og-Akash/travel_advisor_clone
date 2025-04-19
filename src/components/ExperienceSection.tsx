import { experiences } from "@/constants";
import { Card } from "./carousel/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ExperienceSection = () => {
  return (
    <div className="px-4 md:px-6 mb-8">
      <h2 className="section-heading">You might like these</h2>
      <p className="section-subheading">
        Highly rated things to do in Thailand
      </p>

      <Carousel
        opts={{
          align: "start",
          slidesToScroll:4
        }}
        className="w-full max-w-6xl mx-auto relative"
      >
        <CarouselContent className="-ml-4">
          {experiences.map((experience, index) => (
            <CarouselItem
              key={index}
              className="basis-1/4 pl-4" // 4 cards visible
            >
              <Card {...experience} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-0 top-[150px] z-10 w-10 h-10 text-lg md:text-xl border border-black hover:bg-black hover:text-white hover:border-white transition-all duration-100" />
        <CarouselNext className="absolute right-0 top-[150px] z-10 w-10 h-10 text-lg md:text-xl border border-black hover:bg-black hover:text-white hover:border-white transition-all duration-100" />
      </Carousel>
    </div>
  );
};

export default ExperienceSection;
