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
type externalNews = {
  flag: boolean;
  link: string;
};
export interface IPost {
  _id: string;
  title: string;
  externalNews: externalNews;
  slug: ISlug;
  author: IAuthor;
  image: string;
  externalImg: string;
  categories: ICategory[];
  publishedAt: string;
  description: string;
  body: any;
  _type: "post";
}
export interface ISuccessStory {
  _id: string;
  title: string;
  externalNews: externalNews;
  externalImg: string;
  slug: ISlug;
  author: IAuthor;
  image: string;
  categories: ICategory[];
  publishedAt: string;
  description: string;
  body: any;
  _type: "successStories";
}

export interface IReference {
  _id: string;
  client: {
    name: string;
    url?: string;
  };

  typeOfWork: string;
  slug: ISlug;
  logo: string;
  servicesProvided?: {
    serviceName: string;
    subservices?: string[];
    _key: string;
  }[];
  imageGallery?: { image: string }[];
  _type: "references";
}
