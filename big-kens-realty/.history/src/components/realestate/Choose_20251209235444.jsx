import React from "react";

import house from "../../assets/estate/house.png";
export default function WhyChooseUs() {
  return (
    <section className="bg-[#0A1023] text-white py-20 px-6 md:px-20">
      {/* Title */}
      <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>

      {/* Subtitle */}
      <p className="text-gray-300 max-w-xl mb-12">
        Trusted properties, expert guidance, and a stress-free buying experience—
        everything you need to find your ideal home.
      </p>

      {/* Grid Layout (Left text + Right images) */}
      <div className="grid md:grid-cols-2 gap-12 items-start">
        
        {/* LEFT SIDE — FEATURES */}
        <div className="space-y-12">
          {/* Feature 1 */}
          <div>
            <h3 className="text-4xl font-bold mb-2">1.</h3>
            <h4 className="text-xl font-semibold mb-2">Verified Properties</h4>
            <p className="text-gray-300 max-w-md">
              Every listing is thoroughly checked to ensure you get only genuine 
              and trusted options.
            </p>
          </div>

          {/* Feature 2 */}
          <div>
            <h3 className="text-4xl font-bold mb-2">2.</h3>
            <h4 className="text-xl font-semibold mb-2">Expert Guidance</h4>
            <p className="text-gray-300 max-w-md">
              Our experienced agents help you make the best decision at every step.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE — IMAGE GRID */}
        <div className="grid grid-cols-2 gap-6">
          <img
            src={house}
            alt="Property"
            className="rounded-lg shadow-lg object-cover h-40 w-full"
          />
          <img
            src={house}
            alt="Property"
            className="rounded-lg shadow-lg object-cover h-40 w-full"
          />
          <img
            src={house}
            alt="Property"
            className="rounded-lg shadow-lg object-cover h-40 w-full col-span-2"
          />
        </div>

      </div>
    </section>
  );
}
