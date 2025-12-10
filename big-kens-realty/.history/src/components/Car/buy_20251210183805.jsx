import {
  MagnifyingGlassIcon,
  ClipboardDocumentCheckIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/solid";

export default function SimpleBuySection() {
  const steps = [
    {
      icon: <MagnifyingGlassIcon className="w-10 h-10 text-black" />,
      title: "Find Your Car",
      desc: "Browse top-quality vehicles and choose the perfect one for your needs.",
    },
    {
      icon: <ClipboardDocumentCheckIcon className="w-10 h-10 text-black" />,
      title: "Get Approved",
      desc: "Fast and easy approval process to get you ready for the road.",
    },
    {
      icon: <CheckBadgeIcon className="w-10 h-10 text-black" />,
      title: "Drive Away Happy",
      desc: "Complete your purchase and enjoy a stress-free buying experience.",
    },
  ];

  return (
    <section className="py-20 bg-[#0A1023] text-white text-center">
      <h2 className="text-3xl font-bold mb-2">A Simpler Way to Buy</h2>
      <p className="text-gray-300 mb-16 max-w-2xl mx-auto">
        Buying a car shouldn’t be complicated. We make it fast, clear, and
        stress-free.
      </p>

      <div className="relative">
        {/* Background car image */}
        <img src="/simple-car.jpg" className="w-full rounded-xl" alt="" />

        <div className="grid md:grid-cols-3 gap-8 mt-10 text-center">
          {steps.map((step, i) => (
            <div key={i}>
              {/* Icon Box */}
              <div className="bg-[#C8FFD4] w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                {step.icon}
              </div>

              <h3 className="font-bold text-lg">{step.title}</h3>

              <p className="text-gray-300 text-sm mt-2 max-w-xs mx-auto">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
