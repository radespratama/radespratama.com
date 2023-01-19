import { FC, useState } from "react";
import Link from "next/link";
import clsx from "clsx";

import { TbMenu, TbBrandGithub } from "react-icons/tb";

import I from "@/components/Icon";
import NavLinks from "@/components/Links";
import Sidebar from "@/components/Navigation/Sidebar";

import { HeaderLinkName } from "@/utils";

interface IHeaderProps {
  isHeader?: boolean;
}

const Header: FC<IHeaderProps> = ({ isHeader }) => {
  const [isSidebar, setIsSidebar] = useState<boolean>(false);

  if (isHeader) {
    return (
      <>
        <header className={clsx("fixed top-0 left-0 w-full z-10 bg-gray-950")}>
          <nav
            className={clsx(
              "max-w-screen-md mx-auto grid grid-cols-4",
              "gap-2 py-3 px-3 border-b-2 border-gray-800",
              "xl:px-0"
            )}>
            <div className={clsx("col-span-3 sm:col-span-2 flex items-center")}>
              <Link href="/" className={clsx("flex items-center space-x-2")}>
                <I.Copyright className={clsx("w-5 h-5 stroke-white")} />
                <p>Putu Rades Pratama</p>
                <span className={clsx("badge hidden", "xs:block")}>
                  {process.env.NEXT_PUBLIC_DESIGN_VER || "1.0.2"}
                </span>
              </Link>
            </div>
            <div
              className={clsx(
                "col-span-1 hidden items-center justify-center space-x-4",
                "sm:flex"
              )}>
              {HeaderLinkName.map(({ id, path, title }) => (
                <NavLinks key={id} href={path} className={clsx("hover:text-white")}>
                  {title}
                </NavLinks>
              ))}
            </div>
            <div className={clsx("col-span-1 flex items-center justify-end space-x-3")}>
              <Link
                href={`${process.env.NEXT_PUBLIC_GITHUB}`}
                className={clsx("p-2 border-2 rounded-lg border-sky-500")}
                target="_blank">
                <TbBrandGithub className={clsx("text-xl")} />
              </Link>
              <button
                onClick={() => setIsSidebar(!isSidebar)}
                className={clsx("block p-2", "sm:hidden")}
                type="button"
                >
                <TbMenu className={clsx("text-xl text-white")} />
              </button>
            </div>
          </nav>
        </header>
        <Sidebar state={isSidebar} setState={() => setIsSidebar((prev) => !prev)} />
      </>
    );
  }

  return <></>;
};

export default Header;
