import React from "react";
import img2 from "../assets/65.jpg";
import img3 from "../assets/65.jpg";
import img4 from "../assets/65.jpg";
import img5 from "../assets/65.jpg";
import img6 from "../assets/training1.jpg";
import img7 from "../assets/training2.jpg";
import img8 from "../assets/training3.jpg";
import img9 from "../assets/training5.jpg";
import Imgslider from "../components/imgslider";
import EventSlider from "../components/EventSlider";

const Training = () => {
  const images = [img6, img7, img8, img9];

  return (
    <>
    <section
      className="bg-cover h-full bg-center py-10"
      style={{
        backgroundImage:
          'url("https://img.freepik.com/free-vector/polygonal-background_53876-59142.jpg?uid=R174008159&ga=GA1.1.2054276004.1731593415&semt=ais_hybrid")',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold ">About Training</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <img
              key={index}
              className="w-full h-64 object-cover rounded-lg shadow-md"
              src={image}
              alt={`Training ${index + 1}`}
            />
          ))}
        </div>
        <div className="mt-8 text-left md:text-left">
          <ul className="list-disc list-inside font-semibold">
            <p>➡️ (ANTI-CLOCKWISE FROM TOP LEFT)</p>
            <p>➡️ DTC Building</p>
            <p>
              ➡️ Internal facilities with ergonomic chairs, A/C's,
              projector-screen, etc.
            </p>
            <p>
              ➡️ Good visibility with safety posters showing road signs and
              messages with safety awareness on the walls.
            </p>
          </ul>
        </div>
        <div className="mt-12">
          <p className="leading-7 font-medium">
            In DGFC, we have a MOTO “SAFETY FIRST.” Hence, we focus on the
            regular training of our Drivers, supervisors & staff to update them
            with all safety measures to be followed and motivate them with
            different slides, mock drills, road shows, and videos. We are having
            our own training centers in our Hub office Dharuhera and also in our
            Mumbai office. We also keep a regular watch on the health and
            fitness of our drivers by conducting regular monitoring of the
            health checkup reports such as health checkup and eye checkup by
            conducting checkup camps and also getting the checkups done in
            regular intervals from reputed medical institutions.
          </p>
        </div>
      </div>
    </section>

    <section>
      <Imgslider/>
      <EventSlider/>
    </section>
      
    <section className="bg-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">
            DGFC HSSE Policy
          </h2>
          <p className="text-lg leading-7 mb-6">
            We are deeply committed to fostering a culture of health, safety,
            security, and environmental stewardship in every aspect of our
            operations. Our guiding principles and objectives include:
          </p>
          <ul className="list-disc list-inside text-lg mb-8">
            <li>
              <strong>No Accidents:</strong> Striving for a workplace where
              incidents and accidents are completely eliminated through proactive
              measures and vigilant practices.
            </li>
            <li>
              <strong>No Harm to People:</strong> Ensuring the safety and
              well-being of all employees, contractors, and visitors, minimizing
              risks and prioritizing preventive measures to safeguard human life.
            </li>
            <li>
              <strong>No Damage to the Environment:</strong> Operating
              responsibly to protect the environment, reducing our ecological
              footprint, and actively contributing to environmental
              sustainability.
            </li>
            <li>
              <strong>Safety of Goods:</strong> Maintaining the integrity and
              security of goods, ensuring they are handled, stored, and
              transported safely to prevent losses or hazards.
            </li>
          </ul>
          <h3 className="text-xl md:text-2xl font-bold mb-4">Our Commitment to HSSE:</h3>
          <ol className="list-decimal list-inside text-lg space-y-4">
            <li>
              <strong>Preventing Incidents:</strong> DGFC firmly believes that all
              incidents are preventable. We are committed to identifying
              potential risks and implementing robust control measures to address
              them before they escalate.
            </li>
            <li>
              <strong>“No Harm” Endeavor:</strong> We are dedicated to creating a
              work environment where harm to employees, contractors, and anyone
              affected by our activities is not just minimized but actively
              avoided through comprehensive safety protocols and continuous
              improvement initiatives.
            </li>
            <li>
              <strong>Individual Responsibility and Accountability:</strong>
              Every individual within DGFC is empowered and accountable for
              maintaining a safe workplace. We cultivate a sense of ownership and
              responsibility, ensuring that safety is everyone’s priority.
            </li>
            <li>
              <strong>Continuous Improvement:</strong> By fostering a culture of
              learning and adaptation, we strive for ongoing enhancements in our
              HSSE practices, ensuring compliance with legal requirements and
              exceeding industry standards.
            </li>
          </ol>
        </div>
      </section>

    </>
  );
};

export default Training;
