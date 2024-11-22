import React, { useState, useEffect } from "react";

const images = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYSmkXEQsBLk2WokDXyZJSCIQxWR2UWmhslw&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYSmkXEQsBLk2WokDXyZJSCIQxWR2UWmhslw&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYSmkXEQsBLk2WokDXyZJSCIQxWR2UWmhslw&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYSmkXEQsBLk2WokDXyZJSCIQxWR2UWmhslw&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYSmkXEQsBLk2WokDXyZJSCIQxWR2UWmhslw&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYSmkXEQsBLk2WokDXyZJSCIQxWR2UWmhslw&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYSmkXEQsBLk2WokDXyZJSCIQxWR2UWmhslw&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYSmkXEQsBLk2WokDXyZJSCIQxWR2UWmhslw&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYSmkXEQsBLk2WokDXyZJSCIQxWR2UWmhslw&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYSmkXEQsBLk2WokDXyZJSCIQxWR2UWmhslw&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYSmkXEQsBLk2WokDXyZJSCIQxWR2UWmhslw&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYSmkXEQsBLk2WokDXyZJSCIQxWR2UWmhslw&s",
  
];

const MultiImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleImages = 4; // Number of images visible at once
  const autoSlideInterval = 3000; // Time in milliseconds

  // Move to the next slide
  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= images.length - visibleImages ? 0 : prevIndex + 1
    );
  };

  // Move to the previous slide
  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - visibleImages : prevIndex - 1
    );
  };

  // Automatically slide after the set interval
  useEffect(() => {
    const interval = setInterval(nextImage, autoSlideInterval);
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [currentIndex]);

  return (
    <> <h1 className="text-[35px] font-bold text-black text-center">Training Images </h1>
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

export default MultiImageCarousel;
