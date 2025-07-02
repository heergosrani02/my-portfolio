import heroCss from "./HeroSection.module.css";
import { motion } from "motion/react";
import { Element } from "react-scroll";

import resumeCv from "./../../assets/Heer_Gosrani_SDE.pdf";

import person from "./../../assets/img/Heer.png";
import { HiDownload } from "react-icons/hi";

import { containerVariant, childVariant, letterVariant } from "./HeroVariants";

import Cursor from "./../../UI/Cursor/Cursor.jsx";

function HeroSection() {
  const letter =
    "- I'm creative developer based in India, and I'm very passionate and dedicated to my work.";

  return (
    <>
      <Element name="Home">
        {window.innerWidth > 1020 ? <Cursor /> : " "}

        <motion.div
          className={heroCss.container}
          variants={containerVariant}
          initial="hidden"
          animate="visible"
        >
          <motion.div className={heroCss.intro} variants={childVariant}>
            <p>Hello, </p>
          </motion.div>

          <motion.div className={heroCss.intro1} variants={childVariant}>
            <p>
              I'm <span>Heer Gosrani</span>,
            </p>
          </motion.div>

          <motion.div className={heroCss.myRole} variants={childVariant}>
            <p>
              a <span>Frontend</span> Developer.
            </p>
          </motion.div>

          <div className={heroCss.heroImg}>
            <motion.img
              src={person}
              alt="person"
              variants={childVariant}
              loading="lazy"
            />
          </div>

          <motion.div className={heroCss.glass} variants={letterVariant}>
            {letter.split("").map((char, index) => {
              return (
                <motion.span key={index} variants={childVariant}>
                  {char}
                </motion.span>
              );
            })}
          </motion.div>

          <motion.div
            className={heroCss.downloadCv}
            variants={childVariant}
            whileHover={{ scale: 1.1, type: "spring" }}
          >
            <a href={resumeCv} download style={{color: "#F5EFEB"}}>
              <p>
                - Download Cv <HiDownload className={heroCss.down} />
              </p>
            </a>
          </motion.div>
        </motion.div>
      </Element>
    </>
  );
}

export default HeroSection;
