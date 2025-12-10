import car1 from "../../assets/car/car1.png";
import car2 from "../../assets/car/car2.png";
import car3 from "../../assets/car/car3.png";



export default function Cars() {
  const cars = [
    {
      name: "2022 Toyota Camry",
      description: "Find your dream car with our car listings.",
      img: car1,
    },
    {
      name: "2021 Honda Accord",
      description: "Find your dream car with our car listings.",
      img: car2,
    },
    {
      name: "2023 Tesla Model 3",
      description: "Find your dream car with our car listings.",
      img: car3,
    },
  ];

  return (
    <section className="px-5 md:px-10 lg:px-20 py-10">
      <h2 className="text-2xl font-bold text-center">Our Cars</h2>

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
        {cars.map((car, i) => (
          <div key={i} className="card bg-[#1b1e49] p-5 rounded-lg text-white">
            <img src={car.img} alt={car.name} className="rounded-lg" />
            <h3 className="text-xl font-semibold mt-4">{car.name}</h3>
            <p className="mt-2 text-sm">
              {car.description}
            </p>
            <a href="#" className="text-[#b5ffcb] font-bold mt-3 inline-block">
              Learn More →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
