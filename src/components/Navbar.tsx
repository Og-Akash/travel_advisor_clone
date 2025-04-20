import React, { useState, useEffect } from "react";
import { motion } from "motion/react"; // Import motion
import { Mail, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Globe from "@/components/Icons/Globe";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import { tabValues } from "@/constants/tab";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

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
          className="flex md:hidden items-center space-x-3 max-w-[12rem]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Sheet trigger (menu) */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Menu size={28} />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64 sm:w-80">
              <SheetHeader>
                <SheetTitle className="text-lg">Menu</SheetTitle>
              </SheetHeader>
              <div className="mt-6 flex flex-col space-y-4 text-base font-medium">
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
              </div>
            </SheetContent>
          </Sheet>

          {/* Logo */}
          <a href="/" className="flex items-center max-w-[3rem]">
            <img
              src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_logoset_solid_green.svg"
            />
          </a>
        </motion.div>
        <motion.div
          className="hidden md:flex items-center max-w-[12rem]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a href="/" className="flex items-center w-full">
            <img src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg" />
          </a>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          className={`hidden ${
            hasScrolled ? "sm:flex" : "hidden"
          } w-fit sm:w-full h-10 mx-2 md:mx-4 rounded-full ring-1 ring-gray-300 shadow-lg shadow-gray-300 items-center transition-all duration-100 overflow-hidden`}
          initial={{ opacity: 0 }}
          animate={{
            opacity: hasScrolled ? 1 : 0,
            width: hasScrolled ? "calc(100% - 2rem)" : "0px", // 2rem = mx-4 (1rem each side)
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {/* Mobile - Search Icon Only (hidden above sm) */}
          <div className="sm:hidden flex items-center justify-center w-10 h-10">
            <Search size={24} className="text-tripadvisor-darkGray" />
          </div>

          {/* Desktop - Full Search Input (hidden below sm) */}
          <div className="hidden sm:flex w-full items-center">
            <Search
              size={24}
              className="ml-3 text-tripadvisor-darkGray flex-shrink-0"
            />
            <input
              type="text"
              placeholder="Where to?"
              className="ml-3 flex-grow py-2 px-2 outline-none text-sm placeholder:text-sm bg-transparent"
            />
          </div>
        </motion.div>

        {/* Navigation Links */}
        <motion.div
          className="hidden lg:flex space-x-6 text-[16px] font-medium"
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
