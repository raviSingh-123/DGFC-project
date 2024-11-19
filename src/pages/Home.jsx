import React, { useState, useEffect } from 'react'
import img1 from '../assets/banner.jpg'
import img2 from '../assets/12.jpg'
import img3 from '../assets/truck05.jpg'
import img4 from '../assets/service3copy.jpg'
import img5 from '../assets/65y+.jpg'
// import bg from '../assets/bg.jpg'
import automobile1 from '../assets/automobile1.png'
import img13 from '../assets/car (1).jpg'
import img14 from '../assets/car (2).jpg'
import img15 from '../assets/car (3).jpg'
import img16 from '../assets/car (4).jpg'
import img17 from '../assets/car (5).jpg'
import img18 from '../assets/car (6).jpg'
import img19 from '../assets/car (7).jpg'
import img20 from '../assets/car (8).jpg'
import img21 from '../assets/car (9).jpg'
import img22 from '../assets/car (10).jpg'
import img23 from '../assets/car (11).jpg'
import img24 from '../assets/car (12).jpg'
import img25 from '../assets/car (13).jpg'
import img26 from '../assets/car (14).jpg'
import img27 from '../assets/car (15).jpg'
import img28 from '../assets/car (16).jpg'
import img29 from '../assets/car (17).jpg'
import img30 from '../assets/car (18).jpg'
import img31 from '../assets/auto (1).jpg'
import img32 from '../assets/auto (2).jpg'
import img33 from '../assets/auto (3).jpg'
import img34 from '../assets/auto (4).jpg'
import img35 from '../assets/auto (5).jpg'
import img36 from '../assets/auto (6).jpg'
import img37 from '../assets/auto (7).jpg'
import img38 from '../assets/bat (1).jpg'
import img39 from '../assets/bat (2).jpg'
import img40 from '../assets/bat (3).jpg'
import img41 from '../assets/bat (4).jpg'
import img42 from '../assets/bat (5).jpg'
import img43 from '../assets/bat (6).jpg'

import img101 from "../assets/achiv1.jpg";
import img102 from "../assets/achiv2.jpg";
import img103 from "../assets/achiv3.jpg";
import img104 from "../assets/achiv4.jpg";
import img105 from "../assets/achiv5.jpg";
import img106 from "../assets/achiv6.jpg";

import imgabt from "../assets/2.jpg";
import logic from "../assets/glry.png";

//  import img6 from '../assets/1.jpg'
//  import img7 from '../assets/2.jpg'
// import img8 from '../assets/3.jpg'
import Marquee from 'react-fast-marquee';
import Servh from '../components/Servh'
import Chain from '../components/Chain'
import Gallery from '../components/Gallery'
import Maor from '../components/Maor'
import Newsletter from '../components/Newsletter'
function Home() {
    const images = [img1, img2, img3]

    const [currentIndex, setCurrentIndex] = useState(0);
    // previous slide ke liye h

    function movePrev() {
        setCurrentIndex((prevIndex) => prevIndex === 0 ? images.length - 1 : prevIndex - 1)
    }

    // next slide ke liye h 
    function moveNext() {
        setCurrentIndex((prevIndex) => prevIndex === images.length - 1 ? 0 : prevIndex + 1)
    }

    useEffect(
        () => {
            const timer = setInterval(moveNext, 3000);
            return () => clearInterval(timer);
        }, []
    )


    const card = [
        {
            id: 1,
            logo: automobile1,
            tittle: 'Automobile Carrier',
            para: '________',
            desc: 'We provide multidisciplinary and comprehensive professional services that enable our clients to succeed.'
        },
        {
            id: 2,
            logo: logic,
            tittle: 'Logistics',
            para: '________',
            desc: 'We have the professionals and expertise knowledge to understand the dynamics of your business and the services.'
        },
        {
            id: 3,
            logo: logic,
            tittle: "Logistics",
            para: "________",
            desc: "We have the professionals and expertise knowledge to understand the dynamics of your business and the services.",
        },
    ]






    return (
        <div>
            {/* slidebar ke liye code hai */}
            <div className="relative">
                {/* Previous Button */}
                <button
                    className="absolute top-[50%] translate-y-[-50%] text-[30px] sm:text-[40px] bg-orange-400 text-white left-0 px-2 sm:px-3 ml-1 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    onClick={movePrev}
                >
                    &#10094;
                </button>

                {/* Image and Overlay Content */}
                <div>
                    <img
                        className="w-full h-auto"
                        src={images[currentIndex]}
                        alt={`Slide ${currentIndex}`}
                    />
                    <div className="absolute top-[15px]  md:top-[120px] lg:top-[250px] left-10 md:left-[150px] text-white bg-opacity-50 px-2 sm:px-3 md:px-4 py-1 sm:py-2 rounded-lg text-sm sm:text-base md:text-xl">
                        <p className=" font-bold font-serif text-[14px] md:text-[25px] pb-1 sm:pb-2 md:pb-3">
                            ONE STOP SOLUTION FOR
                        </p>
                        <p className="font-extrabold font-serif text-[20px] md:text-[60px] py-1 sm:py-2 md:py-3">
                            NATIONWIDE
                        </p>
                        <p className="font-extrabold font-serif text-[20px] md:text-[60px] pt-2 sm:pt-3 md:pt-5">
                            TRANSPORTATION
                        </p>
                    </div>
                </div>

                {/* Next Button */}
                <button
                    className="absolute top-[50%] translate-y-[-50%] text-[30px] sm:text-[40px] bg-orange-400 text-white right-0 px-2 sm:px-3 mr-1 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    onClick={moveNext}
                >
                    &#10095;
                </button>
                <div className="flex justify-center space-x-2 mt-4">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`h-3 w-3 rounded-full ${index === currentIndex ? "bg-blue-500" : "bg-gray-400"
                                }`}
                        />
                    ))}
                </div>
            </div>

            {/* About dgfc wale part ke liye code h  */}

            <section className="py-6">
                <div className="max-w-[1320px] mx-auto px-4">
                    <h1 className="font-serif font-semibold text-[20px] sm:text-[25px] pt-4 sm:pt-9 text-center sm:text-left">
                        ABOUT DGFC
                    </h1>
                    <p className="  font-medium md:text-start   text-center mt-2 ">
                        __________
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-20 mt-6">
                        <div>
                            <p className="text-[16px] sm:text-[18px] font-sans mt-3 sm:ml-14 text-justify">
                                DGFC is India’s leading Integrated Supply Chain & Logistics
                                Solutions Provider with a strong presence across the country.
                                With over five decades of experience, we take a customer-first
                                approach, delivering reliable solutions for all types of
                                needs—big or small. Our extensive network of 100+ branches and
                                4,500+ employees ensures seamless operations and excellent
                                service. Trusted by a large base of satisfied customers, DGFC
                                continues to provide world-class logistics support to
                                businesses of all sizes.
                            </p>
                        </div>
                        <div className="flex justify-center sm:justify-start">
                            <img
                                className="w-[300px] h-[400px] -translate-y-0.5 md:ml-28 sm:w-[400px] sm: rounded-xl"
                                src={imgabt}
                                alt="img"
                            />
                        </div>
                    </div>
                </div>
            </section>


            {/* experience section ke liye code h  */}
            <section className="bg-cyan-50 p-1">
                <div className="max-w-[1320px] mx-auto grid grid-cols-1 md:grid-flow-col md:grid-cols-[40%_60%] pb-8">
                    <img
                        className="p-4 mt-4 w-[400px] h-auto pl-6 md:pl-0 md:w-[629px] md:h-[475px] border-black rounded-full"
                        src={img5}
                        alt="experienceLogo"
                    />
                    <p className="text-l text-black py-5 px-14 mt-10 font-normal">
                        With over 65 years of experience as leaders and pioneers in the
                        Indian logistics industry, we have consistently delivered
                        exceptional services to our clients, prioritizing safety,
                        timeliness, and quality. Our state-of-the-art maintenance workshop
                        ensures the reliability and punctuality of our operations by keeping
                        all vehicles and equipment in optimal condition.
                        <br />
                        <br />
                        Our fleet, comprising modern vehicles operated by professional
                        drivers and a skilled workforce, includes over 4,500 vehicles and
                        offers Full Truck Load (FTL), Express Transportation, Tanker
                        Transportation, and Warehousing services. This extensive
                        infrastructure enables us to deliver superior performance and
                        reliable services to our valued clients.
                    </p>
                </div>
            </section>

            {/* Largest transport company section h ... */}
            <section>
                <div className="flex items-center justify-center my-4 mb-7">
                    <p>_________</p>
                    <h1 className="mt-3 px-2 text-[16px] md:text-[25px] text-red-500 font-bold">
                        Largest Transport Company
                    </h1>
                    <p>_________</p>
                </div>
                <div className="flex flex-wrap justify-center text-black px-4 sm:px-10 lg:px-24">
                    {card.map(({ id, logo, tittle, para, desc }) => (
                        <div
                            key={id}
                            className="flex flex-col m-4 hover:cursor-pointer group duration-300 shadow-lg text-center max-w-[90%] sm:max-w-[45%] lg:max-w-[30%]"
                        >
                            <img
                                className="w-full h-auto pt-4 group-hover:rounded-lg"
                                src={logo}
                                alt={tittle}
                            />
                            <h1 className="text-[18px] sm:text-[20px] lg:text-[25px] font-bold group-hover:text-center hover:text-blue-600 mt-4">
                                {tittle}
                            </h1>
                            <p className="font-medium text-[14px] sm:text-[16px] lg:text-[18px] mt-2">
                                {para}
                            </p>
                            <p className="text-[14px] sm:text-[16px] lg:text-[20px] font-normal group-hover:text-center group-hover:pb-4 mt-2">
                                {desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* our achievement section */}
            <section className="bg-orange-200 p-6">
                <h1 className="text-center text-lg sm:text-3xl md:text-4xl lg:text-5xl text-red-500 font-bold">
                    Our Achievement
                </h1>

                <div className="px-6 mt-6 space-y-4">
                    <h2 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-left sm:ml-4 md:ml-8 lg:ml-12">
                        ✅ ALL INDIA NO. 1 TRANSPORTER BY HONDA SCOOTERS
                    </h2>
                    <h2 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-left sm:ml-4 md:ml-8 lg:ml-12">
                        ✅ MOST FLEXIBLE TRANSPORTER BY MARUTI SUZUKI
                    </h2>
                    <h2 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-left sm:ml-4 md:ml-8 lg:ml-12">
                        ✅ TRANSPORT RATAN AWARD BY AIMT
                    </h2>
                    <h2 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-left sm:ml-4 md:ml-8 lg:ml-12">
                        ✅ BEST TRANSPORTER AWARD IN THREE CONSECUTIVE YEARS BY MERCEDES BENZ
                    </h2>
                </div>

                <div className="px-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8 mx-auto md:mx-10">
                    <img
                        className="border-black border-2 rounded-lg h-40 w-40 sm:h-48 sm:w-48 md:h-60 md:w-60 lg:h-72 lg:w-72 object-cover"
                        src={img101}
                        alt=""
                    />
                    <img
                        className="border-black border-2 rounded-lg h-40 w-40 sm:h-48 sm:w-48 md:h-60 md:w-60 lg:h-72 lg:w-72 object-cover"
                        src={img102}
                        alt=""
                    />
                    <img
                        className="border-black border-2 rounded-lg h-40 w-40 sm:h-48 sm:w-48 md:h-60 md:w-60 lg:h-72 lg:w-72 object-cover"
                        src={img103}
                        alt=""
                    />
                    <img
                        className="border-black border-2 rounded-lg h-40 w-40 sm:h-48 sm:w-48 md:h-60 md:w-60 lg:h-72 lg:w-72 object-cover"
                        src={img104}
                        alt=""
                    />
                    <img
                        className="border-black border-2 rounded-lg h-40 w-40 sm:h-48 sm:w-48 md:h-60 md:w-60 lg:h-72 lg:w-72 object-cover"
                        src={img105}
                        alt=""
                    />
                    <img
                        className="border-black border-2 rounded-lg h-40 w-40 sm:h-48 sm:w-48 md:h-60 md:w-60 lg:h-72 lg:w-72 object-cover"
                        src={img106}
                        alt=""
                    />
                    <img
                        className="border-black border-2 rounded-lg h-40 w-40 sm:h-48 sm:w-48 md:h-60 md:w-60 lg:h-72 lg:w-72 object-cover"
                        src={img105}
                        alt=""
                    />
                    <img
                        className="border-black border-2 rounded-lg h-40 w-40 sm:h-48 sm:w-48 md:h-60 md:w-60 lg:h-72 lg:w-72 object-cover"
                        src={img106}
                        alt=""
                    />
                </div>
            </section>

            {/* our future vision section wala h  */}

            <section>
                <div className="pt-14 pb-14 text-center">
                    <div className="flex justify-center">
                        <p className="mt-3">______________ </p>
                        <h1 className="text-[40px] font-bold text-red-500 px-2">
                            OUR FUTURE VISION
                        </h1>
                        <p className="mt-3">______________</p>
                    </div>

                    <p className="px-4 sm:px-12 lg:px-32 xl:px-72 py-4 sm:py-6 text-sm sm:text-base lg:text-lg">
                        With over 65 years of excellence behind us, we have established
                        ourselves as India's leading logistics chain solutions provider with
                        a PAN-India presence. A complete solution emerges through the
                        amalgamation of diverse forces. As services continue to become
                        increasingly specialized and segmented, customized solutions have
                        become the need of the hour.
                    </p>
                    <div className="mt-6 space-y-4 px-6">
                        <h2 className="font-bold text-[15px] sm:text-[20px] center sm:ml-16">
                            ⭐To become a major contributor in providing end-to-end logistics
                            solutions.
                        </h2>
                        <h2 className="font-bold text-[15px] sm:text-[20px] center sm:ml-16">
                            ⭐To expand our network across all regions of India.
                        </h2>
                        <h2 className="font-bold text-[15px] sm:text-[20px] center sm:ml-16">
                            ⭐To cultivate high standards of business by ensuring the safe and
                            timely delivery of goods.
                        </h2>
                        <h2 className="font-bold text-[15px] sm:text-[20px] center sm:ml-16">
                            ⭐To achieve international standards with a focus on customers,
                            services, and cost reduction.
                        </h2>
                    </div>
                </div>
            </section>

            {/* service section wala h */}
            <section>
                <Servh />
            </section>


            {/* chain section h */}

            <section>
                <Chain />
            </section>

            {/* Gallery section yaha se hai  */}

            <section>
                <div className="flex justify-center my-4 mb-4">
                    <p className="mt-3">________</p>
                    <h1 className=" px-2 text-[40px] font-bold text-red-500">GALLERY</h1>
                    <p className="mt-3">________</p>
                </div>
                <Gallery />
            </section>

            {/* our major clients part here */}
            <section>
                <Maor />
            </section>
            
            {/* newletter wala h  */}
            <section>
                <Newsletter/>
            </section>
        </div>
    )
}

export default Home