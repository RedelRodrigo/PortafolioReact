import "./Modal.css";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ×
        </button>

        <div className="modal-header">
          <h2>{project.title}</h2>
        </div>

        <img src={project.image} alt={project.title} className="modal-image" />

        <div className="modal-body">
          <p>{project.description}</p>

          {project.fullDescription && <p>{project.fullDescription}</p>}

          {project.technologies && project.technologies.length > 0 && (
            <div className="modal-technologies">
              <h3>Tecnologías utilizadas</h3>
              <div className="tech-list">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {project.features && project.features.length > 0 && (
            <div className="modal-technologies">
              <h3>Características principales</h3>
              <ul style={{ paddingLeft: "20px" }}>
                {project.features.map((feature, index) => (
                  <li key={index} style={{ marginBottom: "8px" }}>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="modal-links">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="modal-link"
              >
                Ver Demo
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="modal-link"
              >
                Ver Código
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
