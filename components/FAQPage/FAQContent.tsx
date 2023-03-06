import React from "react";
import { Wrapper } from "../layout/Wrapper/Wrapper";
import styles from "./FAQContent.module.scss";
import {
  SPACE_MANAGEMENT_FAQ,
  PROPERTY_MANAGMENT_FAQ,
  MAINTENANCE_MANAGEMENT_FAQ,
} from "@/STATIC_DATA/FAQ";
import { QuestionGroup } from "./QuestionGroup";
export const FAQContent = () => {
  return (
    <div className={styles["faq-content"]}>
      <Wrapper>
        {/* <div className={styles["search-container"]}>
          <input type="text" name="search" placeholder="Search by question" />
        </div> */}
        <div className={styles["questions-container"]}>
          <QuestionGroup
            title="property management"
            items={PROPERTY_MANAGMENT_FAQ}
          />
          <QuestionGroup
            title="space management"
            items={SPACE_MANAGEMENT_FAQ}
          />
          <QuestionGroup
            title="maintenance management"
            items={MAINTENANCE_MANAGEMENT_FAQ}
          />
        </div>
      </Wrapper>
    </div>
  );
};
