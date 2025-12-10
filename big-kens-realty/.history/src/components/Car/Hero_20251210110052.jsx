import carbg from "../../assets/carbg.jpg";

export default function HeroSearchSection() {
  return (
    <section className="bg-[#0A1023] pb-10">
      {/* Hero Image */}
      <div>
        <img
          src={carbg}
          className="w-full h-[500px] object-cover"
          alt=""
        />
      </div>

      {/* Search Box */}
      <div className="bg-white w-11/12 md:w-4/5 mx-auto mt-[-40px] p-6 rounded-lg shadow-lg">
        <div className="grid md:grid-cols-4 gap-6 items-end">
          
          {/* Search Model */}
          <div>
            <label className="text-sm font-semibold">Search Model</label>
            <input
              type="text"
              placeholder="e.g Toyota"
              className="w-full border px-3 py-2 rounded-lg"
            />
          </div>

          {/* Car Type */}
          <div>
            <label className="text-sm font-semibold">Car Type</label>
            <select className="w-full border px-3 py-2 rounded-lg">
              <option>Belgium</option>
              <option>Tokunbo</option>
              <option>Brand New</option>
            </select>
          </div>

          {/* Price Range */}
          <div>
            <label className="text-sm font-semibold">
              Price Range: <span className="text-blue-500">1m - 20m</span>
            </label>
            <input type="range" className="w-full mt-2" />
          </div>

          {/* Search Button */}
          <div>
            <button className="w-full bg-[#0A1023] text-white py-3 rounded-lg">
              Search
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
