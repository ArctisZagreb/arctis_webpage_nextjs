import { IArchibusPlan } from "@/types/general";
import React from "react";
import styles from "./AdditionalInfo.module.scss";
export const AdditionalInfo: React.FC<{
  expandCard: boolean;

  cardData: IArchibusPlan;
}> = ({
  expandCard,

  cardData,
}) => {
  return (
    <div
      className={`${styles["additional-info"]} ${
        expandCard ? styles["card-open"] : ""
      }`}
    >
      <h1>{cardData.name}</h1>
      {cardData.cardDetails.map((cd) => {
        return (
          <div key={cd.title} className={styles["details-content"]}>
            <h3>{cd.title}</h3>
            {cd.text.map((item) => {
              return <p key={Math.random()}>{item}</p>;
            })}
          </div>
        );
      })}
    </div>
  );
};
