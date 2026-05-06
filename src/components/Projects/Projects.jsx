import { Link } from "react-router-dom";
import { projects } from "../../data";
import "./Projects.css";

export default function Projects() {
  return (
    <section className="projects">
      {projects.map((project) => (
        <Link
          to={`/project/${project.id}`}
          className="project-card"
          key={project.id}
        >
          <div className="project-image-box">
            <img src={project.image} alt={project.title}  loading="lazy" />
          </div>

          <h3 className="project-title">
            <span className="title-top">{project.title}</span>
            <span className="title-bottom">{project.subtitle}</span>
          </h3>
        </Link>
      ))}
    </section>
  );
}