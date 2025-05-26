import footerCss from "./Footer.module.css";
import SocialMedia from "../../UI/SocialMedia/SocialMedia";

import { motion } from "motion/react" ;
import { childVariant, marqueeVariant, parentVariant } from "./FooterVariants";

function Footer() {

  const text = " © 2025 Heer Gosrani. All rights reserved. ";

  return (
    <>
      <motion.div
        variants={parentVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className={footerCss.container}>
          <motion.div className={footerCss.content} variants={childVariant}>
            <div className={footerCss.name}>
              <p>Heer Gosrani.</p>
            </div>
            <div className={footerCss.email}>
              <p>gosraniheer@gmail.com</p>
            </div>
          </motion.div>
          <SocialMedia />
        </div>

        <div className={footerCss.rightsReserved}>
          <motion.div className={footerCss.track} variants={marqueeVariant} animate="visble">
            <span> {text} * {text} * {text} * {text} * </span>
            <span> {text} * {text} * {text} * {text} * </span>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}

export default Footer;