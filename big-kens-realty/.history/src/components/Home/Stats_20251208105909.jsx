import bg1 from '../../assets/image/bg1.png';

export default function Stats() {
  return (
    <section style={{
      backgroundImage: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(${bg1})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      justifyContent: "space-around",
      padding: "40px 80px"
    }}>
      <div style={{ textAlign: "center", color: "white" }}>
        <h2 style={{ fontSize: "2rem", color: "#76ffa8" }}>63+</h2>
        <p style={{ color: "white" }}>Customers</p>
      </div>

      <div style={{ textAlign: "center", color: "white" }}>
        <h2 style={{ fontSize: "2rem", color: "#76ffa8" }}>42+</h2>
        <p style={{ color: "white" }}>Sold</p>
      </div>

      <div style={{ textAlign: "center", color: "white" }}>
        <h2 style={{ fontSize: "2rem", color: "#76ffa8" }}>63+</h2>
        <p style={{ color: "white" }}>Transactions</p>
      </div>

      <div style={{ textAlign: "center", color: "white" }}>
        <h2 style={{ fontSize: "2rem", color: "#76ffa8" }}>Years</h2>
        <p style={{ color: "white" }}>Experience</p>
      </div>
    </section>
  );
}
