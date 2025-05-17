export const navVariant = {
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.6
    },
  },
};

export const logoVariant = {
  hidden: {
    opacity: 0,
    y: -40,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition:{
        duration: 0.7
    },
  },
};

export const menuVariant = {
  hidden: {
    opacity: 0,
    y: -40,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition:{
        duration: 0.7,
        delay: 0.4
    },
  },
};

export const divVariant = {
    hidden: {
        opacity: 0,
        x: "100vw", 
    },

    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        }
    },

    exit:{
      opacity: 0,
      x: "100vw",
      transition: {
        duration: 0.6,
        ease: "easeIn",
      }
    }
};

export const listVariant = {
  hidden:{},

  visible: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.3
    },
  },
};

export const itemVariant={
  hidden:{
    opacity: 0,
    y: 20,
  },

  visible:{
    opacity:1,
    y:0,
    transition: {
      duration: 0.3,
      type: "spring",
    },
  },
}