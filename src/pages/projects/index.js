import ComingSoon from "@component/ComingSoon";
import Layout from "@component/Layout";

export default function Projects() {
  return (
    <Layout
      title="Developer Projects"
      description="I love building projects and practice my developer skills, here's an archive of things that I've worked on."
    >
      <ComingSoon pages="Project" />
    </Layout>
  );
}
