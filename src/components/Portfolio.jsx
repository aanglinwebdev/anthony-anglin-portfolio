import projectsData from "../data/projectsData";
import ProjectCard from "./ProjectCard";

function Portfolio() {

  return (
    <section id="portfolio">

      <h2>Portfolio</h2>

      {projectsData.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
        />
      ))}

    </section>
  );
}

export default Portfolio;
