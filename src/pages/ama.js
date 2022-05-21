import Layout from "@component/Layout";
import ComingSoon from "@component/ComingSoon";

export default function Ama() {
  return (
    <Layout
      title="Ask me Anything"
      description="Yeah... you heard it right. Ask away! Just keep it (somewhat) family friendly, and I will do my best to respond."
    >
      <ComingSoon pages="AMA" />
    </Layout>
  );
}
