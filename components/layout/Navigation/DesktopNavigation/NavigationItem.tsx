import { INavItem } from "@/types/general";
import Link from "next/link";
import React from "react";
import styles from "./NavigationItem.module.scss";
export const NavigationItem: React.FC<{ item: INavItem }> = ({ item }) => {
  const { name, route, show, subroutes } = item;
  return (
    <div className={styles["navigation-item_link"]}>
      <Link href={route}>
        <li className={styles["navigation-item"]}>{name}</li>
      </Link>
      {subroutes && (
        <ul className={styles["subroutes-container"]}>
          {subroutes.map((subItem) => {
            return (
              <li key={subItem.name}>
                <Link href={subItem.route} scroll={false}>
                  {subItem.name}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
