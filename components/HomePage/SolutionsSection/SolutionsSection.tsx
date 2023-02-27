import React from "react";
import { Wrapper } from "../../layout/Wrapper/Wrapper";
import { SectionTitle } from "../../UI/SectionTitle";
import { ArchibusPlans } from "./ArchibusPlans";
import styles from "./SolutionsSection.module.scss";
import { WorldWideCompanies } from "./WorldWideCompanies";
export const SolutionsSection = () => {
  return (
    <div className={styles["solutions-section"]}>
      <Wrapper>
        <SectionTitle anchorId="solutions" title="Solutions" />
        <WorldWideCompanies />
        <ArchibusPlans />
      </Wrapper>
    </div>
  );
};
