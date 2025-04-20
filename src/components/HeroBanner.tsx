import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Sparkle from "./Icons/Sparkle";

const HeroBanner = () => {
  return (
    <motion.div
      className="relative w-full aspect-[3/1] min-h-[400px] max-h-[445px] mx-auto mt-6 md:mt-12 mb-6 md:mb-8 rounded-lg overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Responsive Background Image */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        initial={{ scale: 1.3 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <img
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/20/6c/10/app-relaunch-banner-2.jpg?w=1200&h=-1"
          alt="Person on a scenic trip"
          className="w-full h-full object-cover"
          loading="eager"
        />
      </motion.div>

      {/* Gradient Overlay - Professional Implementation */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent" />

      {/* Content Container */}
      <motion.div
        className="relative z-10 h-full flex flex-col justify-center px-6 sm:px-8 md:px-16 lg:px-24 py-8 md:py-12 text-white max-w-3xl"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut", staggerChildren: 0.3 } },
        }}
      >
        {/* AI Badge - Perfectly Scaled */}
        <motion.div
          className="flex items-center mb-3 md:mb-4 w-fit"
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <span className="text-xs md:text-sm text-white px-2.5 py-1 rounded-sm font-bold bg-black/30 backdrop-blur-sm border border-white/20">
            Powered by AI
          </span>
          <span className="bg-white p-1.5 md:p-2 rounded-lg ml-2">
            <div className="text-black font-semibold text-xs md:text-sm">BETA</div>
          </span>
        </motion.div>

        {/* Heading - Perfect Typography Scale */}
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl max-w-md font-bold leading-tight md:leading-normal mb-2 md:mb-4"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          Plan your kind of trip
        </motion.h2>

        {/* Subheading - Optimized Readability */}
        <motion.p
          className="text-lg sm:text-xl md:text-2xl font-medium mb-4 md:mb-6 max-w-lg"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          Get custom recs for all the things you're into with AI trip builder.
        </motion.p>

        {/* Button - Consistent Touch Target */}
        <motion.div
          className="w-fit"
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <Button className="bg-white text-black hover:bg-gray-100 flex items-center gap-2 px-5 py-3 h-12 text-base font-medium rounded-full shadow-lg">
            <Sparkle className="w-5 h-5" />
            Start a trip with AI
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default HeroBanner;