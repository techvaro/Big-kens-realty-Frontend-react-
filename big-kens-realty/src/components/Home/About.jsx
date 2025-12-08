// src/pages/About.jsx

import React from 'react';

// Import images from assets
import about1 from '../../assets/image/about1.png';
import about2 from '../../assets/image/about2.png';
import about3 from '../../assets/image/about3.png';

// AboutUs.jsx
export default function AboutUs() {
  return (
    <section className="bg-[#0c0e28] text-white px-10 lg:px-20 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">

        {/* LEFT — Two Stacked Images */}
        <div className="flex flex-col gap-10">
          <img
            src={about1}
            alt="Sound Studio"
            className="rounded-lg object-cover h-[200px] w-full"
          />

          <img
            src={about2}
            alt="Car"
            className="rounded-lg object-cover h-[200px] w-full"
          />
        </div>

        {/* MIDDLE — Tall Image */}
        <div>
          <img
            src={about3}
            alt="Resort"
            className="rounded-lg object-cover h-full w-full max-h-[440px]"
          />
        </div>

        {/* RIGHT — Text Section */}
        <div className="flex flex-col justify-start">
          <h2 className="text-[32px] font-bold text-[#b5ffcb] mb-5">
            About Us
          </h2>

          <p className="leading-relaxed mb-6 text-[16px]">
            At Big Kens Enterprises, we are driven by innovation and powered
            by passion delivering solutions that transform everyday living
            into extraordinary experiences.
          </p>

          <p className="leading-relaxed text-[16px]">
            At Big Kens Enterprises, we are driven by innovation and powered
            by passion delivering solutions that transform everyday living
            into extraordinary experiences.
          </p>

          <blockquote className="mt-8 p-4 border-l-4 border-[#76ffa8] bg-gray-50 italic text-gray-600">
            "We believe in turning visions into reality, one exceptional service at a time."
          </blockquote>
        </div>

      </div>
    </section>
  );
}
