import { Link } from "react-router-dom";
import "./ProjectCard.modules.css";

function ProjectCard({ project }) {
  return (
    <Link to={`/projects/${project.id}`} className="card-link">
      <div className="project-card">

        <div className="card-image-container">
          <img
            src={project.image}
            alt={project.title}
            className="card-image"
          />
        </div>

        <div className="card-content">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>

      </div>
    </Link>
  );
}

export default ProjectCard;