import contactCss from "./ContactSection.module.css";

import { FaArrowUp, FaLinkedin } from "react-icons/fa6";
import { IoMail, IoLocation } from "react-icons/io5";

function ContactSection() {
  return (
    <>
      <section>
        <div className={contactCss.container}>
          <div className={contactCss.backWord}>
            <p>Get In Touch</p>
          </div>
          <div className={contactCss.frontWord}>
            <p>Contact Me</p>
          </div>

          <div className={contactCss.contactMe}>
            <div className={contactCss.contacts}>
              <div className={contactCss.email}>
                <IoMail size={window.innerWidth > 600 ? 30 : 20} />
                <p>Email Us</p>
                <p>gosraniheer@gmail.com</p>
              </div>

              <div className={contactCss.linkedin}>
                <FaLinkedin size={window.innerWidth > 600 ? 30 : 20} />
                <p>My Profile</p>
                <p>Heer Gosrani</p>
              </div>

              <div className={contactCss.location}>
                <IoLocation size={window.innerWidth > 600 ? 30 : 20} />
                <p>My Location</p>
                <p>Gujarat, India</p>
              </div>
            </div>

            <div className={contactCss.contactForm}>
                <p>Fill The Form</p>
                <form>
                    <input type="text" id="name" name="name" placeholder="Enter Your Name" />

                    <input type="text" id="email" placeholder="Enter Your Email" />

                    <input type="number" id="phoneNumber" name="phoneNumber" placeholder="Enter Your Phone Number" />

                    <textarea type="text" id="message" name="message" placeholder="Enter Message" />
                    
                    <button className={contactCss.messageBtn}>Send Message <FaArrowUp size={20} /></button>
                </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactSection;
