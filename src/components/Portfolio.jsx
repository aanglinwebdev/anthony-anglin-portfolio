import {projects} from "../data/projectsData";
import ProjectCard from "./ProjectCard";

function Portfolio() {

  return (
    <section id="portfolio">

      <h2>Portfolio</h2>
    <div className="portfolio-grid">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
        />
      ))}
    </div>  
    </section>
  );
}

export default Portfolio;
