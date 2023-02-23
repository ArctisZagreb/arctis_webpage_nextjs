import React from "react";
import styles from "./SecColText.module.scss";
export const SecColText: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <span className={styles["sec-col-text"]}>{children}</span>;
};
