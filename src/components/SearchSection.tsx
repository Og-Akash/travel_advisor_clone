import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react"; // Import framer-motion
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Search from "./Icons/Search";
import { NavigationIcon } from "lucide-react";
import { tabValues } from "@/constants/tab";

const SearchSection = () => {
  const [activeTab, setActiveTab] = useState("hotels");
  const [isExpanded, setIsExpanded] = useState(false);
  const searchBarRef = useRef<HTMLDivElement | null>(null);
  
  const recentlyViewed = [
    {
      title: "Small-Group Explore Angkor Wat Sunrise Tour with Guide from Siem Reap",
      location: "Siem Reap, Cambodia",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/d5/f1/83/caption.jpg?w=100&h=-1&s=1",
    },
  ];

  useEffect(() => {
    function handleMouseDown(e: any) {
      if (!searchBarRef.current?.contains(e.target)) {
        setIsExpanded(false);
      }
    }

    document.addEventListener("mousedown", handleMouseDown);
    return () => document.removeEventListener("mousedown", handleMouseDown);
  }, []);

  return (
    <div className="px-4 md:px-6 pb-6 pt-2 mt-28">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="hidden lg:block text-2xl md:text-5xl font-bold text-center mb-6"
      >
        {tabValues.find(tab => tab.value === activeTab)?.heading}
      </motion.h1>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full mb-4 overflow-x-auto"
      >
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full flex justify-center p-4"
        >
          <TabsList className="bg-transparent flex justify-start overflow-x-auto p-0 space-x-1">
            {tabValues.map(({ value, label, icon: Icon }) => (
              <TabsTrigger
                key={value}
                value={value}
                className={`flex items-center gap-1 text-black rounded-none border-b-2 border-transparent hover:border-b-black whitespace-nowrap px-4 py-2 ${
                  activeTab === value && "border-b-black"
                }`}
              >
                <Icon size={20} className="size-5" />
                <span className="text-sm md:text-[17.5px]">{label}</span>
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </motion.div>

      <motion.div
        ref={searchBarRef}
        className="relative max-w-3xl w-full mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
      >
        <motion.div
          className={`ring-2 ring-gray-300 bg-white shadow-lg shadow-gray-300 overflow-hidden ${
            isExpanded ? "rounded-2xl" : "rounded-full"
          }`}
        >
          <div className="relative flex flex-col lg:flex-row items-center px-4 py-3">
            <Search
              size={24}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Places to go, things to do, hotels..."
              className="pl-10 pr-20 py-2 w-full outline-none text-sm md:text-base placeholder:text-sm md:placeholder:text-base"
              onClick={() => setIsExpanded(true)}
            />
            {!isExpanded && (
              <button className="search-button absolute right-1 top-1/2 -translate-y-1/2 rounded-full text-sm md:text-base">
                Search
              </button>
            )}
          </div>

          {isExpanded && (
            <motion.div
              className="p-4 border-t border-gray-200"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-6">
                <motion.div
                  className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer"
                  whileHover={{ scale: 1.005 }}
                >
                  <span className="size-12 bg-tripadvisor-gray ring-2 ring-tripadvisor-darkGray/40 flex items-center justify-center rounded-lg shadow-lg">
                    <NavigationIcon className="size-5" />
                  </span>
                  <h3 className="font-semibold">Nearby</h3>
                </motion.div>
                <motion.div
                  className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer"
                  whileHover={{ scale: 1.005 }}
                >
                  <img
                    src="https://picsum.photos/50"
                    alt="Fukuoka"
                    className="w-12 h-12 rounded object-cover"
                  />
                  <div>
                    <h4 className="font-medium">Fukuoka</h4>
                    <p className="text-sm text-gray-500">Sponsored by Japan Airlines</p>
                  </div>
                </motion.div>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Recently Viewed</h3>
                {recentlyViewed.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer"
                    whileHover={{ scale: 1.005 }}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-12 h-12 rounded object-cover"
                    />
                    <div>
                      <h4 className="font-medium text-sm line-clamp-2">{item.title}</h4>
                      <p className="text-sm text-gray-500">{item.location}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SearchSection;
