import React from 'react';
import { A } from "@component/ActiveNavLink"

export default function Footer({ isFooter }) {
  if (isFooter) {
    return (
      <footer className="max-w-screen-xl mx-auto border-t border-gray-800 dark:border-gray-200">
        <div className="px-4 py-3 text-center">
          <h3 className="max-w-[21.875rem] mx-auto font-medium text-sm tracking-tight text-white dark:text-gray-950">
            Designed and Developed by Rades Pratama. Built with{" "}
            <A href="https://nextjs.org" classNames="text-sky-500 hover:underline">Next JS</A> &{" "}
            <A href="https://tailwindcss.com" classNames="text-sky-500 hover:underline">Tailwind CSS</A> Hosted on{" "}
            <A href="https://vercel.com" classNames="text-sky-500 hover:underline">Vercel.</A>
          </h3>
        </div>
    </footer>
    )

  }

  return <></>;
}
