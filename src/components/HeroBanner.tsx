import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import Sparkle from "./Icons/Sparkle";

const HeroBanner = () => {
  return (
    <motion.div
      className="relative overflow-hidden min-h-[28.5rem] mx-4 md:mx-6 mt-12 mb-8 rounded-lg"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <motion.div
        className="relative z-10 pt-20 pl-24 pb-8 pr-6 text-white space-y-8 max-w-[45%] bg-gradient-to-r from-black/50 to-transparent"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
      >
        <div className="flex items-center mb-2">
          <motion.span
            className="text-sm text-white px-2 py-0.5 rounded-sm font-bold"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            Powered by AI
          </motion.span>
          <motion.span
            className="bg-white p-2 rounded-lg ml-2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="text-black font-semibold text-sm">BETA</div>
          </motion.span>
        </div>

        <motion.h2
          className="text-2xl md:text-[52px] font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          Plan your kind of trip
        </motion.h2>

        <motion.p
          className="text-3xl font-semibold mb-4 max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Get custom recs for all the things you're into with AI trip builder.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <Button className="bg-white text-black hover:bg-gray-100 flex items-center gap-3 px-5 py-2 h-12 text-[16px] font-medium rounded-full">
            <Sparkle />
            Start a trip with AI
          </Button>
        </motion.div>
      </motion.div>

      <motion.img
        src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/20/6c/10/app-relaunch-banner-2.jpg?w=1200&h=-1"
        alt="Person on a scenic trip"
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
    </motion.div>
  );
};

export default HeroBanner;