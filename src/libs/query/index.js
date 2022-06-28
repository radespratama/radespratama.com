const queryFetchProject = `
  *[_type == "project"]{
    _id,
    title,
    shortDescription,
    author -> { name, image },
    mainImage,
    tags[] -> { title },
    publishedAt,
    githubUrl,
    demoUrl
  }
`;

const queryFetchSlug = `
  *[_type == "post"]{
    _id,
    slug {
      current
    },
  }
`;

const queryFetchBlog = `
  *[_type=="post"]{
    _id,
    title,
    slug,
    shortDescription,
    author -> { name, image },
    mainImage,
    tags[] -> { title },
    publishedAt,
    body
  }
`;

const queryFetchBlogDynamic = `
  *[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    shortDescription,
    slug,
    mainImage,
    author -> {
      name,
      image
    },
    tags[] -> { title },
    body,
    publishedAt
  }
`;

export {
  queryFetchProject,
  queryFetchBlog,
  queryFetchSlug,
  queryFetchBlogDynamic,
};
