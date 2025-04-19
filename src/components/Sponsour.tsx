import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Sponcer = () => {
  return (
    <div className={`w-full h-auto bg-tripadvisor-pink rounded-lg overflow-hidden p-6`}>
      <Link
        target="_blank"
        to="https://www.tripadvisor.com/Articles-l2cB2pP2AiZc-Pet_friendly_travel.html"
      >
        <section
          aria-label="Your guide to dog-friendly travels Life is better shared with your dog. So, CESAR® Canine Cuisine and Tripadvisor are joining forces to help create a more dog-friendly world—one where best friends can always be together. We're working to make it easier for you to travel with your dog, so you can experience more together. Read now"
          className="w-full rounded-lg grid grid-cols-1 lg:grid-cols-2"
        >
          <div className="">

          <div className="flex gap-1 items-center lg:hidden mb-4">
              <img src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_logoset_solid_green.svg" alt="logo" width={30} height={30} />
              <div className="space-x-2">
                <span>Sponsored by</span>
                <Link to={`#`} className="border-b border-black border-spacing-0">CESAR</Link>
              </div>
            </div>

            <img
              src={`https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/17/5b/9c/caption.jpg?w=600&h=-1&s=1`}
              alt="ariticle-1"
              className="w-full h-full rounded-lg"
            />
          </div>
          <div className="px-2 lg:px-12 py-12 flex flex-col justify-center items-center text-center gap-3">
            <div className="hidden lg:flex gap-1 items-center">
              <img src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_logoset_solid_green.svg" alt="logo" width={30} height={30} />
              <div className="space-x-2">
                <span>Sponsored by</span>
                <Link to={`#`} className="border-b border-black border-spacing-0">CESAR</Link>
              </div>
            </div>
            <div className="text-left lg:text-center w-full space-y-2">
              <h1 className="text-[28px] font-semibold">It’s easier than ever to go together</h1>
              <p className="text-[15px]">Travel is better when you can share it with your best friend. Find all the tips, guides, and tools you need to take a dream trip with your dog.</p>
            </div>
            <div className="w-full text-left lg:text-center">
              <Button className="rounded-full px-10 py-6 font-medium lg:font-semibold text-[1rem]">Explore me</Button>
            </div>

          </div>
        </section>
      </Link>
    </div>
  );
};

export default Sponcer;
