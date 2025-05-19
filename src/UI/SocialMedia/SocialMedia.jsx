import { FaGithub, FaXTwitter, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { motion } from "motion/react";
import socialCss from "./SocialMedia.module.css";
import { itemVariant, mainVariant } from "./SocialVariants";

function SocialMedia() {
  return (
    <>
      <motion.div
        className={socialCss.socialMedia}
        variants={mainVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{once: true}}
      >
        <motion.div
          className={socialCss.github}
          variants={itemVariant}
          whileHover={{ x: "10%", y: "-10%" }}
        >
          <FaGithub size={25} />
        </motion.div>
        <motion.div
          className={socialCss.twitter}
          variants={itemVariant}
          whileHover={{ x: "10%", y: "-10%" }}
        >
          <FaXTwitter size={25} />
        </motion.div>
        <motion.div
          className={socialCss.linkedin}
          variants={itemVariant}
          whileHover={{ x: "10%", y: "-10%" }}
        >
          <FaLinkedin size={25} />
        </motion.div>
        <motion.div
          className={socialCss.instagram}
          variants={itemVariant}
          whileHover={{ x: "10%", y: "-10%" }}
        >
          <FaInstagram size={25} />
        </motion.div>
      </motion.div>
    </>
  );
}

export default SocialMedia;