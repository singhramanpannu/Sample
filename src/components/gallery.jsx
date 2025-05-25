import React from "react";
import img1 from "../../public/images/image-1.webp";
import img2 from "../../public/images/Image-2.webp";
import img3 from "../../public/images/Image-3.webp";
import img4 from "../../public/images/Image-4.webp";
import img5 from "../../public/images/image-5.webp";
import img6 from "../../public/images/Image-6.webp";

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
