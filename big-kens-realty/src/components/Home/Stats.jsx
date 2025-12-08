import bg1 from '../../assets/image/bg1.png';

export default function Stats() {
  return (
    <section
      className="
        bg-cover bg-center 
        py-10 px-5 md:px-10
        text-white
      "
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(${bg1})`,
      }}
    >
      <div
        className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-4 
          gap-8 
          text-center
        "
      >
        {/* Stat 1 */}
        <div>
          <h2 className="text-4xl font-bold text-[#76ffa8]">63+</h2>
          <p className="mt-1 text-sm md:text-base">Customers</p>
        </div>

        {/* Stat 2 */}
        <div>
          <h2 className="text-4xl font-bold text-[#76ffa8]">42+</h2>
          <p className="mt-1 text-sm md:text-base">Properties Sold</p>
        </div>

        {/* Stat 3 */}
        <div>
          <h2 className="text-4xl font-bold text-[#76ffa8]">63+</h2>
          <p className="mt-1 text-sm md:text-base">Transactions</p>
        </div>

        {/* Stat 4 */}
        <div>
          <h2 className="text-4xl font-bold text-[#76ffa8]">5+</h2>
          <p className="mt-1 text-sm md:text-base">Years Experience</p>
        </div>
      </div>
    </section>
  );
}
