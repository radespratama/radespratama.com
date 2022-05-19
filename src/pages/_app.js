import Head from "next/head";
import NextNProgress from "nextjs-progressbar";
import "@css/globals.css";
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
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="frontend developer, ui design, Frontend developer, UI Design, Open-source Software, open-source software, portfolio website, radespratama, putu rades pratama, react js website"
        />
      </Head>
      <Component {...pageProps} />
      <Cursor />
    </>
  );
}

export default MyApp;
