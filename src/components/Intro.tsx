import React, { useRef } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import wtl from "windsplit";

import I from "./Icon";
import { MiniCard } from "./Card";
import Images from "./Images";

import { FadeContainer, Fade } from "@/libs/animation";
import { IMiniCard } from "@/types/Response";
import { A } from "./Links";

const Intro: React.FC<{ project: [IMiniCard] }> = ({ project }) => {
  const constraintsRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const tw = {
    container: wtl(`
      grid-cols-1 sm:grid-cols-3 gap-4
      max-w-screen-md mx-auto px-3 
      xl:px-0 grid sm:pt-0 pt-24
      min-h-screen place-items-center
    `),
    heading: wtl(`
      font-bold py-2 tracking-tight cursor-pointer
      title leading-none heading select-none
      text-shadow -mx-2
    `),
    description: wtl(`
      py-3 text-lg md:text-xl
      text-gray-500 select-none
      max-w-lg
    `),
    button: wtl(`
      my-4 px-8 py-2 flex items-center
      bg-emerald-400 hover:bg-white text-gray-900
      text-lg font-medium rounded-lg cursor-pointer
    `),
    socialButton: wtl(`
      px-6 py-2 rounded-lg
      flex items-center
    `),
    profileCard: wtl(`
      border-2 border-sky-400 rounded-me
      -mt-0 md:-mt-3 bg-gray-950 p-2 w-full
      flex items-center cursor-pointer mb-10
    `),
  };

  return (
    <article className={tw.container}>
      <motion.div
        variants={FadeContainer}
        initial="hidden"
        animate="visible"
        className="col-span-1 sm:col-span-2"
      >
        <motion.p
          variants={Fade}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.1 }}
          className="text-lg"
        >
          Hi, I&apos;m a Junior
        </motion.p>
        <motion.h1
          variants={Fade}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
          className={tw.heading}
        >
          Software Developer
        </motion.h1>
        <motion.h5
          variants={Fade}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5 }}
          className={tw.description}
        >
          <span className="text-white">
            A self-taught developer with an interest in Computer Science.
          </span>{" "}
          I hope you will get to know a little bit about me and enjoy my work.
        </motion.h5>
        <motion.div
          ref={constraintsRef}
          className="flex items-center relative max-w-fit"
        >
          <I.ArrowSnake className="absolute -top-[7.2rem] -left-[5.5rem] w-[84px] h-[172px] fill-white" />
          <motion.button
            drag
            dragConstraints={constraintsRef}
            variants={Fade}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.7 }}
            onClick={() => router.push("/contacts")}
            className={tw.button}
          >
            <I.Mail className="w-5 h-5 mr-2" />
            Let&apos;s talk
          </motion.button>
        </motion.div>
      </motion.div>

      <div className="col-span-1 relative">
        <motion.div
          initial={{ opacity: 0, y: 20, rotate: 3 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className={tw.profileCard}
        >
          <I.Notification className="-right-1 -top-2" />
          <Images
            src="/static/profile-me.jpg"
            size="h-14 w-14"
            className="rounded-xl"
          />

          <span className="text-xl font-medium ml-3">
            Let&apos;s Explore My{" "}
            <A href="/projects" className="text-emerald-500">Portfolio</A>
          </span>
        </motion.div>
        <I.ArrowSnake
          className={`absolute hidden xl:inline top-[1rem] -right-[3.8rem]
          w-[60px] h-[120px] -rotate-12 transform -scale-x-100
          fill-white`}
        />

        <div className="space-y-5 pb-10">
          {project?.map(({ _id, title, demoUrl }, index) => (
            <MiniCard
              key={_id}
              href={demoUrl}
              title={title}
              transition={{ delay: 0.8 + index - 0.4 }}
            />
          ))}
        </div>
      </div>
    </article>
  );
};

export default Intro;
