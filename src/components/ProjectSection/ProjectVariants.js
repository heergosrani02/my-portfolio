export const parentVariant = {
  hidden: {
    opacity: 0,
    y: -20,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.2,
    },
  },
};

export const staggerVariant = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.7,
      delayChildren: 0.3,
    },
  },
};

export const childVariant = {
  hidden: {
    opacity: 0,
    y: -20,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};
