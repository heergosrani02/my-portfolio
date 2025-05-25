import { useRef } from "react";
import emailjs from "@emailjs/browser";

import contactCss from "./ContactSection.module.css";
import { motion } from "motion/react";
import { Element } from "react-scroll";

import { FaArrowUp, FaLinkedin } from "react-icons/fa6";
import { IoMail, IoLocation } from "react-icons/io5";
import { childVariant, staggerVariant, titleVariant } from "./ContactVariants";

function ContactSection() {
  const size = window.innerWidth > 600;
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_epy7orr", "template_izx61sf", form.current, {
        publicKey: "OyzrVGdFTgpZM3d4x",
      })
      .then(
        () => {
          alert("Your message has be sent successfully");
          form.current.reset();
        },
        (error) => {
          alert("Try again..", error.text);
        },
      );
  };

  return (
    <>
      <Element name="Contact">
        <div className={contactCss.container}>
          <motion.div
            variants={titleVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className={contactCss.backWord}>
              <p>Get In Touch</p>
            </div>
            <div className={contactCss.frontWord}>
              <p>Contact Me</p>
            </div>
          </motion.div>

          <motion.div
            className={contactCss.contactMe}
            variants={staggerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div className={contactCss.contacts} variants={childVariant}>
              <div className={contactCss.email}>
                <IoMail size={size ? 30 : 20} />
                <p>Email Us</p>
                <p>gosraniheer@gmail.com</p>
              </div>

              <div className={contactCss.linkedin}>
                <FaLinkedin size={size ? 30 : 20} />
                <p>My Profile</p>
                <p>Heer Gosrani</p>
              </div>

              <div className={contactCss.location}>
                <IoLocation size={size ? 30 : 20} />
                <p>My Location</p>
                <p>Gujarat, India</p>
              </div>
            </motion.div>

            <motion.div
              className={contactCss.contactForm}
              variants={childVariant}
            >
              <motion.div variants={staggerVariant}>
                <motion.div variants={childVariant}>
                  <p>Fill The Form</p>
                </motion.div>
                <form ref={form} onSubmit={sendEmail}>
                  <motion.input
                    variants={childVariant}
                    type="text"
                    name="name"
                    maxLength={20}
                    placeholder="Enter Your Name"
                    autoComplete="name"
                    required
                  />

                  <motion.input
                    variants={childVariant}
                    type="email"
                    name="email"
                    maxLength={50}
                    placeholder="Enter Your Email"
                    autoComplete="email"
                    required
                  />

                  <motion.input
                    variants={childVariant}
                    type="text"
                    name="phoneNumber"
                    inputMode="numeric"
                    maxLength={10}
                    placeholder="Enter Your Phone Number"
                    required
                  />

                  <motion.textarea
                    variants={childVariant}
                    rows={6}
                    name="message"
                    maxLength={500}
                    placeholder="Enter Message"
                    required
                  />

                  <motion.button
                    variants={childVariant}
                    whileTap={{ scale: 0.9, duration: 0.3 }}
                    type="submit"
                    className={contactCss.messageBtn}
                  >
                    Send Message
                    <FaArrowUp
                      size={20}
                      style={{ paddingLeft: "10px", rotate: "39deg" }}
                    />
                  </motion.button>
                </form>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </Element>
    </>
  );
}

export default ContactSection;
