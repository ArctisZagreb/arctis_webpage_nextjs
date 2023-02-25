import React from "react";
import { CompaniesCarousel } from "./CompaniesCarousel";
import { RotateCarousel } from "./RotateCarousel";
import styles from "./WorldWideCompanies.module.scss";
export const WorldWideCompanies = () => {
  return (
    <div className={styles["worldwide-companies"]}>
      <div className={styles["main-text"]}>
        <h2>
          Some of the most recognised worldwide companies trust ARCHIBUS with
          their enterprise software needs:
        </h2>
      </div>
      <div className="icon-carosaul">
        <CompaniesCarousel />
      </div>
    </div>
  );
};
