import { CloseIcon } from "@/components/UI/icons/CloseIcon";
import React from "react";
import { MNavigationList } from "./MNavigationList";
import styles from "./MobileNavigationModal.module.scss";
export const MobileNavigationModal: React.FC<{ closeModal: Function }> = ({
  closeModal,
}) => {
  const closeModalHandler = () => {
    closeModal();
  };
  return (
    <div className={styles["navigation-modal"]}>
      <div className={styles["close-icon"]} onClick={closeModalHandler}>
        <CloseIcon />
      </div>
      <MNavigationList />
    </div>
  );
};
