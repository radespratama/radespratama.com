import Link from "next/link";
import { motion } from "framer-motion";
import * as A from "@anims/Animation";

export default function CreativeWork() {
  return (
    <article className="container mx-auto flex flex-col">
      <section className="grid grid-cols-2 gap-10">
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold tracking-tight">
            All Creative Works.
          </h1>
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
        </div>
        <div className="bg-gray-400">2</div>
      </section>
    </article>
  );
}
