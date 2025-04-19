import React, { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

interface Message {
  text: string;
  isUser: boolean;
}

const ChatSupport = () => {
  // 1) initial dummy greeting
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hello! I’m your AI assistant. How can I help you today?", isUser: false }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  // 2) suggestion → canned response map
  const cannedResponses: Record<string, string> = {
    "How do I reset my password?":
      "To reset your password, click on your avatar at the top right, select 'Account Info', and then choose 'Change Password'. If you're unable to log in, use the 'Forgot Password' link on the login page to receive a reset email. :contentReference[oaicite:12]{index=12}",
    "What are your support hours?":
      "Our customer support is available Monday to Friday, from 9:30 AM to 5:00 PM Eastern Time. :contentReference[oaicite:13]{index=13}",
    "Where can I view my booking?":
      "To view your bookings, click on your avatar at the top right corner, then select 'Bookings' from the dropdown menu. :contentReference[oaicite:14]{index=14}",
    "How do I cancel a reservation?":
      "To cancel a reservation, navigate to 'My Bookings', select the booking you wish to cancel, and click on 'Cancel Booking'. Please note that cancellation policies may vary depending on the service provider.",
    "Do you offer travel insurance?":
      "Tripadvisor does not directly offer travel insurance. However, some bookings made through our partners may include insurance options. Please check the details of your specific booking or consult with the service provider."
  };
  
  const suggestions = Object.keys(cannedResponses);

  // unified send function
  const sendMessage = (msg: string) => {
    if (!msg.trim()) return;
    // add user message
    setMessages(prev => [...prev, { text: msg, isUser: true }]);
    setInputMessage('');
    // simulate AI reply
    setTimeout(() => {
      const reply = cannedResponses[msg] ?? 
        "Sorry, I don't have an answer for that. Please reach out to our live support.";
      setMessages(prev => [...prev, { text: reply, isUser: false }]);
    }, 800);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-tripadvisor-darkGreen hover:bg-tripadvisor-green shadow-lg flex items-center justify-center p-0"
        >
          <MessageSquare className="size-12 text-white font-bold" />
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="w-[400px] sm:w-[540px] p-0">
        <div className="flex flex-col h-full">
          {/* header */}
          <div className="bg-tripadvisor-darkGreen p-4">
            <h2 className="text-white font-semibold">Chat Support</h2>
          </div>

          {/* suggestions */}
          <div className="p-3 border-b border-gray-200 flex gap-2 flex-wrap">
            <span className='text-lg font-medium'>Example Prompts:</span>
            {suggestions.map((s) => (
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
          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[75%] rounded-lg p-3 ${
                    m.isUser
                      ? 'bg-tripadvisor-darkGreen text-white'
                      : 'bg-gray-100 text-gray-800'
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
                Send
              </Button>
            </form>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ChatSupport;
