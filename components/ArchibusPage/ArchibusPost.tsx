import { IArchibusProductsPost } from "@/types/general";
import React from "react";
import { Post } from "../Shared/Post/Post";

export const ArchibusPost: React.FC<{ postData: IArchibusProductsPost }> = ({
  postData,
}) => {
  return (
    <div style={{ flex: 1 }}>
      <Post postData={postData} />
    </div>
  );
};
