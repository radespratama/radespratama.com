import Head from "next/head";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

const DynamicHeader = dynamic(() => import("./Header"));
const DynamicFooter = dynamic(() => import("./Footer"));

export const meta = {
  root: "https://radespratama.xyz",
  title: "Rades Pratama - Software Developer",
  description:
    "Seseorang yang menyebut dirinya sebagai Software Developer, tertarik di bidang frontend dan mengerti soal UI Design—yang mana sekarang sedang senang ber-eksplorasi dengan Open-source Software.",
  image: "/static/images/Banner.png",
  type: "website",
};

export default function Layout({ title, description, children, isHeader, isFooter }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{title ?? meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={description ?? meta.description} name="description" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <meta property="og:url" content={`${meta.root}${router.asPath}`} />
        <link rel="canonical" href={`${meta.root}${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Rades Pratama - Software Developer" />
        <meta property="og:description" content={description ?? meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@radespratamaa" />
        <meta name="theme-color" content="#111827" />
        <meta name="twitter:title" content={title ?? meta.title} />
        <meta name="twitter:description" content={description ?? meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
      <DynamicHeader isHeader={isHeader} />
      <main className="flex-wrap flex-grow min-h-screen">{children}</main>
      <DynamicFooter isFooter={isFooter} />
    </>
  );
}
