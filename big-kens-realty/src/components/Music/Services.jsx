import React from "react";
import { FaMicrophone, FaMusic, FaHeadphones, FaUsers, FaCalendarAlt, FaGuitar } from "react-icons/fa";

const services = [
  { icon: <FaMicrophone size={24} />, title: "Studio Recording", desc: "Pristine audio capture with state-of-the-art microphones and preamps in our acoustically treated rooms." },
  { icon: <FaHeadphones size={24} />, title: "Mixing & Mastering", desc: "Balancing, polishing, and optimizing your tracks for a professional, release-ready sound on all platforms." },
  { icon: <FaMusic size={24} />, title: "Music Production", desc: "Collaborate with our experienced producers to build your song from the ground up with custom beats and arrangements." },
  { icon: <FaUsers size={24} />, title: "Artist Management", desc: "Strategic guidance to help you navigate the music industry, from branding to release strategy." },
  { icon: <FaCalendarAlt size={24} />, title: "Live Event Support", desc: "Professional audio engineering for your live performances, ensuring your sound is perfect on stage." },
  { icon: <FaGuitar size={24} />, title: "Instrumentals & Beats", desc: "Access our extensive library of high-quality, genre-spanning beats and instrumentals for your next project." },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-6 md:px-20 ">
      <h2 className="text-3xl font-bold text-center text-[#FCFCFC] mb-12">Services Offered</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <div key={i} className="bg-[#CAFFD3] rounded-xl p-6 shadow-lg text-center">
            <div className="text-[#1A1941] mb-4">{service.icon}</div>
            <h3 className="font-semibold text-[#1A1941] mb-2">{service.title}</h3>
            <p className="text-[#1A1941]/90">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
