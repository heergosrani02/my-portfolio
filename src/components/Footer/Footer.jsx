import footerCss from "./Footer.module.css";
import SocialMedia from "../../UI/SocialMedia/SocialMedia";

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

          <SocialMedia />
        </div>
      </div>

      <div className={footerCss.rightsReserved}>
        <p>© 2025 Heer Gosrani. All rights reserved.</p>
      </div>

      <div className={footerCss.conditions}>
        <div className={footerCss.privacyPolicy}>Privacy Policy</div>

        <div className={footerCss.terms}>Terms & Conditions</div>
      </div>
    </>
  );
}

export default Footer;