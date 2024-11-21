import React, { useState } from "react";
import c1 from '../assets/certi (1).jpg';
import c2 from '../assets/certi (2).jpg';
import c3 from '../assets/certi (3).jpg';
 import c5 from '../assets/certi 5.jpg';
const certificates = [
  { id: 1, src: c1, title: "ISO - 9001" },
  { id: 2, src: c2, title: "ISO - 14001"},
  { id: 3, src: c3, title: " ISO- 45001" },
 { id: 4, src: c5, title: "DUN & BRADSTREET" },
];

function Certificate() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="min-h-screen bg-white p-14">
      {/* Header */}
      <h1 className="text-center text-3xl font-bold mb-6">CERTIFICATIONS</h1>

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:w-[1400px] md:h-[700px] md:grid-cols-2 gap-6">
        {certificates.map((certificate) => (
          <div
            key={certificate.id}
            className="cursor-pointer group relative border-2 border-gray-200 shadow-md rounded-lg hover:scale-105 transform transition"
            onClick={() => setSelectedImage(certificate)}
          >
            {/* Image */}
            <img
              src={certificate.src}
              alt={certificate.title}
              className="w-full h-80 object-cover rounded-lg"
            />
            {/* Title */}
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center rounded-lg transition">
              <p className="text-white font-bold text-center">{certificate.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Large Image */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative bg-white p-4 rounded-lg shadow-lg">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-auto max-h-[80vh] rounded-lg"
            />
            <p className="mt-4 text-center font-bold">{selectedImage.title}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Certificate;
