export default function Hero() {
  return (
    <section style={{
      backgroundImage: "linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url('/hero.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      paddingTop: "120px",
      paddingBottom: "150px"
    }}>
      <h1 style={{ fontSize: "50px", fontWeight: "bold" }}>
        Big Kens Enterprises<br />
        Powering <span style={{ color: "#76ffa8" }}>Your Lifestyle.</span>
      </h1>

      <p style={{ width: "50%", lineHeight: "1.6", marginTop: "20px" }}>
        Big Kens Enterprises is where real estate, automobiles,
        mobile technology, and music come together. We provide
        solutions that keep you moving, connected, and inspired.
      </p>

      <button className="btn" style={{ marginTop: "25px" }}>
        Explore Our Services
      </button>
    </section>
  );
}
