import Layout from "@component/Layout/Layout";
import {
  Intro, CreativeWork, ViewArticles, KeepInTouch,
} from "@component/Layout/Homepage";

export default function Home() {
  return (
    <Layout isHeader isFooter>
      <Intro />
      <CreativeWork />
      <ViewArticles />
      <KeepInTouch />
    </Layout>
  );
}
