import { Wrapper } from "@/components/layout/Wrapper/Wrapper";
import { IPost, ISuccessStory } from "@/types/sanity-types";
import React, { ReactEventHandler, useRef, useState } from "react";
import styles from "./AllPostsList.module.scss";
import { PostList } from "./PostList";
export const AllPostsList: React.FC<{ posts: IPost[] | ISuccessStory[] }> = ({
  posts,
}) => {
  //TODO - currently any because I got filter ts error if I put IPost | ISuccessStory
  const postsData: any = posts;
  const [filteredPostsData, setFilteredPostsData] = useState<
    IPost[] | ISuccessStory[]
  >(posts);

  const [searchValue, setSearchValue] = useState("");
  const searchHandler = (e: any) => {
    const value = e.target.value;

    const filteredData = postsData.filter((post: IPost | ISuccessStory) => {
      const title = post.title.toLowerCase();
      const lowerValue = value.toLowerCase();
      if (title.includes(lowerValue)) {
        return post;
      }
      /* const tagsList = postsData.categories;
      for (const tag of tagsList) {
        if (tag.title.toLowerCase().includes(lowerValue)) {
          return post;
        }
      } */
    });

    setSearchValue(value);
    setFilteredPostsData(filteredData);
  };
  return (
    <div className={styles["all-posts"]}>
      <Wrapper>
        <div className={styles["search-container"]}>
          <input
            type="text"
            name="search"
            value={searchValue}
            placeholder="Search by title"
            onChange={searchHandler}
          />
        </div>
        <PostList posts={filteredPostsData} />
      </Wrapper>
    </div>
  );
};
