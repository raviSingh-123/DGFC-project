import React from 'react';

function Newsletter() {
  return (
    <div className="bg-black text-white py-11 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center md:space-x-4 space-y-4 md:space-y-0">
        
        {/* Newsletter Heading */}
        <h2 className="text-2xl font-bold text-center md:text-left">JOIN OUR NEWSLETTER</h2>
        
        {/* Input and Button with gap */}
        <div className="flex flex-col md:flex-row w-full md:w-auto">
          <input
            type="email"
            placeholder="Enter your email here"
            className="px-20 py-2 rounded-md text-gray-700 outline-none mb-2 md:mb-0 md:mr-2"
          />
          <button className="bg-white text-blue-900 px-4 py-2 font-semibold rounded-md hover:bg-gray-200">
            Subscribe Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;