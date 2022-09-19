import React from "react";
import { motion } from "framer-motion";
import { BsArrowReturnRight } from "react-icons/bs";

import { Fade } from "@/libs/animation";
import { A } from "./Links";

interface IMiniCard {
  transition?: object;
  title?: string;
  href: string;
}

const MiniCard: React.FC<IMiniCard> = ({ transition, title, href }) => {
  return (
    <motion.div
      variants={Fade}
      initial="hidden"
      animate="visible"
      transition={transition}
      className="border-2 border-gray-800 rounded-lg transition-all duration-300 hover:shadow-3d cursor-pointer"
    >
      <A
        href={href}
        target="_blank"
        className="p-2 flex items-center justify-between"
      >
        <p className="line-clamp-1 text-base">{title}</p>
        <BsArrowReturnRight />
      </A>
    </motion.div>
  );
};

export default MiniCard;
