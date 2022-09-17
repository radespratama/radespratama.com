import React from "react";

import I from "./Icon";
import { A } from "./Links";

const Footer: React.FC<{ isFooter?: boolean }> = ({ isFooter }) => {
  if (isFooter) {
    return (
      <footer className="max-w-screen-md mx-auto px-3 py-4 text-center space-y-3">
        <div className="flex justify-center space-x-5">
          <A href="https://tailwindcss.com" target="_blank">
            <I.Tailwind className="w-6 h-6 stroke-white hover:stroke-sky-500" />
          </A>
          <A href="https://nextjs.org" target="_blank">
            <I.NextJS className="w-6 h-6 stroke-white hover:stroke-sky-500" />
          </A>
          <A href="https://reactjs.org" target="_blank">
            <I.React className="w-6 h-6 stroke-white hover:stroke-sky-500" />
          </A>
          <A href="https://www.framer.com/motion" target="_blank">
            <I.Framer className="w-6 h-6 stroke-white hover:stroke-sky-500" />
          </A>
          <A href="https://vercel.com" target="_blank">
            <I.Vercel className="w-6 h-6 stroke-white hover:stroke-sky-500" />
          </A>
        </div>
        <h3>&copy; {new Date().getFullYear()} Putu Rades Pratama</h3>
      </footer>
    );
  }

  return <></>;
};

export default Footer;
