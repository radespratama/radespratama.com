import dynamic from 'next/dynamic';
import NextNProgress from 'nextjs-progressbar';
import '@css/globals.css';

// const DynamicCustomCursor = dynamic(() => import('@component/Cursor'));
// const DynamicBackToTop = dynamic(() => import('@component/ButtonBackToTop'));

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
      {/* <DynamicCustomCursor /> */}
      {/* <DynamicBackToTop /> */}
    </>
  );
}

export default MyApp;
