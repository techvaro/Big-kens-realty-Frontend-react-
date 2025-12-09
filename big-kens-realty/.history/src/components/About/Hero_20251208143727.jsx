import React from "react";
import heroImage from "../../assets/image_about/hero.png";

export default function Hero() {
    return (
        <div className="max-w-7xl mx-auto px-4 lg:px-20">
            <section
                className="relative w-full h-[80vh] flex items-center justify-center text-white bg-cover bg-center"
                style={{ backgroundImage: `url(${heroImage})` }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>

                {/* Content aligned with navbar */}
                <div className="relative z-10 w-full text-center">
                    <h1 className="text-5xl font-bold mb-4">About Us</h1>
                    <p className="text-lg max-w-3xl mx-auto">
                        Discover top listings handpicked for quality, value, and prime
                        locations—your ideal home or investment awaits.
                    </p>
                </div>
            </section>
        </div>
    );
}