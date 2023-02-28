import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./HomePageNewsCard.module.scss";
export const HomePageNewsCard = () => {
  return (
    <div className={styles["news-card"]}>
      <div className={styles["image-container"]}>
        <Image src="/" alt="title" width={200} height={100} />
      </div>
      <h1 className={styles.title}></h1>
    </div>
  );
};
