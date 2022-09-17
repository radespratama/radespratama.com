import React from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { BsArrowReturnRight } from "react-icons/bs";

import { A } from "./Links";
import { Fade } from "@/libs/animation";

interface IMiniCard {
  transition?: object;
  title?: string;
  href: string;
}

export const MiniCard: React.FC<IMiniCard> = ({ transition, title, href }) => {
  const router = useRouter();
  return (
    <motion.div
      variants={Fade}
      initial="hidden"
      animate="visible"
      transition={transition}
      onClick={() => router.push(href)}
      className="border-2 border-gray-800 rounded-lg transition-all duration-300 hover:shadow-3d cursor-pointer"
    >
      <div className="p-2 flex items-center justify-between">
        <p className="line-clamp-1 text-base">{title}</p>
        <BsArrowReturnRight />
      </div>
    </motion.div>
  );
};

const Card: React.FC = () => {
  return <></>;
};

export default Card;
