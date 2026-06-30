import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Hero() {
  return (
    <div className="hero-section" id="inicio">
      <div className="hero-tilt">
        <div className="hero-copy">
          <h4 style={{ opacity: 0.7 }}>Hola mundo! Soy</h4>
          <h1 style={{ fontFamily: "'Rock Salt', cursive" }}>Rodrigo</h1>
          <h3 style={{ opacity: 0.7, color: "#d3aa23ff" }}>
            Desarrollador Full Stack
          </h3>
          <p
            style={{
              opacity: 0.7,
              fontSize: "calc(12px + 0.5vw)",
              maxWidth: "80vw",
            }}
          >
            Experiencia en desarrollo y diseño web, creando proyectos de alta
            calidad.
          </p>
        </div>
      </div>
      <div className="BotonesHero">
        <div
          className="Disponible"
          style={{
            color: "black",
            fontSize: "16px",
            marginTop: "20px",
            padding: "10px",
            borderRadius: "10px",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-5px)";
            e.currentTarget.style.transition = "all 0.3s ease";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0px)";
            e.currentTarget.style.transition = "all 0.3s ease";
          }}
        >
          Disponible para trabajar
          <FontAwesomeIcon
            icon={faCircleCheck}
            style={{
              marginLeft: "3px",
              marginBottom: "-3px",
              color: "green",
              fontSize: "20px",
            }}
            className="iconoDisponible"
          />
        </div>
        <a
          href="#contacto"
          className="Disponible-2"
          style={{
            fontSize: "16px",
            marginTop: "20px",
            padding: "10px",
            borderRadius: "10px",
            textDecoration: "none",
            color: "white",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-5px)";
            e.currentTarget.style.transition = "all 0.3s ease";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0px)";
            e.currentTarget.style.transition = "all 0.3s ease";
          }}
        >
          Contáctame
        </a>
      </div>
    </div>
  );
}
