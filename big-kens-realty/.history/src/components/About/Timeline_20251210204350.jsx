import { motion } from "framer-motion";
import { FadeInSection, SlideIn } from "../animations";

export default function TimelineSection() {
  const timelineEvents = [
    {
      year: "2021",
      title: "Company Founded",
      description: "Founded to create innovative solutions that enhance everyday life."
    },
    {
      year: "2023",
      title: "300+ Clients Satisfied",
      description: "Innovating solutions that enhance everyday life."
    },
    {
      year: "2023",
      title: "First Major Expansion",
      description: "Enhancing everyday life through innovation."
    }
  ];

  return (
    <div>
      {/* DESKTOP / LARGE SCREENS */}
      <section className="hidden lg:block py-20 bg-gradient-to-br from-gray-900 to-[#0A1023] text-white text-center">
        <FadeInSection>
          <h2 className="text-4xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-300 mb-16 max-w-2xl mx-auto">A Journey of Commitment and Growth</p>
        </FadeInSection>

        <div className="relative max-w-4xl mx-auto">
          {/* Center Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#76ffa8] to-transparent"></div>

          <div className="space-y-20">
            {timelineEvents.map((event, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div key={index} className="relative flex items-center">
                  {/* Left card */}
                  {isLeft && (
                    <SlideIn direction="left" delay={index * 0.2}>
                      <motion.div
                        whileHover={{ scale: 1.03, y: -5 }}
                        className="w-1/2 pr-10 text-right"
                      >
                        <div className="bg-gradient-to-r from-[#b5ffcb] to-[#76ffa8] text-black p-6 rounded-xl shadow-xl inline-block">
                          <h3 className="font-bold text-lg">{event.year}</h3>
                          <p className="font-semibold">{event.title}</p>
                          <p className="text-sm mt-2">
                            {event.description}
                          </p>
                        </div>
                      </motion.div>
                    </SlideIn>
                  )}

                  {/* Dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-[#b5ffcb] to-[#76ffa8] rounded-full border-4 border-[#0A1023] z-10"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                      className="w-full h-full rounded-full bg-gradient-to-r from-[#b5ffcb] to-[#76ffa8]"
                    />
                  </motion.div>

                  {/* Right card */}
                  {!isLeft && (
                    <SlideIn direction="right" delay={index * 0.2}>
                      <motion.div
                        whileHover={{ scale: 1.03, y: -5 }}
                        className="w-1/2 pl-10 text-left"
                      >
                        <div className="bg-gradient-to-l from-[#b5ffcb] to-[#76ffa8] text-black p-6 rounded-xl shadow-xl inline-block">
                          <h3 className="font-bold text-lg">{event.year}</h3>
                          <p className="font-semibold">{event.title}</p>
                          <p className="text-sm mt-2">
                            {event.description}
                          </p>
                        </div>
                      </motion.div>
                    </SlideIn>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* MOBILE / TABLET */}
      <section className="lg:hidden py-20 bg-gradient-to-br from-gray-900 to-[#0A1023] text-white text-center">
        <FadeInSection>
          <h2 className="text-4xl font-bold mb-6">Our Story</h2>
          <p className="text-gray-300 mb-16 max-w-2xl mx-auto">A Journey of Commitment and Growth</p>
        </FadeInSection>

        <div className="flex flex-col items-center space-y-12 px-4">
          {timelineEvents.map((event, index) => (
            <SlideIn key={index} direction="up" delay={index * 0.2}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="bg-gradient-to-r from-[#b5ffcb] to-[#76ffa8] text-black p-6 rounded-xl shadow-xl max-w-md w-full"
              >
                <h3 className="font-bold text-lg">{event.year} — {event.title}</h3>
                <p>{event.description}</p>
              </motion.div>
            </SlideIn>
          ))}
        </div>
      </section>
    </div>
  );
}
