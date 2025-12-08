import bg1 from '../../assets/image/bg1.png';

export default function Stats() {
  return (
    <section style={{
      backgroundImage: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(${bg1})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      justifyContent: "space-around",
      padding: "20px 0px"
    }}>
      <div style={{ textAlign: "center", color: "white" }}>
        <h2 style={{ fontSize: "2rem", color: "#76ffa8", margin: "0 0 10px 0" }}>63+</h2>
        <p style={{ color: "white", margin: "0" }}>Customers</p>
      </div>

      <div style={{ textAlign: "center", color: "white" }}>
        <h2 style={{ fontSize: "2rem", color: "#76ffa8", margin: "0 0 10px 0" }}>42+</h2>
        <p style={{ color: "white", margin: "0" }}>Properties Sold</p>
      </div>

      <div style={{ textAlign: "center", color: "white" }}>
        <h2 style={{ fontSize: "2rem", color: "#76ffa8", margin: "0 0 10px 0" }}>63+</h2>
        <p style={{ color: "white", margin: "0" }}>Transactions</p>
      </div>

      <div style={{ textAlign: "center", color: "white" }}>
        <h2 style={{ fontSize: "2rem", color: "#76ffa8", margin: "0 0 10px 0" }}>5+</h2>
        <p style={{ color: "white", margin: "0" }}>Years Experience</p>
      </div>
    </section>
  );
}
