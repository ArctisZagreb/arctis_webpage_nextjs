import React, { useState } from "react";
import styles from "./PlansCard.module.scss";
import { Button } from "@/components/UI/Button";
import { IArchibusPlan } from "@/types/general";
import { AdditionalInfo } from "./AdditionalInfo";
export const PlansCard: React.FC<{
  cardData: IArchibusPlan;
  showAdditionalInfoHandler: Function;
}> = ({ cardData, showAdditionalInfoHandler }) => {
  const [additionalInfoShow, setAdditionalInfoShow] = useState(false);

  const buttonHandler = () => {
    setAdditionalInfoShow(!additionalInfoShow);
    showAdditionalInfoHandler(cardData._id);
  };

  return (
    <div className={styles["card-wrapper"]}>
      <div className={`${styles["card"]}`}>
        <div className={styles["card__header"]}>
          <h3 className={styles["header-title"]}>{cardData.name}</h3>
        </div>
        <div className={styles["card__content"]}>
          <h4 className={styles["main-text"]}>{cardData.cardMainText}</h4>
          <ul className={styles["list"]}>
            {cardData.cardContentList.map((liItem, i) => {
              return <li key={i}> {liItem}</li>;
            })}
          </ul>
          <div className={styles["card__btn"]}>
            <Button text="more details" onClick={buttonHandler} />
          </div>
        </div>
      </div>
      <div className={styles["additional-information-box"]}>
        <AdditionalInfo cardData={cardData} expandCard={additionalInfoShow} />
      </div>
    </div>
  );
};
