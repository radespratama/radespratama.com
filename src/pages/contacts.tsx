import type { NextPage } from "next";
import { useRouter } from "next/router";

import AppLayout from "@/layouts/AppLayout";

import SEO from "@/components/SEO";
import Intro from "@/modules/Contacts";

const Contacts: NextPage = () => {
  const { asPath } = useRouter();
  return (
    <>
      <SEO
        title="Contact ✱ Software Developer"
        url={process.env.NEXT_PUBLIC_BASE_URL + asPath}
        description="Someone who calls himself a Software Developer is interested in front-end development and understands UI Design—which he is currently exploring with Open-source Software."
      />
      <AppLayout isHeader>
        <Intro />
      </AppLayout>
    </>
  );
};

export default Contacts;
