import { Wrapper } from "@/components/layout/Wrapper/Wrapper";
import { DownArrow } from "@/components/UI/DownArrow/DownArrow";
import { SectionTitle } from "@/components/UI/SectionTitle";
import { useRouter } from "next/router";
import React from "react";
import styles from "./AboutUsSection.module.scss";
export const AboutUsSection = () => {
  const router = useRouter();

  const nextSectionHandler = () => {
    router.push("/#solutions");
  };
  return (
    <section className={styles["about-us"]}>
      <Wrapper>
        <SectionTitle title="About us" anchorId="aboutus" />
        <div className={styles["arctis-content"]}></div>
      </Wrapper>
    </section>
  );
};
