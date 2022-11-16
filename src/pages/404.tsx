import { FC } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import SEO from "@/components/SEO";
import AppLayout from "@/layouts/AppLayout";

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
        <section className="flex flex-col items-center justify-center min-h-screen space-y-4 px-4">
          <h1 className="text-xl font-medium">
            <span className="text-4xl font-bold">404</span> | Oops, your destination not found!
          </h1>
          <Link href="/" className="px-6 py-2 bg-emerald-400 hover:bg-emerald-500 shadow-3d">
            Back to home
          </Link>
        </section>
      </AppLayout>
    </>
  );
};

export default NotFound;
