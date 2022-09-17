import React from "react";
import { motion } from "framer-motion";
import wtl from "windsplit";

import { FadeContainer, RevealFade } from "@/libs/animation";

const Intro: React.FC = () => {
  const tw = {
    description: wtl(`
      max-w-lg mx-auto text-base
      xs:text-lg text-gray-500 my-5
    `),
  };
  return (
    <motion.section
      variants={FadeContainer}
      initial="hidden"
      animate="visible"
      className="pt-24 max-w-screen-md mx-auto text-center"
    >
      <motion.h1
        variants={RevealFade}
        initial="hidden"
        animate="visible"
        className="text-4xl sm:text-5xl font-bold"
      >
        <span className="title-mark">Developer</span> Project
      </motion.h1>
      <motion.p
        variants={RevealFade}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.4 }}
        className={tw.description}
      >
        I&apos;ve built cool apps and websites using anything from HTML to React
        (and even PHP!). Here are some of my favorite projects throughout my
        journey.
      </motion.p>
    </motion.section>
  );
};

export default Intro;
