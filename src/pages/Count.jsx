import React from "react";
import { FaPeopleRoof } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import { FaTruckMoving } from "react-icons/fa";
import { FaRegClone } from "react-icons/fa"
import { PiShareNetworkLight } from "react-icons/pi";

const Count = () => {
  const stats = [
    { value: "3000+", label: "DGFC OWNED FLEET", icon: <FaTruckMoving className="text-6xl mb-4 mx-24 mt-2" /> },
    { value: "4500+", label: "Total Staffs", icon: <IoIosPeople className="text-6xl mb-4 mx-24" /> },
    { value: "100+", label: "Total Branches", icon: <PiShareNetworkLight className="text-6xl mb-4 mx-24 mt-2" /> },
    { value: "5000+", label: "Satisfied Client", icon: <FaRegClone  className="text-6xl mb-4 mx-24 mt-2" /> },
  ];

  return (
    <>
      <section className="p-4">
        <h1 className="text-[40px] text-center font-bold text-red-400">
          India's Largest Transport Company
        </h1>
        <div
          className="bg-cover bg-center py-10" 
        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-black bg-opacity-80 text-white ml-14 text-center rounded-lg shadow-lg"
              >
                {stat.icon}
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-lg font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Count;
