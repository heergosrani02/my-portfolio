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
                <IoMail size={30} />
                <p>Email :</p>
                <p>gosraniheer@gmail.com</p>
              </div>

              <div className={contactCss.linkedin}>
                <FaLinkedin size={30} />
                <p>Profile :</p>
                <p>Heer Gosrani</p>
              </div>

              <div className={contactCss.location}>
                <IoLocation size={30} />
                <p>Location :</p>
                <p>Gujarat, India</p>
              </div>
            </div>

            <div className={contactCss.contactForm}>
                <p>Fill The Form</p>
                <form>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" placeholder="Enter Your Name" />

                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" placeholder="Enter Your Email" />

                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input type="number" id="phoneNumber" name="phoneNumber" placeholder="Enter Your Phone Number" />

                    <label htmlFor="message">Message</label>
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
