import person1 from "../../assets/car/person1.png";
import person2 from "../../assets/car/person2.png";

export default function TestimonialSection() {
  const testimonials = [
    {
      name: "Godswill A.",
      image: person1,
      message:
        "Buying my car here was an amazing experience. No stress, no delays — just honesty and great service.",
    },
    {
      name: "Sarah O.",
      image: person2,
      message:
        "I got approved faster than I expected! The car is perfect and the team was super helpful from start to finish.",
    },
    {
      name: "Michael T.",
      image: person1,
      message:
        "Excellent customer service! They guided me through the whole process and made everything simple.",
    },
  ];

  return (
    <section className="py-20 bg-[#C8FFD4]">
      <h2 className="text-3xl font-bold text-center mb-12 text-[#0A1023]">
        What Our Customers Are Saying
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-20">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-white rounded-lg p-6 shadow hover:shadow-xl transition"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={t.image}
                alt={t.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <h3 className="font-bold text-[#0A1023]">{t.name}</h3>
            </div>

            <p className="text-gray-700 leading-relaxed">{t.message}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
