import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export type Article = {
  image?: string;
  tag?: string;
  heading?: string;
  subHeading?: string;
  buttonText?: string;
  bg?: string;
};

const Article = ({
  image="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/ec/17/e3/caption.jpg?w=400&h=400&s=1&cx=4846&cy=1237&chk=v1_7e9a38335d35a46edbee",
  tag="In partnership with CESAR",
  heading="Your guide to dog-friendly travels",
  subHeading="Life is better shared with your dog. So, CESAR® Canine Cuisine and Tripadvisor are joining forces to help create a more dog-friendly world—one where best friends can always be together. We're working to make it easier for you to travel with your dog, so you can experience more together.",
  bg="bg-tripadvisor-pink",
  buttonText="Read now"
}: Article) => {
  return (
    <div className={`hidden xl:block w-full ${bg} rounded-lg overflow-hidden p-6`}>
      <Link
        target="_blank"
        to="https://www.tripadvisor.com/Articles-l2cB2pP2AiZc-Pet_friendly_travel.html"
        className="hover:no-underline"
      >
        <section
          aria-label="Article section"
          className="w-full rounded-lg flex gap-6 items-start relative"
        >
          {/* Image container with rotation */}
          <div className="relative">
            <img
              src={image}
              alt="article"
              className="w-40 h-40 rounded-lg object-cover -rotate-6 transform origin-center"
              style={{ aspectRatio: "4/3" }}
            />
          </div>

          {/* Text content */}
          <div className="flex-1 flex flex-col gap-2 pr-20 max-w-[70%]">
            {/* Added padding for button space */}
            {/* Sponsor tag */}
            <div className="flex flex-col gap-3 justify-center">
              <div className="text-xs bg-[#E0E0E0] p-[4px] w-fit rounded-lg inline-flex items-start gap-[3px]">
                {tag} <span className="text-[4px]">&copy;</span>
              </div>
            </div>
            {/* Heading */}
            <h3 className="text-2xl font-semibold text-gray-900 leading-tight">
              {heading}
            </h3>
            {/* Subheading */}
            <p className="text-sm line-clamp-2 leading-snug">
              {subHeading}
            </p>
          </div>

          {/* Read now button positioned at bottom right */}
          <div className="absolute bottom-0 right-0 ml-6">
            <Button
              variant="secondary"
              className="border border-black rounded-full w-32 h-12 bg-white hover:bg-black hover:text-white"
            >
              {buttonText}
            </Button>
          </div>
        </section>
      </Link>
    </div>
  );
};

export default Article;
