import car1 from "../../assets/car/car1.png";
import car2 from "../../assets/car/car2.png";
import car3 from "../../assets/car/car3.png";


export default function FeaturedVehicles() {
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
    <section className="py-20 bg-[#0A1023] text-white">
      <h2 className="text-3xl text-center font-bold mb-10">Featured Vehicles</h2>

      <div className="grid md:grid-cols-3 gap-8 px-6 md:px-20">
        {cars.map((car, i) => (
          <div key={i} className="bg-[#FCFCFC] p-4 rounded-lg shadow">
            <img src={car.img} className="rounded-lg mb-4" alt="" />
            <h3 className="font-bold">{car.name}</h3>
            <p className="text-lg text-[#0A1023]">{car.price}</p>

            <button className="mt-4 bg-white text-black px-4 py-2 rounded-lg">
              View Details
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
