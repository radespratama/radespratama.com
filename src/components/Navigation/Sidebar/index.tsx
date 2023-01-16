import { FC } from "react";
import Link from "next/link";

import I from "@/components/Icon";
import NavLinks from "@/components/Links";
import { HeaderLinkName } from "@/utils";
import clsx from "clsx";

interface ISidebarProps {
  state: boolean;
  setState: () => void;
}

const Sidebar: FC<ISidebarProps> = ({ state, setState }) => {
  const isCountry = new Intl.DisplayNames(["en"], { type: "region" });

  return (
    <>
      <aside
        className={clsx(
          "fixed top-0 w-[17.5rem] min-h-screen bg-gray-950",
          "border-l border-gray-800 transition-all duration-[550ms] z-30 p-3",
          state ? "right-0" : "-right-full"
        )}>
        <nav
          className={clsx(
            "fixed top-0 bg-gray-950 w-[14.688rem] transition-all duration-[400ms]",
            "min-h-screen px-4 py-3 flex flex-col items-end justify-between",
            "border-l border-gray-800 shadow-xl shadow-black/50",
            state ? "right-0" : "-right-full"
          )}>
          <div className={clsx("flex flex-col space-y-3 items-end")}>
            {HeaderLinkName.map(({ id, path, title }) => (
              <NavLinks key={id} href={path} className={clsx("py-4", "hover:text-white")}>
                {title}
              </NavLinks>
            ))}
          </div>
        </nav>
        <div
          className={clsx(
            "flex min-h-screen justify-between",
            "writing-mode-vertical select-none pb-8"
          )}>
          <Link href="/" className={clsx("flex items-center space-y-2 writing-mode-vertical")}>
            <I.Copyright className={clsx("w-5 h-5 stroke-white")} />
            <p>Putu Rades Pratama</p>
          </Link>
          <p className={clsx("font-mono text-sm")}>{`<Bali, ${isCountry.of("ID")} />`}</p>
        </div>
      </aside>
      <div
        onClick={setState}
        className={clsx(
          "w-[100vw] min-h-screen fixed top-0 left-0",
          "bg-gray-900/20 backdrop-blur z-20 transition-all duration-300",
          state ? "block" : "hidden"
        )}
      />
    </>
  );
};

export default Sidebar;
