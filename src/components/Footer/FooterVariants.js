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

export const marqueeVariant = {
  visible: {
    x: ["0%", "-50%"],
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "linear",
    },
  },
};