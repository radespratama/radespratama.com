import type { NextPage } from "next";

import AppLayout from "@/layouts/AppLayout";
import SEO from "@/components/SEO";

const Home: NextPage = () => {
  return (
    <>
      <SEO title="✱ Software Developer - Rades Pratama" />
      <AppLayout isHeader isFooter>
        Hello World
      </AppLayout>
    </>
  );
};

export default Home;
