import React, { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import glry1 from "../assets/galry (1).jpg";
import glry4 from "../assets/galllry (4).jpg";
import glry3 from "../assets/galry (3).jpg";
import glry22 from "../assets/galry (2).jpg";
import automobile1 from "../assets/automobile1.png";

const Gallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed:500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  


  return (
    <div className="w-full mx-auto ">
      
      <Slider {...settings}>
        <div className="px-2">
          <img
            src={glry1}
            alt="Image 1"
            className="w-[500px] h-[250px] rounded"
          />
        </div>
        <div className="px-2">
          <img
            src={glry22}
            alt="Image 2"
           className="w-[500px] h-[250px] rounded"
          />
        </div>
        <div className="px-2">
          <img
            src={glry3}
            alt="Image 3"
            className="w-[500px] h-[250px] rounded"
          />
        </div>
        <div className="px-2">
          <img
            src={glry4}
            alt="Image 4"
           className="w-[500px] h-[250px] rounded"
          />
        </div>
        <div className="px-2">
          <img
            src={automobile1}
            alt="Image 5"
           className="w-[500px] h-[250px] rounded"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Gallery;
