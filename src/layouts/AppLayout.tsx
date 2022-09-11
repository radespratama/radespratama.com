import React from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface ILayout {
  children: React.ReactNode;
  isHeader?: boolean;
  isFooter?: boolean;
}

export default function AppLayout({ children, isHeader, isFooter }: ILayout) {
  return (
    <>
      <Header isHeader={isHeader} />
      <main className="flex-wrap flex-grow">{children}</main>
      <Footer isFooter={isFooter} />
    </>
  );
}
