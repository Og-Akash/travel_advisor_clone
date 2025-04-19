import Bed from "@/components/Icons/Bed";
import Home from "@/components/Icons/Home";
import Rental from "@/components/Icons/Rental";
import {
    UtensilsCrossed,
    Plane,
    Camera,
  } from "lucide-react";

export const tabValues = [
    { value: "all", label: "Search all", heading: "Where to?", icon: Home },
    {
      value: "hotels",
      label: "Hotels",
      heading: "Stay somewhere great",
      icon: Bed,
    },
    {
      value: "things",
      label: "Things to Do",
      heading: "Do something fun",
      icon: Camera,
    },
    {
      value: "restaurants",
      label: "Restaurants",
      heading: "Find places to eat",
      icon: UtensilsCrossed,
    },
    {
      value: "flights",
      label: "Flights",
      heading: "Find the best flight",
      icon: Plane,
    },
    {
      value: "rentals",
      label: "Vacation Rentals",
      heading: "Explore places to rent",
      icon: Rental,
    },
  ];