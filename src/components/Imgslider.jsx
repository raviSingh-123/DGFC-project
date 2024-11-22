import React, { useState, useEffect } from "react";
import t1 from '../assets/T (1).jpg'
import t2 from '../assets/T (2).jpg'
import t3 from '../assets/T (3).jpg'
import t4 from '../assets/T (4).jpg'
import t5 from '../assets/T (5).jpg'
import t6 from '../assets/T (6).jpg'


const images = [
  t1, t2, t3, t4, t5, t6
];

const Imgslider = () => {
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
      <h1 className="text-[35px] font-bold text-black text-center">Training Images </h1>
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

      {/* event images */}

    </>
  );
};

export default Imgslider;
