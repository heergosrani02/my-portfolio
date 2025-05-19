import footerCss from "./Footer.module.css";
import SocialMedia from "../../UI/SocialMedia/SocialMedia";

import { motion } from "motion/react" ;
import { childVariant, parentVariant } from "./FooterVariants";

function Footer() {
  return (
    <>
    <motion.div variants={parentVariant} initial="hidden" whileInView="visible" viewport={{once: true}}>
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

      <motion.div className={footerCss.rightsReserved} variants={childVariant}>
        <p>© 2025 Heer Gosrani. All rights reserved.</p>
      </motion.div>

      <motion.div className={footerCss.conditions} variants={childVariant}>
        <div className={footerCss.privacyPolicy}>Privacy Policy</div>

        <div className={footerCss.terms} >Terms & Conditions</div>
      </motion.div>
      </motion.div>
    </>
  );
}

export default Footer;