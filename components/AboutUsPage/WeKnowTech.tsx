import React from "react";
import { GradiantBackground } from "../layout/GradiantBackground/GradiantBackground";
import { Wrapper } from "../layout/Wrapper/Wrapper";
import styles from "./WeKnowTech.module.scss";
import Image from "next/image";
export const WeKnowTech = () => {
  return (
    <GradiantBackground>
      <Wrapper>
        <div className={styles["we-know-tech"]}>
          <div className={styles["anchor"]} id="tech"></div>
          <h1 className={styles["title"]}>We know tech</h1>
          <p className={styles["subtitle"]}>
            We value technology that helps us help our clients achieve success
            and grow.
          </p>
          <div className={styles["image-desktop"]}>
            <Image
              alt="our tech knowledge"
              src="/assets/images/aboutus/techGraph2.png"
              width={1200}
              height={500}
            />
          </div>
          <div className={styles["image-mobile"]}>
            {" "}
            <Image
              alt="our tech knowledge"
              src="/assets/images/aboutus/techGraphMobile.png"
              width={500}
              height={900}
            />
          </div>
        </div>
      </Wrapper>
    </GradiantBackground>
  );
};
