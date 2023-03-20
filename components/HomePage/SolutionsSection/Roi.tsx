import React from "react";
import Image from "next/image";
import styles from "./Roi.module.scss";
import { Button } from "@/components/UI/Button";
export const Roi = () => {
  return (
    <div className={styles["roi"]}>
      <h1 className={styles["section-title"]}>RETURN ON INVESTMENT</h1>
      <div className={styles["flex-container"]}>
        <div className={styles["content"]}>
          <p>
            Try out our ROI calculator for free. Find out what will be your
            return on investment for energy and maintenence
          </p>
          <div className={styles["btn-container"]}>
            <Button href="/roi" text="calculate" />
          </div>
        </div>
        <div className={styles["image-container"]}>
          <Image
            src="/assets/images/homepage/roi.png"
            alt="decorative image"
            width={470}
            height={470}
          />
        </div>
      </div>
    </div>
  );
};
