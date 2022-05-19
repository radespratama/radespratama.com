import React from "react";
import ImageReus from "@component/ImageReus";
import { HeroLinks } from "@lib/HeaderLinks";
import { motion } from "framer-motion";
import Link from "next/link";

const Social = () => {
  return (
    <motion.div
      className="mt-8 flex space-x-7"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.9 }}
    >
      {HeroLinks.map(({ id, path, icon }) => (
        <Link key={id} href={path} passHref>
          <motion.a
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            className="ease"
            target="_blank"
            rel="noopener noreferrer"
          >
            {icon}
          </motion.a>
        </Link>
      ))}
    </motion.div>
  );
};

export default function Hero() {
  return (
    <article className="container mx-auto flex space-x-4 pt-14 lg:pt-20">
      <div className="w-full lg:w-3/4">
        <motion.p
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.3 }}
          className="text-base-rsv tracking-normal"
        >
          Hi, Im
        </motion.p>
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.3 }}
          className="text-6xl-rsv my-2 font-bold tracking-[-0.06em] w-fit"
        >
          Putu Rades Pratama.
        </motion.h1>
        <motion.p
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.3 }}
          className="text-lg-rsv tracking-normal font-medium mb-3 lg:mb-7"
        >
          Junior Software Developer, Blogger and a Student.
        </motion.p>
        <motion.p
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.3 }}
          className="text-base-rsv tracking-tight max-w-lg font-medium text-gray-400 dark:text-gray-500"
        >
          ⚡ Building Web apps, proficient in Frontend. Creating a tutorial web
          components in{" "}
          <a
            href="https://www.instagram.com/devplayhouse/"
            className="underline hover:text-white dark:hover:text-gray-950"
            target="_blank"
            rel="noopener noreferrer"
          >
            IG.
          </a>{" "}
          Likes exploring open source software and Writing articles on my blog
          sometimes.
        </motion.p>

        <Social />
      </div>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          delay: 0.9,
          duration: 0.3,
          stiffness: 260,
          damping: 15,
        }}
        className="w-1/4 hidden sm:inline"
      >
        <ImageReus
          src={
            `https://avatars.githubusercontent.com/u/56097757?v=4` ??
            "/static/images/profile-me.webp"
          }
          alt="Profile"
          size="h-36 w-36 md:w-40 md:h-40"
          imgClass="rounded-full"
        />
      </motion.div>
    </article>
  );
}
