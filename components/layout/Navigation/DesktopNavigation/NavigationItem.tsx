import { INavItem } from "@/types/general";
import Link from "next/link";
import React from "react";
import styles from "./NavigationItem.module.scss";
export const NavigationItem: React.FC<{ item: INavItem }> = ({ item }) => {
  const { name, route, show, subroutes } = item;
  return (
    <Link href={route} className={styles["navigation-item_link"]}>
      <li className={styles["navigation-item"]}>{name}</li>
      {subroutes && (
        <ul className={styles["subroutes-container"]}>
          {subroutes.map((subItem) => {
            return (
              <li key={subItem.name}>
                <Link href={subItem.route}>{subItem.name}</Link>
              </li>
            );
          })}
        </ul>
      )}
    </Link>
  );
};
