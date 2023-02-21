import React from "react";
import styles from "./Layout.module.scss";
import { Navigation } from "./Navigation/Navigation";
export const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className={styles["layout"]}>
      <Navigation />
      {children}
    </div>
  );
};
