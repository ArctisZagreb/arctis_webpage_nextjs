import { INavItem } from "@/types/general";
import Link from "next/link";
import React, { useState } from "react";
import styles from "./MNavigationItem.module.scss";
export const MNavigationItem: React.FC<{
  item: INavItem;
  closeModal: Function;
}> = ({ item, closeModal }) => {
  const [showSubPaths, setShowSubPaths] = useState(false);
  const { name, route, subroutes } = item;
  const toggleSubPathsHandler = () => {
    setShowSubPaths(!showSubPaths);
  };
  const closeModalHandler = () => {
    closeModal();
  };
  if (subroutes) {
    return (
      <li className={styles["navigation-item"]}>
        <span className={styles["main-link"]} onClick={toggleSubPathsHandler}>
          {" "}
          {item.name}
        </span>

        <ul
          className={`${styles["subroutes-list"]} ${
            showSubPaths && styles["show-subroutes"]
          }`}
        >
          {subroutes?.map((route) => {
            return (
              <Link
                href={route.route}
                key={route.name}
                onClick={closeModalHandler}
              >
                <li>{route.name}</li>
              </Link>
            );
          })}
        </ul>
      </li>
    );
  }
  return (
    <li className={styles["navigation-item"]}>
      <Link
        href={route}
        className={styles["main-link"]}
        onClick={closeModalHandler}
      >
        {item.name}
      </Link>
    </li>
  );
};
