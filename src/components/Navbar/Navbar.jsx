import navbarCss from "./Navbar.module.css";

import { CiMenuFries } from "react-icons/ci";

function Navbar() {
  return (
    <>
      <header>
        <nav>
          <div className={navbarCss.nav}>
            <div className={navbarCss.navLogo}>
              <p>Heer Gosrani.</p>
            </div>

            <div className={navbarCss.links}>
              <CiMenuFries />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
