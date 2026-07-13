import "./ProjectCard.css";

function ProjectCard ({image, title, description, technologies, live, github}){
    return (
      <div className="project-card" data-aos = "fade-up">
        <img src={image} alt={title}/>
        <div className="project-content">
         <h3>{title}</h3>
         <p>{description}</p>

         <div className="technology-list">
           {technologies.map((tech, index) => (
            <span key = {index}>
              {tech}
            </span>
           ))}
         </div>

         <div className="project-buttons">
            <a 
              href={live}
              target="_blank"
              rel="noopener noreferrer"
            >
                Live Demo
            </a>

            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="github-btn"
            >
                GitHub
            </a>
         </div>

        </div>
      </div>
    );
}

export default ProjectCard;