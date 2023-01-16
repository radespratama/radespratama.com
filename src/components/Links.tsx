import { HTMLAttributes } from "react";
import { withRouter, NextRouter } from "next/router";
import clsx from "clsx";

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
      className={clsx(
        "text-base font-medium tracking-tight underline-offset-[0.625rem]",
        isCurrentPath ? ["text-white underline"] : ["text-gray-400"],
        className,
        "md:pr-3"
      )}
      href={href}
      onClick={handleClick}>
      {children}
    </a>
  );
};

export default withRouter(ActiveLink);
