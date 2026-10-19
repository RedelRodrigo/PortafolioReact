import { useState } from "react";
import NavHamburguer from "./NavHamburguer";

export default function Nav() {
  const [activeButton, setActiveButton] = useState("Inicio");

  const buttonStyle = (buttonName) => ({
    padding: "8px 16px",
    border: "2px solid",
    borderRadius: "12px",
    cursor: "pointer",
    borderColor: activeButton === buttonName ? "#d3aa23ff" : "transparent",
    backgroundColor:
      activeButton === buttonName
        ? "rgba(70, 68, 114, 0.8)"
        : "rgb(60, 59, 85, 0.4)",
    transition: "all 0.3s ease",
    color: "white",
    fontFamily: "'Comic Relief', cursive",
  });

  return (
    <nav
      style={{
        background: "transparent",
        padding: "10px",
        position: "fixed",
        top: 0,
        zIndex: 1000,
        width: "100vw",
        justifyContent: "space-around",
        margin: "0 auto",
        alignItems: "center",
        display: "flex",
        backdropFilter: "blur(10px)",
      }}
    >
      <div
        id="NombreNav"
        style={{
          color: "white",
          fontWeight: "bold",
          fontSize: "28px",
          fontFamily: "'Rock Salt'",
        }}
      >
        Rodrigo
      </div>
      <NavHamburguer />
      <ul
        className="nav-links"
        style={{
          listStyleType: "none",
          margin: 0,
          padding: 0,
          gap: "35px",
        }}
      >
        <a
          href="#inicio"
          style={{ textDecoration: "none" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-5px)";
            e.currentTarget.style.transition = "all 0.3s ease";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0px)";
            e.currentTarget.style.transition = "all 0.3s ease";
          }}
        >
          <button
            style={buttonStyle("Inicio")}
            onClick={() => setActiveButton("Inicio")}
          >
            Inicio
          </button>
        </a>
        <a
          href="#sobre-mi"
          style={{ textDecoration: "none" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-5px)";
            e.currentTarget.style.transition = "all 0.3s ease";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0px)";
            e.currentTarget.style.transition = "all 0.3s ease";
          }}
        >
          <button
            style={buttonStyle("Sobre mi")}
            onClick={() => setActiveButton("Sobre mi")}
          >
            Sobre mi
          </button>
        </a>
        <a
          href="#habilidades"
          style={{ textDecoration: "none" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-5px)";
            e.currentTarget.style.transition = "all 0.3s ease";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0px)";
            e.currentTarget.style.transition = "all 0.3s ease";
          }}
        >
          <button
            style={buttonStyle("Habilidades")}
            onClick={() => setActiveButton("Habilidades")}
          >
            Habilidades
          </button>
        </a>

        <a
          href="#proyectos"
          style={{ textDecoration: "none" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-5px)";
            e.currentTarget.style.transition = "all 0.3s ease";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0px)";
            e.currentTarget.style.transition = "all 0.3s ease";
          }}
        >
          <button
            style={buttonStyle("Proyectos")}
            onClick={() => setActiveButton("Proyectos")}
          >
            Proyectos
          </button>
        </a>
        <a
          href="#contacto"
          style={{ textDecoration: "none" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-5px)";
            e.currentTarget.style.transition = "all 0.3s ease";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0px)";
            e.currentTarget.style.transition = "all 0.3s ease";
          }}
        >
          <button
            style={buttonStyle("Contacto")}
            onClick={() => setActiveButton("Contacto")}
          >
            Contacto
          </button>
        </a>
      </ul>
    </nav>
  );
}
