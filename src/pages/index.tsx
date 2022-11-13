import { useEffect, useState } from "react";
import type { NextPage, GetServerSideProps } from "next";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

import AppLayout from "@/layouts/AppLayout";

import SEO from "@/components/SEO";
const NavigationBottom = dynamic(() => import("@/components/NavigationBottom"));
const Intro = dynamic(() => import("@/components/Intro"));

import { sanityClient } from "@/libs/config/sanity.config";
import { queryFetchMiniCard } from "@/libs/query";
import { IMiniCard } from "@/types/Response";
import Loading from "@/components/Loading";

const Home: NextPage<{ project: [IMiniCard] }> = ({ project }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { asPath } = useRouter();

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    }
  }, [isLoading]);

  return (
    <>
      <SEO
        title="✱ Software Developer - Rades Pratama"
        url={process.env.NEXT_PUBLIC_BASE_URL + asPath}
        description="Someone who calls himself a Software Developer is interested in front-end development and understands UI Design—which he is currently exploring with Open-source Software."
      />
      {isLoading ? (
        <Loading />
      ) : (
        <AppLayout isHeader>
          <Intro project={project} />
          <NavigationBottom />
        </AppLayout>
      )}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  const project = await sanityClient.fetch(queryFetchMiniCard);

  return {
    props: {
      project,
    },
  };
};

export default Home;
