
import React from 'react';
import { Heart } from 'lucide-react';
import { Card } from './carousel/card';
const ExploreMoreSection = () => {
  const exploreItems = [
    {
      title: '15-day Indian heritage tour including Taj Mahal & desert hikes',
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/19/da/a2/ef06936c-bcff-483b.jpg?w=400&h=300&s=1'
    },
    {
      title: 'A family tour to Rajasthan with kids on exciting hiking tracks',
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/19/db/20/c9de0324-9722-44d4.jpg?w=400&h=300&s=1'
    },
    {
      title: 'A boat trip to explore Sundarbans extensive mangrove forests',
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/19/db/4b/484d3b2e-17a7-4a47.jpg?w=400&h=300&s=1'
    }
  ];

  return (
    <div className="bg-[#F2F1EC] py-8 w-screen">
      <div className="max-w-6xl px-4 md:px-6 mb-8 mx-auto">
        <h2 className="section-heading">More to explore</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {exploreItems.map((item, index) => (
            <Card 
              key={index} 
              title={item.title} 
              image={item.image} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreMoreSection;
