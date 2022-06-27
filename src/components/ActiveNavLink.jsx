import Link from 'next/link';
import { withRouter } from 'next/router';

export function A({ href, children, classNames }) {
  return (
    <Link href={href} passHref>
      <a className={classNames} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    </Link>
  );
}

function ActiveLink({ router, href, children, classNames }) {
  (function preFetchPages() {
    if (typeof window !== 'undefined') router.prefetch(router.pathname);
  })();
  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };
  const isCurrentPath = router.pathname === href || router.asPath === href;

  return (
    <a
      className={`${
        isCurrentPath
          ? 'text-white dark:text-gray-900 underline'
          : 'text-gray-400'
      } ${classNames} text-base font-medium tracking-tight px-4 hover:underline underline-offset-[0.625rem]`}
      href={href}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}

export default withRouter(ActiveLink);
