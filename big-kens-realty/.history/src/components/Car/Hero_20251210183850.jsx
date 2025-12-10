import { useState } from 'react';
import carbg from "../../assets/car/carbg.png";

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
    <section className="relative bg-[#0A1023] pb-16">
      {/* Hero Image with enhanced overlay */}
      <div className="relative overflow-hidden">
        <img
          src={carbg}
          className="w-full h-[500px] object-cover opacity-80"
          alt="Luxury cars background"
        />
        {/* Gradient overlay for better visual appeal */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1023]/80 via-[#0A1023]/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0A1023] to-transparent"></div>
      </div>

      {/* Enhanced Search Box */}
      <div className="bg-white w-11/12 md:w-4/5 mx-auto mt-[-40px] p-6 rounded-xl shadow-2xl z-10 relative">
        <div className="text-center mb-4">
          <h2 className="text-xl font-bold text-gray-800">Find Your Dream Car</h2>
          <p className="text-gray-600 text-sm">Discover the perfect vehicle that matches your needs</p>
        </div>

        <form onSubmit={handleSubmit} className="grid md:grid-cols-5 gap-6 items-end">
          {/* Search Model */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700 block">Search Model</label>
            <div className="relative">
              <input
                type="text"
                name="model"
                placeholder="e.g Toyota"
                value={searchData.model}
                onChange={handleInputChange}
                className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 pl-12 text-[#0A1023]"
              />
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Car Type */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700 block">Car Type</label>
            <div className="relative">
              <select
                name="carType"
                value={searchData.carType}
                onChange={handleInputChange}
                className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 appearance-none bg-white text-[#0A1023]"
              >
                <option value="all" className="text-gray-800">All Types</option>
                <option value="belgium" className="text-gray-800">Belgium</option>
                <option value="tokunbo" className="text-gray-800">Tokunbo</option>
                <option value="brand_new" className="text-gray-800">Brand New</option>
              </select>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Min Price */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700 block">Min Price</label>
            <div className="relative">
              <input
                type="number"
                name="minPrice"
                min="0"
                max={searchData.maxPrice}
                value={searchData.minPrice}
                onChange={handleInputChange}
                className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 pl-10"
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <span>₦</span>
              </div>
            </div>
          </div>

          {/* Max Price */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700 block">Max Price</label>
            <div className="relative">
              <input
                type="number"
                name="maxPrice"
                min={searchData.minPrice}
                max="50"
                value={searchData.maxPrice}
                onChange={handleInputChange}
                className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 pl-10"
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <span>₦</span>
              </div>
            </div>
          </div>

          {/* Search Button */}
          <div className="pb-1">
            <button
              type="submit"
              className="w-full bg-[#0A1023] text-white py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
