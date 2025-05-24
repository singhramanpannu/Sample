import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col md:flex-row justify-between items-center">
        {/* Brand */}
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h1 className="text-3xl font-extrabold animate-pulse">PGFinder</h1>
          <p className="text-sm text-gray-400 mt-1 italic">Find your perfect PG home with ease</p>
        </div>

        {/* Nav Links */}
        <nav className="flex space-x-8 text-sm font-medium">
          {["Home", "About", "Services", "Gallery", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative group hover:text-blue-400 transition"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex space-x-6 mt-6 md:mt-0">
          {/* Facebook */}
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-blue-600 transition">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M22 12a10 10 0 10-11.6 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3 3-3 .9 0 1.8.2 1.8.2v2h-1c-1 0-1.3.6-1.3 1.3V12h2.3l-.4 3h-1.9v7A10 10 0 0022 12z" />
            </svg>
          </a>
          {/* Twitter */}
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-blue-400 transition">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.1.85 5.4 5.4 0 002.4-3 10.8 10.8 0 01-3.4 1.3 5.3 5.3 0 00-9 4.8 15 15 0 01-11-5.6 5.3 5.3 0 001.6 7.1 5.2 5.2 0 01-2.4-.7v.07a5.3 5.3 0 004.2 5.2 5.3 5.3 0 01-2.4.1 5.3 5.3 0 004.9 3.7A10.6 10.6 0 013 19.6a15 15 0 008 2.3c9.6 0 14.8-8 14.8-15v-.7A10.5 10.5 0 0023 3z" />
            </svg>
          </a>
          {/* Instagram */}
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-pink-500 transition">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M7 2C4.8 2 3 3.8 3 6v12c0 2.2 1.8 4 4 4h10c2.2 0 4-1.8 4-4V6c0-2.2-1.8-4-4-4H7zm10 2a2 2 0 012 2v12a2 2 0 01-2 2H7a2 2 0 01-2-2V6a2 2 0 012-2h10zm-5 3a4 4 0 100 8 4 4 0 000-8zm0 6a2 2 0 110-4 2 2 0 010 4zm3-6.5a1 1 0 11-2 0 1 1 0 012 0z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-8 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} PGFinder. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
