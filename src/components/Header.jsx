import { motion } from "framer-motion";
import Switcher from "./elements/Switcher";
import { HeaderLinks } from "@lib/DataLinks";
import ActiveLink from "./elements/ActiveNavlink";
import { DevLogo, GithubIcon } from "./elements/Icon";

export default function Header() {
  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed w-full top-0 left-0 z-40 bg-gray-950 dark:bg-white"
    >
      <nav className="container mx-auto border-b border-gray-800 dark:border-gray-200 py-3 grid grid-cols-2 px-4">
        <div className="flex items-center justify-start">
          <DevLogo classNames="h-8 w-8 stroke-white dark:stroke-gray-950 mr-3" />
          {HeaderLinks.map(({ id, name, path }) => (
            <ActiveLink key={id} href={path}>
              {name}
            </ActiveLink>
          ))}
        </div>
        <div className="flex items-center justify-end space-x-3 md:space-x-6">
          <a
            target="_blank"
            href="https://github.com/radespratama/radespratama-dev"
            rel="noopener noreferrer"
            className="p-2 bg-gray-800 dark:bg-gray-200 rounded-lg transition-all duration-300 hover:rotate-[20deg]"
          >
            <GithubIcon classNames="h-5 w-5 stroke-white dark:stroke-gray-950" />
          </a>
          <Switcher />
        </div>
      </nav>
    </motion.header>
  );
}
