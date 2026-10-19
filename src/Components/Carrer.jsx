import { useState } from "react";
import Education from "./Carrer/Education";
import Work from "./Carrer/Work";

export default function Career() {
  const [activeSection, setActiveSection] = useState("educacion");

  const buttonStyle = (section) => ({
    padding: "10px 20px",
    margin: "0 10px",
    border: "2px solid",
    borderRadius: "12px",
    cursor: "pointer",
    borderColor: activeSection === section ? "#d3aa23ff" : "transparent",
    backgroundColor:
      activeSection === section
        ? "rgba(70, 68, 114, 0.8)"
        : "rgb(60, 59, 85, 0.4)",
    color: "white",
    fontSize: "20px",
    transition: "all 0.3s ease",
  });

  return (
    <div
      className="Career"
      id="experiencia"
      style={{
        marginTop: "60px",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontFamily: "'Rock Salt', cursive",
          fontSize: "calc(36px + 1.5vw)",
          marginBottom: "70px",
        }}
      >
        Experiencia
      </h1>
      <div>
        <button
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-5px)";
            e.currentTarget.style.transition = "all 0.3s ease";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0px)";
            e.currentTarget.style.transition = "all 0.3s ease";
          }}
          style={buttonStyle("educacion")}
          onClick={() => setActiveSection("educacion")}
        >
          Educación
        </button>
        <button
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-5px)";
            e.currentTarget.style.transition = "all 0.3s ease";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0px)";
            e.currentTarget.style.transition = "all 0.3s ease";
          }}
          style={buttonStyle("trabajo")}
          onClick={() => setActiveSection("trabajo")}
        >
          Trabajo
        </button>

        <div id="contenido" style={{ marginTop: "50px" }}>
          {activeSection === "educacion" ? <Education /> : <Work />}
        </div>
      </div>
    </div>
  );
}
