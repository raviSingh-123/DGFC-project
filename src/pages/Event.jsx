import React from "react";
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;800&display=swap" rel="stylesheet"/>


function Event() {
  return (
    <section className="flex items-center justify-center min-h-screen bg-gradient-to-r from-orange-200 to-yellow-200">
      <div className="relative w-80 h-80 bg-gradient-to-b from-orange-400 to-orange-500 rounded-full flex items-center justify-center shadow-2xl border-4 border-white">
        <div className="text-center">
          {/* Fancy Text */}
          <p className="text-8xl ml-8 font-black drop-shadow-md text-black font-poppins">65+</p>
          <p className="text-4xl font-bold mt-2 -ml-2 drop-shadow-sm text-black font-poppins">Years</p>
          
        </div>
      </div>
    </section>
  );
}

export default Event;
