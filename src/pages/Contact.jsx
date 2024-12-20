import React from "react";
import { MdPhoneIphone } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { BiLogoTelegram } from "react-icons/bi";
import { FaFacebookSquare } from "react-icons/fa";
import { RxLinkedinLogo } from "react-icons/rx";
import { FaInstagramSquare } from "react-icons/fa";
import { Form } from "react-hook-form";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <div>
      <div className="max-w-[1320px] mx-auto">
        <div className="flex-col py-4 pt-6  px-4 ">
          <h1 className="md:text-[40px] font-bold font-serif text-red-500 md:text-start text-center ">
            Get In Touch With Our Experts
          </h1>
          <p className="text-center md:text-start md:pl-[180px]">_______</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 text-center">
          <div className="flex-col md:text-start text-center px-5">
            <h2 className="font-medium text-[20px]">
              If you have any questions, Please send your message
            </h2>
            <div className="flex pb-2 pt-4 ">
              <MdPhoneIphone className="w-12 h-20" />
              <div className="flex-col pt-2 pl-3">
                <h1 className="text-[20px] font-medium pt-1 ">Phone</h1>
                <p className="">(011-47644555)</p>
              </div>
            </div>
            <div className="flex py-2 ">
              <HiOutlineMail className="w-12 h-20" />
              <div className="flex-col pl-3">
                <h1 className="text-[20px] font-medium  pt-3">Email</h1>
                <p className="">info@dgfc.in</p>
              </div>
            </div>
            <div className="flex py-2 ">
              <BiLogoTelegram className="w-10 h-20" />
              <div className="flex-col md:pl-3">
                <h1 className="text-[20px] font-medium  pt-3 text-start md:pl-0 pl-7">
                  Regd. Office
                </h1>
                <p className="pl-4 md:pl-0">
                  1/34 ,Shivaji Nagar Gurgaon 122001
                </p>
              </div>
            </div>
            <div className="flex py-2 ">
              <BiLogoTelegram className="w-10 h-20" />
              <div className="flex-col md:pl-3">
                <h1 className="text-[20px] font-medium  pt-3 text-start md:pl-0 pl-10">
                  Corporate office
                </h1>
                <p className="pl-2 md:pl-0">
                  28/5-6, samalkha, near Kapashera police station, New Delhi
                  110037
                </p>
              </div>
            </div>
            <div className="flex gap-8 py-6 px-14">
              <FaFacebookSquare className="w-10 h-10" />
              <RxLinkedinLogo className="w-10 h-10" />
              <FaInstagramSquare className="w-10 h-10" />
            </div>
          </div>
          <div className="px-28 md:px-60 pb-12">
            <ContactForm />
          </div>
        </div>
      </div>

      <section className="pb-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224674.5242721186!2d76.77194701542398!3d28.372770588860696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1be5768550b1%3A0x959b12fbab28129c!2sDGFC%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1732116610796!5m2!1sen!2sin"
          className="w-full h-[400px] border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="DGFC Location"
        ></iframe>
      </section>
    </div>
  );
}

export default Contact;
