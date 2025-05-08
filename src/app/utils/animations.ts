export const fadeIn = (direction: string, delay: number) => {
  return {
    hidden: {
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
      opacity: 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.8,
        delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

export const staggerContainer = (
  staggerChildren: number,
  delayChildren: number
) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  };
};

export const textVariant = (delay: number) => {
  return {
    hidden: {
      y: 50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay,
      },
    },
  };
};

export const slideIn = (
  direction: string,
  type: string,
  delay: number,
  duration: number
) => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type,
        delay,
        duration,
        ease: "easeOut",
      },
    },
  };
};

export const zoomIn = (delay: number, duration: number) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay,
        duration,
        ease: "easeOut",
      },
    },
  };
};

export const buttonHoverVariants = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
      yoyo: Infinity,
      ease: "easeInOut",
    },
  },
};

export const floatAnimation = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  },
};

export const rippleAnimation = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [0.7, 0.9, 0.7],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const cardHoverVariants = {
  hover: {
    y: -8,
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

export const advancedTextAnimation = (delay: number = 0) => {
  return {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        delay,
        duration: 1,
      },
    },
  };
};

export const letterAnimation = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.5,
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  }),
};

export const heroImageAnimation = {
  hidden: {
    scale: 0.8,
    opacity: 0,
    rotateY: 40,
    filter: "blur(10px)",
  },
  visible: {
    scale: 1,
    opacity: 1,
    rotateY: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 80,
      duration: 1.2,
    },
  },
};

export const formFieldAnimation = (delay: number = 0) => {
  return {
    hidden: {
      opacity: 0,
      x: -50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay,
      },
    },
    focus: {
      scale: 1.02,
      boxShadow: "0 0 25px rgba(255, 126, 51, 0.6)",
      borderColor: "var(--primary)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };
};

export const formShineEffect = {
  hidden: {
    opacity: 0,
    x: "-100%",
  },
  visible: {
    opacity: [0, 0.5, 0],
    x: "100%",
    transition: {
      repeat: Infinity,
      repeatDelay: 5,
      duration: 1.5,
      ease: "easeInOut",
    },
  },
};

export const heroButtonAnimation = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      type: "easeInOut",
      duration: 0.3,
    },
  }),
  hover: {
    scale: 1.1,
    boxShadow: "0 10px 20px rgba(255, 126, 51, 0.4)",
    transition: {
      type: "easeInOut",
      duration: 0.3,
    },
  },
  tap: {
    scale: 0.95,
    boxShadow: "0 5px 10px rgba(255, 126, 51, 0.2)",
  },
};
