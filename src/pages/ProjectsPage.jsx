import { projects } from "../data/projectsData";
import ProjectCard from "../components/ProjectCard";
import "../components/ProjectCard.modules.css"

function ProjectsPage() {
  return (
    <section className="container">
      
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
        My Projects
      </h1>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

    </section>
  );
}

export default ProjectsPage;