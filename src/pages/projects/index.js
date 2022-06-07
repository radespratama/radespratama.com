import ComingSoon from "@component/Layout/ComingSoon";
import Layout from "@component/Layout/Layout";

export default function Projects() {
  return (
    <Layout
      title="Developer Projects"
      description="I love building projects and practice my developer skills, here's an archive of things that I've worked on."
      isHeader
      isFooter
    >
      <ComingSoon pages="Projects" />
    </Layout>
  );
}
