import { FC, useRef } from "react";
import ctx from "windsplit";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

import I from "@/components/Icon";
import Images from "@/components/Images";
import MiniCard from "@/components/Card/MiniCard";

import { FadeContainer, Fade } from "@/libs/animation";

import { IMiniCard } from "@/types/response";

const HomeModule: FC<{ project: [IMiniCard] }> = ({ project }) => {
  const constraintsRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  return (
    <article className="intro-container sm:pt-0 pt-24 sm:grid-cols-3">
      <motion.div
        variants={FadeContainer}
        initial="hidden"
        animate="visible"
        className="col-span-1 sm:col-span-2">
        <motion.p
          variants={Fade}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.1 }}
          className="text-lg">
          Hi, I&apos;m a junior
        </motion.p>
        <motion.h1
          variants={Fade}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
          className="intro-heading -mx-2">
          Software Developer
        </motion.h1>
        <motion.h5
          variants={Fade}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5 }}
          className="py-3 text-lg md:text-xl text-gray-500 select-none max-w-lg">
          <span className="text-white">from Bali, Indonesia.</span> A self-taught developer with an
          interest in Computer Science ⚡
        </motion.h5>
        <motion.div ref={constraintsRef} className="flex items-center relative max-w-fit">
          <I.ArrowSnake className="absolute -top-[7.2rem] -left-[5.5rem] w-[84px] h-[172px] fill-white" />
          <motion.button
            drag
            dragConstraints={constraintsRef}
            variants={Fade}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.7 }}
            onClick={() => router.push("/contacts")}
            className="intro-button">
            <I.Mail className="w-5 h-5 mr-2" />
            Let&apos;s talk
          </motion.button>
        </motion.div>
      </motion.div>
      <div className="col-span-1 relative mt-4 xl:mt-0">
        <motion.div
          initial={{ opacity: 0, y: 20, rotate: 3 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="profile-card">
          <I.Notification className="-right-1 -top-2" />
          <Images
            src="/static/profile-me.jpg"
            alt="Rades Pratama"
            size="h-14 w-14"
            className="rounded-xl"
          />
          <span className="text-xl font-medium ml-3">
            Let&apos;s Explore My{" "}
            <Link href="/projects" className="text-emerald-500">
              Portfolio
            </Link>
          </span>
        </motion.div>
        <I.ArrowSnake
          className={ctx(
            `absolute hidden xl:inline top-[1rem] -right-[3.8rem] w-[60px] 
            h-[120px] -rotate-12 transform -scale-x-100 fill-white
          `
          )}
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

export default HomeModule;
