import Layout from "@component/Layout";
import Intro from "@component/Intro";
import CreativeWork from "@component/CreativeWork";
import KeepInTouch from "@component/KeepInTouch";
import ViewArticles from "@component/ViewArticles";

export default function Home() {
  return (
    <Layout>
      <Intro />
      <CreativeWork />
      <ViewArticles />
      <KeepInTouch />
    </Layout>
  );
}
