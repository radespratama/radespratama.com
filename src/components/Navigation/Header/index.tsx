import { FC, useState } from "react";
import Link from "next/link";

import ctx from "windsplit";
import { TbMenu, TbBrandGithub } from "react-icons/tb";

import I from "@/components/Icon";
import NavLinks from "@/components/Links";
import Sidebar from "@/components/Navigation/Sidebar";

import { HeaderLinkName } from "@/libs/utils";

interface IHeaderProps {
  isHeader?: boolean;
}

const Header: FC<IHeaderProps> = ({ isHeader }) => {
  const [isSidebar, setIsSidebar] = useState<boolean>(false);

  if (isHeader) {
    return (
      <>
        <header className="fixed top-0 left-0 w-full z-10 bg-gray-950">
          <nav
            className={ctx(
              `max-w-screen-md mx-auto grid grid-cols-4 gap py-3 
              px-3 xl:px-0 border-b-2 border-gray-800
              `
            )}>
            <div className="col-span-3 sm:col-span-2 flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <I.Copyright className="w-5 h-5 stroke-white" />
                <p>Putu Rades Pratama</p>
                <span className="badge hidden xs:block">{process.env.NEXT_PUBLIC_DESIGN_VER}</span>
              </Link>
            </div>
            <div className="col-span-1 hidden sm:flex items-center justify-center space-x-4">
              {HeaderLinkName.map(({ id, path, title }) => (
                <NavLinks key={id} href={path} className="hover:text-white">
                  {title}
                </NavLinks>
              ))}
            </div>
            <div className="col-span-1 flex items-center justify-end space-x-3">
              <Link
                href={`${process.env.NEXT_PUBLIC_GITHUB}`}
                className="p-2 border-2 rounded-lg border-sky-500"
                target="_blank">
                <TbBrandGithub className="text-xl" />
              </Link>
              <button onClick={() => setIsSidebar(!isSidebar)} className="block sm:hidden p-2">
                <TbMenu className="text-xl text-white" />
              </button>
            </div>
          </nav>
        </header>
        <Sidebar state={isSidebar} setState={() => setIsSidebar(!isSidebar)} />
      </>
    );
  }

  return <></>;
};

export default Header;
