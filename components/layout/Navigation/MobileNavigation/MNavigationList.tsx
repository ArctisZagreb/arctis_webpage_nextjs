import React from "react";
import styles from "./MNavigationList.module.scss";
import { NAVIGATIONPATHS } from "@/STATIC_DATA/NAVIGATIONPATHS";
import { MNavigationItem } from "./MNavigationItem";
export const MNavigationList = () => {
  return (
    <ul className={styles["navigation-list"]}>
      {NAVIGATIONPATHS.map((navItem) => {
        return <MNavigationItem item={navItem} />;
      })}
    </ul>
  );
};
