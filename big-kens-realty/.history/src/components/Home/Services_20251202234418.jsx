export default function Services() {
  return (
    <section>
      <h2 style={{ textAlign: "center" }}>Our Services</h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "25px",
        marginTop: "40px"
      }}>
        <div className="card">
          <img src="/realestate.jpg" alt="" />
          <h3>Real Estate</h3>
          <p>Find your dream home with our real estate listings.</p>
          <a href="#">Learn More →</a>
        </div>

        <div className="card">
          <img src="/cars.jpg" alt="" />
          <h3>Auto Mobiles</h3>
          <p>Find your dream vehicle with our listings.</p>
          <a href="#">Learn More →</a>
        </div>

        <div className="card">
          <img src="/music.jpg" alt="" />
          <h3>Music Production</h3>
          <p>Find your dream home with our real estate listings.</p>
          <a href="#">Learn More →</a>
        </div>
      </div>
    </section>
  );
}
