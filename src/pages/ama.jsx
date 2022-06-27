import React from 'react';
import Layout from '@component/Layout';

export default function Ama() {
  return (
    <Layout
      isHeader
      isFooter
      title="Ask me anythings - Rades Pratama"
      url={`${process.env.NEXT_PUBLIC_BASE_URL}/ama`}
    >
      Ama
    </Layout>
  );
}
