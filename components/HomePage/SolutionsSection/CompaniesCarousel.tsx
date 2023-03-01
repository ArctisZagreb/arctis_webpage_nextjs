import React from "react";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import styles from "./CompaniesCarousel.module.scss";
import Image from "next/image";
const LOGOS = [
  "/assets/logo/companies/cat.png",
  "/assets/logo/companies/illumina.png",
  "/assets/logo/companies/noaa.png",
  "/assets/logo/companies/vodafone.png",
];
export const CompaniesCarousel = () => {
  const [nextIcon, setNextIcon] = useState(true);
  const moveNextHandler = () => setNextIcon(true);

  return (
    <div className={styles["carousel"]}>
      {/* <button
        onClick={() => {
          setNextIcon(false);
        }}
      >
        prev
      </button> */}
      <div className={styles["inner-carousel"]}>
        {LOGOS.map((logo) => {
          return (
            <div
              key={logo}
              className={`${styles["carousel-img-box"]} ${
                nextIcon ? styles["move"] : ""
              }   }`}
            >
              <Image
                alt="company logo"
                src={logo}
                key={logo}
                width={100}
                height={100}
              />
            </div>
          );
        })}
      </div>
      {/*       <button onClick={moveNextHandler}>next</button>
       */}{" "}
    </div>
  );
};
