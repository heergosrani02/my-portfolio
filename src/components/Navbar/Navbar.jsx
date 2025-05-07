import navbarCss from "./Navbar.module.css";
import { links } from "./../../data.js";

import { CgMenuRightAlt } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";

import { useState } from "react";

function Navbar() {
  const [isOpen, setOpen] = useState(true);

  const handleMenu = () => {
    setOpen(!isOpen); 
  };

  return (
    <>
      <header>
        <nav>
          <div className={navbarCss.nav}>
            <div className={navbarCss.navLogo}>
              <p>HG.</p>
            </div>
          </div>

          {isOpen ? (
            <div className={navbarCss.navLinks}>
              <CgMenuRightAlt size={32} onClick={handleMenu} />
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
