import React from "react";
import styles from "./PageBigTitle.module.scss";
import Image from "next/image";
import { Wrapper } from "../layout/Wrapper/Wrapper";
interface IPageBigTitle {
  img: string;
  title: string;
  quote?: string;
  quoteAuthor?: string;
}
export const PageBigTitle: React.FC<IPageBigTitle> = ({
  img,
  title,
  quote,
  quoteAuthor,
}) => {
  return (
    <div className={styles["big-title"]}>
      <div className={styles["image-container"]}>
        <Image
          src={img}
          alt="decorative background"
          width={1000}
          height={500}
        />
      </div>
      <div className={styles["content-container"]}>
        <Wrapper>
          <h1>{title}</h1>
          {quote && (
            <div className={styles["quote"]}>
              <q>{quote}</q>
              {quoteAuthor && <span> - {quoteAuthor}</span>}
            </div>
          )}
        </Wrapper>
      </div>
    </div>
  );
};
