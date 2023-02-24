import Link from "next/link";
import styles from "./Button.module.scss";
import React from "react";

export const Button: React.FC<{
  href?: string;
  onClick?: Function;
  text: string;
}> = ({ href, onClick, text }) => {
  if (href) {
    <Link href={href} className={styles["button"]}>
      <span>{text}</span>
    </Link>;
  }
  if (onClick) {
    const onClickHandler = () => {
      onClick();
    };
    <button className={styles["button"]} onClick={onClickHandler}>
      <span>{text}</span>
    </button>;
  }

  return (
    <button className={styles["button"]}>
      <span>{text}</span>
    </button>
  );
};
