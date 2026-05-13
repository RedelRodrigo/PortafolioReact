import { useState } from "react";
import ProjectModal from "./projects/ProjectModal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsData = [
    {
      id: 1,
      title: "Pokedex",
      image: `https://image.thum.io/get/width/600/crop/400/https://prueba-dev.netlify.app/`,
      description: "Pokedex interactivo hecho con React.",
      fullDescription:
        "Una Pokédex interactiva que consume la API de Pokémon para mostrar información detallada de cada Pokémon, incluyendo estadísticas, habilidades y evoluciones. Mas un sistema de tareas para gestionar el consumo de la API con Redux Toolkit y RTK Query, y validación de datos con Zod.",
      technologies: [
        "Javascript",
        "React",
        "PokéAPI",
        "Tailwind CSS",
        "Zod",
        "Json Server",
        "Redux Toolkit",
        "RTK Query",
      ],
      features: [
        "Búsqueda de Pokémon por nombre, número o tipo",
        "Visualización de estadísticas detalladas",
        "Integración con PokéAPI",
        "Interfaz responsive",
      ],
      link: "https://prueba-dev.netlify.app/",
    },
    {
      id: 2,
      title: "eCommerce",
      image: `https://image.thum.io/get/width/600/crop/400/https://ecommerce-react-2025.netlify.app/`,
      description: "Proyecto de eCommerce hecho con React",
      fullDescription:
        "Una aplicación completa de comercio electrónico desarrollada con React, que incluye carrito de compras, gestión de productos y un sistema de checkout. Gestionando el consumo de la api MockAPI con Redux para el manejo del estado.",
      technologies: [
        "React",
        "JavaScript",
        "CSS",
        "Bootstrap",
        "React Router",
        "Redux",
      ],
      features: [
        "Carrito de compras funcional",
        "Filtrado de productos",
        "Responsive design",
        "Sistema de navegación intuitivo",
        "Integración con API externa",
        "Sistema de usuarios y autenticación",
      ],
      link: "https://ecommerce-react-2025.netlify.app/",
    },
    {
      id: 3,
      title: "PokéNet",
      image: `https://image.thum.io/get/width/600/crop/400/https://poke-net.netlify.app/`,
      description: "Red social temática de Pokémon hecha con Next.js.",
      fullDescription:
        "Una red social inspirada en el universo Pokémon donde cada Pokémon tiene su propio perfil y puede publicar estados, interactuar con otros y explorar contenido. Incluye feed de publicaciones, perfiles individuales, sección de exploración y sistema de interacciones (likes, comentarios y compartir).",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "PokéAPI",
      ],
      features: [
        "Feed de publicaciones de Pokémon en tiempo real",
        "Perfiles individuales de cada Pokémon",
        "Sistema de interacciones: likes, comentarios y compartir",
        "Sección de exploración de Pokémon",
        "Barra lateral con Pokémon activos",
        "Diseño responsive",
      ],
      link: "https://poke-net.netlify.app/",
    },
  ];

  return (
    <div className="Projects" id="proyectos">
      <h1
        style={{
          fontFamily: "'Rock Salt', cursive",
          fontSize: "calc(36px + 1.5vw)",
          textAlign: "center",
          margin: "60px 0",
          paddingTop: "100px",
        }}
      >
        Proyectos
      </h1>
      <div
        className="Proyectos"
        style={{
          gap: "40px",
          textAlign: "center",
          marginBottom: "60px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {projectsData.map((project) => (
          <div
            key={project.id}
            className={`project-card`}
            style={{
              width: "300px",
              padding: "30px",
              border: "1px solid black",
              backgroundColor: "#f9f9f910",
              borderRadius: "10px",
              boxShadow: "5px 5px 15px rgba(0,0,0,0.3)",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 0 15px #d3aa23ff";
              e.currentTarget.style.transition = "all 0.3s ease";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0px)";
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.transition = "all 0.3s ease";
            }}
            onClick={() => setSelectedProject(project)}
          >
            <div
              style={{
                width: "100%",
                height: "160px",
                borderRadius: "8px",
                overflow: "hidden",
              }}
            >
              <img
                src={`https://image.thum.io/get/width/600/crop/400/${project.link}`}
                alt={project.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "top",
                  display: "block",
                }}
              />
            </div>
            <h2 style={{ padding: "20px" }}>{project.title}</h2>
            <p>{project.description}</p>
          </div>
        ))}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
