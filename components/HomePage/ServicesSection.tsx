import React from "react";
import Link from "next/link";
import styles from "./ServicesSection.module.scss";
import { Wrapper } from "../layout/Wrapper/Wrapper";
import { SectionTitle } from "../UI/SectionTitle";
import Image from "next/image";
import { Button } from "../UI/Button";
import { useRouter } from "next/router";
import { DownArrow } from "../UI/DownArrow/DownArrow";
export const ServicesSection = () => {
  const router = useRouter();

  const nextSectionHandler = () => {
    router.push("/#solutions");
  };
  return (
    <section>
      <Wrapper>
        <SectionTitle anchorId="services" title="SERVICES" />
        <div className={styles["main-content"]}>
          <p>
            We are experts in IWMS / CAFM / CMMS solutions and technology
            services, focused on enhancing your working environment and
            supporting your organisation goals
          </p>
          <Image
            src="/assets/images/homepage/service-section.png"
            alt="decorative image"
            width={550}
            height={380}
          />
        </div>
        <div className={styles["services-cards"]}>
          <div className={styles["service-card"]}>
            <h4>Project Management</h4>
            <Button href="/project-management" text="read more" />
          </div>
          <div className={styles["service-card"]}>
            <h4>Implementation</h4>
            <Button href="/implementation" text="read more" />
          </div>
          <div className={styles["service-card"]}>
            <h4>Consulting</h4>
            <Button href="/consulting" text="read more" />
          </div>
        </div>
        <div
          className={styles["down-arrow-container"]}
          onClick={nextSectionHandler}
        >
          <DownArrow />
        </div>
      </Wrapper>
    </section>
  );
};
