import { HTMLAttributes } from "react";
import { withRouter, NextRouter } from "next/router";
import Link from "next/link";

interface ILinkProps extends HTMLAttributes<HTMLAnchorElement> {
  href: string;
  target?: "_self" | "_blank" | "_parent" | "_top";
}

interface IActiveLink extends HTMLAttributes<HTMLAnchorElement> {
  router: NextRouter;
  href: string;
  className?: string;
}

export function A({ href, children, className, target }: ILinkProps) {
  return (
    <Link href={href} passHref>
      <a className={className} target={target} rel="noopener noreferrer">
        {children}
      </a>
    </Link>
  );
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
      onClick={handleClick}
    >
      {children}
    </a>
  );
};

export default withRouter(ActiveLink);
