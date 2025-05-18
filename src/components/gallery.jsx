import React from "react";
import img1 from "../assets/images/image-1.jpg";
import img2 from "../assets/images/image-2.jpg";
import img3 from "../assets/images/image-3.jpg";
import img4 from "../assets/images/image-4.jpg";
import img5 from "../assets/images/image-5.jpg";
import img6 from "../assets/images/image-6.jpg";

const images = [img1, img2, img3, img4, img5, img6];

const Gallery = () => {
  return (
    <section id="gallery" className="py-16 px-4 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Gallery image ${idx + 1}`}
              className="w-full h-64 object-cover rounded-lg shadow-md hover:scale-105 transition"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
