import { IFAQGroup } from "@/types/general";
import React from "react";
import styles from "./QuestionGroup.module.scss";
export const QuestionGroup: React.FC<{ title: string; items: IFAQGroup[] }> = ({
  title,
  items,
}) => {
  return (
    <div className={styles["question-group"]}>
      <h4>{title}</h4>
    </div>
  );
};
