import React from "react";
import "../css/home.css";

const HomeSection = () => {
  return (
    <section
      id="home"
      className="w-full min-h-[70vh] md:min-h-screen bg-cover bg-center bg-no-repeat relative pt-[100px] flex items-center justify-center"
    >
      {/* Dark overlay for better contrast */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-snug">
          Find Your Perfect PG with Ease
        </h1>
      </div>
    </section>
  );
};

export default HomeSection;
