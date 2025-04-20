import React from "react";
import { Button } from "@/components/ui/button";

const AwardsBanner = () => {
  return (
    <section className="relative bg-[#FFF7E1] overflow-hidden px-4 sm:px-6 pt-6 pb-12 md:pt-8 md:pb-16 lg:pt-12 lg:pb-20 mt-12 md:mt-16 min-h-[400px] sm:min-h-[500px] md:min-h-[600px]">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12">
        {/* Left content - now takes full width on mobile */}
        <div className="relative z-10 flex flex-col gap-3 sm:gap-4 px-4 sm:px-6 py-4 w-full lg:max-w-[55%]">
          <div className="flex flex-col items-start mb-3 sm:mb-4">
            <img
              src="https://static.tacdn.com/img2/travelers_choice/2023/TC_badge_yellow.svg"
              alt="Travelers' Choice Award"
              className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 mb-2 sm:mb-3"
            />
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight sm:leading-snug">
              Travelers' Choice Awards Best of the Best
            </h2>
          </div>
          <p className="text-lg lg:text-xl text-black font-medium mb-3 sm:mb-4">
            Among our top 1% of places, stays, and experiences—based upon
            quality and quantity of traveler reviews.
          </p>
          <Button className="bg-black hover:bg-black/90 text-white rounded-full w-fit sm:w-fit px-6 py-3 text-sm sm:text-base mx-auto lg:mx-0">
            See the winners
          </Button>
        </div>

        {/* Right image - fluid scaling */}
        <div className="w-full lg:w-[45%] h-[250px] sm:h-[300px] md:h-[350px] lg:h-[450px] xl:h-[550px] flex-shrink-0">
          <div
            className="w-full h-full bg-cover bg-center rounded-lg"
            style={{
              backgroundImage:
                "url('https://static.tacdn.com/img2/brand/feed/tc_cards_2025.png')",
            }}
            aria-label="Travelers' Choice award winners"
          ></div>
        </div>
      </div>
    </section>
  );
};

export default AwardsBanner;