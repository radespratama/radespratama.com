import type { NextPage } from "next";
import { useRouter } from "next/router";

import AppLayout from "@/layouts/AppLayout";

import SEO from "@/components/SEO";

const Contacts: NextPage = () => {
  const { asPath } = useRouter();
  return (
    <>
      <SEO
        title="Contacts ✱ Software Developer"
        url={process.env.NEXT_PUBLIC_BASE_URL + asPath}
        description="Someone who calls himself a Software Developer is interested in front-end development and understands UI Design—which he is currently exploring with Open-source Software."
      />
      <AppLayout isHeader>s</AppLayout>
    </>
  );
};

export default Contacts;
