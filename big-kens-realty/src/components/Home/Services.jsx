import realEstateImg from '../../assets/image/house.png';
import autoMobileImg from '../../assets/image/car.png';
import musicImg from '../../assets/image/lap.png';

export default function Services() {
  return (
    <section className="px-5 md:px-10 lg:px-20 py-10">
      <h2 className="text-2xl font-bold text-center">Our Services</h2>

      <div
        className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-3 
          gap-6 
          mt-10
        "
      >
        {/* Card 1 */}
        <div className="card bg-[#1b1e49] p-5 rounded-lg text-white">
          <img src={realEstateImg} alt="Real Estate" className="rounded-lg" />
          <h3 className="text-xl font-semibold mt-4">Real Estate</h3>
          <p className="mt-2 text-sm">
            Find your dream home with our real estate listings.
          </p>
          <a href="#" className="text-[#b5ffcb] font-bold mt-3 inline-block">
            Learn More →
          </a>
        </div>

        {/* Card 2 */}
        <div className="card bg-[#1b1e49] p-5 rounded-lg text-white">
          <img src={autoMobileImg} alt="Auto Mobiles" className="rounded-lg" />
          <h3 className="text-xl font-semibold mt-4">Auto Mobiles</h3>
          <p className="mt-2 text-sm">
            Find your dream vehicle with our listings.
          </p>
          <a href="#" className="text-[#b5ffcb] font-bold mt-3 inline-block">
            Learn More →
          </a>
        </div>

        {/* Card 3 */}
        <div className="card bg-[#1b1e49] p-5 rounded-lg text-white">
          <img src={musicImg} alt="Music Production" className="rounded-lg" />
          <h3 className="text-xl font-semibold mt-4">Music Production</h3>
          <p className="mt-2 text-sm">
            Create amazing music with our production services.
          </p>
          <a href="#" className="text-[#b5ffcb] font-bold mt-3 inline-block">
            Learn More →
          </a>
        </div>
      </div>
    </section>
  );
}
