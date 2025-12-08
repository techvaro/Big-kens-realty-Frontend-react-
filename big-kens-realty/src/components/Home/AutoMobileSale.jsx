import car1 from "../../assets/image/car1.png";
import car2 from "../../assets/image/car2.png";
import car3 from "../../assets/image/car3.png";

export default function AutoMobile() {
  return (
    <section className="py-16 px-5 md:px-20 text-white">

      {/* Title */}
      <h2 className="text-3xl font-bold text-center">
        Auto Mobile Clearance sale
      </h2>

      {/* Grid */}
      <div
        className="
          grid
          grid-cols-1 
          sm:grid-cols-2
          lg:grid-cols-3 
          gap-12
          mt-12
        "
      >

        {/* Car 1 */}
        <div>
          <img src={car1} alt="Toyota Corolla" className="w-full rounded-lg" />

          <h3 className="mt-4 font-bold text-lg">
            Toyota Corolla (2019 Model)
          </h3>

          <p className="text-gray-300 text-sm mt-1">
            Find your dream home, with our extensive real estate listings
          </p>

          <p className="mt-3 font-bold">2.5 Million Naira</p>

          <button className="mt-4 text-[#76ffa8] flex items-center gap-2">
            View Car →
          </button>
        </div>

        {/* Car 2 */}
        <div>
          <img src={car2} alt="Mercedes Benz" className="w-full rounded-lg" />

          <h3 className="mt-4 font-bold text-lg">
            Mercedes Benz - S500 (2023 Model)
          </h3>

          <p className="text-gray-300 text-sm mt-1">
            Find your dream home, with our extensive real estate listings
          </p>

          <p className="mt-3 font-bold">2.5 Million Naira</p>

          <button className="mt-4 text-[#76ffa8] flex items-center gap-2">
            View Car →
          </button>
        </div>

        {/* Car 3 */}
        <div>
          <img src={car3} alt="Honda Accord" className="w-full rounded-lg" />

          <h3 className="mt-4 font-bold text-lg">
            Honda Accord (2015 version)
          </h3>

          <p className="text-gray-300 text-sm mt-1">
            Find your dream home, with our extensive real estate listings
          </p>

          <p className="mt-3 font-bold">2.5 Million Naira</p>

          <button className="mt-4 text-[#76ffa8] flex items-center gap-2">
            View Car →
          </button>
        </div>

      </div>
    </section>
  );
}
