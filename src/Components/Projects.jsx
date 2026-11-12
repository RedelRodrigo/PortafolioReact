import { useState } from "react";
import ProjectModal from "./projects/ProjectModal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsData = [
    {
      id: 1,
      title: "Pokedex",
      image: `prueba-dev.netlify.app_.png`,
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
      image: `ecommerce-react-2025.netlify.app_.png`,
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
      image: `poke-net.netlify.app_.png`,
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
    {
      id: 4,
      title: "Biblioteca con Go",
      image: `/golang.webp`,
      description:
        "Desarrollo de una API RESTful (CRUD) para la gestión del sistema de una biblioteca.",
      fullDescription:
        "Desarrollo de una API RESTful (CRUD) construida con Golang para la gestión del sistema de una biblioteca. El proyecto se enfoca en la estructuración eficiente del código del servidor, el enrutamiento y la manipulación de datos. La API permite realizar operaciones de creación, lectura, actualización y eliminación de libros, autores y usuarios, proporcionando una base sólida para aplicaciones web o móviles que requieran funcionalidades de gestión bibliotecaria.",
      technologies: ["Golang", "PostgreSQL", "Docker", "PostMan"],
      features: [
        "Gestión de libros, autores y usuarios",
        "Operaciones CRUD completas",
        "Estructura de código modular y escalable",
        "Documentación de la API con Postman",
        "Integración con base de datos PostgreSQL",
      ],
      link: "https://github.com/RedelRodrigo/Crud-con-Go",
    },
    {
      id: 5,
      title: "Beat Lab",
      image: `beat-lab-113.pages.dev_.png`,
      description:
        "Secuenciador de ritmos (drum machine) en el navegador, con sonidos sintetizados mediante la Web Audio API. Permite crear patrones, guardarlos y compartirlos por link.",
      fullDescription:
        "Beat Lab es una drum machine web construida desde cero, sin librerías de audio ni samples. Todos los sonidos se sintetizan en tiempo real con la Web Audio API, y un lookahead scheduler sobre el reloj de audio mantiene el ritmo preciso.Permite pintar patrones en una grilla de 16 pasos, ajustar tempo y swing, y ver un visualizador de espectro en vivo. Los patrones se guardan y se comparten por link, con opción de hacer remixes de patrones ajenos. El backend usa Express 5 y SQLite, y un paquete compartido con esquemas Zod valida los datos tanto en el servidor como en el cliente.",
      technologies: [
        "React",
        "Typescript",
        "Web Audio API",
        "Tailwind CSS",
        "Express 5",
        "PostgreSQL",
        "Docker",
        "SQLite",
        "Zod",
        "Tanstack Query",
      ],
      features: [
        "Grilla de 16 pasos con sonidos sintetizados en tiempo real",
        "Control de tempo, swing, volumen y mute por pista",
        "Edición en vivo mientras el patrón suena",
        "Visualizador de espectro de audio en tiempo real",
        "Presets de géneros y hasta 8 pistas",
        "Guardado y link para compartir patrones",
        "Remix de patrones ajenos y galería pública",
        "Compatible con móvil y atajos de teclado",
      ],
      link: "https://beat-lab-113.pages.dev/",
    },
    {
      id: 5, // O el número que le siga en tu listado
      title: "Gestor de Gastos Full-Stack",
      image: `/GestorGastos.jpg`, // O la imagen que prefieras usar
      description:
        "Aplicación web full-stack para el control y categorización de finanzas personales con autenticación de usuarios.",
      fullDescription:
        "Plataforma web full-stack moderna desarrollada con React y TypeScript en el cliente, y un backend de alto rendimiento en Go utilizando el framework Gin. La aplicación cuenta con un sistema robusto de autenticación, gestión completa de gastos (CRUD), resúmenes automáticos por categorías y filtrado avanzado. Se conecta a una base de datos SQLite distribuida mediante Turso y está completamente empaquetada mediante Docker para garantizar un despliegue y portabilidad impecables.",
      technologies: [
        "Golang",
        "Gin",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "SQLite",
        "Turso",
        "Docker",
        "Bun",
      ],
      features: [
        "Autenticación y registro de usuarios con sesiones persistentes",
        "Gestión completa de gastos (Crear, leer, actualizar, eliminar)",
        "Resumen financiero en tiempo real agrupado por categorías",
        "Filtros avanzados por categoría y rangos de fechas",
        "Interfaz moderna y responsiva optimizada con Tailwind CSS",
        "Arquitectura modular en Go con separación estricta de rutas y repositorios",
        "Despliegue contenedorizado con Docker y soporte para producción",
      ],
      link: "https://gestorgastos-8rby.onrender.com/",
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
                src={`${project.image}`}
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
