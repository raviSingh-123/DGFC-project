import React, { useState, useEffect } from "react";
import e1 from '../assets/e (1).jpg'
import e2 from '../assets/e (2).jpg'
import e3 from '../assets/e (3).jpg'
import e4 from '../assets/e (4).jpg'
import e5 from '../assets/e (5).jpg'
import e6 from '../assets/e (6).jpg'
import e7 from '../assets/e (7).jpg'
import e8 from '../assets/e (8).jpg'
import e9 from '../assets/e (9).jpg'
import e10 from '../assets/e (10).jpg'
import e11 from '../assets/e (11).jpg'
import e12 from '../assets/e (12).jpg'
import e13 from '../assets/e (13).jpg'


const images = [
  e1, e2, e3, e4, e5, e6,e7,e8,e9,e10,e11,e12,e13
];

const EventSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const getVisibleImages = () => {
    if (window.innerWidth >= 1024) return 4; // Large screens
    if (window.innerWidth >= 768) return 3; // Medium screens
    return 2; // Small screens
  };

  const [visibleImages, setVisibleImages] = useState(getVisibleImages());

  const autoSlideInterval = 3000;

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= images.length - visibleImages ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - visibleImages : prevIndex - 1
    );
  };

  useEffect(() => {
    const handleResize = () => {
      setVisibleImages(getVisibleImages());
      setCurrentIndex(0); // Reset index on resize
    };

    window.addEventListener('resize', handleResize);

    const interval = setInterval(nextImage, autoSlideInterval);
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, [currentIndex]);

   
  return (
    <>
      {/* event images */}
      <section className="bg-yellow-200 py-20">
        <h1 className="text-[35px] mt-4 font-bold text-black text-center">Event Images </h1>
        <div className="p-28">
          <div className="relative max-w-6xl mx-auto">
            {/* Image Wrapper */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500"
                style={{
                  transform: `translateX(-${currentIndex * (100 / visibleImages)}%)`,
                }}
              >
                {images.map((img, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-1/4 px-2"
                    style={{ flexBasis: `${100 / visibleImages}%` }}
                  >
                    <img
                      src={img}
                      alt={`Slide ${index + 1}`}
                      className="rounded-lg shadow-md w-full h-48 object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              disabled={currentIndex === 0}
              className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-blue-700 text-white p-3 rounded-full shadow-md hover:bg-blue-800 focus:outline-none disabled:opacity-50"
            >
              &#8592;
            </button>
            <button
              onClick={nextImage}
              disabled={currentIndex >= images.length - visibleImages}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-blue-700 text-white p-3 rounded-full shadow-md hover:bg-blue-800 focus:outline-none disabled:opacity-50"
            >
              &#8594;
            </button>
          </div>
        </div>
      </section>

    </>
  );
};

export default EventSlider;
