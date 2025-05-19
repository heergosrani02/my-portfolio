import contactCss from "./ContactSection.module.css";
import { motion } from "motion/react"

import { FaArrowUp, FaLinkedin } from "react-icons/fa6";
import { IoMail, IoLocation } from "react-icons/io5";
import { childVariant, staggerVariant, titleVariant } from "./ContactVariants";

function ContactSection() {

  const size = window.innerWidth > 600;

  return (
    <>
      <section>
        <div className={contactCss.container}>
          <motion.div variants={titleVariant} initial="hidden" whileInView="visible" viewport={{once: true}}>
          <div className={contactCss.backWord}>
            <p>Get In Touch</p>
          </div>
          <div className={contactCss.frontWord}>
            <p>Contact Me</p>
          </div>
          </motion.div>

          <motion.div className={contactCss.contactMe} variants={staggerVariant} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3}}>
            <motion.div className={contactCss.contacts} variants={childVariant}>
              <div className={contactCss.email}>
                <IoMail size={size ? 30 : 20} />
                <p>Email Us</p>
                <p>gosraniheer@gmail.com</p>
              </div>

              <div className={contactCss.linkedin}>
                <FaLinkedin size={ size ? 30 : 20} />
                <p>My Profile</p>
                <p>Heer Gosrani</p>
              </div>

              <div className={contactCss.location}>
                <IoLocation size={size ? 30 : 20} />
                <p>My Location</p>
                <p>Gujarat, India</p>
              </div>
            </motion.div>

            <motion.div className={contactCss.contactForm} variants={childVariant}>
              <motion.div variants={staggerVariant}>
              <motion.div variants={childVariant}>
                <p>Fill The Form</p>
              </motion.div>
                <form>
                    <motion.input variants={childVariant} type="text" id="name" name="name" placeholder="Enter Your Name" />

                    <motion.input variants={childVariant} type="text" id="email" placeholder="Enter Your Email" />

                    <motion.input variants={childVariant} type="number" id="phoneNumber" name="phoneNumber" placeholder="Enter Your Phone Number" />

                    <motion.textarea variants={childVariant} type="text" id="message" name="message" placeholder="Enter Message" />
                    
                    <motion.button variants={childVariant} whileTap={{scale: 0.9, duration: 0.3}} type="button" className={contactCss.messageBtn}>Send Message 
                      <FaArrowUp size={20} style={{paddingLeft: "10px", rotate: "39deg"}}/>
                    </motion.button>
                </form>
            </motion.div>
            </motion.div>
            </motion.div>
        </div>
      </section>
    </>
  );
}

export default ContactSection;
