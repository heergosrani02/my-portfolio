import { FaGithub, FaXTwitter, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { motion } from "motion/react";
import socialCss from "./SocialMedia.module.css";
import { itemVariant, mainVariant } from "./SocialVariants";

function SocialMedia() {
  
  const size = window.innerWidth > 600;

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
          <a href="https://github.com/heergosrani02" target="_blank" rel="noopener noreferrer"><FaGithub size={size ? 25 : 18} /></a>
        </motion.div>
        <motion.div
          className={socialCss.twitter}
          variants={itemVariant}
          whileHover={{ x: "10%", y: "-10%" }}
        >
          <a href="https://x.com/_error_1502" target="_blank" rel="noopener noreferrer"><FaXTwitter size={size ? 25 : 18} /></a>
        </motion.div>
        <motion.div
          className={socialCss.linkedin}
          variants={itemVariant}
          whileHover={{ x: "10%", y: "-10%" }}
        >
          <a href="https://www.linkedin.com/in/heer-gosrani-63a057204/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={size ? 25 : 18} /></a>
        </motion.div>
        <motion.div
          className={socialCss.instagram}
          variants={itemVariant}
          whileHover={{ x: "10%", y: "-10%" }}
        >
          <a href="https://www.instagram.com/_error_1502?igsh=bG9jajlqdGUzYWdq" target="_blank" rel="noopener noreferrer"><FaInstagram size={size ? 25 : 18} /></a>
        </motion.div>
      </motion.div>
    </>
  );
}

export default SocialMedia;