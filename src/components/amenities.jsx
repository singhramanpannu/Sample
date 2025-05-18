import React from "react";

const amenities = [
  "Fully Furnished Rooms",
  "High-Speed Wi-Fi",
  "Laundry Services",
  "24/7 Security",
  "Home-Cooked Meals",
  "Air Conditioning",
];

const Amenities = () => {
  return (
    <section id="amenities" className="py-16 px-4 md:px-12 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Our Amenities</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {amenities.map((item, idx) => (
            <li
              key={idx}
              className="bg-white shadow-md rounded-lg p-6 text-gray-700 font-medium hover:shadow-lg transition"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Amenities;
