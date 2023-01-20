import { useEffect, useState } from "react";
import type { NextPage, GetStaticProps } from "next";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

import AppLayout from "@/layouts/AppLayout";

import SEO from "@/components/SEO";
const Intro = dynamic(() => import("@/modules/Home"));
const NavigationBottom = dynamic(() => import("@/components/Navigation/NavigationBottom"));

import { sanityClient } from "@/libs/config/sanity.config";
import { queryFetchMiniCard } from "@/libs/query";
import { IMiniCard } from "@/types/Response";
import Loading from "@/components/Loading";

const Home: NextPage<{ project: [IMiniCard] }> = ({ project }) => {
  const { asPath } = useRouter();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let timer = setTimeout(() => setIsLoading(false), 1000);

    return () => clearTimeout(timer);
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

export const getStaticProps: GetStaticProps = async () => {
  const project = await sanityClient.fetch(queryFetchMiniCard);

  return {
    props: {
      project,
    },
  };
};

export default Home;
