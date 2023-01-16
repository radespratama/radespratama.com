import { FC, ReactNode } from "react";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("@/components/Navigation/Header"));
import Footer from "@/components/Navigation/Footer";
import clsx from "clsx";

interface ILayoutProps {
  children: ReactNode;
  isHeader?: boolean;
  isFooter?: boolean;
}

const AppLayout: FC<ILayoutProps> = ({ children, isHeader, isFooter }) => {
  return (
    <>
      <Header isHeader={isHeader} />
      <main className={clsx("flex-wrap flex-grow")}>{children}</main>
      <Footer isFooter={isFooter} />
    </>
  );
};

export default AppLayout;
