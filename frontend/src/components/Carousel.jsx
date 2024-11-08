// pexels spi key :        fhJmaUZgfrovzGQvw0i1LkH5kwyoeGtGF0CfZWMFy1CS07exfDbC7E3L
// api.pexels.com/videos/popular
// https://api.pexels.com/v1/search?query=nature&per_page=1

import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Carousel = ({ _topic }) => {

  const PEXELS_API_KEY="fhJmaUZgfrovzGQvw0i1LkH5kwyoeGtGF0CfZWMFy1CS07exfDbC7E3L";
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          `https://api.pexels.com/v1/search?query=${_topic}&per_page=10`,
          {
            headers: {
              Authorization: "fhJmaUZgfrovzGQvw0i1LkH5kwyoeGtGF0CfZWMFy1CS07exfDbC7E3L",
            },
          }
        );
        const imageUrls = response.data.photos.map((photo) => photo.src.medium);
        setImages(imageUrls);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();

    // Auto slide every 3 seconds (3000ms)
    const autoSlide = setInterval(() => {
      setCurrentSlide((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 3000);

    // Clear the interval on cleanup
    return () => clearInterval(autoSlide);
  }, [_topic, images.length ]); // Ensure that images are available before setting interval

  return (
      //<h1 className="text-center text-xl mb-4">{`Images for ${_topic}`}</h1>

      <div
      id="default-carousel"
      className="relative md:w-[350px] md:h-[300px] w-full h-56 text-center"
      data-carousel="slide"
    >
      {/* Carousel Image Container */}
      <div className="relative h-56 overflow-hidden rounded-lg md:h-52 p-5 w-full">
        {images.map((url, index) => (
          <div
            key={index}
            className={`absolute duration-700 ease-in-out w-full h-full ${index === currentSlide ? 'block' : 'hidden'}`}
            data-carousel-item
          >
            <img
              src={url}
              alt={`${_topic} image ${index + 1}`}
              className="block w-full h-full object-cover md:p-0 p-2 rounded-lg"
              style={{
                borderRadius: '20px',
              }}
            />
          </div>
        ))}
    
        {/* Previous Button */}
        <button
          type="button"
          onClick={() => setCurrentSlide((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))}
          className="absolute top-0 left-4 z-30 flex items-center justify-center h-full px-2 md:px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span className="inline-flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
    
        {/* Next Button */}
        <button
          type="button"
          onClick={() => setCurrentSlide((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))}
          className="absolute top-0 right-4 z-30 flex items-center justify-center h-full px-2 md:px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span className="inline-flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>
    
    
  );
};

export default Carousel;





