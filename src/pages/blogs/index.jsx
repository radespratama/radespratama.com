import React from 'react';

import Layout from '@component/Layout';
import Intro from '@layout/BlogPage/Intro';

import { sanityClient } from '@lib/config/sanity.config';
import { queryFetchBlog } from '@lib/query';

export default function Blogs({ blogs }) {
  return (
    <Layout
      isHeader
      isFooter
      title="Developer Blogs - Rades Pratama"
      description="This is where I share my writings on programming, tutorials, and my experiences."
      url={`${process.env.BASE_URL}/blogs`}
    >
      <Intro blogs={blogs} />
    </Layout>
  );
}

export async function getStaticProps() {
  const blogs = await sanityClient.fetch(queryFetchBlog);

  return {
    props: {
      blogs,
    },
  };
}
