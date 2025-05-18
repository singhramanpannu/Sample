import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center">
        {/* Brand */}
        <div className="text-xl font-bold mb-4 md:mb-0">PGFinder</div>

        {/* Nav Links */}
        <div className="flex space-x-6 text-sm">
          <a href="#home" className="hover:text-blue-400 transition">Home</a>
          <a href="#aboutus" className="hover:text-blue-400 transition">About</a>
          <a href="#amenities" className="hover:text-blue-400 transition">Amenities</a>
          <a href="#gallery" className="hover:text-blue-400 transition">Gallery</a>
          <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} PGFinder. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
