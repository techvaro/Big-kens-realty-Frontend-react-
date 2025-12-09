import heroImage from "../../assets/image_about/house.png";
// Mission & Values Section
export default function MissionValues() {
return (
  <div >
    <section className="py-16 px-4 lg:px-20 bg-[#0F1831] text-white grid md:grid-cols-2 gap-10 max-w-7xl mx-auto">
      <div>
        <h2 className="text-3xl font-bold mb-6">Our Mission & Values</h2>
        <p className="mb-6 text-gray-300 max-w-lg">
          At Big Ken Enterprises, our mission and values guide everything we do. We are committed to innovation, reliability,
          and customer satisfaction.
        </p>


        <div className="space-y-5">
          <div>
            <h3 className="text-xl font-semibold">🛡 Integrity</h3>
            <p className="text-gray-300 max-w-md">We uphold honesty and transparency in every action.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">⚙ Excellence</h3>
            <p className="text-gray-300 max-w-md">We provide high-quality service driven by passion.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">🎯 Client Focused</h3>
            <p className="text-gray-300 max-w-md">We tailor solutions to meet each client's needs.</p>
          </div>
        </div>
      </div>


      <img src={heroImage} alt="House" className="rounded-lg shadow-lg max-h-[500px] object-cover" />
    </section>
  </div>
);
}