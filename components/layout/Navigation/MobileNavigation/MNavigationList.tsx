import React from "react";
import styles from "./MNavigationList.module.scss";
import { NAVIGATIONPATHS } from "@/STATIC_DATA/NAVIGATIONPATHS";
import { MNavigationItem } from "./MNavigationItem";
export const MNavigationList: React.FC<{ closeModal: Function }> = ({
  closeModal,
}) => {
  return (
    <ul className={styles["navigation-list"]}>
      {NAVIGATIONPATHS.map((navItem) => {
        return <MNavigationItem item={navItem} closeModal={closeModal} />;
      })}
    </ul>
  );
};
