import React, { useEffect, useRef, useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MessageSquare, Send, Search } from "lucide-react";
import {
  destinations,
  experiences,
  tours,
  worldDestinations,
  indiaDestinations,
} from "@/constants";
import { hotelData } from "@/constants/hotels";
import { cannedResponses } from "@/constants/chatbotData";

interface Message {
  text: string;
  isUser: boolean;
}

const ChatSupport = () => {
  // Initial greeting with instructions
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hello! I'm your TripAdvisor assistant. I can help with general questions about destinations, bookings, and travel tips. Try clicking one of the suggested prompts below or type your question.",
      isUser: false,
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [activeCategory, setActiveCategory] = useState("general");
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Organize prompts by category
  const categories = {
    general: [
      "How do I reset my password?",
      "What are your support hours?",
      "Where can I view my booking?",
    ],
    destinations: [
      "What are popular destinations in Europe?",
      "Tell me about Dubai",
      "Best beaches in Asia?",
    ],
    hotels: [
      "Luxury hotels in Paris",
      "Family-friendly hotels in London",
      "Best hotels in New York City",
    ],
    activities: [
      "What to do in Siem Reap?",
      "Best tours in Kolkata",
      "Top things to do in Rome",
    ],
    tips: [
      "Best time to visit New Zealand",
      "Currency in Southeast Asia",
      "Solo travel safety tips",
    ],
  };

  // Function to determine if a message contains keywords related to a destination
  const findDestinationInfo = (message: string) => {
    const msg = message.toLowerCase();

    // Check for destination names
    const allDestinations = [
      ...worldDestinations,
      ...indiaDestinations,
      ...destinations,
    ];

    const matchedDestination = allDestinations.find(
      (d) =>
        msg.includes(d.name.toLowerCase()) ||
        msg.includes(d.name.split(",")[0].toLowerCase())
    );

    if (matchedDestination) {
      return `${matchedDestination.name} is a popular destination in our database. You can find hotels, activities, and reviews on our main website. Would you like to know about specific attractions or accommodations there?`;
    }

    // Check for hotel names
    const matchedHotel = hotelData.find(
      (h) =>
        msg.includes(h.name.toLowerCase()) || msg.includes(h.city.toLowerCase())
    );

    if (matchedHotel) {
      return `${matchedHotel.name} in ${matchedHotel.city}, ${matchedHotel.country} is a ${matchedHotel.rating}-star rated property with ${matchedHotel.reviews} reviews. It's priced at approximately ${matchedHotel.price}. "${matchedHotel.description}" Would you like to make a booking?`;
    }

    return null;
  };

  // Enhanced send function
  const sendMessage = (msg: string) => {
    if (!msg.trim()) return;

    // Add user message
    setMessages((prev) => [...prev, { text: msg, isUser: true }]);
    setInputMessage("");

    // Find canned response or generate a custom one
    setTimeout(() => {
      // First check exact matches in canned responses
      const exactMatch = cannedResponses[msg];
      if (exactMatch) {
        setMessages((prev) => [
          ...prev,
          { text: exactMatch.text, isUser: false },
        ]);
        return;
      }

      // Then check for destination/hotel information
      const destinationInfo = findDestinationInfo(msg);
      if (destinationInfo) {
        setMessages((prev) => [
          ...prev,
          { text: destinationInfo, isUser: false },
        ]);
        return;
      }

      // Check for keywords in message
      const msgLower = msg.toLowerCase();

      if (
        msgLower.includes("hotel") ||
        msgLower.includes("stay") ||
        msgLower.includes("accommodation")
      ) {
        setMessages((prev) => [
          ...prev,
          {
            text: "We have many hotel options! Popular luxury hotels include Burj Al Arab in Dubai, The Ritz Paris, and The Plaza in New York. To get specific recommendations, please mention a city or region you're interested in.",
            isUser: false,
          },
        ]);
        return;
      }

      if (
        msgLower.includes("tour") ||
        msgLower.includes("activity") ||
        msgLower.includes("attraction")
      ) {
        setMessages((prev) => [
          ...prev,
          {
            text: "We offer thousands of tours and activities worldwide. For the best experience, please specify a destination you're interested in. Some popular experiences include Angkor Wat sunrise tours in Cambodia and heritage walks in Kolkata.",
            isUser: false,
          },
        ]);
        return;
      }

      if (
        msgLower.includes("flight") ||
        msgLower.includes("plane") ||
        msgLower.includes("airline")
      ) {
        setMessages((prev) => [
          ...prev,
          {
            text: "For flight bookings and information, please navigate to the Flights section of our website. We partner with hundreds of airlines to find you the best deals. Would you like help finding this section?",
            isUser: false,
          },
        ]);
        return;
      }

      // Default response with prompt suggestions
      setMessages((prev) => [
        ...prev,
        {
          text: "I don't have a specific answer for that question. Try asking about destinations, hotels, or activities in our database, or click one of the suggestion buttons above. You can ask about specific places like 'Dubai' or 'The Ritz Paris'.",
          isUser: false,
        },
      ]);
    }, 800);
  };

  useEffect(() => {
    const scrollToBottom = () => {
      const chatContainer = chatContainerRef.current;
      if (chatContainer) {
        // Force this to run after DOM updates
        setTimeout(() => {
          chatContainer.scrollTop = chatContainer.scrollHeight;
        }, 100);
      }
    };

    scrollToBottom();
  }, [messages]);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-tripadvisor-darkGreen hover:bg-tripadvisor-green shadow-lg flex items-center justify-center p-0">
          <MessageSquare className="size-6 text-white font-bold" />
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="w-[400px] sm:w-[540px] p-0">
        <div className="flex flex-col h-full">
          {/* header */}
          <div className="bg-tripadvisor-darkGreen p-4">
            <h2 className="text-white font-semibold text-lg">
              TripAdvisor Assistant
            </h2>
            <p className="text-white text-opacity-80 text-sm">
              Ask me about destinations, hotels, or travel tips!
            </p>
          </div>

          {/* category tabs */}
          <div className="border-b border-gray-200 flex px-2 overflow-x-auto">
            {Object.keys(categories).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-sm whitespace-nowrap ${
                  activeCategory === category
                    ? "text-tripadvisor-darkGreen border-b-2 border-tripadvisor-darkGreen font-medium"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          {/* suggestions */}
          <div className="p-3 border-b border-gray-200 flex gap-2 flex-wrap">
            <span className="text-sm font-medium flex items-center text-gray-500">
              <Search className="size-3 mr-1" />
              Try asking:
            </span>
            {categories[activeCategory as keyof typeof categories].map((s) => (
              <button
                key={s}
                onClick={() => sendMessage(s)}
                className="flex-shrink-0 px-3 py-1 bg-gray-100 rounded-full text-sm hover:bg-gray-200"
              >
                {s}
              </button>
            ))}
          </div>

          {/* message list */}
          <div
            ref={chatContainerRef}
            style={{
              scrollBehavior: "smooth"
            }}
            className="flex-1 p-4 overflow-y-auto space-y-4"
          >
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.isUser ? "justify-end" : "justify-start"}`}
              >
                {!m.isUser && (
                  <div className="h-8 w-8 rounded-full bg-tripadvisor-green flex items-center justify-center text-white mr-2 flex-shrink-0">
                    <span className="text-xs font-bold">TA</span>
                  </div>
                )}
                <div
                  className={`max-w-[75%] rounded-lg p-3 ${
                    m.isUser
                      ? "bg-tripadvisor-darkGreen text-white"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          {/* input */}
          <div className="border-t p-4 bg-white">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendMessage(inputMessage);
              }}
              className="flex gap-2"
            >
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1"
              />
              <Button
                type="submit"
                className="bg-tripadvisor-darkGreen hover:bg-tripadvisor-green"
              >
                <Send className="size-4" />
              </Button>
            </form>
            <p className="text-xs text-gray-500 mt-2">
              This is a demo assistant. For complex inquiries, please contact
              our live support.
            </p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ChatSupport;
