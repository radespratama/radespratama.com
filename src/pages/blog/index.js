import ComingSoon from "@component/ComingSoon";
import Layout from "@component/Layout";

export default function Blog() {
  return (
    <Layout
      title="Developer Blog"
      description="This is where I share my writings on programming, tutorials, and my experiences.
      "
    >
      <ComingSoon pages="Blog" />
    </Layout>
  );
}
