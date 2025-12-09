export default function FeaturedListings() {
  const properties = [
    {
      title: "Modern Family Home",
      price: "₦ 2.3M",
      image: "/house1.jpg",
    },
    {
      title: "Luxury Villa",
      price: "₦ 5.8M",
      image: "/house2.jpg",
    },
    {
      title: "Cozy Apartment",
      price: "₦ 1.2M",
      image: "/house3.jpg",
    },
    {
      title: "Urban Studio",
      price: "₦ 950K",
      image: "/house4.jpg",
    },
    {
      title: "Elegant Duplex",
      price: "₦ 3.7M",
      image: "/house5.jpg",
    },
    {
      title: "Spacious Bungalow",
      price: "₦ 2.9M",
      image: "/house6.jpg",
    },
  ];

  return (
    <section className="py-20 bg-[#0F1831] text-white px-6 md:px-20">
      <h2 className="text-3xl font-bold text-center mb-4">Featured Listings</h2>
      <p className="text-gray-300 text-center mb-12">
        Explore our handpicked selection of the finest properties available.
      </p>

      <div className="grid md:grid-cols-3 gap-10">
        {properties.map((item, index) => (
          <div
            key={index}
            className="bg-[#C8FFD4] text-black rounded-xl overflow-hidden shadow-md"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-60 object-cover"
            />

            <div className="p-6">
              <h3 className="font-bold text-xl mb-2">{item.title}</h3>
              <p className="text-gray-700 mb-4">
                A stylish, comfortable space with open layouts, natural light,
                and modern features for everyday living.
              </p>

              <div className="flex items-center justify-between">
                <span className="font-bold">{item.price}</span>
                <button className="font-bold text-[#0F1831]">View Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
