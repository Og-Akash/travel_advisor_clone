import React from "react";
import { Button } from "@/components/ui/button";

const AwardsBanner = () => {
  return (
    <section className="relative bg-[#FFF7E1] overflow-hidden px-4 md:px-6 pt-8 pb-16 mt-16 h-[600px]">
      <div className="max-w-6xl mx-auto grid grid-cols-2 h-full">
        <div className="max-w-2xl relative z-10 mx-8 flex flex-col gap-4">
          <div className="flex flex-col mb-2 w-[27rem]">
            <img
              src="https://static.tacdn.com/img2/travelers_choice/2023/TC_badge_yellow.svg"
              alt="badge_yellow"
              className="size-20"
            />
            <h2 className="text-5xl font-bold ">
              Travelers' Choice Awards Best of the Best
            </h2>
          </div>
          <p className="text-2xl text-black font-medium mb-4">
            Among our top 1% of places, stays, and experiences—based upon
            quality and quantity of traveler reviews.
          </p>
          <Button className="bg-black hover:bg-black/90 text-white rounded-full w-fit">
            See the winners
          </Button>
        </div>

        <div className="bg-[url('https://static.tacdn.com/img2/brand/feed/tc_cards_2025.png')] absolute top-0 right-[15%] w-[45rem] h-full bg-cover"></div>
      </div>
    </section>
  );
};

export default AwardsBanner;
