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
    </section>
    </>
  );
};

export default Training;
