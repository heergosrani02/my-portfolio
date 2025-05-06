import navbarCss from "./Navbar.module.css";
import { links } from "./../../data.js";

import { CgMenuRightAlt } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";

import { useState } from "react";
import { motion } from "motion/react"
import { stagger } from "motion";

function Navbar() {
  const [isOpen, setOpen] = useState(true);

  const handleMenu = () => {
    setOpen(!isOpen); 
  };

  const transition = {
    duration: 0.8,
    delay: 0.5,
  }

  return (
    <>
      <header>
        <nav>
          <div className={navbarCss.nav}>
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={transition}
              className={navbarCss.navLogo}
            >
              <p>Heer Gosrani.</p>
            </motion.div>
          </div>

          {isOpen ? (
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={transition}
              className={navbarCss.navLinks}
            >
              <CgMenuRightAlt
                size={32}
                onClick={handleMenu}
              />
            </motion.div>
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
