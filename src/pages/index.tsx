import { useEffect, useState } from "react";
import type { NextPage, GetStaticProps } from "next";
import { useRouter } from "next/router";

import AppLayout from "@/layouts/AppLayout";

import SEO from "@/components/SEO";
import Intro from "@/modules/Home";
import NavigationBottom from "@/components/Navigation/NavigationBottom";

import { sanityClient } from "@/libs/config/sanity.config";
import { queryFetchMiniCard } from "@/libs/query";
import { IMiniCard } from "@/types/Response";

const Home: NextPage<{ project: [IMiniCard] }> = ({ project }) => {
  const { asPath } = useRouter();

  return (
    <>
      <SEO
        title="✱ Software Developer - Rades Pratama"
        url={process.env.NEXT_PUBLIC_BASE_URL + asPath}
        description="Someone who calls himself a Software Developer is interested in front-end development and understands UI Design—which he is currently exploring with Open-source Software."
      />
      <AppLayout isHeader>
        <Intro project={project} />
        <NavigationBottom />
      </AppLayout>
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
