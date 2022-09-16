import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

import AppLayout from "@/layouts/AppLayout";
import SEO from "@/components/SEO";
const NavigationBottom = dynamic(() => import("@/components/NavigationBottom"));
const Intro = dynamic(() => import("@/components/Intro"));

const Home: NextPage = () => {
  const { asPath } = useRouter();
  return (
    <>
      <SEO
        title="✱ Software Developer - Rades Pratama"
        url={process.env.NEXT_PUBLIC_BASE_URL + asPath}
        description="Someone who calls himself a Software Developer is interested in front-end development and understands UI Design—which he is currently exploring with Open-source Software."
      />
      <AppLayout isHeader isFooter>
        <Intro />
        <NavigationBottom />
      </AppLayout>
    </>
  );
};

export default Home;
