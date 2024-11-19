import React from 'react'
import img13 from "../assets/car (1).jpg";
import img14 from "../assets/car (2).jpg";
import img15 from "../assets/car (3).jpg";
import img16 from "../assets/car (4).jpg";
import img17 from "../assets/car (5).jpg";
import img18 from "../assets/car (6).jpg";
import img19 from "../assets/car (7).jpg";
import img20 from "../assets/car (8).jpg";
import img21 from "../assets/car (9).jpg";
import img22 from "../assets/car (10).jpg";
import img23 from "../assets/car (11).jpg";
import img24 from "../assets/car (12).jpg";
import img25 from "../assets/car (13).jpg";
import img26 from "../assets/car (14).jpg";
import img27 from "../assets/car (15).jpg";
import img28 from "../assets/car (16).jpg";
import img29 from "../assets/car (17).jpg";
import img30 from "../assets/car (18).jpg";
import img31 from "../assets/auto (1).jpg";
import img32 from "../assets/auto (2).jpg";
import img33 from "../assets/auto (3).jpg";
import img34 from "../assets/auto (4).jpg";
import img35 from "../assets/auto (5).jpg";
import img36 from "../assets/auto (6).jpg";
import img37 from "../assets/auto (7).jpg";
import img38 from "../assets/bat (1).jpg";
import img39 from "../assets/bat (2).jpg";
import img40 from "../assets/bat (3).jpg";
import img41 from "../assets/bat (4).jpg";
import img42 from "../assets/bat (5).jpg";
import img43 from "../assets/bat (6).jpg";
import Marquee from "react-fast-marquee";
function Maor() {
    return (
        <div>
            <div className="flex flex-col md:flex-row justify-center my-4 mb-4">
                <p className="mt-3 hidden md:block">___________</p>
                <h1 className="px-2 text-[30px] md:text-[40px] font-bold text-red-500 text-center">
                    OUR MAJOR CLIENT
                </h1>
                <p className="mt-3 hidden md:block">___________</p>
            </div>
            <div className="pb-10">
                <Marquee direction="left" speed={250} delay={4}>
                    <div className="flex flex-col text-center">
                        <h1 className="font-bold text-[30px] md:text-[40px] px-4 pr-10">CAR</h1>
                        <h1 className="font-bold text-[30px] md:text-[40px] px-4 pr-10">CARRIER</h1>
                        <h1 className="font-bold text-[30px] md:text-[40px] px-4 pr-10">BUSINESS</h1>
                    </div>
                    {[img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24, img25, img26, img27, img28, img29, img30].map((img, index) => (
                        <div className="image_wrapper" key={index}>
                            <img
                                className=" sm:w-[250px] h-[200px] px-2 hover:scale-95 duration-100 shadow-lg"
                                src={img}
                                alt={`Image ${index + 1}`}
                            />
                        </div>
                    ))}
                    <div className="flex flex-col text-center">
                        <h1 className="font-bold text-[30px] md:text-[40px] px-4 pr-10">AUTO</h1>
                        <h1 className="font-bold text-[30px] md:text-[40px] px-4 pr-10">CARRIER</h1>
                        <h1 className="font-bold text-[30px] md:text-[40px] px-4 pr-10">BUSINESS</h1>
                    </div>
                    {[ img31, img32, img33, img34, img35, img36, img37].map((img, index) => (
                        <div className="image_wrapper" key={index}>
                            <img
                                className=" sm:w-[250px] h-[200px] px-2 hover:scale-95 duration-100 shadow-lg"
                                src={img}
                                alt={`Image ${index + 1}`}
                            />
                        </div>
                    ))}
                    <div className="flex flex-col text-center">
                        <h1 className="font-bold text-[30px] md:text-[40px] px-4 pr-10">TYRE</h1>
                        <h1 className="font-bold text-[30px] md:text-[40px] px-4 pr-10">& BATTERY</h1>
                        <h1 className="font-bold text-[30px] md:text-[40px] px-4 pr-10">BUSINESS</h1>
                    </div>
                    {[ img38, img39, img40, img41, img42, img43].map((img, index) => (
                        <div className="image_wrapper" key={index}>
                            <img
                                className=" sm:w-[250px] h-[200px] px-2 hover:scale-95 duration-100 shadow-lg"
                                src={img}
                                alt={`Image ${index + 1}`}
                            />
                        </div>
                    ))}
                </Marquee>
            </div>
        </div>
    )
}

export default Maor
