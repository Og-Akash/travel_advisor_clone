import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import Sparkle from "./Icons/Sparkle";

const HeroBanner = () => {
  return (
    <motion.div
      className="relative overflow-hidden min-h-[28.5rem] mx-4 md:mx-6 mt-12 mb-8 rounded-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Parallax Background */}
      <motion.img
        src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/20/6c/10/app-relaunch-banner-2.jpg?w=1200&h=-1"
        alt="Person on a scenic trip"
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ scale: 1.3 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />

      {/* Content Section */}
      <motion.div
        className="relative z-10 pt-20 pl-24 pb-8 pr-6 text-white space-y-8 max-w-[45%] bg-gradient-to-r from-black/50 to-transparent"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut", staggerChildren: 0.3 } },
        }}
      >
        {/* AI Badge */}
        <motion.div
          className="flex items-center mb-2"
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <span className="text-sm text-white px-2 py-0.5 rounded-sm font-bold">
            Powered by AI
          </span>
          <span className="bg-white p-2 rounded-lg ml-2">
            <div className="text-black font-semibold text-sm">BETA</div>
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          className="text-2xl md:text-[52px] font-bold"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          Plan your kind of trip
        </motion.h2>

        {/* Subheading */}
        <motion.p
          className="text-3xl font-semibold mb-4 max-w-md"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          Get custom recs for all the things you're into with AI trip builder.
        </motion.p>

        {/* Button */}
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <Button className="bg-white text-black hover:bg-gray-100 flex items-center gap-3 px-5 py-2 h-12 text-[16px] font-medium rounded-full">
            <Sparkle />
            Start a trip with AI
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default HeroBanner;