import clsx from "clsx";
import React from "react";
import { motion } from "framer-motion";

import { Fade } from "@/libs/animation";

const Skeleton: React.FC = () => {
  return (
    <motion.div
      variants={Fade}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.6 }}
      className={clsx("flex flex-col")}>
      <div className={clsx("bg-gray-700 w-full h-[185px] animate-pulse rounded-lg")} />
      <div className={clsx("flex justify-between mt-2")}>
        <div className={clsx("w-full max-w-[180px] h-7", "bg-gray-700 animate-pulse rounded-lg")} />
        <div className={clsx("w-full max-w-[40px] h-7", "bg-gray-700 animate-pulse rounded-lg")} />
      </div>
      <div className={clsx("w-full h-7 bg-gray-700 my-2 animate-pulse rounded-lg")} />
      <div className={clsx("w-full max-w-[150px] h-7 bg-gray-700 animate-pulse rounded-lg")} />
    </motion.div>
  );
};

export default Skeleton;
