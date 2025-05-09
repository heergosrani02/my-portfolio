import aboutCss from "./AboutSection.module.css"

import { HiDownload } from "react-icons/hi"
import { FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function AboutSection(){
    return (
      <>
        <div className={aboutCss.container}>
          <div className={aboutCss.backWord}>
            <p>About Me</p>
          </div>
          <div className={aboutCss.frontWord}>
            <p>About Me</p>
          </div>

          <div className={aboutCss.intro}>
            <p>
              - Hi, I'm <span>Heer Gosrani</span>, a passionate and self-driven{" "}
              <span>MERN Stack Developer</span>. I specialize in creating
              full-stack web applications that are fast, scalable, and
              user-friendly. My journey into web development began with a strong
              curiosity about how digital products work — and it quickly turned
              into a full-blown obsession with building them.
            </p>
          </div>

          <div className={aboutCss.info}>
            <p>
              - Currently, I'm focused on mastering{" "}
              <span>API integrations</span> in React and exploring ways to
              optimize app performance and user experience. I believe in writing
              clean, efficient code and love turning ideas into working products
              that people can actually use.
            </p>
          </div>

          <div className={aboutCss.email}>
            <p> - My Email : gosraniheer@gmail.com</p>
          </div>

          <div className={aboutCss.btnDiv}>
            <button className={aboutCss.cvBtn}>
              Download Cv
              <HiDownload style={{ position: "relative", top: "3px" }} />
            </button>

            <p className={aboutCss.connect}> -- Let's Connect : </p>

            <div className={aboutCss.socialMedia}>
              <div className={aboutCss.github}>
                <FaGithub size={25} />
              </div>
              <div className={aboutCss.twitter}>
                <FaXTwitter size={25} />
              </div>
              <div className={aboutCss.instagram}>
                <FaInstagram size={25} />
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default AboutSection