import { useState } from 'react';
import carbg from "../../assets/car/carbg.png";
import transparentCar from '../../assets/image/car.png';

export default function HeroSearchSection() {
  const [searchData, setSearchData] = useState({
    model: '',
    carType: 'all',
    minPrice: '0',
    maxPrice: '50'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the search data to your backend or filter cars
    console.log('Search submitted:', searchData);
    alert(`Searching for: ${searchData.model || 'any model'} | Type: ${searchData.carType} | Price: ${searchData.minPrice}m - ${searchData.maxPrice}m`);
  };

  return (
    <section className="relative bg-gradient-to-b from-[#1A1941] to-[#3a3951] pb-16">
      {/* Hero Image matching homepage style */}
      <div
        className="relative"
        style={{
          backgroundImage: `linear-gradient(rgba(26,25,65,.5), rgba(26,25,65,.5)), url(${carbg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "500px"
        }}
      >
        {/* Transparent image overlay similar to homepage */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={transparentCar}
            alt="Car silhouette"
            className="opacity-20 w-2/3 max-w-2xl object-contain mix-blend-lighten"
          />
        </div>
      </div>

      {/* Enhanced Search Box */}
      <div className="bg-gradient-to-b from-white to-[#f8f8f0] w-11/12 md:w-4/5 mx-auto mt-[-40px] p-6 rounded-xl shadow-2xl z-10 relative border border-[#1A1941]/20">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-[#1A1941]">Find Your Dream Car</h2>
          <p className="text-[#1A1941]/80">Discover the perfect vehicle that matches your needs</p>
        </div>

        <form onSubmit={handleSubmit} className="grid md:grid-cols-5 gap-6 items-end">
          {/* Search Model */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[#1A1941] block">Search Model</label>
            <div className="relative">
              <input
                type="text"
                name="model"
                placeholder="e.g Toyota"
                value={searchData.model}
                onChange={handleInputChange}
                className="w-full border-2 border-[#1A1941]/30 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1A1941]/50 focus:border-[#1A1941] transition-all duration-300 pl-12 text-[#1A1941]"
              />
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#1A1941]/60">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Car Type */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[#1A1941] block">Car Type</label>
            <div className="relative">
              <select
                name="carType"
                value={searchData.carType}
                onChange={handleInputChange}
                className="w-full border-2 border-[#1A1941]/30 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1A1941]/50 focus:border-[#1A1941] transition-all duration-300 appearance-none bg-white text-[#1A1941]"
              >
                <option value="all">All Types</option>
                <option value="belgium">Belgium</option>
                <option value="tokunbo">Tokunbo</option>
                <option value="brand_new">Brand New</option>
              </select>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#1A1941]/60 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Min Price */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[#1A1941] block">Min Price (m)</label>
            <div className="relative">
              <input
                type="number"
                name="minPrice"
                min="0"
                max={searchData.maxPrice}
                value={searchData.minPrice}
                onChange={handleInputChange}
                className="w-full border-2 border-[#1A1941]/30 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1A1941]/50 focus:border-[#1A1941] transition-all duration-300 pl-10 text-[#1A1941]"
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#1A1941]/60">
                <span>₦</span>
              </div>
            </div>
            <div className="text-xs text-[#1A1941]/70">Min: {searchData.minPrice}m</div>
          </div>

          {/* Max Price */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[#1A1941] block">Max Price (m)</label>
            <div className="relative">
              <input
                type="number"
                name="maxPrice"
                min={searchData.minPrice}
                max="50"
                value={searchData.maxPrice}
                onChange={handleInputChange}
                className="w-full border-2 border-[#1A1941]/30 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1A1941]/50 focus:border-[#1A1941] transition-all duration-300 pl-10 text-[#1A1941]"
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#1A1941]/60">
                <span>₦</span>
              </div>
            </div>
            <div className="text-xs text-[#1A1941]/70">Max: {searchData.maxPrice}m</div>
          </div>

          {/* Search Button */}
          <div className="pb-1">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#1A1941] to-[#0d0c2a] hover:from-[#0d0c2a] hover:to-[#1A1941] text-white py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Search Cars
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
