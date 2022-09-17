export const queryFetchMiniCard = `
  *[_type == "post"][0..2]{
    _id,
    author -> { name },
    title,
    slug { current },
    publishedAt,
    demoUrl
  }
`;

export const queryFetchAllProject = `
  *[_type == "post"] | order(_createdAt asc){
    _id,
    title,
    demoUrl,
    repository,
    tag[] -> { title },
    mainImage,
    shortDescription
  }
`;

export const queryCountProject = `
  {
    total: count(*[_type == "post"])
  }
`;
