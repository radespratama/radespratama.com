import { useEffect } from "react";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import * as A from "@lib/animation";
import { useInView } from "react-intersection-observer";

export default function CreativeWork() {
  const { ref, inView } = useInView({
    threshold: 0.3,
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
    <article ref={ref} className="container mx-auto flex flex-col">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          transition={{ duration: 0.6 }}
          animate={animation}
          className="flex flex-col"
        >
          <h1 className="text-4xl font-bold tracking-tight">All Creative Works.</h1>
          <p className="text-base font-normal tracking-tight text-gray-400 dark:text-gray-500">
            Here&apos;s some of my projects that I have worked on.
          </p>
          <Link href="/projects">
            <motion.a
              variants={A.DefaultAnimate}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1, duration: 0.3 }}
              className="font-medium my-4 text-xl tracking-tighter call-to cursor-silence"
            >
              Explore more →
            </motion.a>
          </Link>
        </motion.div>
        <div className="bg-gray-400">S</div>
      </section>
    </article>
  );
}
