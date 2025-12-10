import car1 from "../../assets/car/car1.png";
import car2 from "../../assets/car/car2.png";
import car3 from "../../assets/car/car3.png";


export default function Cars() {
  const cars = [
    {
      name: "2022 Toyota Camry",
      price: "₦ 2.3M",
      img: car1,
    },
    {
      name: "2021 Honda Accord",
      price: "₦ 4.8M",
      img: car2,
    },
    {
      name: "2023 Tesla Model 3",
      price: "₦ 2.3M",
      img: car3,
    },
  ];

  return (
    <section className="py-16 bg-[#0A1023] text-white">
      <h2 className="text-3xl text-center font-bold mb-12 text-white">Our Cars</h2>

      <div className="grid md:grid-cols-3 gap-8 px-6 md:px-12">
        {cars.map((car, i) => (
          <div key={i} className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 flex flex-col">
            <img src={car.img} className="w-full h-48 object-contain rounded-lg mb-4" alt={car.name} />
            <h3 className="font-bold text-white text-lg">{car.name}</h3>
            <p className="text-lg font-bold text-[#CAFFD3] mt-2">{car.price}</p>
            <div className="mt-auto pt-4">
              <button className="bg-[#CAFFD3] text-[#0A1023] px-6 py-3 rounded-lg w-full font-semibold hover:bg-[#b0e0c9] transition-colors duration-300">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
