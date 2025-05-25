import aboutCss from "./AboutSection.module.css"
import { Element } from "react-scroll";

import resumeCv from "./../../assets/Heer_Gosrani_SDE.pdf";

import { HiDownload } from "react-icons/hi"
import SocialMedia from "./../../UI/SocialMedia/SocialMedia.jsx";

import { motion } from "motion/react";

import { techStack } from "../../data.js";
import { parentVariant, childVariant, techVariant, stackVariant } from "./AboutVariants.js";

function AboutSection(){
    return (
      <>
        <Element name="About">
          <motion.div
            className={aboutCss.container}
            variants={parentVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div variants={childVariant}>
              <div className={aboutCss.backWord}>
                <p>About Me</p>
              </div>
              <div className={aboutCss.frontWord}>
                <p>About Me</p>
              </div>
            </motion.div>

            <motion.div className={aboutCss.intro} variants={childVariant}>
              <p>
                - Hi, I'm <span> Heer Gosrani</span>, a passionate and
                self-driven <span> MERN Stack Developer</span>. I specialize in
                creating full-stack web applications that are fast, scalable,
                and user-friendly. My journey into web development began with a
                strong curiosity about how digital products work — and it
                quickly turned into a full-blown obsession with building them.
              </p>
            </motion.div>

            <motion.div className={aboutCss.info} variants={childVariant}>
              <p>
                - Currently, I'm focused on mastering{" "}
                <span> API integrations</span> in React and exploring ways to
                optimize app performance and user experience. I believe in
                writing clean, efficient code and love turning ideas into
                working products that people can actually use.
              </p>
            </motion.div>

            <motion.div className={aboutCss.email} variants={childVariant}>
              <p> - My Email : gosraniheer@gmail.com</p>
            </motion.div>

            <motion.div className={aboutCss.btnDiv} variants={childVariant}>
              <a href={resumeCv} download>
                <motion.button
                  className={aboutCss.cvBtn}
                  whileTap={{ scale: 0.9 }}
                  whileHover={{ x: "2%", y: "-2%" }}
                >
                  Download Cv
                  <HiDownload style={{ position: "relative", top: "3px" }} />
                </motion.button>
              </a>

              <p className={aboutCss.connect}> - Let's Connect : </p>

              <div className={aboutCss.socialMedia}>
                <SocialMedia />
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className={aboutCss.techstack}
            variants={techVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className={aboutCss.back}>
              <p>Specilalites</p>
            </div>
            <div className={aboutCss.front}>
              <p>My Techstack</p>
            </div>
          </motion.div>

          <motion.div
            className={aboutCss.tech}
            variants={parentVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                className={aboutCss.stack}
                variants={stackVariant}
                whileHover={{ scale: 0.9, type: "spring" }}
              >
                <img src={tech.image} alt={tech.name} loading="lazy" />
                <p>{tech.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </Element>
      </>
    );
}

export default AboutSection