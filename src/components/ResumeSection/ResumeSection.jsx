import resumeCss from "./ResumeSection.module.css";
import { education, experience } from "./../../data.js";

import { motion } from "motion/react"

import { IoSchool } from "react-icons/io5";
import { MdWork } from "react-icons/md";
import { childVariant, staggerVariant, titleVariant } from "./ResumeVariants.js";

function ResumeSection() {
  const size = window.innerWidth > 600;
  return (
    <>
      <section>
        <div className={resumeCss.container}>
          <motion.div variants={titleVariant} initial="hidden" whileInView="visible" viewport={{once: true}}>

          <div className={resumeCss.backWord}>
            <p>Resume</p>
          </div>
          <div className={resumeCss.frontWord}>
            <p>My Resume</p>
          </div>
          </motion.div>

          <motion.div variants={staggerVariant} initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.4}}>
            <motion.div className={resumeCss.title} variants={childVariant}>
              <IoSchool size={ size ? 43 : 30} />
              <p>Education</p>
            </motion.div>

          <div className={resumeCss.border}></div>

          <div className={resumeCss.education}>
            {education.map((edu) => (
              <motion.div className={resumeCss.details} key={edu.id} variants={childVariant}>
                <img src={edu.image} alt="czmgLogo" />
                <div className={resumeCss.inner}>
                  <p>{edu.date}</p>
                  <p>{edu.collegeName}</p>
                  <p>{edu.courseName}</p>
                  <p>{edu.cityName}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div className={resumeCss.title} variants={childVariant}>
            <MdWork size={size ? 43 : 30} />
            <p>Experience</p>
          </motion.div>

          <div className={resumeCss.border}></div>

          <div className={resumeCss.experience}>
            {experience.map((edu) => (
              <motion.div className={resumeCss.details} key={edu.id} variants={childVariant}>
                <img src={edu.image} alt="czmgLogo" />
                <div className={resumeCss.inner}>
                  <p>{edu.date}</p>
                  <p>{edu.companyName}</p>
                  <p>{edu.role}</p>
                  <p>{edu.cityName}</p>
                </div>
              </motion.div>
            ))}
          </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default ResumeSection;
