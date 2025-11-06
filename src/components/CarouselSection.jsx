import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react'; 

const CarouselSection = () => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -280, behavior: 'smooth' }); 
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: 280, behavior: 'smooth' }); 
  };

  const carouselItems = [
    { date: '13 Mar 2025', source: 'Carol Yang' },
    { date: '13 Mar 2025', source: 'ABC XYZ' },
    { date: '13 Mar 2025', source: 'ABC XYZ' },
    { date: '13 Mar 2025', source: 'ABC XYZ' },
    { date: '13 Mar 2025', source: 'ABC XYZ' },
    { date: '13 Mar 2025', source: 'ABC XYZ' },
    { date: '13 Mar 2025', source: 'ABC XYZ' },
  ];

  return (
    <div className="relative bg-linear-to-r from-black to-gray-600 text-white p-8 rounded-xl mb-8">
      <h2 className="text-2xl font-semibold mb-6">There should be a Title for this section</h2>

      <button
        onClick={scrollLeft}
        className="absolute cursor-pointer left-4 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-2 rounded-full z-10"
      >
        <ChevronLeft size={20} />
      </button>

      <div
        ref={carouselRef}
        className="flex gap-4 overflow-x-hidden ml-2 mr-2 scroll-smooth scrollbar-hide"
      >
        {carouselItems.map((item, idx) => (
          <div
            key={idx}
            className="bg-gray-200 text-black p-3 rounded-lg max-w-[264px] shrink-0"
          >
            <p className="text-md font-semibold mb-6">
              Here goes to content for carousel tile, it may be title or any other text
            </p>
            <div className="flex items-center justify-between text-xs font-semibold text-gray-600 pr-24">
              <span>{item.date}</span>
              <span>{item.source}</span>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={scrollRight}
        className="absolute cursor-pointer right-4 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-2 rounded-full z-10"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

export default CarouselSection;
