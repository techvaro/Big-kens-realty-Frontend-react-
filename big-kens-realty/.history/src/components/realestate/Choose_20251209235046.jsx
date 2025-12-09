import React from "react";
import "./WhyChooseUs.css";

const WhyChooseUs = () => {
  return (
    <section className="why-us">
      <h2>Why Choose Us?</h2>
      <p>
        Trusted properties, expert guidance, and a stress-free buying experience.
      </p>

      <div className="features">
        <div className="feature-box">
          <h3>1. Verified Properties</h3>
          <p>Every listing is thoroughly checked to ensure authenticity.</p>
        </div>

        <div className="feature-box">
          <h3>2. Expert Guidance</h3>
          <p>Our agents help you make the best choice at every step.</p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
