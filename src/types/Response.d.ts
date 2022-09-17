export interface IMiniCard {
  _id: string;
  author: {
    name: string;
  };
  title: string;
  slug: {
    current: string;
  };
  publishedAt: string;
}
