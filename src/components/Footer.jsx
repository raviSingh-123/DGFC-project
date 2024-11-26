import React from 'react';
import Logo1 from '../assets/globe.gif';
import Logo2 from '../assets/dgfc_logo.png';

function Footer() {
  return (
    <footer className="bg-orange-500 text-white font-semibold py-14">
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
          <p className="text-sm mt-4">
          Regd. Office
1/34 ,Shivaji Nagar Gurgaon 122001

          </p>
          <p className="text-sm mt-4">
          Corporate office
          28/5-6, samalkha, near Kapashera police station, New Delhi 110037
          </p>
        </div>
        
        {/* Followers Section */}
        
      </div>
    </footer>
  );
}

export default Footer;