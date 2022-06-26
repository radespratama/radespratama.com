import { withRouter } from "next/router";

function ActiveLink({ router, href, children }) {
  (function preFetchPages() {
    if (typeof window !== "undefined") router.prefetch(router.pathname);
  })();

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  const isCurrentPath = router.pathname === href || router.asPath === href;

  return (
    <a
      className={`${
        isCurrentPath ? "text-white dark:text-gray-950 underline" : "text-gray-400"
      } text-base font-medium tracking-tight px-[18px] hover:underline underline-offset-[10px] hidden md:inline`}
      href={href}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}

export default withRouter(ActiveLink);
