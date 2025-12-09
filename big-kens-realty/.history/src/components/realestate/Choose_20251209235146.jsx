export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-[#0A1023] text-white px-6 md:px-20">
      <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>

      <p className="text-gray-300 max-w-2xl mb-10">
        Trusted properties, expert guidance, and a stress-free buying experience—everything you
        need to find your ideal home.
      </p>

      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="font-bold text-xl">1. Verified Properties</h3>
          <p className="text-gray-300 mt-2">
            Every listing is thoroughly checked to ensure you get only genuine and
            trusted options.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-xl">2. Expert Guidance</h3>
          <p className="text-gray-300 mt-2">
            Our experienced agents help you make the best decisions at every step.
          </p>
        </div>
      </div>
    </section>
  );
}
