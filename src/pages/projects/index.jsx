import React from 'react';
import Layout from '@component/Layout';

export default function Projects() {
  return (
    <Layout
      isHeader
      isFooter
      title="Developer Project - Rades Pratama"
      url={`${process.env.NEXT_PUBLIC_BASE_URL}/projects`}
    >
      Projects
    </Layout>
  );
}
