import React, { HTMLAttributes } from "react";
import { withRouter, NextRouter } from "next/router";
import Link from "next/link";

interface IALinkProps extends HTMLAttributes<HTMLAnchorElement> {
  href?: string;
  className?: string;
  target?: "_self" | "_blank" | "_parent" | "_top";
}

interface INavLinkProps extends HTMLAttributes<HTMLAnchorElement> {
  router?: NextRouter;
  href?: string;
  className?: string;
}

export const ALink: React.FC<IALinkProps> = ({
  href,
  className,
  target,
  children,
}) => {
  return (
    <Link href={href!} passHref>
      <a className={className} target={target} rel="noopener noreferrer">
        {children}
      </a>
    </Link>
  );
};

const Links: React.FC<INavLinkProps> = ({
  router,
  href,
  children,
  className,
}) => {
  (function prefetchPages() {
    if (typeof window !== "undefined") router.prefetch(router.pathname);
  })();

  const handleClick = (e: React.FormEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    router.push(href);
  };

  const isCurrentPath = router.pathname === href || router.asPath === "href";

  return (
    <a
      href={href}
      className={`${
        isCurrentPath
          ? "text-white dark:text-gray-900 underline"
          : "text-gray-400"
      } ${className} text-base font-medium tracking-tight md:px-4 hover:underline underline-offset-[0.625rem]`}
      onClick={handleClick}
    >
      {children}
    </a>
  );
};

export default withRouter(Links);
