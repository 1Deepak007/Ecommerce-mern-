import React from 'react';
import Hero from '../components/Hero';
import LatestCollection from '../components/LatestCollection';
import Carousel from '../components/Carousel';

const Home = () => {
  return (
    <>
  <style jsx>{`
    .scrollbar-hide::-webkit-scrollbar {
      display: none; /* For Chrome, Safari, and Opera */
    }
    .scrollbar-hide {
      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none; /* Firefox */
    }
  `}</style>

  <Hero />

  {/* Carousel Container */}
  <div className="carousel-container flex md:justify-center overflow-x-auto scrollbar-hide snap-x snap-mandatory sm:space-x-2 sm:p-4 md:w-full md:space-x-0 md:mt-3">
    <div className="carousel-item flex-shrink-0 snap-start w-[90vw] sm:w-[85vw] md:w-auto">
      <Carousel _topic="pants" />
    </div>
    <div className="carousel-item flex-shrink-0 snap-start w-[90vw] sm:w-[85vw] md:w-auto">
      <Carousel _topic="shirts" />
    </div>
    <div className="carousel-item flex-shrink-0 snap-start w-[90vw] sm:w-[85vw] md:w-auto">
      <Carousel _topic="shoes" />
    </div>
    <div className="carousel-item flex-shrink-0 snap-start w-[90vw] sm:w-[85vw] md:w-auto">
      <Carousel _topic="hoodies" />
    </div>
  </div>

  <div className="mt-0">
    <LatestCollection />
  </div>
</>


  );
};

export default Home;
