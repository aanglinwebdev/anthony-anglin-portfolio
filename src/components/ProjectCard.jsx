import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  return (
    <Link to={`/projects/${project.id}`}>
      <div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </Link>
  );
}

export default ProjectCard;