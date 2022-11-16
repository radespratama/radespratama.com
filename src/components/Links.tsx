import { HTMLAttributes } from "react";
import { withRouter, NextRouter } from "next/router";

interface IActiveLink extends HTMLAttributes<HTMLAnchorElement> {
  router: NextRouter;
  href: string;
  className?: string;
}

const ActiveLink = ({ router, href, children, className }: IActiveLink) => {
  (function preFetchPages() {
    if (typeof window !== "undefined") router.prefetch(router.pathname);
  })();
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    router.push(href);
  };
  const isCurrentPath = router.pathname === href || router.asPath === href;

  return (
    <a
      className={`${
        isCurrentPath ? "text-white underline" : "text-gray-400"
      } ${className} text-base font-medium tracking-tight md:pr-3 underline-offset-[0.625rem]`}
      href={href}
      onClick={handleClick}>
      {children}
    </a>
  );
};

export default withRouter(ActiveLink);
