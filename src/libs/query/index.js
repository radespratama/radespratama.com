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

export { queryFetchProject, queryFetchBlog };
