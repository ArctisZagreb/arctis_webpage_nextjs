import { INavItem } from "@/types/general";
import React from "react";
import { NavigationItem } from "./NavigationItem";
import styles from "./NavigationList.module.scss";
export const NavigationList: React.FC<{ navItems: INavItem[] }> = ({
  navItems,
}) => {
  return (
    <ul className={styles["navigation-list"]}>
      {navItems.map((navItem) => {
        return <NavigationItem key={navItem.name} item={navItem} />;
      })}
    </ul>
  );
};
