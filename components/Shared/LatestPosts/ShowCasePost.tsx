import styles from "./ShowCasePost.module.scss";
import { urlFor } from "@/lib/sanity.client";
import { IPost, ISuccessStory } from "@/types/sanity-types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const ShowCasePost: React.FC<{ data: IPost | ISuccessStory }> = ({
  data,
}) => {
  const generateImage = () => {
    let imgUrl = "/assets/images/placeholderPost.png";
    if (data.image) imgUrl = urlFor(data.image).url();

    if (data.externalImg) imgUrl = data.externalImg;

    return <Image src={imgUrl} width={400} height={200} alt={data.title} />;
  };

  //external news
  if (data?.externalNews.flag) {
    return (
      <div className={styles["showcase-post"]}>
        <div className={styles["image-container"]}>
          <div className={styles["overlay"]}></div>
          <a href={data.externalNews.link} target="_blank" rel="noreferrer">
            {generateImage()}
          </a>
        </div>
        <h1>
          <a href={data.externalNews.link} target="_blank" rel="noreferrer">
            {data.title}
          </a>
        </h1>
      </div>
    );
  }
  const urlPath = `/${data._type === "post" ? "news" : "success-stories"}/${
    data.slug.current
  }`;
  //post on website
  return (
    <div className={styles["showcase-post"]}>
      <div className={styles["image-container"]}>
        <div className={styles["overlay"]}></div>
        <Link href={urlPath}>{generateImage()}</Link>
      </div>
      <h1>
        <Link href={urlPath}>{data.title}</Link>
      </h1>
    </div>
  );
};
