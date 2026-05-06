import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import { FiArrowUpRight } from "react-icons/fi";
import { useParams } from "react-router-dom";
import { projects } from "../data";

import "./CaseStudy.css";

export default function CaseStudy() {
  const { id } = useParams();

  const project = projects.find((item) => item.id === id);

  if (!project) {
    return (
      <>
        <NavBar />

        <main className="case-study">
          <h1>Project not found</h1>
        </main>

        <Footer />
      </>
    );
  }

  return (
    <>
      <NavBar />

      <main className="case-study">

        {/* HERO */}
        <section className="case-hero">
          <h1 className="case-title">{project.title}</h1>

          <p className="case-subtitle">
            {project.subtitle}
          </p>

          <div className="case-actions">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn primary"
            >
              Live <FiArrowUpRight />
            </a>

            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Repo <FiArrowUpRight />
            </a>
          </div>
        </section>

        {/* COVER IMAGE */}
        <div className="case-cover">
          <img src={project.image} alt={project.title} />
        </div>

        {/* INFO GRID */}
        <section className="case-info">
          <div>
            <p className="label">Role</p>
            <p>{project.role}</p>
          </div>

          <div>
            <p className="label">Year</p>
            <p>{project.year}</p>
          </div>

          <div>
            <p className="label">Stack</p>
            <p>{project.stack}</p>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="case-section">
          <h2>Overview</h2>

          <p>
            {project.overview}
          </p>
        </section>

        {/* PROBLEM */}
        <section className="case-section">
          <h2>Problem</h2>

          <p>
            {project.problem}
          </p>
        </section>

        {/* SOLUTION */}
        <section className="case-section">
          <h2>Solution</h2>

          <p>
            {project.solution}
          </p>
        </section>

        {/* GALLERY */}
        <section className="case-gallery">
          {project.gallery.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${project.title}-${index}`}
            />
          ))}
        </section>

      </main>

      <Footer />
    </>
  );
}