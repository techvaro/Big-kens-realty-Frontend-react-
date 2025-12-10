import React from "react";
import heroImage from "../../assets/music/bg.jpg"; // replace with your image

export default function Hero() {
  return (
    <section className="relative">
      <img src={heroImage} alt="Studio" className="w-full h-[500px] object-cover" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-[#FCFCFC] mb-4">
          Craft Your Sound
        </h1>
        <p className="text-[#FCFCFC]/90 mb-6">
          High-quality recording, production, and artist support to bring your musical vision to life.
        </p>
        <button className="bg-[#CAFFD3] text-[#1A1941] px-6 py-3 rounded-lg font-semibold hover:bg-[#FCFCFC]">
          Book Your Session
        </button>
      </div>
    </section>
  );
}
