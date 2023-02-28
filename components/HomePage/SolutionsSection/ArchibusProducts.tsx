import { Button } from "@/components/UI/Button";
import Image from "next/image";
import React from "react";
import styles from "./ArchibusProducts.module.scss";
export const ArchibusProducts = () => {
  return (
    <div className={styles["archibus-products"]}>
      <h1 className={styles["section-title"]}>ARCHIBUS PRODUCTS</h1>
      <div className={styles["flex-container"]}>
        <div className={styles["content"]}>
          <p>Learn more about Archibus products and find perfect one for you</p>
          <div>
            <Button text="products" />
          </div>
        </div>
        <div className={styles["image-container"]}>
          <Image
            src="/assets/images/homepage/ab-products.png"
            alt="decorative image"
            width={470}
            height={470}
          />
        </div>
      </div>
    </div>
  );
};
