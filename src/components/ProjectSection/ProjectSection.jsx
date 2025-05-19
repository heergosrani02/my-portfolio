import projectCss from "./ProjectSection.module.css";
import { projects } from "./../../data.js";
import { motion } from "motion/react";
import { FaArrowUp, FaGithub } from "react-icons/fa6";
import {
  childVariant,
  parentVariant,
  staggerVariant,
} from "./ProjectVariants.js";

function ProjectSection() {

  const size = window.innerWidth > 600;

  return (
    <>
      <section>
        <div className={projectCss.container}>
          <motion.div
            variants={parentVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{once: true}}
          >
            <div className={projectCss.backWord}>
              <p>My Works</p>
            </div>
            <div className={projectCss.frontWord}>
              <p>Projects</p>
            </div>
          </motion.div>

          <motion.div
            className={projectCss.allProjects}
            variants={staggerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.6, once: true}}
          >
            {projects.map((project) => (
              <motion.div
                className={projectCss.details}
                key={project.id}
                variants={childVariant}
              >
                <img src={project.image} alt={project.name} />
                <motion.div variants={childVariant}>
                  <p>{project.name}</p>
                  <p>Tools : {project.tools}</p>
                  <p>{project.description}</p>

                  <motion.div
                    className={projectCss.btn}
                    variants={childVariant}
                  >
                    <motion.button className={projectCss.btnGit} whileTap={{scale: 0.9, duration:0.3}}>
                      Github
                      <FaGithub style={{paddingLeft: "10px"}} size={ size ? 23 : 16} />
                    </motion.button>
                    <motion.button className={projectCss.btnCheck} whileTap={{scale: 0.9, duration:0.3}}>
                      Check Live
                      <FaArrowUp style={{paddingLeft: "10px", rotate: "39deg"}} size={ size  > 600 ? 23 : 16}/>
                    </motion.button>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default ProjectSection;
