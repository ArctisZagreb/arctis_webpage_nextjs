import { IArchibusProductsPost } from "@/types/general";
import React from "react";
import { Post } from "../Shared/Post/Post";
import styles from "./ArchibusPost.module.scss";
export const ArchibusPost: React.FC<{
  postData: IArchibusProductsPost;
  closeSelectedPost: Function;
}> = ({ postData, closeSelectedPost }) => {
  return (
    <div>
      <div
        onClick={() => {
          closeSelectedPost();
        }}
        className={styles["open-menu"]}
      >
        MENU
      </div>
      <Post postData={postData} />
    </div>
  );
};
