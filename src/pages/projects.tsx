import type { NextPage, GetStaticProps } from "next";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

import AppLayout from "@/layouts/AppLayout";

import SEO from "@/components/SEO";
const ContentList = dynamic(() => import("@/components/Project/ContentList"));
const Intro = dynamic(() => import("@/components/Project/Intro"));

import { IMiniCard } from "@/types/Response";
import { queryFetchAllProject } from "@/libs/query";
import { sanityClient } from "@/libs/config/sanity.config";

const Projects: NextPage<{ project: [IMiniCard] }> = ({ project }) => {
  const { asPath } = useRouter();
  return (
    <>
      <SEO
        title="Projects ✱ Software Developer"
        url={process.env.NEXT_PUBLIC_BASE_URL + asPath}
        description="Someone who calls himself a Software Developer is interested in front-end development and understands UI Design—which he is currently exploring with Open-source Software."
      />
      <AppLayout isHeader isFooter>
        <Intro />
        <ContentList project={project} />
      </AppLayout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const project = await sanityClient.fetch(queryFetchAllProject);

  return {
    props: {
      project,
    },
  };
};

export default Projects;
