import { Button } from "@/components/UI/Button";
import React, { useState } from "react";
import styles from "./ArchibusPlans.module.scss";
import { ARCHIBUSPLANS } from "@/STATIC_DATA/ARCHIBUSPLANS";
import { PlansCard } from "./PlansCard";
import { AdditionalInfo } from "./AdditionalInfo";
export const ArchibusPlans = () => {
  const [additionalInfoShow, setAdditionalInfoShow] = useState(false);
  const [currentCardNum, setCurrentCardNum] = useState(0);
  const showAdditionalInfo = (cardNum: number) => {
    if (additionalInfoShow && currentCardNum === cardNum) {
      setAdditionalInfoShow(false);
    }
    if (additionalInfoShow && currentCardNum !== cardNum) {
      setCurrentCardNum(cardNum);
    }
    if (!additionalInfoShow) {
      setAdditionalInfoShow(true);
      setCurrentCardNum(cardNum);
    }
  };
  return (
    <div className={styles["archibus-plans"]}>
      <div className={styles["anchor"]} id="archibusplans"></div>
      <h1 className={styles["title"]}>ARCHIBUS PLANS</h1>
      <div className={styles["cards-container"]}>
        {ARCHIBUSPLANS.map((plan) => {
          return (
            <PlansCard
              key={plan._id}
              cardData={plan}
              showAdditionalInfoHandler={showAdditionalInfo}
            />
          );
        })}
      </div>
      <div className={styles["additional-information-container"]}>
        <AdditionalInfo
          cardData={ARCHIBUSPLANS[currentCardNum]}
          expandCard={additionalInfoShow}
        />
      </div>
    </div>
  );
};
