import React, { useRef } from "react";
import styles from "./PostCard.module.scss";
import Image from "next/image";
import Link from "next/link";
import { IPost, ISuccessStory } from "@/types/sanity-types";
import { urlFor } from "@/lib/sanity.client";
import { useRouter } from "next/router";
export const PostCard: React.FC<{ post: IPost | ISuccessStory }> = ({
  post,
}) => {
  const { title, categories, image, slug, externalImg, externalNews } = post;
  const router = useRouter();

  const onClickCardHandler = () => {
    if (externalNews.flag) {
      window.open(externalNews.link);
    } else {
      router.push(`/news/${slug.current}`);
    }
  };
  return (
    <div className={styles["post-card"]} onClick={onClickCardHandler}>
      <div className={styles["tag-title"]}>
        <p>{externalNews.flag ? "Link" : "article"}</p>
      </div>
      <div className={styles["image-container"]}>
        {image ? (
          <Image
            src={urlFor(image).url()}
            width={300}
            height={200}
            alt="title"
          />
        ) : (
          <Image src={externalImg} width={300} height={200} alt="title" />
        )}
      </div>
      <div className={styles["title-container"]}>
        {externalNews.flag ? (
          <a href={externalNews.link} target="_blank" rel="noreferrer">
            <h4>{title}</h4>
          </a>
        ) : (
          <Link href={`/news/${slug.current}`}>
            <h4>{title}</h4>
          </Link>
        )}
      </div>
    </div>
  );
};
