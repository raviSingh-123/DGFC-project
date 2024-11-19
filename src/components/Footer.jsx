import React from 'react';
import Logo1 from '../assets/globe.gif';
import Logo2 from '../assets/dgfc_logo.png';

function Footer() {
  return (
    <footer className="bg-orange-400 text-white font-semibold py-14">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* About Section */}
        <div className="flex flex-col">
          <div className='flex items-center mb-4'> 
            <img src={Logo1} alt="Logo" className="w-[60px] h-[60px] mr-2"/>
            <img src={Logo2} alt="Logo2" className="w-[100px] h-[60px]"/>
          </div>
          <p className="text-sm mt-4">
            DGFC is India's leading Multimodal Integrated Supply Chain & Logistic Solutions Provider with immense and large scale presence all over India.
          </p>
        </div>
        
        {/* Links Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">LINKS</h3>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="#about" className="hover:underline">About Us</a></li>
            <li><a href="#services" className="hover:underline">Services</a></li>
            <li><a href="#group" className="hover:underline">Dgfc Group</a></li>
            <li><a href="#training" className="hover:underline">Training</a></li>
            <li><a href="#event" className="hover:underline">Event</a></li>
            <li><a href="#contact" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>
        
        {/* Contact Us Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">CONTACT US</h3>
          <p className="text-sm">
            📞 Free Call: <span className="font-semibold">011-47644555</span>
          </p>
          <p className="text-sm mt-2">
            📧 Drop us a message: <a href="mailto:info@dgfc.in" className="underline">info@dgfc.in</a>
          </p>
        </div>
        
        {/* Followers Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">FOLLOWERS</h3>
          <div className="bg-white text-blue-900 p-4 rounded-lg shadow-lg">
            <div className="flex items-center">
              <img
                src="https://via.placeholder.com/40"
                alt="DGFC Logo"
                className="w-10 h-10 mr-3"
              />
              <div>
                <p className="font-bold">DGFC PVT LTD</p>
                <p className="text-sm">188 फॉलोअर्स</p>
              </div>
            </div>
            <button className="bg-blue-600 text-white py-2 px-4 rounded-lg mt-4 w-full hover:bg-blue-800">
              फेसबुक पेज फॉलो करें
            </button>
            <p className="text-center text-sm mt-2">
              हमें Facebook पर ढूंढें
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;