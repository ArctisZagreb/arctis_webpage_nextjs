import { Wrapper } from "@/components/layout/Wrapper/Wrapper";
import { DownArrow } from "@/components/UI/DownArrow/DownArrow";
import { SectionTitle } from "@/components/UI/SectionTitle";
import { useRouter } from "next/router";
import React from "react";
import styles from "./ResourcesSection.module.scss";
export const ResourcesSection = () => {
  const router = useRouter();

  const nextSectionHandler = () => {
    router.push("/#aboutus");
  };
  return (
    <Wrapper>
      <section className={styles["resources-section"]}>
        <SectionTitle anchorId="resources" title="resources" />

        <div
          className={styles["down-arrow-container"]}
          onClick={nextSectionHandler}
        >
          <DownArrow />
        </div>
      </section>
    </Wrapper>
  );
};
