import { Button } from "@/components/UI/Button";
import React from "react";
import styles from "./ArchibusPlans.module.scss";
export const ArchibusPlans = () => {
  return (
    <div className={styles["archibus-plans"]}>
      <h1 className={styles["title"]}>ARCHIBUS PLANS</h1>
      <div className={styles["cards-container"]}>
        <div className={styles["card"]}>
          <div className={styles["card__header"]}>
            <h3 className={styles["header-title"]}>Enterprise</h3>
          </div>
          <div className={styles["card__content"]}>
            <h4 className={styles["content__main-text"]}>
              Web based solution for medium and big companies.
            </h4>
            <ul className={styles["content__list"]}>
              <li>Requires license purchase</li>
              <li>Short amortization period</li>
              <li>Unlimited applications</li>
              <li>Unlimited competitors users</li>
            </ul>
          </div>
          <div className={styles["card__btn"]}>
            <Button text="more details" />
          </div>
        </div>
        <div className={styles["card"]}>
          <div className={styles["card__header"]}>
            <h3 className={styles["header-title"]}>Enterprise</h3>
          </div>
          <div className={styles["card__content"]}>
            <h4 className={styles["content__main-text"]}>
              Web based solution for medium and big companies.
            </h4>
            <ul className={styles["content__list"]}>
              <li>Requires license purchase</li>
              <li>Short amortization period</li>
              <li>Unlimited applications</li>
              <li>Unlimited competitors users</li>
            </ul>
          </div>
          <div className={styles["card__btn"]}>
            <Button text="more details" />
          </div>
        </div>
        <div className={styles["card"]}>
          <div className={styles["card__header"]}>
            <h3 className={styles["header-title"]}>Enterprise</h3>
          </div>
          <div className={styles["card__content"]}>
            <h4 className={styles["content__main-text"]}>
              Web based solution for medium and big companies.
            </h4>
            <ul className={styles["content__list"]}>
              <li>Requires license purchase</li>
              <li>Short amortization period</li>
              <li>Unlimited applications</li>
              <li>Unlimited competitors users</li>
            </ul>
          </div>
          <div className={styles["card__btn"]}>
            <Button text="more details" />
          </div>
        </div>
      </div>
    </div>
  );
};
