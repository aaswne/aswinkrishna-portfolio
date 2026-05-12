import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import { projects } from "../../data";
import "./Projects.css";

export default function Projects() {
  return (
    <section className="projects-section">
      <div className="projects-grid">
        {projects.map((project) => (
          <Link
            to={`/project/${project.id}`}
            className="project-card"
            key={project.id}
          >
            <div className="card-image-wrap">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
              />
            </div>

            <div className="card-content">
              <span className="card-tag">{project.stack}</span>

              <div className="card-header">
                <h3 className="card-title">{project.title}</h3>

                <div className="card-icon">
                  <FiArrowUpRight />
                </div>
              </div>

              <p className="card-desc">{project.subtitle}</p>
            </div>
          </Link>
        ))}
      </div>
      <button onClick={()=>window.open("https://github.com/aaswne?tab=repositories")}>More projects</button>
    </section>
  );
}