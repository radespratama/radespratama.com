import { FC } from "react";
import Link from "next/link";

import I from "@/components/Icon";
import NavLinks from "@/components/Links";
import { HeaderLinkName } from "@/libs/utils";

interface ISidebarProps {
  state: boolean;
  setState: () => void;
}

const Sidebar: FC<ISidebarProps> = ({ state, setState }) => {
  const isCountry = new Intl.DisplayNames(["en"], { type: "region" });

  return (
    <>
      <aside className={`sidebar ${state ? "right-0" : "-right-full"}`}>
        <nav className={`sidebarOverlayDouble ${state ? "right-0" : "-right-full"}`}>
          <div className="flex flex-col space-y-3 items-end">
            {HeaderLinkName.map(({ id, path, title }) => (
              <NavLinks key={id} href={path} className="py-4 hover:text-white">
                {title}
              </NavLinks>
            ))}
          </div>
        </nav>
        <div className="flex min-h-screen justify-between writing-mode-vertical select-none pb-8">
          <Link href="/" className="flex items-center space-y-2 writing-mode-vertical">
            <I.Copyright className="w-5 h-5 stroke-white" />
            <p>Putu Rades Pratama</p>
          </Link>
          <p className="font-mono text-sm">{`<Bali, ${isCountry.of("ID")} />`}</p>
        </div>
      </aside>
      <div onClick={setState} className={`sidebarOverlay ${state ? "block" : "hidden"}`} />
    </>
  );
};

export default Sidebar;
