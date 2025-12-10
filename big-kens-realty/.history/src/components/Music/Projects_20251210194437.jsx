import React from "react";
import project1 from "../../assets/music/proj1.png";
import project2 from "../../assets/music/proj2.png";
import project3 from "../../assets/music/proj3.png";
import project4 from "../../assets/music/proj4.png";

const projects = [
  { title: "Midnight Haze", artist: "Luna Bloom", image: project1 },
  { title: "Echoes", artist: "Vector Shift", image: project2 },
  { title: "City Lights", artist: "The Night Owls", image: project3 },
  { title: "Adrift", artist: "Oceanics", image: project4 },
];

export default function Projects() {
  return (
    <section id="portfolio" className="py-20 px-6 md:px-20">
      <h2 className="text-3xl font-bold text-center text-[#1A1941] mb-12">
        Featured Projects
      </h2>
      <div className="grid md:grid-cols-4 gap-6">
        {projects.map((proj, i) => (
          <div key={i} className="rounded-lg overflow-hidden shadow-lg bg-[#FCFCFC]">
            <img src={proj.image} alt={proj.title} className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h3 className="font-semibold text-[#1A1941]">{proj.title}</h3>
              <p className="text-[#1A1941]/80">{proj.artist}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
