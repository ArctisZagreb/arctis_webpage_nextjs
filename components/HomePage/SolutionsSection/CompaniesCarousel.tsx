import React from "react";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import styles from "./CompaniesCarousel.module.scss";
export const CompaniesCarousel = () => {
  return (
    <div className={styles["carousel"]}>
      <div className={styles["inner-carousel"]}></div>
    </div>
  );
};
