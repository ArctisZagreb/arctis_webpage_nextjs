import { IFAQGroup } from "@/types/general";
import React, { useState } from "react";
import styles from "./QuestionGroup.module.scss";
import { QuestionItem } from "./QuestionItem";
import ArrowRight from "./../../public/assets/icons/arrow-right.svg";
import { AnimatePresence, motion } from "framer-motion";
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
      <div onClick={toogleQuestions} className={styles.question}>
        <h4>{title} </h4>
        {showQuestions ? (
          <span className={`${styles["arrow"]} ${styles["rotate-down"]}`}>
            <ArrowRight />
          </span>
        ) : (
          <span className={`${styles["arrow"]} ${styles["rotate-up"]}`}>
            <ArrowRight />
          </span>
        )}
      </div>
      <AnimatePresence>
        {showQuestions && (
          <motion.div
            key={title}
            initial={{ y: 0, opacity: 0, scale: 1 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            exit={{
              opacity: 0,
              scale: 1,
              transition: { duration: 1 },
            }}
            className={`${styles["questions-container"]} `}
          >
            {items.map((item) => {
              return <QuestionItem key={item.id} data={item} />;
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
