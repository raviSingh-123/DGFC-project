import React, { useState } from "react";
import img1 from "../assets/ss1.jpg";
import img4 from "../assets/ss5.jpg";
import img3 from "../assets/ss3.jpg";
import img2 from "../assets/service3.jpg";
const directors = [
  {
    name: "Automobile Carrier Services",
    
    description: `At DGFC, we pride ourselves on operating one of the largest and most advanced fleets of over 1,000 automobile carriers. This fleet is designed to handle a wide range of vehicle transportation needs, including specialized four-wheeler transportation , Three-wheeler transportation , two-wheeler transportation and Tractors transportation. DGFC Always ensuring flexibility and adaptability for our clients.

Our carriers are 100% CMVR (Central Motor Vehicle Rules) compliance, reflecting our commitment to safety and regulatory standards. Each carrier is equipped with GPS tracking, ensuring real-time location updates and operational transparency.
Why Choose DGFC for Automobile Logistics?
  Safety and Reliability: Rigorous compliance with safety norms and robust carrier designs safeguard your vehicles during transit.
  Precision in Delivery: Our GPS-enabled fleet ensures timely and accurate tracking, keeping you informed every step of the way.
  Diverse Capabilities: From individual vehicles to bulk shipments, we cater to all types of automobile transportation needs.
  End-to-End Support: A dedicated team ensures seamless coordination, reducing downtime and optimizing logistics efficiency.

With  DGFC’s cutting-edge automobile carrier services, you can trust us to deliver your vehicles securely, efficiently, and on schedule. Partner with us for a smooth, dependable, and worry-free logistics experience.`,
    image:img1 // Local image
  },
  {
    name: "Goods Transportation",
  
    description: `DGFC boasts a robust fleet of over 3,000 goods carriers, predominantly containerized, designed to cater to diverse transportation needs with efficiency and reliability. Our fleet includes a variety of advanced configurations such as:  


Our all Vehicles are  containerized with 100% GPS enabled & ideal for transporting a wide range of goods securely, ensuring protection from external elements and maintaining product integrity during transit. DGFC’s modern fleet is optimized for high-capacity loads, providing cost-effective solutions while adhering to strict safety and quality standards.  

Whether you require long-haul or short-distance logistics, DGFC deliver consistent performance and timely delivery every time.`,
    image:img4 // Local image
  },
  {
    name: "Express Transportation Services",
    
    description: `DGFC offers a specialized Express Transportation solution, designed for time-critical shipments that demand swift and efficient delivery. This service features a double-driver model, ensuring continuous vehicle movement without unnecessary halts, significantly reducing transit times and expediting delivery.  

Key Features of DGFC Express Transportation:  
- Double-Driver Operations: Eliminates downtime by enabling uninterrupted transit, ensuring faster delivery for urgent consignments.  
- Customizable Solutions: Tailored to meet specific client requirements for speed and reliability.  
- Advanced Fleet Management: Equipped with GPS tracking for real-time monitoring and updates throughout the journey.  
- Safety and Compliance: Adheres to all regulatory and safety standards while prioritizing the integrity of goods in transit.  

Whether it’s meeting tight deadlines or delivering high-value shipments with minimal delay, DGFC’s Express Transportation service ensures speed without compromising on quality or security. Count on us to keep your supply chain running smoothly and efficiently.`,
    image:img3 // Local image
  },
  {
    name: "Tanker Transportation Services",
 
    description: `DGFC provides Tanker Transportation services, ensuring the safe and efficient movement of liquid and bulk cargo. Our fleet of modern tankers is designed to handle a wide range of products, including chemicals, petroleum, edible oils, and other liquid commodities, while adhering to the highest safety and compliance standards.  

Key Features of DGFC Tanker Transportation:  
- Versatile Fleet: Equipped to transport a variety of liquid cargo, including hazardous and non-hazardous materials.  
- Safety Compliance: Fully compliant with all safety regulations, including stringent checks for leak-proof and secure operations.  
- Advanced Monitoring: Tankers are GPS-enabled for real-time tracking and operational transparency.  
- Specialized Handling: Expertise in managing sensitive and high-value liquid cargo with precision and care.  

With a commitment to reliability and efficiency, DGFC’s Tanker Transportation service ensures the timely and secure delivery of liquid goods, making us a trusted partner for industries across the board.`,
    image:img4 // Local image
  },
];

const DirectorCard = () => {
  const [selectedDirector, setSelectedDirector] = useState(null);

  const openModal = (director) => setSelectedDirector(director);
  const closeModal = () => setSelectedDirector(null);

  return (
    <div className="p-14 bg-gray-100  flex flex-col items-center">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-[1300px] h-[300px]">
        {directors.map((director, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer"
            onClick={() => openModal(director)}
          >
            <img
              src={director.image}
              alt={director.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{director.name}</h2>
              <p className="text-gray-500">{director.role}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedDirector && (
        <div className="fixed inset-0 bg-black bg-opacity-50  flex justify-center items-center">
          <div className="bg-white p-2 rounded-lg shadow-lg relative  w-[60rem] h-[20rem]">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ✖
            </button>
            {/* <img
              src={selectedDirector.image}
              alt={selectedDirector.name}
              className="w-full h-full object-cover rounded"
            /> */}
            <div className="mt-4">
              <h2 className="text-xl font-bold">{selectedDirector.name}</h2>
              <p className="text-gray-600">{selectedDirector.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DirectorCard;
