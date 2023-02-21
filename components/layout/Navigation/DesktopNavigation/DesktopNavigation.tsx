import React from "react";
import styles from "./DesktopNavigation.module.scss";
import { NAVIGATIONPATHS } from "@/STATIC_DATA/NAVIGATIONPATHS";
import { NavigationList } from "./NavigationList";
export const DesktopNavigation = () => {
  return (
    <nav className={styles["desktop-navigation"]}>
      <NavigationList navItems={NAVIGATIONPATHS} />
    </nav>
  );
};
