import { IPost } from "../types/sanity-types";
import { client } from "./sanity.client";

/* POST SCHEMA */

export const getAllPosts = async () => {
  const postGroq = `
     \*[_type=='post' && (!(_id in path("drafts.**")))]{
        ...,
        categories[]->,
        author->
     } \| order(_createdAt desc)
    `;

  const postsData = await client.fetch(postGroq);

  return postsData;
};

export const getLatestPosts = async (numberOfLatest: number) => {
  const postGroq = `
    \*[_type=='post' && (!(_id in path("drafts.**")))]{
       ...,
       categories[]->
    } \| order(_createdAt desc)[0..${numberOfLatest}]
   `;

  const postsData = await client.fetch(postGroq);

  return postsData;
};

export const getPostBySlug = async (slug: string | string[]) => {
  const postsData = await getAllPosts();
  const filteredPost = postsData.find(
    (post: IPost) => post.slug.current === slug
  );

  return filteredPost;
};

export const getPostsPaths = async () => {
  const postsData = await getAllPosts();
  const pathsList = postsData.map((post: IPost) => {
    return { params: { postid: post.slug.current } };
  });
  return pathsList;
};

export const getBlogPostsPaths = async () => {
  const postsData = await getAllPosts();
  const pathsList = postsData
    .map((post: IPost) => {
      if (!post.externalNews.flag) {
        return { params: { newsid: post.slug.current } };
      }
    })
    .filter((post: any) => {
      if (post) {
        return post;
      }
    });

  return pathsList;
};
/* Success Stories */

export const getLatestSuccessStories = async (numberOfLatest: number) => {
  const groq = `
    *[_type=='successStories' && (!(_id in path("drafts.**")))]{
      ...,
      categories[]->
   } \| order(_createdAt desc)[0..${numberOfLatest}]
  `;

  const data = await client.fetch(groq);

  return data;
};
export const getAllSuccessStories = async () => {
  const postGroq = `
     \*[_type=='successStories' && (!(_id in path("drafts.**")))]{
        ...,
        categories[]->,
        author->
     }
    `;

  const postsData = await client.fetch(postGroq);

  return postsData;
};

/* Fetch REFERENCES */

export const getAllReferences = async () => {
  const referencesGroq = `
    \*[_type=='references' && (!(_id in path("drafts.**")))]
  `;
  const referencesData = await client.fetch(referencesGroq);

  return referencesData;
};

/* Archibus Products */

export const getAllArchibusProducts = async () => {
  const productsGroq = `
  \*[_type=='archibusProducts' && (!(_id in path("drafts.**")))]
`;
  const archibusProductsData = await client.fetch(productsGroq);

  return archibusProductsData;
};
