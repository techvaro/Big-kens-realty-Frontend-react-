export function HeroSearchSection() {
  return (
    <section className="relative">
      {/* Background Image */}
      <img
        src="/your-hero-image.jpg"
        className="w-full h-[500px] object-cover"
        alt=""
      />

      {/* Search Box */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-3/4">
        <div className="grid md:grid-cols-4 gap-4 items-center">
          <div>
            <label className="text-sm font-semibold">Search Model</label>
            <input
              type="text"
              placeholder="e.g Toyota"
              className="w-full border px-3 py-2 rounded-lg"
            />
          </div>

          <div>
            <label className="text-sm font-semibold">Car Type</label>
            <select className="w-full border px-3 py-2 rounded-lg">
              <option>Belgium</option>
              <option>Tokunbo</option>
              <option>Brand New</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-semibold">Price Range</label>
            <input type="range" className="w-full" />
          </div>

          <button className="bg-[#0A1023] text-white py-3 rounded-lg">
            Search
          </button>
        </div>
      </div>
    </section>
  );
}
