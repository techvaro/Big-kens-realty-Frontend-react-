import React from "react";
import bg from "../../assets/estate/bg.jpg";

export default function HeroSection() {
  return (
    <section
      className="relative w-full h-[85vh] flex items-center justify-center text-center text-white bg-cover bg-center"
      style={{
        backgroundImage: `url(${bg})`, // Replace with your own image
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 max-w-2xl mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Find Your Dream Home
        </h1>

        <p className="text-lg text-gray-200 mb-10">
          Discover comfort, style, and the perfect place to call home with Big
          Kens Enterprises.
        </p>

        {/* Search Bar */}
        <div className="w-full bg-white p-4 rounded-xl shadow-lg grid md:grid-cols-4 gap-4 text-black">
          <select className="p-3 rounded border outline-none">
            <option>Apartment</option>
            <option>Duplex</option>
            <option>Bungalow</option>
          </select>

          <input
            type="text"
            placeholder="e.g. Abuja"
            className="p-3 rounded border outline-none"
          />

          <select className="p-3 rounded border outline-none">
            <option>1m - 10m Naira</option>
            <option>10m - 20m Naira</option>
            <option>20m+ Naira</option>
          </select>

          <button className="bg-[#0F1831] text-white font-bold rounded p-3">
            Search
          </button>
        </div>
      </div>
    </section>
  );
}
