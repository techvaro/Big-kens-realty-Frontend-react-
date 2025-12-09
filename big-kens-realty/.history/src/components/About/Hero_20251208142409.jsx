import React from "react";
export default function Hero() {


    return (
        <section
            className="py-16 px-5 md:px-20 text-white bg-[#0c0e28] bg-center bg-cover relative"
            style={{ backgroundImage: "url('/hero-bg.jpg')" }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>

            {/* Content box with limited width */}
            <div className="relative z-10 max-w-3xl mx-auto text-center px-4">
                <h1 className="text-5xl font-bold mb-4">About Us</h1>
                <p className="text-lg">
                    Discover top listings handpicked for quality, value, and prime
                    locations—your ideal home or investment awaits.
                </p>
            </div>
        </section>
    );

}