import dynamic from 'next/dynamic';

import MetaTags from './MetaTags';
const Header = dynamic(() => import('./Header'));
const Footer = dynamic(() => import('./Footer'));

export default function Layout({
    title, description, image, url, children, isHeader, isFooter
  }) {
  return (
    <>
      <MetaTags 
        title={title}
        description={description}
        image={image}
        url={url}
      />
      <Header isHeader={isHeader} />
      <main className="flex-wrap flex-grow min-h-screen">{children}</main>
      <Footer isFooter={isFooter} />
    </>
  );
}
