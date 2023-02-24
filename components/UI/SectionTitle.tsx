import React from "react";
import styles from "./SectionTitle.module.scss";
export const SectionTitle: React.FC<{ anchorId: string; title: string }> = ({
  anchorId,
  title,
}) => {
  return (
    <div className={styles["section-title"]}>
      <div className={styles["anchor"]} id={anchorId}></div>
      <h1>{title}</h1>
    </div>
  );
};
