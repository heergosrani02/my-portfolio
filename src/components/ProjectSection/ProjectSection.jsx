import projectCss from "./ProjectSection.module.css";
import { projects } from "./../../data.js";

import { FaArrowUp, FaGithub } from "react-icons/fa6";

function ProjectSection() {
  return (
    <>
      <section>
        <div className={projectCss.container}>
          <div className={projectCss.backWord}>
            <p>My Works</p>
          </div>
          <div className={projectCss.frontWord}>
            <p>Projects</p>
          </div>

          <div className={projectCss.allProjects}>
            {projects.map((project) => (
              <div className={projectCss.details} key={project.id}>
                <img src={project.image} alt={project.name} />
                <div>
                  <p>{project.name}</p>
                  <p>Tools : {project.tools}</p>
                  <p>{project.description}</p>

                <div className={projectCss.btn}>
                  <button className={projectCss.btnGit}>Github <FaGithub size={20}/></button>
                  <button className={projectCss.btnCheck}>Check Live <FaArrowUp size={20} /></button>
                </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default ProjectSection;
