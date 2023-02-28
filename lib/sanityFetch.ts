import { IPost } from "../types/sanity-types";
import { client } from "./sanity.client";

/* POST SCHEMA */

export const getAllPosts = async () => {
  const postGroq = `
     \*[_type=='post' && (!(_id in path("drafts.**")))]{
        ...,
        categories[]->,
        author->
     }
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
