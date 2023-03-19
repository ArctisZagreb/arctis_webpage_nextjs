import { urlFor } from "@/lib/sanity.client";
import { IArchibusProductsPost } from "@/types/general";
import React from "react";
import { PageBigTitle } from "../PageBigTitle";
import styles from "./Post.module.scss";
export const Post: React.FC<{ postData: IArchibusProductsPost }> = ({
  postData,
}) => {
  return (
    <div className={styles.post}>
      <PageBigTitle
        title={postData.menuItem.name}
        img={urlFor(postData.headerImg).url()}
      />
      <div>abs</div>
    </div>
  );
};
