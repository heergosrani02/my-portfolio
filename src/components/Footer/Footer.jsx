import footerCss from "./Footer.module.css";

import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className={footerCss.container}>
        <div className={footerCss.content}>
          <div className={footerCss.name}>
            <p>Heer Gosrani.</p>
          </div>
          <div className={footerCss.email}>
            <p>gosraniheer@gmail.com</p>
          </div>

          <div className={footerCss.socialMedia}>
            <div className={footerCss.github}>
              <FaGithub size={25} />
            </div>
            <div className={footerCss.twitter}>
              <FaXTwitter size={25} />
            </div>
            <div className={footerCss.linkedin}>
              <FaLinkedin size={25} />
            </div>
            <div className={footerCss.instagram}>
              <FaInstagram size={25} />
            </div>
          </div>
        </div>

        <div className={footerCss.rightsReserved}>
            <p>© 2025 Heer Gosrani. All rights reserved.</p>
        </div>

        <div className={footerCss.conditions}>
            <div className={footerCss.privacyPolicy}>
                Privacy Policy
            </div>

            <div className={footerCss.terms}>
                Terms & Conditions
            </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
