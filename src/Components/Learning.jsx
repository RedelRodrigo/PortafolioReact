import "./Learning.css";
import { Cog } from "lucide-react";

const tecnologias = [
  {
    nombre: "Node.js",
    imgUrl: "https://img.icons8.com/?size=256&id=54087&format=png",
    progreso: 40,
    estado: "En curso",
  },
  {
    nombre: "Express",
    imgUrl: "https://img.icons8.com/?size=256&id=WNoJgbzDr3i2&format=png",
    progreso: 10,
    estado: "En curso",
  },
  {
    nombre: "MongoDB",
    imgUrl: "https://img.icons8.com/?size=256&id=74402&format=png",
    progreso: 25,
    estado: "Iniciando",
  },
  {
    nombre: "Docker",
    imgUrl: "/docker.png",
    progreso: 20,
    estado: "Iniciando",
  },
  {
    nombre: "GraphQL",
    imgUrl: "/GraphQL.png",
    progreso: 15,
    estado: "Explorando",
  },
];

function LearningCard({ tech }) {
  return (
    <div className="learning-card">
      <span className="badge-icon" title="En aprendizaje">
        <Cog style={{ width: 34, height: 34 }} />
      </span>

      <img src={tech.imgUrl} alt={tech.nombre} />
      <span className="tech-name">{tech.nombre}</span>
      <span className="status-badge">{tech.estado}</span>

      <div className="progress-wrapper">
        <div className="progress-label">
          <span>Progreso</span>
          <span>{tech.progreso}%</span>
        </div>
        <div className="progress-track">
          <div
            className="progress-fill"
            style={{ "--progress": `${tech.progreso}%` }}
          />
        </div>
      </div>
    </div>
  );
}

export default function Learning() {
  return (
    <div id="aprendiendo" style={{ width: "80vw", margin: "0 auto" }}>
      <h1
        style={{
          fontFamily: "'Rock Salt', cursive",
          fontSize: "calc(36px + 1.5vw)",
          textAlign: "center",
          margin: "60px 0 20px",
          paddingTop: "100px",
        }}
      >
        Aprendiendo
      </h1>

      <p className="learning-subtitle">
        Tecnologías que estoy explorando y estudiando actualmente
      </p>

      <div className="learning-grid">
        {tecnologias.map((tech) => (
          <LearningCard key={tech.nombre} tech={tech} />
        ))}
      </div>
    </div>
  );
}
