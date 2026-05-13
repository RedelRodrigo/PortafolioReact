import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Details3D from "./projects/Details3D";

export default function Hero() {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const mouseX = event.clientX - bounds.left;
    const mouseY = event.clientY - bounds.top;
    const normalizedX = mouseX / bounds.width - 0.5;
    const normalizedY = mouseY / bounds.height - 0.5;
    const maxDeg = 45;

    setRotation({
      x: Math.max(-maxDeg, Math.min(maxDeg, -normalizedY * maxDeg * 2)),
      y: Math.max(-maxDeg, Math.min(maxDeg, normalizedX * maxDeg * 2)),
    });
  };

  return (
    <div className="hero-section" id="inicio">
      <Details3D top="10vh" left="16vw" size="278px" />
      <div
        className="hero-tilt"
        onMouseMove={handleMove}
        onMouseLeave={() => setRotation({ x: 0, y: 0 })}
        style={{
          transform: `perspective(1100px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        }}
      >
        <div className="hero-copy">
          <h4 style={{ opacity: 0.7 }}>Hola mundo! Soy</h4>
          <h1 style={{ fontFamily: "'Rock Salt', cursive" }}>Rodrigo</h1>
          <h3 style={{ opacity: 0.7, color: "#d3aa23ff" }}>
            Desarrollador Frontend
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
