const title = "Rades Pratama - Software Developer";
const description =
  "Seseorang yang menyebut dirinya sebagai Software Developer, tertarik di bidang frontend dan mengerti soal UI Design—yang mana sekarang sedang senang ber-eksplorasi dengan Open-source Software.";
export const keyword =
  "frontend developer, ui design, Frontend developer, UI Design, Open-source Software, open-source software, portfolio website, radespratama, putu rades pratama, react js website";
const SEO = {
  title,
  description,
  canonical: "https://radespratama.xyz/",
  noindex: false,
  openGraph: {
    type: "website",
    locale: "id",
    site_name: "Putu Rades Pratama",
    url: "https://radespratama.xyz/",
    title,
    description,
    images: [
      {
        url: "https://radespratama.xyz/static/images/og.jpg",
        alt: title,
        width: 1280,
        height: 720,
      },
    ],
  },
  twitter: {
    handle: "@radespratamaa",
    site: "@radespratamaa",
    cardType: "summary_large_image",
  },
};

export default SEO;
