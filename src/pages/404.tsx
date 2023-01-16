import { FC } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import SEO from "@/components/SEO";
import AppLayout from "@/layouts/AppLayout";
import clsx from "clsx";

const NotFound: FC = () => {
  const { asPath } = useRouter();
  return (
    <>
      <SEO
        title="Not Found ✱ Software Developer"
        url={process.env.NEXT_PUBLIC_BASE_URL + asPath}
        description="Someone who calls himself a Software Developer is interested in front-end development and understands UI Design—which he is currently exploring with Open-source Software."
      />
      <AppLayout>
        <section
          className={clsx("flex flex-col items-center justify-center min-h-screen space-y-4 px-4")}>
          <h1 className={clsx("text-xl font-medium")}>
            <span className={clsx("text-4xl font-bold")}>404</span> | Oops, your destination not
            found!
          </h1>
          <Link
            href="/"
            className={clsx("px-6 py-2 bg-emerald-400 shadow-3d", "hover:bg-emerald-500")}>
            Back to home
          </Link>
        </section>
      </AppLayout>
    </>
  );
};

export default NotFound;
