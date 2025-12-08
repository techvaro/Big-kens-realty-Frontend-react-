import realEstateImg from '../../assets/image/house.png';
import autoMobileImg from '../../assets/image/car.png';
import musicImg from '../../assets/image/lap.png';

export default function Services() {
  return (
    <section>
      <h2 className='text-2xl' style={{ textAlign: "center" }}>Our Services</h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "25px",
        marginTop: "40px"
      }}>
        <div className="card">
          <img src={realEstateImg} alt="Real Estate" />
          <h3>Real Estate</h3>
          <p>Find your dream home with our real estate listings.</p>
          <a href="#">Learn More →</a>
        </div>

        <div className="card">
          <img src={autoMobileImg} alt="Auto Mobiles" />
          <h3>Auto Mobiles</h3>
          <p>Find your dream vehicle with our listings.</p>
          <a href="#">Learn More →</a>
        </div>

        <div className="card">
          <img src={musicImg} alt="Music Production" />
          <h3>Music Production</h3>
          <p>Create amazing music with our production services.</p>
          <a href="#">Learn More →</a>
        </div>
      </div>
    </section>
  );
}
