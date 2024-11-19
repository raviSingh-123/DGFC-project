import React from 'react';
import img90 from '../assets/image.png';

function Chain() {
  return (
    <div className="bg-yellow-50 py-16 px-4 sm:px-8">
      <div className="container mx-auto text-center md:text-left">
        
        {/* Main Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          TECHNOLOGY TO SIMPLIFY YOUR SUPPLY CHAIN SOLUTION
        </h2>
        
        {/* Subheading */}
        <p className="text-gray-600 mb-12 max-w-3xl mx-auto md:mx-0">
          DGFC is one of the oldest and largest logistics companies with a PAN-India presence. Backed by a team of dedicated logistics professionals and a large, satisfied customer base, DGFC continues to lead the way in logistics innovation.
        </p>
        
        <div className="flex flex-col md:flex-row md:items-center">
          
          {/* Features List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:w-2/3">
            
            {/* Feature 1 */}
            <div className="flex">
              <span className="text-blue-600 mr-2">•</span>
              <div>
                <h3 className="text-lg font-bold text-gray-800">TAG ENABLE TRACKING SYSTEM</h3>
                <p className="text-gray-600">
                  DGFC's fleet is 100% GPS-enabled, ensuring seamless process monitoring, especially for transportation progress, by consolidating all related information in one system.
                </p>
              </div>
            </div>
            
            {/* Feature 2 */}
            <div className="flex">
              <span className="text-blue-600 mr-2">•</span>
              <div>
                <h3 className="text-lg font-bold text-gray-800">NATIONWIDE LOCATION</h3>
                <p className="text-gray-600">
                  DGFC has a PAN-India presence, with over 100 offices in all major cities across the country.
                </p>
              </div>
            </div>
            
            {/* Feature 3 */}
            <div className="flex">
              <span className="text-blue-600 mr-2">•</span>
              <div>
                <h3 className="text-lg font-bold text-gray-800">OWN FLEET</h3>
                <p className="text-gray-600">
                  DGFC is one of India’s largest fleet owners, with more than 4,500 company-owned, modern vehicles, all equipped with GPS tracking systems.
                </p>
              </div>
            </div>
            
            {/* Feature 4 */}
            <div className="flex">
              <span className="text-blue-600 mr-2">•</span>
              <div>
                <h3 className="text-lg font-bold text-gray-800">SAFE AND ON TIME DELIVERY</h3>
                <p className="text-gray-600">
                  At DGFC, our motto is 100% customer satisfaction through safe and on-time delivery.
                </p>
              </div>
            </div>
          </div>
          
          {/* Image with Animation */}
          <div className="mt-8 md:mt-0 md:ml-12 md:w-1/3 flex justify-center">
            <img
              src={img90}
              alt="DGFC Character and Truck"
              className="w-full max-w-xs animate-slideDown"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chain;