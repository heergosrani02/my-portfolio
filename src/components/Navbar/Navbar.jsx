import navbarCss from "./Navbar.module.css";
import { links } from "./../../data.js";

import { CiMenuFries } from "react-icons/ci";
import { IoSunny, IoMoon } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

function Navbar() {
  return (
    <>
      <header>
        <nav>
          <div className={navbarCss.nav}>
            <div className={navbarCss.navLogo}>
              <p>Heer Gosrani.</p>
            </div>

            <div className={navbarCss.toggleBtn}>
              <IoMoon />
            </div>

            <div className={navbarCss.navLinks}>
              <div className={navbarCss.menuBtn}>
                <CiMenuFries size={22} />
              </div>
            </div>
          </div>
          
          <div className={navbarCss.navContainer}>
            <RxCross2 size={32} className={navbarCss.cross}/>
            <ul>
              {links.map((name, index) => (
                <li key={index}>{name}</li>
              ))}
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
