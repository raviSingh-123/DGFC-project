import React from 'react';
import Logo1 from '../assets/globe.gif';
import Logo2 from '../assets/dgfc_logo.png';
import { FaLocationDot } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-orange-500 text-white font-semibold py-14">
      <div className="max-w-[1320px] mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* About Section */}
        <div className="flex flex-col mb-8 md:mb-0">
          <div className='flex items-center mb-4'> 
            <img src={Logo1} alt="Logo" className="w-[60px] h-[60px] mr-2"/>
            <img src={Logo2} alt="Logo2" className="w-[150px] h-[60px]"/>
          </div>
          <p className="text-sm mt-4">
            DGFC is India's leading Multimodal Integrated Supply Chain & Logistic Solutions Provider with immense and large scale presence all over India.
          </p>
        </div>
        
        {/* Links Section */}
        <div className="mb-8 md:mb-0 md:px-28">
          <h3 className="text-lg font-bold mb-4">LINKS</h3>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="#about" className="hover:underline">About Us</a></li>
            <li><a href="#services" className="hover:underline">Services</a></li>
            <li><a href="#group" className="hover:underline">Dgfc Group</a></li>
            <li><a href="#training" className="hover:underline">Training</a></li>
            <li><a href="#contact" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>
        
        {/* Contact Us Section */}
        <div className="mb-8 md:mb-0">
          <h3 className="text-lg font-bold mb-4">CONTACT US</h3>
          <p className="text-sm">
            📞 Free Call: <span className="font-semibold">011-47644555</span>
          </p>
          <p className="text-sm mt-2">
            📧 Drop us a message: <a href="mailto:info@dgfc.in" className="underline">info@dgfc.in</a>
          </p>
          <p className="text-sm mt-4">
           Regd. Office<br />
            1/34 ,Shivaji Nagar Gurgaon 122001
          </p>
          
          
          <p className="text-sm mt-4">
            Corporate Office<br />
            28/5-6, Samalkha, near Kapashera police station, New Delhi 110037
          </p>
        </div>
        
      </div>
    </footer>
  );
}

export default Footer;