import React from "react";
import ctx from "windsplit";
import Link from "next/link";
import { motion } from "framer-motion";
import { TbBrandGithub } from "react-icons/tb";

import { Fade } from "@/libs/animation";
import Images from "../Images";

interface ILargeCard {
  src: string;
  title?: string;
  demoUrl: string;
  repository: string;
  description?: string;
  tag: any;
}

const Badge = ({ title }: { title?: string }) => {
  return (
    <li
      className={ctx(
        `rounded-sm text-sm px-2 bg-gray-800 py-[2px] cursor-pointer hover:opacity-75`
      )}>
      {title}
    </li>
  );
};

const Card: React.FC<ILargeCard> = ({ src, title, demoUrl, repository, description, tag }) => {
  return (
    <motion.div
      variants={Fade}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.6 }}
      className="flex flex-col">
      <Images
        src={src}
        alt={title || "Display project developer"}
        size={ctx(`
        w-full h-[185px] border-tlr
        border-gray-600 overflow-hidden
      `)}
        className={ctx(`
        transition-all duration-300
        transform hover:scale-110
      `)}
        onBlur
      />

      <div className="flex items-center justify-between my-2">
        <Link href={demoUrl} target="_blank" className="text-lg font-medium hover:underline">
          {title}
        </Link>

        {repository !== "/" ? (
          <Link href={repository} target="_blank">
            <TbBrandGithub className="text-xl text-white hover:text-sky-500" />
          </Link>
        ) : null}
      </div>
      <p className="line-clamp-2 text-sm text-gray-400 my-2">{description}</p>
      <ul
        className={ctx(`
        flex flex-wrap items-center
        mt-2 list-none gap-2
      `)}>
        {tag.map((item: { title: string | undefined }, index: React.Key | null | undefined) => (
          <Badge key={index} title={item.title} />
        ))}
      </ul>
    </motion.div>
  );
};

export default Card;
