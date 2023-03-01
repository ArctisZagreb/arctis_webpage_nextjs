import { Wrapper } from "@/components/layout/Wrapper/Wrapper";
import { LatestPosts } from "@/components/Shared/LatestPosts/LatestPosts";
import { DownArrow } from "@/components/UI/DownArrow/DownArrow";
import { SectionTitle } from "@/components/UI/SectionTitle";
import { IPost, ISuccessStory } from "@/types/sanity-types";
import { useRouter } from "next/router";
import React from "react";
import styles from "./ResourcesSection.module.scss";
export const ResourcesSection: React.FC<{
  successStories: ISuccessStory[];
  news: IPost[];
}> = ({ successStories, news }) => {
  const router = useRouter();

  const nextSectionHandler = () => {
    router.push("/#aboutus");
  };
  return (
    <Wrapper>
      <section className={styles["resources-section"]}>
        <SectionTitle anchorId="resources" title="resources" />
        <div className={styles["posts-container"]}>
          {news && <LatestPosts title="News" data={news} />}
        </div>
        <div className={styles["posts-container"]}>
          {successStories && (
            <LatestPosts title="success stories" data={successStories} />
          )}
        </div>
        <div
          className={styles["down-arrow-container"]}
          onClick={nextSectionHandler}
        >
          <DownArrow />
        </div>
      </section>
    </Wrapper>
  );
};
