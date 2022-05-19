import Head from "next/head";
import { useRouter } from "next/router";
import BackToTop from "./BackToTop";
import Footer from "./Footer";
import Header from "./Header";

export const meta = {
  root: "https://radespratama.xyz",
  title: "Rades Pratama - Software Developer",
  description:
    "Seseorang yang menyebut dirinya sebagai Software Developer, tertarik di bidang frontend dan mengerti soal UI Design—yang mana sekarang sedang senang ber-eksplorasi dengan Open-source Software.",
  image: "/banner.png",
  type: "website",
  keyword: "frontend, Frontend developer, Open-source Software, portfolio website, radespratama, putu rades pratama"
};

export default function Layout({ children, title, description, image }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{title ?? meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={description ?? meta.description} name="description" />
        <meta content={meta.keyword} name="keyword" />
        <meta property="og:url" content={`${meta.root}${router.asPath}`} />
        <link rel="canonical" href={`${meta.root}${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta
          property="og:site_name"
          content="Rades Pratama - Software Developer"
        />
        <meta
          property="og:description"
          content={description ?? meta.description}
        />
        <meta property="og:title" content={title ?? meta.title} />
        <meta property="og:image" content={image ?? meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@radespratamaa" />
        <meta name="theme-color" content="#111827" />
        <meta name="twitter:title" content={title ?? meta.title} />
        <meta
          name="twitter:description"
          content={description ?? meta.description}
        />
        <meta name="twitter:image" content={image ?? meta.image} />
      </Head>
      <Header />
      <main className="flex-wrap flex-grow min-h-screen px-2">{children}</main>
      <Footer />
      <BackToTop />
    </>
  );
}
