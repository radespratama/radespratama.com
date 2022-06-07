export const FadeContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 1.6,
      staggerChildren: 0.3,
    },
  },
};

export const DefaultAnimate = {
  hidden: { y: -20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export const LanguageMenu = {
  hidden: { y: -50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.05,
    },
  },
};

export const Fade = {
  hidden: { y: -40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export const FadeSideways = {
  hidden: { x: -40, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
  },
};

export const SimpleFade = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
};

export const Image = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 15,
      delay: 1.4,
    },
  },
};

export const transition = {
  type: "spring",
  damping: 25,
  stiffness: 200,
};
