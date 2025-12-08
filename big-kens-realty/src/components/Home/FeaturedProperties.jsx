import p1 from "../../assets/image/house1.png";
import p2 from "../../assets/image/house2.png";
import p3 from "../../assets/image/house3.png";

export default function FeaturedProperties() {
  return (
    <section className="py-16 px-5 md:px-20 text-white">
      
      {/* Title */}
      <h2 className="text-3xl font-bold text-center text-[#76ffa8]">
        Featured Properties
      </h2>

      {/* Subtitle */}
      <p className="text-center text-gray-300 mt-3 max-w-2xl mx-auto">
        Discover top listings handpicked for quality, value, and prime locations—
        your ideal home or investment awaits.
      </p>

      {/* Grid Section */}
      <div 
        className="
          grid
          grid-cols-1 
          sm:grid-cols-2
          lg:grid-cols-3 
          gap-10
          mt-12
        "
      >
        {/* Card 1 */}
        <div className="bg-[#1b1e49] p-3 rounded-lg shadow-lg">
          <img src={p1} alt="Property" className="w-full rounded-lg" />
          <h3 className="mt-3 font-semibold">4 Bedroom Duplex, Jahi, Abuja</h3>
          <p className="text-[#76ffa8] font-bold mt-1">₦1,500,000</p>
          <button className="mt-3 bg-[#0c0e28] px-4 py-2 rounded text-white border border-[#76ffa8]">
            View Property
          </button>
        </div>

        {/* Card 2 */}
        <div className="bg-[#1b1e49] p-3 rounded-lg shadow-lg">
          <img src={p2} alt="Property" className="w-full rounded-lg" />
          <h3 className="mt-3 font-semibold">4 Bedroom Duplex, Jahi, Abuja</h3>
          <p className="text-[#76ffa8] font-bold mt-1">₦1,500,000</p>
          <button className="mt-3 bg-[#0c0e28] px-4 py-2 rounded text-white border border-[#76ffa8]">
            View Property
          </button>
        </div>

        {/* Card 3 */}
        <div className="bg-[#1b1e49] p-3 rounded-lg shadow-lg">
          <img src={p3} alt="Property" className="w-full rounded-lg" />
          <h3 className="mt-3 font-semibold">4 Bedroom Duplex, Jahi, Abuja</h3>
          <p className="text-[#76ffa8] font-bold mt-1">₦1,500,000</p>
          <button className="mt-3 bg-[#0c0e28] px-4 py-2 rounded text-white border border-[#76ffa8]">
            View Property
          </button>
        </div>

      </div>
    </section>
  );
}
