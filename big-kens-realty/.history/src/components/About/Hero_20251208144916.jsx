import React from "react";
import heroImage from "../../assets/image_about/hero.png";
import prod3 from "../../assets/image/prod3.png";

export default function Hero() {


    return (
        <section
            className="relative h-[80vh] flex items-center justify-center text-white bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
        >
            

            {/* Content aligned with navbar */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 lg:px-20 text-center">
                <h1 className="text-5xl font-bold mb-4">About Us</h1>
                <p className="text-lg max-w-3xl mx-auto">
                    Discover top listings handpicked for quality, value, and prime
                    locations—your ideal home or investment awaits.
                </p>
            </div>
        </section>
    );

}