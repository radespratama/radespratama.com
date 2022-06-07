import Layout from "@component/Layout/Layout";
import Error404 from "@component/Layout/Errorpage/CustomError";

export default function Custom404() {
  return (
    <Layout
      title="Oops, page not found! - Rades Pratama"
      description="Oops, your destination not found, please check your path link!"
      isHeader={false}
      isFooter={false}
    >
      <Error404 title="Page Not Found" />
    </Layout>
  );
}
