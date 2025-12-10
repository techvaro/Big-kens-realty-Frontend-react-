import React from "react";
import person1 from "../../assets/music/person1.jpg";
import person2 from "../../assets/music/person2.jpg";
import person3 from "../../assets/music/person3.jpg";

const testimonials = [
  { name: "Alex Johnson", role: "Singer-Songwriter", image: person1, message: "The team at SoundCraft completely understood my vision and brought my tracks to life. The best studio experience I’ve ever had." },
  { name: "Marcus Reid", role: "Lead Guitarist, The Voids", image: person2, message: "Incredible producers and engineers. They pushed me creatively and the final mix sounds absolutely massive. Highly recommended." },
  { name: "Samira Khan", role: "Electronic Music Producer", image: person3, message: "From booking to the final master, the process was seamless. The professionalism and quality are unmatched. I’ll be back for my next EP." },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-6 md:px-20 ">
      <h2 className="text-3xl font-bold text-center text-[#FCFCFC] mb-12">What Artists Say</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-[#FCFCFC] rounded-xl p-6 shadow-lg text-center">
            <img src={t.image} alt={t.name} className="w-16 h-16 rounded-full mx-auto mb-4 object-cover border-2 border-[#1A1941]/20"/>
            <h3 className="font-semibold text-[#1A1941]">{t.name}</h3>
            <p className="text-[#1A1941]/70 mb-2">{t.role}</p>
            <p className="text-[#1A1941]/80 italic">{`"${t.message}"`}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
