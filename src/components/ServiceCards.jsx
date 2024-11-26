import React, { useState } from 'react';

const ServiceCards = () => {
  const [expandedCard, setExpandedCard] = useState(null); // State to track the expanded card

  const services = [
    {
      title: "AUTOMOBILE CARRIERS",
      description:
        `Automobile Carrier Services
At DGFC, we pride ourselves on operating one of the largest and most advanced fleets of over 1,000 automobile carriers. This fleet is designed to handle a wide range of vehicle transportation needs, including specialized four-wheeler transportation , Three-wheeler transportation , two-wheeler transportation and Tractors transportation. DGFC Always ensuring flexibility and adaptability for our clients.

Our carriers are 100% CMVR (Central Motor Vehicle Rules) compliance, reflecting our commitment to safety and regulatory standards. Each carrier is equipped with GPS tracking, ensuring real-time location updates and operational transparency.
Why Choose DGFC for Automobile Logistics?
  Safety and Reliability: Rigorous compliance with safety norms and robust carrier designs safeguard your vehicles during transit.
  Precision in Delivery: Our GPS-enabled fleet ensures timely and accurate tracking, keeping you informed every step of the way.
  Diverse Capabilities: From individual vehicles to bulk shipments, we cater to all types of automobile transportation needs.
  End-to-End Support: A dedicated team ensures seamless coordination, reducing downtime and optimizing logistics efficiency.

With DGFC’s cutting-edge automobile carrier services, you can trust us to deliver your vehicles securely, efficiently, and on schedule. Partner with us for a smooth, dependable, and worry-free logistics experience.`,
      image: "https://via.placeholder.com/400x200", // Replace with the correct image URL
    },
    {
      title: "EXPRESS SERVICE",
      description:
        "Chetak Logistics provides an efficient, professional, and competitive express service using our different size of vehicles. We provide a completely personalized and dedicated service for all your requirements.",
      image: "https://via.placeholder.com/400x200", // Replace with the correct image URL
    },
    {
      title: "WAREHOUSING & DISTRIBUTION",
      description:
        `Automobile Carrier Services
At DGFC, we pride ourselves on operating one of the largest and most advanced fleets of over 1,000 automobile carriers. This fleet is designed to handle a wide range of vehicle transportation needs, including specialized four-wheeler transportation , Three-wheeler transportation , two-wheeler transportation and Tractors transportation. DGFC Always ensuring flexibility and adaptability for our clients.

Our carriers are 100% CMVR (Central Motor Vehicle Rules) compliance, reflecting our commitment to safety and regulatory standards. Each carrier is equipped with GPS tracking, ensuring real-time location updates and operational transparency.
Why Choose DGFC for Automobile Logistics?
  Safety and Reliability: Rigorous compliance with safety norms and robust carrier designs safeguard your vehicles during transit.
  Precision in Delivery: Our GPS-enabled fleet ensures timely and accurate tracking, keeping you informed every step of the way.
  Diverse Capabilities: From individual vehicles to bulk shipments, we cater to all types of automobile transportation needs.
  End-to-End Support: A dedicated team ensures seamless coordination, reducing downtime and optimizing logistics efficiency.

With DGFC’s cutting-edge automobile carrier services, you can trust us to deliver your vehicles securely, efficiently, and on schedule. Partner with us for a smooth, dependable, and worry-free logistics experience.`,
      image: "https://via.placeholder.com/400x200", // Replace with the correct image URL
    },
  ];

  const toggleExpand = (index) => {
    // Close the card if it's already expanded, otherwise open the clicked one
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className={`bg-white shadow-lg rounded-lg overflow-hidden border hover:shadow-xl transition-shadow duration-300 ${
              expandedCard === index ? "border-blue-500" : ""
            }`}
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800">
                {service.title.split(" ")[0]}{" "}
                <span className="text-red-600">
                  {service.title.split(" ").slice(1).join(" ")}
                </span>
              </h3>
              <p className="text-gray-600 mt-4 text-sm">
                {/* Show only a short description if not expanded */}
                {expandedCard === index
                  ? service.description
                  : `${service.description.slice(0, 80)}...`}
              </p>
              <button
                onClick={() => toggleExpand(index)}
                className="text-red-600 font-semibold mt-4 inline-block"
              >
                {expandedCard === index ? "Show Less" : "Learn More"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCards;
