import React from "react";
import music1 from "../../assets/music/music1.jpg"; // replace with your image

const reasons = [
  { title: "Professional-Grade Sound", desc: "Our studio is equipped with industry-standard gear to ensure your music sounds incredible." },
  { title: "Experienced Producers", desc: "Work with a team with years of experience across multiple genres and a passion for great music." },
  { title: "Fast Turnaround Time", desc: "We respect your deadlines. Our efficient workflow ensures you get your final tracks on schedule." },
  { title: "Affordable Packages", desc: "We offer a range of flexible packages to fit your budget without compromising on quality." },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 px-6 md:px-20 bg-[#FCFCFC] flex flex-col md:flex-row items-center gap-10">
      <div className="md:w-1/2">
        <img src={music1} alt="Mixing Board" className="rounded-xl shadow-lg" />
      </div>
      <div className="md:w-1/2">
        <h2 className="text-3xl font-bold text-[#1A1941] mb-6">Why Choose Us?</h2>
        <ul className="space-y-4">
          {reasons.map((r, i) => (
            <li key={i} className="bg-[#CAFFD3] p-4 rounded-lg shadow">
              <h3 className="font-semibold text-[#1A1941]">{r.title}</h3>
              <p className="text-[#1A1941]/90">{r.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
