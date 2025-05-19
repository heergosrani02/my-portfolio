import navbarCss from "./Navbar.module.css";
import SocialMedia from "../../UI/SocialMedia/SocialMedia.jsx";
import {
  divVariant,
  itemVariant,
  listVariant,
  logoVariant,
  menuVariant,
  navVariant,
} from "./NavbarVariants.js";
import { links } from "./../../data.js";

import { CgMenuRightAlt } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

function Navbar() {
  const [isOpen, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <header>
        <motion.nav variants={navVariant} initial="hidden" animate="visible">
          <div className={navbarCss.nav}>
            <motion.div
              className={navbarCss.navLogo}
              variants={logoVariant}
              initial="hidden"
              animate="visible"
            >
              <p>HG.</p>
            </motion.div>
          </div>

          <AnimatePresence>
            {!isOpen && (
              <motion.div
                key="menu"
                className={navbarCss.navMenu}
                variants={menuVariant}
                initial="hidden"
                animate="visible"
              >
                <CgMenuRightAlt size={32} onClick={handleMenu} />
              </motion.div>
            )} 
            
            {isOpen && (
              <motion.div
                key="nav"
                className={navbarCss.navContainer}
                variants={divVariant}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <motion.div variants={menuVariant}>
                <RxCross2
                  size={32}
                  onClick={handleMenu}
                  className={navbarCss.cross}
                />
                </motion.div>

                <motion.ul
                  variants={listVariant}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  {links.map((name, index) => (
                    <motion.li
                      key={index}
                      variants={itemVariant}
                      whileHover={{scale: 1.05, y:-5}}
                    >
                      <p>{name}</p>
                    </motion.li>
                  ))}
                </motion.ul>

                <SocialMedia />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      </header>
    </>
  );
}

export default Navbar;
