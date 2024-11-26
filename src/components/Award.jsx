import React, { useState } from "react";
import a1 from '../assets/aw (1).jpg';
import a2 from '../assets/aw (2).jpg';
import a3 from '../assets/aw (3).jpg';
import a4 from '../assets/aw (4).jpg';
import a5 from '../assets/aw (5).jpg';
import a6 from '../assets/aw (6).jpg';
import a7 from '../assets/aw (7).jpg';
import a8 from '../assets/aw (8).jpg';
import a9 from '../assets/aw (9).jpg';
import a10 from '../assets/aw (10).jpg';
import a11 from '../assets/aw (11).jpg';
import a12 from '../assets/aw (12).jpg';

const certificates = [
  { id: 1, src: a1, title: "ISO - 9001" },
  { id: 2, src: a2, title: "ISO - 14001"},
  { id: 3, src: a3, title: " ISO- 45001" },
 { id: 4, src: a4, title: "DUN & BRADSTREET" },
 { id: 5, src: a5, title: "DUN & BRADSTREET" },
 { id: 6, src: a6, title: "DUN & BRADSTREET" },
 { id: 7, src: a7, title: "DUN & BRADSTREET" },
 { id: 8, src: a8, title: "DUN & BRADSTREET" },
 { id: 9, src: a9, title: "DUN & BRADSTREET" },
 { id: 10, src: a10, title: "DUN & BRADSTREET" },
 { id: 11, src: a11, title: "DUN & BRADSTREET" },
 { id: 12, src: a12, title: "DUN & BRADSTREET" },
];

function Award() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="h-[4250px] md:h-[1200px] bg-white p-14  max-w-[1320px] mx-auto">
      {/* Header */}
      <h1 className="text-center text-3xl font-bold mb-6">Awards</h1>

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:w-[1200px] md:h-[300px] md:grid-cols-4 gap-6">
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

export default Award;
