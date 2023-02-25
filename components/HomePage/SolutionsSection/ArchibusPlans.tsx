import React from "react";
import styles from "./ArchibusPlans.module.scss";
export const ArchibusPlans = () => {
  return (
    <div className={styles["archibus-plans"]}>
      <h1 className={styles["title"]}>ARCHIBUS PLANS</h1>
      <div className={styles["cards-container"]}>
        <div className={styles["card"]}>
          <div className={styles["card__header"]}></div>
          <div className={styles["card__content"]}></div>
          <div className={styles["card__btn"]}></div>
        </div>
      </div>
    </div>
  );
};
