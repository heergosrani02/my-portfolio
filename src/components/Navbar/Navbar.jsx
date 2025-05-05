import navbarCss from "./Navbar.module.css";
import { links } from "./../../data.js";

import { CiMenuFries } from "react-icons/ci";
import { IoSunny, IoMoon } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";

function Navbar() {
  const [isOpen, setOpen] = useState(true);
  const [theme, setTheme] = useState(true);

  const handleMenu = () => {
    setOpen(!isOpen); 
  };

  const toggleTheme = () => {
    setTheme(!theme);
  }

  return (
    <>
      <header>
        <nav>
          <div className={navbarCss.nav}>
            <div className={navbarCss.navLogo}>
              <p>Heer Gosrani.</p>
            </div>

            <div className={navbarCss.toggleBtn}>
              {theme ? (<IoMoon onClick={toggleTheme} />) : (<IoSunny color={"white"} onClick={toggleTheme}/>)}
            </div>
          </div>

          {isOpen ? (
            <div className={navbarCss.navLinks}>
              <CiMenuFries
                size={22}
                onClick={handleMenu}
                className={navbarCss.menuBtn}
              />
            </div>
          ) : (
            <div className={navbarCss.navContainer}>
              <RxCross2
                size={32}
                onClick={handleMenu}
                className={navbarCss.cross}
              />

              <ul>
                {links.map((name, index) => (
                  <li key={index}>{name}</li>
                ))}
              </ul>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}

export default Navbar;
