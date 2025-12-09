import img from "../../assets/image_about/img.png";
export default function TeamSection() {
  const team = [
    {
      name: "Kennedy Godwin",
      role: "CEO",
      image: "/avatar1.jpg",
      socials: {
        tiktok: "#",
        facebook: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      name: "Sarah Michael",
      role: "COO",
      image: "/avatar2.jpg",
      socials: {
        tiktok: "#",
        facebook: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      name: "James Lawson",
      role: "Lead Realtor",
      image: "/avatar3.jpg",
      socials: {
        tiktok: "#",
        facebook: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
  ];

  return (
    <section className="py-20 bg-[#0F1831] text-center text-white">
      <h2 className="text-3xl font-bold mb-12">Meet the Team</h2>

      <div className="grid md:grid-cols-3 gap-10 px-6 md:px-20">
        {team.map((member, index) => (
          <div
            key={index}
            className="bg-[#C8FFD4] p-8 rounded-2xl shadow-xl text-black"
          >
            <img
              src={member.image}
              className="w-28 h-28 rounded-full mx-auto mb-4 object-cover"
              alt={member.name}
            />

            <h3 className="font-bold text-xl">{member.name}</h3>
            <p className="text-gray-700 mb-4">{member.role}</p>

            {/* Social Icons */}
            <div className="flex justify-center space-x-4 text-lg">
              <a href={member.socials.tiktok}>🎵</a>
              <a href={member.socials.facebook}>📘</a>
              <a href={member.socials.instagram}>📸</a>
              <a href={member.socials.linkedin}>🔗</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
