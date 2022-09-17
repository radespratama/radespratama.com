export const queryFetchMiniCard = `
  *[_type == "post"][0..2]{
    _id,
    author -> { name },
    title,
    slug { current },
    publishedAt
  }
`;
