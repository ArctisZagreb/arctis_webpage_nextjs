import { PostCard } from "@/components/Cards/PostCard/PostCard";
import { IPost, ISuccessStory } from "@/types/sanity-types";
import React from "react";
import styles from "./PostList.module.scss";
export const PostList: React.FC<{ posts: IPost[] | ISuccessStory[] }> = ({
  posts,
}) => {
  return (
    <div className={styles["post-list"]}>
      {posts.map((post) => {
        return <PostCard post={post} key={post._id} />;
      })}
    </div>
  );
};
