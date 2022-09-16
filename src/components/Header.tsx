import React from "react";
import wtl from "windsplit";
import { motion } from "framer-motion";

import I from "./Icon";
import Sidebar from "./Sidebar";
import Links, { A } from "./Links";

import { HeaderLinks } from "@/libs/utils";

const Header: React.FC<{ isHeader?: boolean }> = ({ isHeader }) => {
  const [isShow, setIsShow] = React.useState<boolean>(false);

  function togglerSidebar() {
    setIsShow(!isShow);
  }
  const tw = {
    header: wtl(`
      fixed top-0 left-0
      w-full z-10 bg-gray-950
    `),
    navigation: wtl(`
      max-w-screen-md mx-auto grid grid-cols-4
      gap-4 py-3 px-3 md:px-0 border-b-2
      border-gray-800
    `),
    linkGithub: wtl(`
      p-2 border-2 rounded-lg border-sky-500
    `),
  };

  if (isHeader) {
    return (
      <>
        <header className={tw.header}>
          <nav className={tw.navigation}>
            <div className="col-span-3 sm:col-span-2 flex items-center">
              <A href="/" className="flex items-center space-x-2">
                <I.Copyright className="w-5 h-5 stroke-white" />
                <p>Putu Rades Pratama</p>
                <span className="badge hidden xs:block">
                  {process.env.NEXT_PUBLIC_DESIGN_VER}
                </span>
              </A>
            </div>
            <div className="col-span-1 hidden sm:flex items-center justify-center space-x-4">
              {HeaderLinks.map(({ id, path, title }) => (
                <Links key={id} href={path} className="hover:text-white">
                  {title}
                </Links>
              ))}
            </div>
            <div className="col-span-1 flex items-center justify-end space-x-3">
              <A
                href={`${process.env.NEXT_PUBLIC_GITHUB}`}
                className={tw.linkGithub}
                target="_blank"
              >
                <I.Github className="w-5 h-5 stroke-white" />
              </A>
              <button onClick={togglerSidebar} className="block sm:hidden p-2">
                <I.Menu className="w-5 h-5 fill-white" />
              </button>
            </div>
          </nav>
        </header>
        <Sidebar isOpen={isShow} isClose={togglerSidebar} />
      </>
    );
  }

  return <></>;
};

export default Header;
