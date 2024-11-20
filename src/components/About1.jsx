import React from "react";
import img1 from "../assets/1.jpg";
function About1() {
  return (
    <>
      <div className="bg-yellow-50 py-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-6">
          {/* Text Section */}
          <div className="md:w-1/2">
            <h1 className="text-3xl -mt-6 font-bold mb-4">Welcome to DGFC</h1>
            <p className="text-black mb-6">
              Delhi Gujarat Fleet Carrier Pvt. Ltd. (DGFC), established in 1958,
              has over five decades of expertise in the logistics sector. Today,
              DGFC stands as a pioneer and leader in the Indian logistics
              industry, recognized for its reliable and conventional approach to
              transportation solutions.
            </p>
            <button className="bg-black text-[20px] duration-200 text-white py-2  mt-3 px-4 rounded md:hover:bg-white md:hover:text-black">
              ABOUT US
            </button>
          </div>
          {/* Image Section */}
          <div className="md:w-1/2 mt-6 md:mt-0">
            <img
              src={img1} // Replace with your actual image path
              alt="DGFC Truck"
              className="md:ml-[250px] w-[400px] h-[300px] md:w-[350px] md:h-[300px] rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Details Section */}
        <div className="mt-10 max-w-7xl mx-auto px-6">
          <p className="mt-2 text-black text-justify leading-7">
            DGFC has the largest network of strategically located 54
            company-owned branches, covering almost all the cities and towns of
            the country. DGFC handles a variety of cargo that includes raw
            materials, industrial products, consumer durables, drugs and
            pharmaceuticals, agricultural products, polymer, lubricants,
            time-sensitive and high-value cargo. Each service is supported by
            well-documented systems and procedures assuring consistency and
            efficiency in its operations and customer care throughout the
            country.
          </p>
          <p className="text-black text-justify leading-7 mt-4">
            DGFC has a satisfied client base including the top Indian companies
            like{" "}
            <span className="font-bold">
              Hyundai, KIA, TOYOTA, TATA, BAJAJ, MRF, RIL
            </span>{" "}
            and many more. DGFC's strength lies in its people. A dedicated team
            of around 4500 employees ensures that the company stays ahead,
            meeting all challenges, achieving goals while being guided by the{" "}
            <span className="font-bold">MISSION</span> as laid down by the
            organization. Meeting the company's commitment towards excellence in
            every sphere of its activity.
          </p>
        </div>
      </div>

     
      {/* who we are */}
      <section className="bg-red-50 relative p-8 md:p-16 flex flex-col md:flex-row items-center md:items-start">
        {/* Text Section */}
        <div className="md:w-[50%] space-y-4">
          <h2 className="text-2xl md:text-4xl font-bold text-red-500">
            WHO WE ARE
          </h2>
          <hr className="border-black w-16 border-b-2" />
          <p className="text-black text-center text-sm md:text-base">
            After 60 years of having established ourselves as the driving force
            and leaders of the Indian logistics industry, we have provided
            services to all our clients keeping in mind security, timely, and
            quality parameters. Our state-of-the-art maintenance workshop
            ensures the safety and on-time delivery for our ventures by keeping
            all the vehicles and equipment up to date.
          </p>
        </div>

        {/* Video Section */}
        <div className="md:w-1/2 mt-8 md:mt-0 md:ml-8">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-[480px] rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/J---aiyznGQ"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* vision and mission */}
      <section>
        <div className="pt-14 pb-14 text-center">
          <div className="flex justify-center">
            <p className="mt-0 md:mt-3">______________ </p>
            <h1 className="text-[20px] md:text-[40px]  font-bold text-red-500 px-2">
              VISION AND MISSION
            </h1>
            <p className="mt-0 md:mt-3">______________</p>
          </div>

          <p className="px-4 sm:px-12 lg:px-32 xl:px-72 py-4 sm:py-6 text-sm sm:text-base lg:text-lg">
            Our mission is to create satisfied customer by offering them
            integrated logistics services in the most effective way and to be
            the safest, consistent and cost efficient logistics service provider
            thereby ensuring long lasting business relationship and growth of
            both the organizations. We want to maintain the superior quality of
            our fleet as per global standards and conduct our business with
            integrity, in compliance with applicable laws,and in manner that
            creates values for all our associates.
          </p>
        </div>

        {/* quality policy */}
        <div className="pb-14 text-center bg-orange-200">
          <div className="flex justify-center">
            <p className="md:mt-3 mt-0">______________ </p>
            <h1 className="text-[20px] md:text-[40px]  font-bold text-red-500 px-2">
              QUALITY POLICY
            </h1>
            <p className="md:mt-3 mt-0">______________</p>
          </div>

          <p className="text-[15px] font-bold px-4 sm:px-12 lg:px-32 :px-72 py-4 sm:py-6 text-sm sm:text-base lg:text-lg">
            We are committed to achieve customer satisfaction by providing value
            added logistics services at an optimum cost along with the highest
            safty and quality standards and abiding by the professional ethics.
          </p>

          <div>
            <h1 className="text-left font-bold text-[25px] ml-9">
              We shall achieve this by-
            </h1>
            <ul className="text-left">
              <li className="font-semibold  text-[8px] sm:text-[20px]  sm:ml-16">
                ⭐ Committed to continous improvement in your systems and
                business practices.So that we can offer most economically
                services to our customer.
              </li>
              <li className="font-semibold text-[8px] sm:text-[20px]  sm:ml-16">
                ⭐ Being positive for attaining global standard in quality of
                services we offer to our key customers.
              </li>
              <li className="font-semibold  text-[8px] sm:text-[20px]  sm:ml-16">
                ⭐ Nurturing operational excellence in our team.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default About1;
