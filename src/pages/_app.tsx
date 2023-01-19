import Script from "next/script";
import { useRouter } from "next/router";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import NextNProgress from "nextjs-progressbar";

import Loading from "@/components/Loading";

import * as gtag from "@/utils";

import "@/styles/global.css";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    isLoading ? setTimeout(() => setIsLoading(false), 1900) : null;
  }, [isLoading]);

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    router.events.on("hashChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
      router.events.off("hashChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gtag.GA_TRACKING_ID}', {
            page_path: window.location.pathname,
          });
        `,
        }}
      />
      <NextNProgress
        color="#6ee7b7"
        startPosition={0.3}
        stopDelayMs={200}
        height={2}
        showOnShallow
      />
      {isLoading ? <Loading /> : <Component {...pageProps} />}
    </>
  );
}

export default MyApp;
