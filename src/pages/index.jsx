import Layout from '@component/Layout';
import Intro from '@layout/HomePage/Intro';

export default function Home() {
  return (
    <Layout isHeader isFooter>
      <Intro />
    </Layout>
  );
}
