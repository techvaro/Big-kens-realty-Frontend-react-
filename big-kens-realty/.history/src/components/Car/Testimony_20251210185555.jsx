import person1 from "../../assets/car/person1.jpg";
import person2 from "../../assets/car/person2.jpg";

export defaultfunction TestimonialSection() {
  const testimonials = [
    {
      name: "GodsWill A.",
      message:
        "Buying my car here was the best decision ever. The process was smooth, the team was honest, and the car runs perfectly.",
    },
    {
      name: "GodsWill A.",
      message:
        "The process was smooth, the team was honest, and the car runs perfectly. I'm really happy with my purchase!",
    },
  ];

  return (
    <section className="py-20 bg-[#C8FFD4]">
      <h2 className="text-3xl font-bold text-center mb-12 text-[#0A1023]">
        What Our Customers Are Saying
      </h2>

      <div className="grid md:grid-cols-2 gap-8 px-6 md:px-20">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-white rounded-lg p-6 shadow">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-gray-300"></div>
              <h3 className="font-bold">{t.name}</h3>
            </div>
            <p className="text-gray-700">{t.message}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
