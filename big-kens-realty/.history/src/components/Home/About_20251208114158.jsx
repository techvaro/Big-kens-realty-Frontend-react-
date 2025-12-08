// src/pages/About.jsx

import React from 'react';

// Assuming your images are in the public directory or imported from assets:
// If the images are in src/assets:
// import image1 from '../assets/abt1.jpg';
// import image2 from '../assets/abt2.jpg';

export default function About() {
  return (
    // Outer section for padding and centering
    <section className="py-20 px-4 max-w-7xl mx-auto">
      
      {/* Container with two columns: switches from column to row on large screens */}
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center">
        
        {/* Left Column: Image Grid */}
        <div className="w-full lg:w-2/5 flex flex-col gap-5">
          
          {/* Top Image */}
          <img 
            // If using assets: src={image1}
            src="/abt1.jpg" 
            alt="Modern Architecture" 
            className="w-full object-cover rounded-lg shadow-xl"
          />
          
          {/* Bottom Image */}
          <img 
            // If using assets: src={image2}
            src="/abt2.jpg" 
            alt="Luxury Interior" 
            className="w-full object-cover rounded-lg shadow-xl"
          />
        </div>

        {/* Right Column: Text Content */}
        <div className="w-full lg:w-3/5">
          
          {/* Title */}
          <h2 className="text-4xl font-extrabold text-[#0c0e28] mb-6 border-b-4 border-[#76ffa8] pb-2 inline-block">
            About Us
          </h2>
          
          {/* Main Paragraph */}
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            At Big Kens Enterprises, we are driven by **innovation** and
            powered by **passion**—delivering solutions that transform everyday
            living into extraordinary experiences. We are a diversified enterprise
            operating across multiple dynamic sectors, united by a commitment to excellence
            and customer satisfaction.
          </p>
          
          {/* Additional Content (Optional but good for an About Page) */}
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Whether it's securing your dream home through our Real Estate division, 
            connecting you with the perfect vehicle in Auto Mobile, providing the latest 
            in Mobile Technology, or inspiring you with our Musicals productions, 
            Big Kens Enterprises is dedicated to enriching every aspect of your lifestyle.
          </p>
          
          {/* Example of a highlight/quote */}
          <blockquote className="mt-8 p-4 border-l-4 border-[#76ffa8] bg-gray-50 italic text-gray-600">
            "We believe in turning visions into reality, one exceptional service at a time."
          </blockquote>
        </div>
      </div>
    </section>
  );
}