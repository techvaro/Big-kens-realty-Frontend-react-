import React from "react";
export default function Hero() {


    return (
    <div className="w-full flex justify-center">
        <section
        className="relative h-[80vh] w-[90%] max-w-5xl flex items-center justify-center text-white bg-cover bg-center rounded-2xl overflow-hidden"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
        >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-4">
            <h1 className="text-5xl font-bold mb-4">About Us</h1>
            <p className="text-lg max-w-2xl mx-auto">
            Discover top listings handpicked for quality, value, and prime
            locations—your ideal home or investment awaits.
            </p>
        </div>
        </section>
    </div>
    );


}