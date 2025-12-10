export default function SimpleBuySection() {
  return (
    <section className="py-20 bg-[#0A1023] text-white text-center">
      <h2 className="text-3xl font-bold mb-2">A Simpler Way to Buy</h2>
      <p className="text-gray-300 mb-16 max-w-2xl mx-auto">
        Buying a car shouldn’t be complicated. We make it fast, clear, and
        stress-free.
      </p>

      {/* Car background */}
      <div className="relative">
        <img src="/simple-car.jpg" className="w-full rounded-xl" alt="" />

        <div className="grid md:grid-cols-3 gap-8 mt-10 text-center">
          {["Find Your Car", "Find Your Car", "Find Your Car"].map((step, i) => (
            <div key={i}>
              <div className="bg-[#C8FFD4] w-16 h-16 rounded-xl flex items-center justify-center text-black mx-auto mb-4">
                🔍
              </div>
              <h3 className="font-bold">{step}</h3>
              <p className="text-gray-300 text-sm mt-2">
                Quickly discover the perfect ride for your needs—simple, fast,
                and stress-free.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
