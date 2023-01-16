import { FC, useRef } from "react";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

import I from "@/components/Icon";
import Images from "@/components/Images";
import MiniCard from "@/components/Card/MiniCard";

import { FadeContainer, Fade } from "@/libs/animation";

import { IMiniCard } from "@/types/Response";

const HomeModule: FC<{ project: [IMiniCard] }> = ({ project }) => {
  const constraintsRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  return (
    <article className={clsx("intro-container pt-24", "sm:pt-0 sm:grid-cols-3")}>
      <motion.div
        variants={FadeContainer}
        initial="hidden"
        animate="visible"
        className={clsx("col-span-1", "sm:col-span-2")}>
        <motion.p
          variants={Fade}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.1 }}
          className={clsx("text-lg")}>
          Hi, I&apos;m a junior
        </motion.p>
        <motion.h1
          variants={Fade}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
          className={clsx("intro-heading -mx-2")}>
          Software Developer
        </motion.h1>
        <motion.h5
          variants={Fade}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5 }}
          className={clsx("py-3 text-lg text-gray-500 select-none max-w-lg", "md:text-xl")}>
          <span className={clsx("text-white")}>from Bali, Indonesia.</span> A self-taught developer
          with an interest in Computer Science ⚡
        </motion.h5>
        <motion.div ref={constraintsRef} className={clsx("flex items-center relative max-w-fit")}>
          <I.ArrowSnake
            className={clsx(
              "absolute -top-[7.2rem] -left-[5.5rem]",
              "w-[84px] h-[172px] fill-white"
            )}
          />
          <motion.button
            drag
            dragConstraints={constraintsRef}
            variants={Fade}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.7 }}
            onClick={() => router.push("/contacts")}
            className={clsx("intro-button")}>
            <I.Mail className={clsx("w-5 h-5 mr-2")} />
            Let&apos;s talk
          </motion.button>
        </motion.div>
      </motion.div>
      <div className={clsx("col-span-1 relative mt-4", "xl:mt-0")}>
        <motion.div
          initial={{ opacity: 0, y: 20, rotate: 3 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className={clsx("profile-card")}>
          <I.Notification className={clsx("-right-1 -top-2")} />
          <Images
            src="/static/profile-me.jpg"
            alt="Rades Pratama"
            size="h-14 w-14"
            className={clsx("rounded-xl")}
          />
          <span className={clsx("text-xl font-medium ml-3")}>
            Let&apos;s Explore My{" "}
            <Link href="/projects" className={clsx("text-emerald-500")}>
              Portfolio
            </Link>
          </span>
        </motion.div>
        <I.ArrowSnake
          className={clsx(
            "absolute hidden top-[1rem] -right-[3.8rem]",
            "w-[60px] h-[120px] -rotate-12 transform -scale-x-100 fill-white",
            "xl:inline"
          )}
        />
        <div className={clsx("space-y-5 pb-10")}>
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
