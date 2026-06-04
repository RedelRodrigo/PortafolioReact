export default function About() {
  return (
    <div style={{ textAlign: "center", paddingTop: "100px" }} id="sobre-mi">
      <h1
        style={{
          fontFamily: "'Rock Salt', cursive",
          fontSize: "calc(36px + 1.5vw)",
        }}
      >
        Sobre mí
      </h1>
      <div
        className="SobreMi"
        style={{
          display: "flex",
          fontSize: "calc(12px + 1vmin)",
        }}
      >
        <img
          src="/perfil.jpg"
          alt="Foto de perfil"
          style={{ width: "calc(10vw + 10vh + 100px)", borderRadius: "50%" }}
          className="fotoPerfil"
        />
        <div style={{ textAlign: "justify", marginLeft: "20px" }}>
          <p className="paragrafh">
            Frontend Developer con sólida formación técnica.
          </p>
          <br />
          <p className="paragrafh">
            Especializado en React y TypeScript, con experiencia práctica
            construyendo interfaces a partir de diseños Figma. Historial
            comprobado trabajando en equipos remotos internacionales (Perú,
            España) y capacidad para comunicarse en entornos técnicos en inglés.
            </p>
          <br />
          <p className="paragrafh">
            Perfil orientado a código limpio, componentes reutilizables y buenas
            prácticas de Git.
          </p>
        </div>
      </div>
      <a href="\Redel_Rodrigo_CV.pdf" download>
        <button
          className="botonCV"
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-5px)";
            e.currentTarget.style.transition = "all 0.3s ease";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0px)";
            e.currentTarget.style.transition = "all 0.3s ease";
          }}
          style={{
            padding: "10px 20px",
            borderRadius: "10px",
            cursor: "pointer",
            fontSize: "calc(12px + 0.5vw)",
            fontFamily: "'Comic Relief', cursive",
            color: "black",
          }}
        >
          Descargar CV
        </button>
      </a>
    </div>
  );
}
