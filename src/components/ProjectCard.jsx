import styles from "./Card.module.css";

function ProjectCard({ project }) {
  return (
    <div className={styles.card}>
      <img
        src={project.image}
        alt={project.title}
      />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <p><strong>Tech:</strong> {project.tech}</p>
      <div className={styles.links}>
        <a href={project.github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href={project.live} target="_blank" rel="noopener noreferrer">
          Live Demo
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
