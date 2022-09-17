import React from "react";
import wtl from "windsplit";
import { motion } from "framer-motion";
import { BsArrowReturnRight } from "react-icons/bs";

import { Fade } from "@/libs/animation";
import { A } from "./Links";
import Images from "./Images";
import I from "./Icon";

interface IMiniCard {
  transition?: object;
  title?: string;
  href: string;
}

interface ILargeCard {
  src: string;
  title?: string;
  demoUrl: string;
  repository: string;
  description?: string;
  tag: any;
}

const Badge = ({ title }: { title?: string }) => {
  const tw = {
    container: wtl(`
      rounded-sm text-sm px-2
      bg-gray-800 py-[2px] cursor-pointer
      hover:opacity-75
    `),
  };
  return <li className={tw.container}>{title}</li>;
};

export const MiniCard: React.FC<IMiniCard> = ({ transition, title, href }) => {
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

const Card: React.FC<ILargeCard> = ({
  src,
  title,
  demoUrl,
  repository,
  description,
  tag,
}) => {
  const tw = {
    container: wtl(`
      flex flex-wrap items-center
      mt-2 list-none gap-2
    `),
    imageCover: wtl(`
      w-full h-[185px] border-tlr
      border-gray-600 overflow-hidden
    `),
    imageInside: wtl(`
      transition-all duration-300
      transform hover:scale-110
    `),
  };

  return (
    <motion.div
      variants={Fade}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.6 }}
      className="flex flex-col"
    >
      <Images
        src={src}
        alt={title}
        size={tw.imageCover}
        className={tw.imageInside}
        onBlur
      />

      <div className="flex items-center justify-between my-2">
        <A
          href={demoUrl}
          target="_blank"
          className="text-lg font-medium hover:underline"
        >
          {title}
        </A>

        {repository !== "/" ? (
          <A href={repository} target="_blank">
            <I.Github className="w-5 h-5 stroke-white hover:stroke-sky-500" />
          </A>
        ) : null}
      </div>
      <p className="line-clamp-2 text-sm text-gray-400 my-2">{description}</p>
      <ul className={tw.container}>
        {tag.map(
          (
            item: { title: string | undefined },
            index: React.Key | null | undefined
          ) => (
            <Badge key={index} title={item.title} />
          )
        )}
      </ul>
    </motion.div>
  );
};

export default Card;
