import Head from 'next/head';

export const meta = {
  url: 'https://radespratama.xyz',
  title: 'Rades Pratama - Software Developer',
  description:
    'Seseorang yang menyebut dirinya sebagai Software Developer, tertarik di bidang frontend dan mengerti soal UI Design—yang mana sekarang sedang senang ber-eksplorasi dengan Open-source Software.',
  image: '/static/images/Banner.png',
  type: 'website',
};

export default function MetaTags({ title, description, url, image }) {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <title>{title || meta.title}</title>
      <meta name="title" content={title || meta.title} />
      <meta name="description" content={description || meta.description} />

      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url || meta.url} />
      <meta property="og:title" content={title || meta.title} />
      <meta property="og:description" content={description || meta.title} />
      <meta property="og:image" content={image || meta.image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@radespratamaa" />
      <meta name="twitter:title" content={title || meta.title} />
      <meta name="twitter:description" content={description || meta.description} />
      <meta name="twitter:image" content={image || meta.image} />
    </Head>
  );
}
