import NextNProgress from 'nextjs-progressbar';
import '@css/globals.css';

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
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
