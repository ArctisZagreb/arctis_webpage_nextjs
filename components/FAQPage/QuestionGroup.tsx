import { IFAQGroup } from "@/types/general";
import React, { useState } from "react";
import styles from "./QuestionGroup.module.scss";
import { QuestionItem } from "./QuestionItem";
export const QuestionGroup: React.FC<{ title: string; items: IFAQGroup[] }> = ({
  title,
  items,
}) => {
  const [showQuestions, setShowQuestions] = useState(false);
  const toogleQuestions = () => {
    setShowQuestions(!showQuestions);
  };
  return (
    <div className={styles["question-group"]}>
      <h4 onClick={toogleQuestions}>
        {title} {showQuestions ? "↓" : "↑"}
      </h4>
      <div
        className={`${styles["questions-container"]} ${
          showQuestions ? styles["show"] : ""
        }`}
      >
        {items.map((item) => {
          return <QuestionItem key={item.id} data={item} />;
        })}
      </div>
    </div>
  );
};
