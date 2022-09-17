import { Variants } from "framer-motion";

export const Fade: Variants = {
  hidden: { y: -10, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export const FadeContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

export const RevealFade: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    opacity: 1,
    y: 0,
  },
};
