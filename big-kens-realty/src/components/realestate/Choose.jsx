import { motion } from "framer-motion";
import { FadeInSection, SlideIn } from "../animations";
import house from "../../assets/estate/house.png";

export default function WhyChooseUs() {
  const features = [
    {
      id: 1,
      title: "Verified Properties",
      description: "Every listing is thoroughly checked to ensure you get only genuine and trusted options.",
      icon: "✅"
    },
    {
      id: 2,
      title: "Expert Guidance",
      description: "Our experienced agents help you make the best decision at every step.",
      icon: "👨‍💼"
    },
    {
      id: 3,
      title: "Transparent Pricing",
      description: "No hidden costs, just clear and honest pricing for all our properties.",
      icon: "💰"
    },
    {
      id: 4,
      title: "Fast Process",
      description: "Streamlined procedures that get you into your new home quickly and efficiently.",
      icon: "⚡"
    }
  ];

  return (
    <section className="bg-gradient-to-br from-gray-900 to-[#0A1023] text-white py-20 px-6 md:px-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 bg-[#76ffa8] rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-[#b5ffcb] rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10">
        <FadeInSection>
          <h2 className="text-4xl font-bold mb-4">Why Choose Us?</h2>

          <p className="text-gray-300 max-w-xl mb-16">
            Trusted properties, expert guidance, and a stress-free buying experience—
            everything you need to find your ideal home.
          </p>
        </FadeInSection>

        {/* Grid Layout (Left text + Right images) */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* LEFT SIDE — FEATURES */}
          <div className="space-y-12">
            {features.map((feature, index) => (
              <SlideIn key={feature.id} direction="left" delay={index * 0.1}>
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-start space-x-4 p-6 bg-gray-800 bg-opacity-50 rounded-xl hover:bg-opacity-70 transition-all duration-300 border border-gray-700"
                >
                  <span className="text-3xl mr-4">{feature.icon}</span>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                    <p className="text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              </SlideIn>
            ))}
          </div>

          {/* RIGHT SIDE — IMAGE GRID */}
          <SlideIn direction="right">
            <div className="grid grid-cols-2 gap-6">
              <motion.div whileHover={{ scale: 1.05, rotateY: 10 }} transition={{ duration: 0.3 }} className="overflow-hidden rounded-xl">
                <img
                  src={house}
                  alt="Property"
                  className="rounded-lg shadow-2xl object-cover h-40 w-full transition-transform duration-500"
                />
              </motion.div>
              <motion.div whileHover={{ scale: 1.05, rotateY: 10 }} transition={{ duration: 0.3 }} className="overflow-hidden rounded-xl">
                <img
                  src={house}
                  alt="Property"
                  className="rounded-lg shadow-2xl object-cover h-40 w-full transition-transform duration-500"
                />
              </motion.div>
              <motion.div whileHover={{ scale: 1.05, rotateY: 10 }} transition={{ duration: 0.3 }} className="overflow-hidden rounded-xl col-span-2">
                <img
                  src={house}
                  alt="Property"
                  className="rounded-lg shadow-2xl object-cover h-40 w-full transition-transform duration-500"
                />
              </motion.div>
            </div>
          </SlideIn>
        </div>
      </div>

      {/* Add CSS for the blob animation */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}
