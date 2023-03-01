import { IPost, ISuccessStory } from "@/types/sanity-types";
import Link from "next/link";
import React from "react";
import styles from "./SidePost.module.scss";
export const SidePost: React.FC<{ data: IPost | ISuccessStory }> = ({
  data,
}) => {
  if (data.externalNews.flag) {
    return (
      <a
        href={data.externalNews.link}
        target="_blank"
        rel="noreferrer"
        className={styles["side-post"]}
      >
        <p className={styles["title"]}>{data.title}</p>
      </a>
    );
  }
  const urlPath = `/${data._type === "post" ? "news" : "success-stories"}/${
    data.slug.current
  }`;
  return (
    <Link href={urlPath} className={styles["side-post"]}>
      <p className={styles["title"]}>{data.title}</p>
    </Link>
  );
};
