import React from "react";
import ctx from "windsplit";
import Link from "next/link";
import { motion } from "framer-motion";
import { BsEnvelope, BsPin, BsDownload } from "react-icons/bs";

import I from "@/components/Icon";

import { FadeContainer, Fade } from "@/libs/animation";

const ContactModule: React.FC = () => {
  return (
    <section
      className={ctx(`
      max-w-screen-md mx-auto grid grid-cols-1
      gap-6 place-items-center px-2 xl:px-0 min-h-screen
      `)}>
      <motion.div variants={FadeContainer} initial="hidden" animate="visible">
        <motion.p
          variants={Fade}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.1 }}
          className="text-xl text-emerald-400">
          Contact.
        </motion.p>
        <motion.h1
          variants={Fade}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
          className="intro-heading">
          Let&apos;s work together <span className="hidden xl:inline">🤝🏻</span>
        </motion.h1>
        <motion.h6
          variants={Fade}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5 }}
          className="uppercase font-medium text-xl mt-8 mb-2 text-gray-500">
          Contact Details
        </motion.h6>

        <motion.div
          variants={Fade}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.8 }}
          className="flex flex-col space-y-4 mb-8 relative">
          <I.ArrowSnake className="absolute -top-[7.5rem] -left-[5.5rem] w-[84px] h-[172px] fill-white" />
          <Link
            href="mailto:radespratamaa@gmail.com"
            className={`contact-button hover:text-emerald-400`}>
            <BsEnvelope className="text-2xl mr-2" />
            radespratamaa@gmail.com
          </Link>
          <h4 className="contact-button">
            <BsPin className="text-2xl mr-2" />
            Bali, Indonesia
          </h4>
        </motion.div>
        <motion.a
          variants={Fade}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
          href="https://tinyurl.com/sayhiforyou"
          className="intro-button">
          <BsDownload className="text-xl mr-2" />
          Resume
        </motion.a>
      </motion.div>
    </section>
  );
};

export default ContactModule;