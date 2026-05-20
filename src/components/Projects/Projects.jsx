import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import { useContext } from "react";

import { projects } from "../../data";
import ThemeContext from "../../Themes/ThemeContext";

import "./Projects.css";

export default function Projects() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <section
      className="projects-section"
      style={{
        background: darkMode ? "#ffffff" : "black",
        color: darkMode ? "#000000" : "#ffffff",
      }}
    >
      <div className="projects-grid">
        {projects.map((project) => (
          <Link
            to={`/project/${project.id}`}
            className="project-card"
            key={project.id}
            style={{
              background: darkMode
                ? "rgba(255,255,255,0.7)"
                : "rgba(18,18,18,0.55)",

              color: darkMode ? "#000" : "#fff",

              border: darkMode
                ? "1px solid rgba(0,0,0,0.1)"
                : "1px solid rgba(255,255,255,0.1)",

              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
            }}
          >
            <div className="card-image-wrap">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
              />
            </div>

            <div className="card-content">
              <span
                className="card-tag"
                style={{
                  background: darkMode
                    ? "rgba(0,0,0,0.05)"
                    : "rgba(255,255,255,0.08)",

                  color: darkMode ? "#000" : "#fff",

                  border: darkMode
                    ? "1px solid rgba(0,0,0,0.08)"
                    : "1px solid rgba(255,255,255,0.1)",
                }}
              >
                {project.stack}
              </span>

              <div className="card-header">
                <h3
                  className="card-title"
                  style={{
                    color: darkMode ? "#000" : "#fff",
                  }}
                >
                  {project.title}
                </h3>

                <div
                  className="card-icon"
                  style={{
                    background: darkMode
                      ? "rgba(0,0,0,0.05)"
                      : "rgba(255,255,255,0.08)",

                    color: darkMode ? "#000" : "#fff",

                    border: darkMode
                      ? "1px solid rgba(0,0,0,0.08)"
                      : "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <FiArrowUpRight />
                </div>
              </div>

              <p
                className="card-desc"
                style={{
                  color: darkMode
                    ? "rgba(0,0,0,0.7)"
                    : "rgba(255,255,255,0.7)",
                }}
              >
                {project.subtitle}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <button
        onClick={() =>
          window.open(
            "https://github.com/aaswne?tab=repositories"
          )
        }
        style={{
          background: darkMode
            ? "rgba(255,255,255,0.7)"
            : "rgba(18,18,18,0.55)",

          color: darkMode ? "#000" : "#fff",

          border: darkMode
            ? "1px solid rgba(0,0,0,0.1)"
            : "1px solid rgba(255,255,255,0.1)",

          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
        }}
      >
        More projects
      </button>
    </section>
  );
}