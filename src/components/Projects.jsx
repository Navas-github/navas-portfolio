import "./Projects.css";
import ProjectCard from "./ProjectCard";

import amsImage from "../assets/images/AMS.png";
import portfolioImage from "../assets/images/portfolio.png";

function Projects () {

const projects = [
    {
      image: amsImage,
      title: "Asset Management System",
      description:
        "Enterprise system for managing asset registration, assignment, transfer and reporting.",
      technologies: [
        "ASP.NET Core",
        "C#",
        "SQL Server"
      ],
      live: "#",
      github: "#"
    },

    {
      image: portfolioImage,
      title: "React Portfolio",
      description:
        "A responsive personal portfolio website built with React.",
      technologies: [
        "React",
        "JavaScript",
        "CSS"
      ],
      live: "#",
      github: "#"
    }
  ];

  return (
    <section 
       className="projects" 
       id="projects"
       data-aos = "fade-up">

      <h2>My Projects</h2>

      <div className="project-grid">

        {projects.map((project,index)=>(
          <ProjectCard
            key={index}
            {...project}
          />
        ))}

      </div>

    </section>
  );
}

export default Projects;