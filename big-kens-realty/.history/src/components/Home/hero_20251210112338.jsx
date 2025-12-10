import heroImage from '../../assets/image/bg.png';
import transparentCar from '../../assets/image/car.png'; // Using a car image for the transparent overlay

export default function Hero() {
  return (
    <section
      className="relative"
      style={{
        backgroundImage: `linear-gradient(rgba(26,25,65,.6), rgba(26,25,65,.6)), url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        paddingTop: "120px",
        paddingBottom: "150px"
      }}
    >
      {/* Transparent image overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src={transparentCar}
          alt="Car silhouette"
          className="opacity-20 w-2/3 max-w-2xl object-contain mix-blend-lighten"
        />
      </div>

      <div className="relative z-10"> {/* Content stays above the overlay */}
        <h1 style={{ fontSize: "50px", fontWeight: "bold" }}>
          Big Kens Enterprises<br />
          <span className="text-[#76ffa8]">Powering Your Lifestyle.</span>
        </h1>

        <p style={{ width: "50%", lineHeight: "1.6", marginTop: "20px" }}>
          Big Kens Enterprises is where real estate, automobiles,
          mobile technology, and music come together. We provide
          solutions that keep you moving, connected, and inspired.
        </p>

        <button className="btn" style={{ marginTop: "25px" }}>
          Explore Our Services
        </button>
      </div>
    </section>
  );
}
