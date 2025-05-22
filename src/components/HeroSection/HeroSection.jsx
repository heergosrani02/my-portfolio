import heroCss from "./HeroSection.module.css";
import { motion } from "motion/react";

import person from "./../../assets/img/heer.png";
import { HiDownload } from "react-icons/hi";

import { containerVariant, childVariant, letterVariant } from "./HeroVariants";

function HeroSection() {
  const letter =
    "- I'm creative developer, and designer based in India, and I'm very passionate and dedicated to my work.";

  return (
    <>
      <section>
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
              a <span>Software</span> Developer.
            </p>
          </motion.div>

          <div className={heroCss.heroImg}>
            <motion.img src={person} alt="person" variants={childVariant} loading="lazy"/>
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
            <p>
              - Download Cv <HiDownload className={heroCss.down} />
            </p>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}

export default HeroSection;