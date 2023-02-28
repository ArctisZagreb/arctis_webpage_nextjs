import React, { useState } from "react";
import styles from "./HeroSection.module.scss";
import { Wrapper } from "../layout/Wrapper/Wrapper";
import { SecColText } from "../UI/SecColText";
import Image from "next/image";
import { DownArrow } from "../UI/DownArrow/DownArrow";
import { useRouter } from "next/router";

export const HeroSection = () => {
  const [showControls, setShowControls] = useState(false);
  const router = useRouter();

  const nextSectionHandler = () => {
    router.push("/#services");
  };
  return (
    <section className={styles["hero-section"]}>
      <div
        className={styles["video-container"]}
        onMouseOver={() => {
          setShowControls(true);
        }}
        onMouseLeave={() => {
          setShowControls(false);
        }}
      >
        <video autoPlay={false} controls={showControls} loop muted>
          <source src="/assets/video/why-ab.mp4" type="video/mp4" />
        </video>
      </div>
      <Wrapper>
        <div className={styles["hero-content"]}>
          <div className={styles["logo-container"]}>
            <Image
              alt="Arctis Logo"
              width={420}
              height={110}
              src="/assets/logo/archibus-logo-thin.png"
            />
          </div>
          <div className={styles["hero-text"]}>
            <p>
              We @Arctis are proud to be providers of ARCHIBUS{" "}
              <SecColText>#</SecColText>1 Integrated Workplace Management System
              (IWMS), designed to provide visibility into the core facility
              operations that keep workplaces up and running reliably including
              real estate, infrastructure, building, asset, and project data.
            </p>
          </div>
        </div>
        <div
          className={styles["down-arrow-container"]}
          onClick={nextSectionHandler}
        >
          <DownArrow theme="light" />
        </div>
      </Wrapper>
    </section>
  );
};
