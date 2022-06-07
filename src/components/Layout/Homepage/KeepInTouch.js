import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { KeepInTouchLink } from "@lib/utils/DataLinks";

export default function KeepInTouch() {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        opacity: 1,
      });
    }
  }, [animation, inView]);

  return (
    <article
      ref={ref}
      className="min-h-screen lg:min-h-[100vh] w-full flex flex-col items-center justify-center"
    >
      <motion.h1
        initial={{ y: -60, opacity: 0 }}
        transition={{ duration: 0.6 }}
        animate={animation}
        className="text-6xl-rsv font-bold tracking-[-0.07em]"
      >
        Keep In Touch.
      </motion.h1>
      <motion.p
        initial={{ y: -40, opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        animate={animation}
        className="my-6 max-w-md mx-auto text-base-rsv text-center"
      >
        I&apos;m currently specializing in{" "}
        <span className="text-green-500 dark:text-sky-500">Front-end Development</span> Feel free to
        get in touch and talk more about your projects.
      </motion.p>
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        animate={animation}
        className="max-w-md grid grid-cols-12 gap-4"
      >
        {KeepInTouchLink.map((link) => (
          <a
            key={link.id}
            className="col-span-4 btn-dknfg dark:text-white"
            href={link.path}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="hidden md:inline mr-2">{link.icon}</span>
            {link.name}
          </a>
        ))}
      </motion.div>
    </article>
  );
}
