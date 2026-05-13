import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";

export default function NavHamburguer() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
    // fontWeight: activeButton === buttonName ? "bold" : "normal",
    transition: "all 0.3s ease",
  });

  return (
    <div className="burguer" style={{}}>
      <button onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      {isOpen && (
        <div
          style={{
            position: "fixed",
            top: "0",
            right: "0",
            width: "200px",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            transform: `${isOpen ? "translateX(0)" : "translateX(100%)"}`,
            transition: "transform 0.3s ease-in-out",
            zIndex: 1001,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            paddingTop: "50px",
            gap: "20px",
          }}
        >
          <button onClick={toggleMenu}>
            <FontAwesomeIcon icon={faX} />
          </button>
          <a
            href="#inicio"
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
        </div>
      )}
    </div>
  );
}
