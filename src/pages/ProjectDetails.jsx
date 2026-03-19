import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projectsData";
import "./ProjectDetails.module.css";

function ProjectDetails() {
  const { id } = useParams();

  // Convert id to number to match your data
  const project = projects.find(
    (p) => p.id === Number(id)
  );

  if (!project) {
    return <h2>Project not found</h2>;
  }

  return (
    <div className="page">
    <section className="project-details">

      {/* Back Button */}
      <Link to="/projects">
        <button className="btn secondary">← Back to Projects</button>
      </Link>

      {/* Title */}
      <h1 className="project-title">{project.title}</h1>

      {/* Image */}
      <img
        src={project.image}
        alt={project.title}
        className="project-image"
      />

      {/* Description */}
      <p className="project-description">
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="tech-stack">
        {project.tech.map((tech, index) => (
          <span key={index} className="tech-badge">
            {tech}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="project-buttons">
        <a href={project.live} target="_blank" rel="noreferrer">
          <button className="btn primary">Live Demo</button>
        </a>

        <a href={project.github} target="_blank" rel="noreferrer">
          <button className="btn secondary">GitHub</button>
        </a>
      </div>

    </section>
    </div>
  );
}

export default ProjectDetails;