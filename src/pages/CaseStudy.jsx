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
      <div className="pc-overlay">
        <div className="pc-card">
          <p style={{ color: "rgba(255,255,255,0.4)", padding: 40 }}>
            Project not found.
          </p>
        </div>
      </div>
    );
  }

  const stackItems = project.stack.split(",").map((s) => s.trim()).filter(Boolean);

  return (
    <div className="pc-overlay" onClick={() => navigate(-1)}>
      <div className="pc-card" onClick={(e) => e.stopPropagation()}>

        {/* ── LEFT: Mockup ── */}
        <div className="pc-left">
          <div className="pc-left__glow" aria-hidden="true" />
          <div className="pc-mockup">
            <div className="pc-mockup__bar" aria-hidden="true">
              <span /><span /><span />
            </div>
            <img
              src={project.image}
              alt={project.title}
              className="pc-mockup__img"
              loading="eager"
            />
          </div>
        </div>

        {/* ── RIGHT: Info ── */}
        <div className="pc-right">
          <button
            className="pc-close"
            onClick={() => navigate(-1)}
            aria-label="Close"
          >
            <FiX size={16} />
          </button>

          <span className="pc-badge">
            {project.year} · {project.role}
          </span>

          <h1 className="pc-title">{project.title}</h1>

          <p className="pc-accent">{project.subtitle}</p>
          <p className="pc-stack-line">{project.stack}</p>

          <p className="pc-desc">{project.overview}</p>

          <div className="pc-pills">
            {stackItems.map((tech) => (
              <span key={tech} className="pc-pill">{tech}</span>
            ))}
          </div>

          <div className="pc-bullets">
            {[project.problem, project.solution].map((text, i) => (
              <div className="pc-bullet" key={i}>
                <span className="pc-bullet__dot" aria-hidden="true" />
                {text}
              </div>
            ))}
          </div>

          {/* Mobile-only action buttons */}
          <div className="pc-actions">
            {project.live !== "#" && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="pc-btn pc-btn--primary"
              >
                <FiExternalLink size={14} />
                Visit App
                <FiArrowUpRight size={14} className="pc-btn__arrow" />
              </a>
            )}
            {project.repo !== "#" && (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="pc-btn pc-btn--ghost"
              >
                <FiGithub size={14} />
                Source
              </a>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}