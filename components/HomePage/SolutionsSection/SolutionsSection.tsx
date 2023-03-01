import { DownArrow } from "@/components/UI/DownArrow/DownArrow";
import { useRouter } from "next/router";
import React from "react";
import { Wrapper } from "../../layout/Wrapper/Wrapper";
import { SectionTitle } from "../../UI/SectionTitle";
import { ArchibusPlans } from "./ArchibusPlans";
import { ArchibusProducts } from "./ArchibusProducts";
import { Roi } from "./Roi";
import styles from "./SolutionsSection.module.scss";
import { WorldWideCompanies } from "./WorldWideCompanies";
export const SolutionsSection = () => {
  const router = useRouter();

  const nextSectionHandler = () => {
    router.push("/#resources");
  };
  return (
    <section className={styles["solutions-section"]}>
      <Wrapper>
        <SectionTitle anchorId="solutions" title="Solutions" />
        <WorldWideCompanies />
        <ArchibusPlans />
        <ArchibusProducts />
        <Roi />
      </Wrapper>
      <div
        className={styles["down-arrow-container"]}
        onClick={nextSectionHandler}
      >
        <DownArrow theme="light" />
      </div>
    </section>
  );
};
