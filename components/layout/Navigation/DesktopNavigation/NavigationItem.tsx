import { INavItem } from "@/types/general";
import Link from "next/link";
import React from "react";
import styles from "./NavigationItem.module.scss";
export const NavigationItem: React.FC<{ item: INavItem }> = ({ item }) => {
  const { name, route, show, subroutes } = item;
  return (
    <Link href={route}>
      <li className={styles["navigation-item"]}>{name}</li>
    </Link>
  );
};
