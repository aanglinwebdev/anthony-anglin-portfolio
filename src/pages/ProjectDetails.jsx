import { useParams } from "react-router-dom";
import { projects } from "../data/projectsData";

function ProjectDetails() {
  const { id } = useParams();

console.log("URL ID:", id);
console.log("Projects:", projects);
console.log("Params:", useParams());


  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return <h2>Project not found</h2>;
  }

  return (
    <section style={{ padding: "40px", maxWidth: "900px", margin: "0 auto" }}>
      
      <h1>{project.title}</h1>

      <img
        src={project.image}
        alt={project.title}
        style={{
          width: "100%",
          borderRadius: "10px",
          margin: "20px 0"
        }}
      />

      <p>{project.description}</p>

      <h3>Tech Stack</h3>
      <ul>
        {project.tech.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>

      <div style={{ marginTop: "20px" }}>
        <a href={project.live} target="_blank" rel="noreferrer">
          <button style={{ marginRight: "10px" }}>Live Demo</button>
        </a>

        <a href={project.github} target="_blank" rel="noreferrer">
          <button>GitHub</button>
        </a>
      </div>

    </section>
  );
}

export default ProjectDetails;