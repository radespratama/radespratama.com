import React from 'react';

import Layout from '@component/Layout';

import { sanityClient } from '@lib/config/sanity.config';
import { queryFetchSlug, queryFetchBlogDynamic } from '@lib/query';
import DetailBlogs from '@layout/BlogPage/DetailBlogs';

export default function DetailBlog({ blogs }) {
  return (
    <Layout
      isFooter
      title={`Developer Blogs - ${blogs.title}`}
      description={blogs.shortDescription}
      url={`${process.env.NEXT_PUBLIC_BASE_URL}/blogs/${blogs.slug.current}`}
    >
      <DetailBlogs blogs={blogs} />
    </Layout>
  );
}

export const getStaticPaths = async () => {
  const blogs = await sanityClient.fetch(queryFetchSlug);

  const paths = blogs.map((blog) => ({
    params: { slug: blog.slug.current },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps = async ({ params }) => {
  const blogs = await sanityClient.fetch(queryFetchBlogDynamic, {
    slug: params?.slug,
  });

  if (!blogs) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      blogs,
    },
  };
};
