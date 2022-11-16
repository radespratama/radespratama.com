import { FC, ReactNode } from "react";
import dynamic from "next/dynamic";

import SEO from "@/components/SEO";
const Header = dynamic(() => import("@/components/Navigation/Header"));
import Footer from "@/components/Navigation/Footer";

interface ILayoutProps {
  children: ReactNode;
  isHeader?: boolean;
  isFooter?: boolean;
}

const AppLayout: FC<ILayoutProps> = ({ children, isHeader, isFooter }) => {
  return (
    <>
      <Header isHeader={isHeader} />
      <main className="flex-wrap flex-grow">{children}</main>
      <Footer isFooter={isFooter} />
    </>
  );
};

export default AppLayout;
