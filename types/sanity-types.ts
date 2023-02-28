export interface ISocial {
  url: string;
  socialName: "instagram" | "facebook" | "youtube";
  _key: string;
}
export interface ISlug {
  current: string[];
}
export interface ICategory {
  description: string;
  _id: string;
  title: string;
}
export interface IAuthor {
  bio: any;
  name: string;
  slug: ISlug;
  image: string;
  _id: string;
}
export interface IPost {
  _id: string;
  title: string;
  slug: ISlug;
  author: IAuthor;
  mainImage: string;
  categories: ICategory[];
  publishedAt: string;
  description: string;
  body: any;
}
