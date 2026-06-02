import { useParams, useNavigate } from "react-router-dom";
import { FiX, FiExternalLink, FiGithub, FiArrowUpRight } from "react-icons/fi";
import { projects } from "../data";
import "./CaseStudy.css";

export default function ProjectCard() {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="case-overlay">
        <div className="case-empty">
          <button className="case-close" onClick={() => navigate(-1)}>
            <FiX />
          </button>
          <p>Project not found.</p>
        </div>
      </div>
    );
  }

  const stackItems = project.stack
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

  return (
    <div className="case-overlay" onClick={() => navigate(-1)}>
      <article className="case-card" onClick={(e) => e.stopPropagation()}>
        <button
          className="case-close"
          onClick={() => navigate(-1)}
          aria-label="Close case study"
        >
          <FiX />
        </button>

        <div className="case-preview">
          <div className="case-image-shell">
            <div className="case-browser-bar">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <img src={project.image} alt={project.title} />
          </div>
        </div>

        <div className="case-content">
          <div className="case-meta">
            <span>{project.year}</span>
            <span>{project.role}</span>
          </div>

          <div className="case-status">
            <span></span>
            {project.status}
          </div>

          <h1>{project.title}</h1>

          <p className="case-subtitle">{project.subtitle}</p>

          <p className="case-overview">{project.overview}</p>

          <div className="case-stack">
            {stackItems.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>

          <div className="case-details">
            {project.problem && (
              <div>
                <small>Problem</small>
                <p>{project.problem}</p>
              </div>
            )}

            {project.solution && (
              <div>
                <small>Solution</small>
                <p>{project.solution}</p>
              </div>
            )}
          </div>

          <div className="case-actions">
            {project.live !== "#" && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="case-btn case-btn-primary"
              >
                <FiExternalLink />
                Visit App
                <FiArrowUpRight />
              </a>
            )}

            {project.repo !== "#" && (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="case-btn case-btn-secondary"
              >
                <FiGithub />
                Source Code
              </a>
            )}
          </div>
        </div>
      </article>
    </div>
  );
}