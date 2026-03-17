import { projects } from "../data/projectsData";
import ProjectCard from "../components/ProjectCard";

function ProjectsPage() {
  return (
    <section style={{ padding: "40px" }}>
      
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
        My Projects
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px"
        }}
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

    </section>
  );
}

export default ProjectsPage;