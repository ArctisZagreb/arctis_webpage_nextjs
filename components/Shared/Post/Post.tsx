import { GradiantBackground } from "@/components/layout/GradiantBackground/GradiantBackground";
import { Wrapper } from "@/components/layout/Wrapper/Wrapper";
import { CustomPortableTextComponents } from "@/components/sanity/CustomPortableTextComponents";
import { urlFor } from "@/lib/sanity.client";
import { IArchibusProductsPost } from "@/types/general";
import { IPost } from "@/types/sanity-types";
import { PortableText } from "@portabletext/react";
import React from "react";
import { PageBigTitle } from "../PageBigTitle";
import styles from "./Post.module.scss";
export const Post: React.FC<{
  postData?: IArchibusProductsPost;
  post?: IPost;
}> = ({ postData, post }) => {
  if (postData) {
    return (
      <div className={styles.post}>
        <div className={styles["post-head"]}>
          <PageBigTitle
            title={postData.menuItem.name}
            img={urlFor(postData.headerImg).url()}
          />
        </div>
        <main className={styles["post-body"]}>
          <PortableText
            value={postData.menuItem.body}
            components={CustomPortableTextComponents}
          />
        </main>
      </div>
    );
  }
  if (post) {
    return (
      <GradiantBackground>
        <div className={`${styles["post"]} ${styles["news-post"]}`}>
          <Wrapper>
            <main className={styles["post-body"]}>
              <PortableText
                value={post.body}
                components={CustomPortableTextComponents}
              />
            </main>
          </Wrapper>
        </div>
      </GradiantBackground>
    );
  }
  return <></>;
};
