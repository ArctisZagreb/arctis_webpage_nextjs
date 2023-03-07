import { IFAQGroup } from "@/types/general";
import React, { useState } from "react";
import styles from "./QuestionItem.module.scss";
export const QuestionItem: React.FC<{ data: IFAQGroup }> = ({ data }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  const toogleShowAnswer = () => {
    setShowAnswer(!showAnswer);
  };
  return (
    <div className={styles["question-item"]}>
      <div className={styles["question"]} onClick={toogleShowAnswer}>
        <p>{data.question}</p> {showAnswer ? "+" : "-"}
      </div>

      <div
        className={`${styles["answer"]} ${showAnswer ? styles["show"] : ""}`}
      >
        {data.answer}
      </div>
    </div>
  );
};
