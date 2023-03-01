import { IPost, ISuccessStory } from "@/types/sanity-types";
import React from "react";
import styles from "./LatestPosts.module.scss";
import { ShowCasePost } from "./ShowCasePost";
import { SidePost } from "./SidePost";
export const LatestPosts: React.FC<{
  title: string;
  data: IPost[] | ISuccessStory[];
}> = ({ title, data }) => {
  return (
    <div className={styles["latest-posts"]}>
      <h2 className={styles["title"]}>{title}</h2>
      <div className={styles["posts-container"]}>
        <div className={styles["showcase-post"]}>
          {data[0] && <ShowCasePost data={data[0]} />}
        </div>
        <ul className={styles["side-posts"]}>
          {data.slice(-3).map((sidePost) => {
            return <SidePost key={sidePost._id} data={sidePost} />;
          })}
        </ul>
      </div>
    </div>
  );
};
