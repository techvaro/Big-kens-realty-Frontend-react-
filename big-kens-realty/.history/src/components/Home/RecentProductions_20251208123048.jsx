import prod1 from "../../assets/image/prod1.png";
import prod2 from "../../assets/image/prod2.png";
import prod3 from "../../assets/image/prod3.png";

export default function RecentProductions() {
  return (
    <section className="py-16 px-5 md:px-20 text-white bg-[#0c0e28]">

      {/* Title */}
      <h2 className="text-3xl font-bold text-center text-[#76ffa8]">
        Our Recent Productions
      </h2>

      <p className="text-center text-gray-300 mt-3 max-w-2xl mx-auto">
        Check out some of our latest music productions crafted with passion and precision.
      </p>

      {/* Grid */}
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
        {/* Production 1 */}
        <div className="bg-[#1b1e49] rounded-lg p-5 shadow-lg">
          <img src={prod1} alt="Production 1" className="w-full rounded-lg" />
          <h3 className="mt-4 font-semibold text-lg">Hit Track 1</h3>
          <p className="mt-2 text-gray-300 text-sm">
            A fresh production showcasing our sound design and mixing expertise.
          </p>
          <a href="#" className="mt-3 text-[#76ffa8] font-bold inline-block">
            Listen Now →
          </a>
        </div>

        {/* Production 2 */}
        <div className="bg-[#1b1e49] rounded-lg p-5 shadow-lg">
          <img src={prod2} alt="Production 2" className="w-full rounded-lg" />
          <h3 className="mt-4 font-semibold text-lg">Hit Track 2</h3>
          <p className="mt-2 text-gray-300 text-sm">
            A catchy beat with vibrant instruments and professional mastering.
          </p>
          <a href="#" className="mt-3 text-[#76ffa8] font-bold inline-block">
            Listen Now →
          </a>
        </div>

        {/* Production 3 */}
        <div className="bg-[#1b1e49] rounded-lg p-5 shadow-lg">
          <img src={prod3} alt="Production 3" className="w-full rounded-lg" />
          <h3 className="mt-4 font-semibold text-lg">Hit Track 3</h3>
          <p className="mt-2 text-gray-300 text-sm">
            Smooth harmonies and deep bass lines that define our signature style.
          </p>
          <a href="#" className="mt-3 text-[#76ffa8] font-bold inline-block">
            Listen Now →
          </a>
        </div>
      </div>
    </section>
  );
}
