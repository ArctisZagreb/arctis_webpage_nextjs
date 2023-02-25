import Image from "next/image";
import React from "react";
import styles from "./RotateCarousel.module.scss";
const LOGOS = [
  "/assets/logo/companies/cat.png",
  "/assets/logo/companies/illumina.png",
  "/assets/logo/companies/noaa.png",
  "/assets/logo/companies/vodafone.png",
];
export const RotateCarousel = () => {
  return (
    <div className={styles["rotate-carousel"]}>
      <div className={styles["inner-carousel"]}>
        {LOGOS.map((logo, i) => {
          return (
            <div className={styles["carusel-item"]}>
              <Image alt="bla bla" src={logo} width={100} height={100} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
