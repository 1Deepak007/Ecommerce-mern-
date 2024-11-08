import React from 'react'
import mainBanner from '../assets/mainbanner.jpg'
import mainBanner1 from '../assets/mainbanner1.jpg'
import mainBanner2 from '../assets/mainbanner2.jpg'
import mainBanner3 from '../assets/mainbanner3.jpg'

const Hero = () => {

    const images = [mainBanner1, mainBanner, mainBanner2, mainBanner3]

    const [currentSlide, setCurrentSlide] = React.useState(null);



    return (
        <>
            <div className="flex flex-col sm:flex-row broder border-gray-950">
                {/* Hero left side */}
                <div className="w-full sm:w-1/2 sm:mt-[0%] md:mt-[5%] flex md:item-center md:justify-center md:py-10 sm:py-0">
                    <div className="text-[#414141]">
                        <div className="flex items-center gap-2">
                            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
                            <p className='font-medium text-sm md:text-base'>FASHION SALES</p>
                        </div>
                        <h1 className='text-3xl sm:py-3 lg:text-5xl leading-relaxed prata-regular'>Trends</h1>
                        <h1 className='text-3xl sm:py-3 lg:text-5xl leading-relaxed prata-regular'>Latest Arrivals</h1>
                        <div className="flex items-center gap-2">
                            <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
                            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
                        </div>
                    </div>
                </div>

                {/* Hero right side */}
                <div id="default-carousel" className="relative w-full" data-carousel="slide">
                    <div className="relative h-56 overflow-hidden rounded-lg md:h-96">

                        {images.map((image, index) => (
                            <div key={index} className="hidden duration-700 ease-in-out" data-carousel-item>
                                <img src={image} className="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                            </div>
                        ))}
                        <button
                            type="button"
                            onClick={() => {
                                // Handle previous button click
                                setCurrentSlide((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
                            }}
                            className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                            data-carousel-prev
                        >
                            <span className="inline-flex items-center justify-center w-10  h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                <svg
                                    className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                                </svg>
                                <span className="sr-only">Previous</span>
                            </span>
                        </button>
                        <button
                            type="button"
                            onClick={() => { setCurrentSlide((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1)); }}
                            className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                            data-carousel-next
                        >
                            <span className="inline-flex items-center justify-center w-10  h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                <svg
                                    className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                                </svg>
                                <span className="sr-only">Next</span>
                            </span>
                        </button>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;