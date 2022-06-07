import Link from "next/link";
import { motion } from "framer-motion";
import * as A from "@lib/animation";
import { SocialLinks } from "@lib/utils/DataLinks";
import ImageReus from "@component/ImageReus";
import { ArrowRight } from "@component/Icon";

function Social() {
  return (
    <motion.div
      className="mt-8 flex space-x-7"
      variants={A.FadeContainer}
      initial="hidden"
      animate="visible"
    >
      {SocialLinks.map(({ id, path, icon }) => (
        <Link key={id} href={path} passHref>
          <motion.a
            whileHover={{ scale: 1.8 }}
            whileTap={{ scale: 0.8 }}
            variants={A.Fade}
            className="ease fill-gray-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            {icon}
          </motion.a>
        </Link>
      ))}
    </motion.div>
  );
}

export default function Hero() {
  return (
    <article className="container mx-auto min-h-screen flex space-x-4 pt-20 lg:pt-[120px]">
      <div className="w-full lg:w-3/4">
        <motion.p
          variants={A.DefaultAnimate}
          initial="hidden"
          animate="visible"
          className="text-base-rsv tracking-normal"
          transition={{ delay: 0.5, duration: 0.3 }}
        >
          Hi, Im
        </motion.p>
        <motion.h1
          variants={A.DefaultAnimate}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.7, duration: 0.3 }}
          className="text-6xl-rsv my-2 font-bold tracking-[-0.06em] w-fit"
        >
          Putu Rades Pratama.
        </motion.h1>
        <motion.p
          variants={A.DefaultAnimate}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.9, duration: 0.3 }}
          className="text-lg-rsv tracking-normal font-medium mb-5 lg:mb-6"
        >
          Software Developer, Blogger and a Student.
        </motion.p>
        <motion.p
          variants={A.DefaultAnimate}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.2, duration: 0.3 }}
          className="text-base-rsv text-left tracking-tight max-w-lg font-medium text-gray-400 dark:text-gray-500"
        >
          ⚡ Building Web apps. Creating a tutorial web components in{" "}
          <a
            href="https://www.instagram.com/devplayhouse/"
            className="underline hover:text-white dark:hover:text-gray-950"
            target="_blank"
            rel="noopener noreferrer"
          >
            IG.
          </a>{" "}
          Likes exploring open source software and Writing articles on my blog sometimes.
        </motion.p>
        <Link href="/blog">
          <motion.a
            variants={A.DefaultAnimate}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.4, duration: 0.3 }}
            className="call-to cursor-silence"
          >
            Read my Blog
            <ArrowRight classNames="w-6 h-6" />
          </motion.a>
        </Link>

        <Social />
      </div>
      <motion.div
        variants={A.Image}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.3 }}
        className="w-1/4 hidden sm:flex justify-center mt-[50px]"
      >
        <ImageReus
          src="/static/images/profile-me.webp"
          alt="Profile"
          size="h-36 w-36 md:w-40 md:h-40"
          imgClass="rounded-full"
        />
      </motion.div>
    </article>
  );
}
