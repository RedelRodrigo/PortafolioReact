export default function Footer() {
  return (
    <footer
      style={{
        background: "radial-gradient(circle, #1e3b7210 , #d3aa23b0)",
        color: "#fff",
        textAlign: "center",
        padding: "0",
        margin: "0",
        position: "relative",
        bottom: 0,
        width: "100vw",
        height: "150px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src="/logo.png" // Cambiar a ruta relativa correcta
        alt="Logo"
        style={{
          width: "130px",
          height: "auto",
          opacity: 0.3,
          position: "absolute",
          bottom: "10px",
        }}
        className="footer-logo"
      />
      <div
        style={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          opacity: 1,
        }}
      >
        <h3 style={{ fontFamily: "Rock Salt, cursive" }}>Rodrigo Redel</h3>
        <p>Desarrollador Full Stack</p>
      </div>
    </footer>
  );
}
