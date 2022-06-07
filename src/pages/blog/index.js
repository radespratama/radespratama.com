import ComingSoon from "@component/Layout/ComingSoon";
import Layout from "@component/Layout/Layout";

export default function Blog() {
  return (
    <Layout
      title="Developer Blog"
      description="This is where I share my writings on programming, tutorials, and my experiences."
      isHeader
      isFooter
    >
      <ComingSoon pages="Blog" />
    </Layout>
  );
}
