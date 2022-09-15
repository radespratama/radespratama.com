import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";

import "@/styles/global.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress
        color="#77ACF1"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
