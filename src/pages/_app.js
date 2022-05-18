import Head from "next/head";
import { DefaultSeo } from "next-seo";
import NextNProgress from "nextjs-progressbar";
import "@css/globals.css";
import SEO, { keyword } from "@config/next-seo.config";
import Cursor from "@component/Cursor";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress
        color="#77ACF1"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <DefaultSeo {...SEO} />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content={keyword} />
      </Head>
      <Component {...pageProps} />
      <Cursor />
    </>
  );
}

export default MyApp;
