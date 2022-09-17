export interface IMiniCard {
  _id: string;
  title: string;
  shortDescription: string;
  slug?: {
    current?: string;
  };
  author?: {
    name?: string;
  };
  publishedAt: string;
  demoUrl: string;
  repository: string;
  tag: { [key: string]: any };
  mainImage: () => void | string;
}
