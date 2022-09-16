import React from "react";
import { motion } from "framer-motion";
import { BsArrowReturnRight } from "react-icons/bs";

import { A } from "./Links";
import { Fade } from "@/libs/animation";

interface IMiniCard {
  transition?: object;
  title?: string;
}

export const MiniCard: React.FC<IMiniCard> = ({ transition, title }) => {
  return (
    <motion.div
      variants={Fade}
      initial="hidden"
      animate="visible"
      transition={transition}
      className="border-2 border-gray-800 rounded-lg transition-all duration-300 hover:shadow-3d overflow-hidden"
    >
      <div className="p-2 flex justify-between">
        <p className="line-clamp-1 text-base">{title}</p>
        <A href="/" className="inline-flex items-center">
          <BsArrowReturnRight />
        </A>
      </div>
    </motion.div>
  );
};

const Card: React.FC = () => {
  return <></>;
};

export default Card;
