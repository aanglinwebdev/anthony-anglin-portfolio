function ProjectCard({ project }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "20px",
      marginBottom: "20px"
    }}>

      <img
        src={project.image}
        alt={project.title}
        style={{ width: "100%", marginBottom: "10px" }}
      />

      <h3>{project.title}</h3>

      <p>{project.description}</p>

      <p><strong>Tech:</strong> {project.tech}</p>

      <div style={{ marginTop: "10px" }}>
        <a href={project.github} target="_blank">
          GitHub
        </a>

        {" | "}

        <a href={project.live} target="_blank">
          Live Demo
        </a>
      </div>

    </div>
  );
}

export default ProjectCard;
