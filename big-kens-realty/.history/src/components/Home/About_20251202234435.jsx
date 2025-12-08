export default function About() {
  return (
    <section style={{ display: "flex", gap: "40px" }}>
      <div style={{ width: "40%" }}>
        <img src="/abt1.jpg" alt="" style={{ marginBottom: "20px" }} />
        <img src="/abt2.jpg" alt="" />
      </div>

      <div style={{ width: "60%" }}>
        <h2>About Us</h2>
        <p>
          At Big Kens Enterprises, we are driven by innovation and
          powered by passion—delivering solutions that transform everyday
          living into extraordinary experiences.
        </p>
      </div>
    </section>
  );
}
