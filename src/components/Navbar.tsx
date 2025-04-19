import React, { useState, useEffect } from "react";
import { motion } from "motion/react"; // Import motion
import { Mail, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Globe from "@/components/Icons/Globe";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import { tabValues } from "@/constants/tab";

const Navbar = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`w-full fixed top-0 z-20 transition-all bg-white duration-75 ${
        hasScrolled && "shadow-sm"
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <nav className="max-w-6xl mx-auto flex justify-between items-center py-4 px-[15px]">
        {/* Logo */}
        <motion.div
          className="flex items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a href="/" className="flex items-center">
            <img
              src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg"
              width={190}
              height={40}
            />
          </a>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          className={`${
            hasScrolled ? "flex w-[35%] ring-2" : "hidden w-0"
          } h-10 mx-auto rounded-full bg-transparent ring-gray-300 shadow-lg shadow-gray-300 items-center transition-all duration-100`}
          initial={{ opacity: 0 }}
          animate={{ opacity: hasScrolled ? 1 : 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="w-full relative flex overflow-hidden ml-3 mr-1">
            <Search
              size={24}
              className="absolute left-0 top-1/2 -translate-y-1/2 text-tripadvisor-darkGray"
            />
            <input
              type="text"
              placeholder="Search..."
              className="ml-3 flex-grow py-3 px-5 outline-none text-sm placeholder:text-sm bg-transparent"
            />
          </div>
        </motion.div>

        {/* Navigation Links */}
        <motion.div
          className="hidden md:flex space-x-6 text-[16px] font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a href="#" className="hover:text-tripadvisor-darkGreen">
            Discover
          </a>
          <a href="#" className="hover:text-tripadvisor-darkGreen">
            Trips
          </a>
          <a href="#" className="hover:text-tripadvisor-darkGreen">
            Review
          </a>
          <a href="#" className="hover:text-tripadvisor-darkGreen">
            More
          </a>
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="flex items-center space-x-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button variant="ghost" className="rounded-full" type="button">
            <span className="flex items-center font-medium text-base">
              <Globe size={20} />
              <div className="bg-gray-300 h-[22px] my-0 mx-2 w-[1px]"></div>
              USD
            </span>
          </Button>

          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-black hover:bg-black/90 text-white rounded-full text-sm px-4 py-1">
                Sign in
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <div className="flex flex-col mb-4">
                <div className="py-2">
                  <img
                    src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_Logo_dark-bg_circle-green_horizontal-lockup_registered_RGB.svg"
                    alt="logo.png"
                    width={200}
                    height={120}
                    className=""
                  />
                </div>
                <p className="text-[1.7rem] font-semibold w-[70%]">
                  Sign in to unlock the best of Tripadvisor.
                </p>
              </div>

              <div className="flex flex-col justify-between space-y-3 px-4 h-96">
                <div className="space-y-4">
                  <Button className="w-full flex items-center justify-center gap-2 py-6 bg-white border-2 rounded-full border-black hover:bg-gray-50 text-black">
                    <img
                      src="https://static.tacdn.com/img2/google/G_color_40x40.png"
                      alt="google"
                      width={40}
                      height={40}
                      className="size-5"
                    />
                    <span className="flex-1">Continue with Google</span>
                  </Button>
                  <Button className="w-full flex items-center justify-center gap-2 py-6 bg-white border-2 rounded-full border-black hover:bg-gray-50 text-black">
                    <Mail className="size-6 font-medium" />
                    <span className="flex-1">Continue with Email</span>
                  </Button>
                </div>
                <div className="space-y-3">
                  <p className="text-xs text-center text-gray-500 mt-4">
                    By proceeding, you agree to our Terms of Use and confirm you
                    have read our <u>Privacy</u> and <u>Cookie Statement.</u>
                  </p>
                  <p className="text-xs text-center text-gray-500 mt-4">
                    This site is protected by reCAPTCHA and the Google{" "}
                    <u>Privacy Policy</u>
                    and <u>Terms of Service</u> apply.
                  </p>
                </div>
              </div>
            </DialogContent>
          </Dialog>

        </motion.div>
      </nav>

      {/* Tabs Section */}
      {hasScrolled && (
        <motion.div
          className="mx-auto max-w-6xl flex my-1 overflow-x-auto pb-2 hide-scrollbar"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Tabs className="w-full flex">
            <TabsList className="bg-transparent flex justify-start overflow-x-auto p-0 space-x-1">
              {tabValues.map(({ value, label }) => (
                <TabsTrigger
                  key={value}
                  value={value}
                  className="flex items-center gap-1 text-black rounded-none border-b-2 border-transparent hover:border-b-black"
                >
                  <span className="text-[15px]">{label}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
