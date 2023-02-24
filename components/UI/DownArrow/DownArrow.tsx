import { useRouter } from "next/router";
import React from "react";
import styles from "./DownArrow.module.scss";
export const DownArrow: React.FC<{ theme?: "light" }> = ({ theme }) => {
  const router = useRouter();

  return (
    <div className={styles["container"]}>
      <div
        className={`
        ${styles["chevron"]}
         ${theme === "light" && styles["chevron-light"]}
        `}
      ></div>
      <div
        className={`
        ${styles["chevron"]}
         ${theme === "light" && styles["chevron-light"]}
        `}
      ></div>
      <div
        className={`
        ${styles["chevron"]}
         ${theme === "light" && styles["chevron-light"]}
        `}
      ></div>
      <span
        className={`
        ${styles["text"]}
         ${theme === "light" && styles["text-light"]}
        `}
      >
        Scroll down
      </span>
    </div>
  );
};
