import Head from "next/head";
import NextNProgress from "nextjs-progressbar";

import "@css/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress
        color="#77ACF1"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow
      />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="frontend, Frontend developer, Open-source Software, portfolio website, radespratama, putu rades pratama"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
