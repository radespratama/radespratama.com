import clsx from "clsx";
import { FC } from "react";
import Link from "next/link";

import { FooterLinkName } from "@/utils";

type FooterProps = {
  isFooter?: boolean;
};

const Footer: FC<FooterProps> = ({ isFooter }) => {
  if (isFooter) {
    return (
      <footer className={clsx("max-w-screen-md mx-auto px-3 py-4 text-center space-y-3")}>
        <div className={clsx("flex items-center justify-center space-x-5")}>
          {FooterLinkName.map(({ id, path, icon }) => (
            <Link
              key={id}
              href={path}
              className={clsx("text-2xl hover:text-sky-400")}
              target="_blank">
              {icon}
            </Link>
          ))}
        </div>
        <h3 className={clsx("font-normal text-base")}>
          &copy; {new Date().getFullYear()} Putu Rades Pratama
        </h3>
      </footer>
    );
  }

  return <></>;
};

export default Footer;
