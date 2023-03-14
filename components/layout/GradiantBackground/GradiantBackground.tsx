import React from "react";
import styles from "./GradiantBackground.module.scss";
export const GradiantBackground: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <div className={styles["gradiant-background"]}>{children}</div>;
};
