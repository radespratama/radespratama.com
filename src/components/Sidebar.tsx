import React from "react";
import wtl from "windsplit";
import { BsInstagram, BsLinkedin, BsFileEarmarkTextFill } from "react-icons/bs";

import Links, { A } from "./Links";
import I from "./Icon";

import { HeaderLinks } from "@/libs/utils";

interface ISidebar {
  isOpen?: boolean;
  isClose?: () => void;
}

const Sidebar: React.FC<ISidebar> = ({ isOpen, isClose }) => {
  const isCountry = new Intl.DisplayNames(["en"], { type: "region" });

  const tw = {
    container: wtl(`
      fixed top-0 ${isOpen ? "right-0" : "-right-full"} w-[280px]
      min-h-screen bg-gray-950 border-l border-gray-800
      transition-all duration-[550ms] z-30 p-3
    `),
    overlay: wtl(`
      w-[100vw] min-h-screen fixed top-0 
      ${isOpen ? "block" : "hidden"} left-0
      bg-gray-900/20 backdrop-blur z-20
      transition-all duration-300
    `),
    overlayDouble: wtl(`
      fixed top-0 ${isOpen ? "right-0" : "-right-full"}
      bg-gray-950 w-[235px] transition-all duration-[400ms]
      border-l border-gray-800 shadow-xl shadow-black/50
      min-h-screen px-4 py-3 flex flex-col items-end
      justify-between
    `),
    profileContainer: wtl(`
      flex min-h-screen justify-between
      writing-mode-vertical select-none
      pb-8
    `),
    links: wtl(`
      flex items-center space-y-2
      writing-mode-vertical
    `),
  };
  return (
    <>
      <aside className={tw.container}>
        <nav className={tw.overlayDouble}>
          <div className="flex flex-col space-y-3 items-end">
            {HeaderLinks.map(({ id, path, title }) => (
              <Links key={id} href={path} className="py-4 hover:text-white">
                {title}
              </Links>
            ))}
          </div>
          <nav className="p-3 w-full place-items-center grid grid-cols-3 gap-3">
            <A
              href="https://instagram.com/radespratamaa"
              target="_blank"
              className="hover:text-red-400"
            >
              <BsInstagram className="text-xl mr-1" />
            </A>
            <A
              href="https://linkedin.com/in/radespratama"
              target="_blank"
              className="hover:text-sky-400"
            >
              <BsLinkedin className="text-xl mr-1" />
            </A>
            <A href="/" target="_blank" className="hover:text-emerald-400">
              <BsFileEarmarkTextFill className="text-xl mr-1" />
            </A>
          </nav>
        </nav>
        <div className={tw.profileContainer}>
          <A href="/" className={tw.links}>
            <I.Copyright className="w-5 h-5 stroke-white" />
            <p>Putu Rades Pratama</p>
          </A>
          <p className="font-mono text-sm">{`<Bali, ${isCountry.of(
            "ID"
          )} />`}</p>
        </div>
      </aside>
      <div onClick={isClose} className={tw.overlay} />
    </>
  );
};

export default Sidebar;
