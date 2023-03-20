import { PageBigTitle } from "@/components/Shared/PageBigTitle";
import { Post } from "@/components/Shared/Post/Post";
import { urlFor } from "@/lib/sanity.client";
import { getBlogPostsPaths, getPostBySlug } from "@/lib/sanityFetch";
import { IPost } from "@/types/sanity-types";
import { GetStaticProps } from "next";
import React from "react";

const NewsPostPage: React.FC<{ post: IPost }> = ({ post }) => {
  const postImage = post.image ? urlFor(post.image).url() : post.externalImg;
  return (
    <div>
      <PageBigTitle title={post.title} img={postImage} />
      <Post post={post} />
    </div>
  );
};

export default NewsPostPage;

export const getStaticProps: GetStaticProps = async (context) => {
  if (!context.params || !context.params.newsid) {
    return {
      props: {
        event: null,
      },
    };
  }
  const slug = context.params.newsid;
  const post = await getPostBySlug(slug);
  return {
    props: {
      post,
    },
    revalidate: 120,
  };
};

export const getStaticPaths = async () => {
  const postPaths = await getBlogPostsPaths();

  return {
    paths: postPaths,
    fallback: false,
  };
};
