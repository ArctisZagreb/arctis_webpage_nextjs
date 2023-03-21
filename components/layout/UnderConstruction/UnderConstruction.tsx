import React from "react";
import { GradiantBackground } from "../GradiantBackground/GradiantBackground";
import Image from "next/image";
import styles from "./UnderConstruction.module.scss";
export const UnderConstruction = () => {
  return (
    <GradiantBackground>
      <section className={styles["under-construction"]}>
        <Image
          src="/assets/images/underConstruction.png"
          alt="page under construction"
          width={1500}
          height={1000}
        />
      </section>
    </GradiantBackground>
  );
};
