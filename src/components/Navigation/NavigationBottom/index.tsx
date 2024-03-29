import { FC } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import { NavigationBottomLinkName } from "@/utils";
import clsx from "clsx";

const NavigationBottom: FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 100 }}
      className={clsx(
        "navigation bottom-4 w-full max-w-[20rem] bg-gray-950",
        "border-[3px] border-gray-800 rounded-lg hidden",
        "xs:max-w-[21.875rem]",
        "md:inline"
      )}>
      <nav className={clsx("p-3 grid grid-cols-3 gap-3")}>
        {NavigationBottomLinkName.map(({ id, path, icon, title }) => (
          <Link
            key={id}
            href={path}
            className={clsx(
              "inline-flex items-center justify-center gap-1",
              "hover:text-emerald-400"
            )}>
            {icon}
            <span className="text-base">{title}</span>
          </Link>
        ))}
      </nav>
    </motion.div>
  );
};

export default NavigationBottom;
