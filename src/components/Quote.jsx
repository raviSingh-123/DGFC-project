import React from 'react';

const Quote = () => {
  return (
    <div className="flex flex-wrap items-center justify-between bg-orange-400 text-black p-8">
      {/* Left Image Section */}
      <div className="w-full md:w-1/2 p-4">
        <img
          src="https://img.freepik.com/free-photo/mid-section-business-people-shaking-hands-outdoors_1098-20783.jpg?uid=R174008159&ga=GA1.1.2054276004.1731593415&semt=ais_hybrid" // Replace with the image URL
          alt="Handshake"
          className="w-full md:h-[500px] rounded-md"
        />
      </div>

      {/* Right Form Section */}
      <div className="w-full md:w-1/2 p-4 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-center">Get Quotation</h2>
        <p className="text-lg font-bold text-center text-blue-500 mb-6">
          REQUEST A FREE QUOTE
        </p>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="First Name"
            className="p-3 rounded-md  border-black border-2 bg-white focus:outline-none focus:ring-1  focus:ring-black"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="p-3 rounded-md  border-black border-2 bg-white focus:outline-none focus:ring-1  focus:ring-black"
          />
          <input
            type="tel"
            placeholder="Phone"
            className="p-3 rounded-md border-black border-2 bg-white focus:outline-none focus:ring-1  focus:ring-black"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-3 rounded-md   border-black border-2 bg-white focus:outline-none focus:ring-1  focus:ring-black"
          />
          <input
            type="text"
            placeholder="Unloading Place"
            className="p-3 rounded-md  border-black border-2 bg-white focus:outline-none focus:ring-1  focus:ring-black"
          />
          <input
            type="text"
            placeholder="Loading Place"
            className="p-3 rounded-md  border-black border-2 bg-white focus:outline-none focus:ring-1  focus:ring-black"
          />
          <input
            type="text"
            placeholder="Destination"
            className="p-3 rounded-md  border-black border-2 bg-white focus:outline-none focus:ring-1  focus:ring-black "
          />
          <input
            type="number"
            placeholder="Payload in Kg"
            className="p-3 rounded-md  border-black border-2 bg-white focus:outline-none focus:ring-1  focus:ring-black"
          />
          <select
            className="p-3 rounded-md  border-black border-2 bg-gorange-400focus:outline-none focus:ring-1  focus:ring-black"
          >
            <option>Type of cargo</option>
            <option>Perishable</option>
            <option>Non-Perishable</option>
          </select>
          <select
            className="p-3 rounded-md  border-black border-2 bg-white focus:outline-none focus:ring-1  focus:ring-black"
          >
            <option>Type of transportation</option>
            <option>Air</option>
            <option>Road</option>
            <option>Sea</option>
          </select>
        </form>
        <button className="mt-6 w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600">
          Submit Quote
        </button>
      </div>
    </div>
  );
};

export default Quote;
