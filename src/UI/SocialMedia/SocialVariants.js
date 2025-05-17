export const mainVariant = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.3,
    },
  },
};

export const itemVariant = {
  hidden: {
    opacity: 0,
    y: -5,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3
    },
  },
};
