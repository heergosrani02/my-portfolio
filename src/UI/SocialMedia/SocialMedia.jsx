import { FaGithub, FaXTwitter, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { AnimatePresence, motion } from "motion/react";
import socialCss from "./SocialMedia.module.css";
import { itemVariant, mainVariant } from "./SocialVariants";

function SocialMedia() {
  return (
    <>
      <AnimatePresence>
        <motion.div
          key="mainDiv"
          className={socialCss.socialMedia}
          variants={mainVariant}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            key="github"
            className={socialCss.github}
            variants={itemVariant}
          >
            <FaGithub size={25} />
          </motion.div>
          <motion.div
            key="twitter"
            className={socialCss.twitter}
            variants={itemVariant}
          >
            <FaXTwitter size={25} />
          </motion.div>
          <motion.div
            key="linkedin"
            className={socialCss.linkedin}
            variants={itemVariant}
          >
            <FaLinkedin size={25} />
          </motion.div>
          <motion.div
            key="instagram"
            className={socialCss.instagram}
            variants={itemVariant}
          >
            <FaInstagram size={25} />
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default SocialMedia;
