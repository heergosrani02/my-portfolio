export const parentVariant = {
    hidden: {},

    visible: {
        transition: {
            staggerChildren: 0.5,
            delayChildren: 0.2
        }
    }
};

export const childVariant = {
  hidden: {
    y: -10,
    opacity: 0,
  },

  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
};
