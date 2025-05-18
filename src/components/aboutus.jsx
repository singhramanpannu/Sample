import React from "react";
import img1 from '../assets/images/image-1.jpg';
import img2 from '../assets/images/Image-2.jpg';
import img3 from '../assets/images/Image-3.jpg';

const AboutUsSection = () => {
  return (
    <section
      id="aboutus"
      className="w-full h-[90vh] py-12 px-4 md:px-12 lg:px-20 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 h-full">
        {/* Left Content */}
        <div className="w-full md:w-1/2 space-y-4">
          <h4 className="text-blue-600 text-sm uppercase tracking-widest font-semibold">
            About Us
          </h4>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
            Helping You Find the Best PG Accommodation Around You
          </h2>
          <p className="text-gray-600 text-base leading-relaxed">
            We bring together top-rated PGs with affordable prices, trusted reviews, and seamless contact options to make your stay worry-free. Whether you're a student or a working professional, we have something just for you.
          </p>
        </div>

        {/* Right Images */}
        <div className="w-full md:w-1/2 grid grid-cols-2 grid-rows-2 gap-4 h-[70vh]">
          {/* Tall image (left) */}
          <div className="row-span-2 h-full">
            <img
              src={img1}
              alt="Long PG room"
              className="w-full h-full object-cover rounded-xl shadow-md"
            />
          </div>
          {/* Small top image */}
          <div className="h-full">
            <img
              src={img2}
              alt="Small top"
              className="w-full h-full object-cover rounded-xl shadow-md"
            />
          </div>
          {/* Small bottom image */}
          <div className="h-full">
            <img
              src={img3}
              alt="Small bottom"
              className="w-full h-full object-cover rounded-xl shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
