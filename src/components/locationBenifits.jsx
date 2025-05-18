import React from "react";

const benefits = [
  "Walking distance to metro station",
  "Near top colleges and offices",
  "Peaceful & safe neighborhood",
  "Nearby grocery & medical shops",
  "Easy access to public transport",
];

const LocationBenefits = () => {
  return (
    <section id="location" className="py-16 px-4 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
          Why Our Location Works for You
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700">
          {benefits.map((point, index) => (
            <div
              key={index}
              className="p-5 bg-gray-100 rounded-lg shadow-sm hover:shadow-md transition"
            >
              {point}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationBenefits;
