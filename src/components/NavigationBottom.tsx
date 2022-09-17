import React from "react";
import wtl from "windsplit";
import { motion } from "framer-motion";

import { BsInstagram, BsLinkedin, BsFileEarmarkTextFill } from "react-icons/bs";
import { A } from "./Links";

const NavigationBottom: React.FC = () => {
  const tw = {
    container: wtl(`
      navigation bottom-4 w-full max-w-[320px]
      xs:max-w-[350px] bg-gray-950 border-[3px]
      border-gray-800 rounded-lg hidden md:inline
    `),
    centering: wtl(`
      inline-flex justify-center
      items-center
    `),
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.2 }}
      transition={{ type: "spring", stiffness: 100 }}
      className={tw.container}
    >
      <nav className="p-3 grid grid-cols-3 gap-3">
        <A
          href="https://instagram.com/radespratamaa"
          target="_blank"
          className={`${tw.centering} hover:text-red-400`}
        >
          <BsInstagram className="mr-1" />
          Instagram
        </A>
        <A
          href="https://linkedin.com/in/radespratama"
          target="_blank"
          className={`${tw.centering} hover:text-sky-400`}
        >
          <BsLinkedin className="mr-1" />
          Linkedin
        </A>
        <A
          href="https://tinyurl.com/sayhiforyou"
          target="_blank"
          className={`${tw.centering} hover:text-emerald-400`}
        >
          <BsFileEarmarkTextFill className="mr-1" />
          Resume
        </A>
      </nav>
    </motion.div>
  );
};

export default NavigationBottom;
