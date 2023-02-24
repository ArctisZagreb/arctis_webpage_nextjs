import { HamburgerIcon } from "@/components/UI/icons/HamburgerIcon";
import React, { useState } from "react";
import styles from "./MobileNavigation.module.scss";
import { MobileNavigationModal } from "./MobileNavigationModal";
export const MobileNavigation = () => {
  const [openModal, setOpenModal] = useState(false);
  const openModalHandler = () => setOpenModal(true);
  const closeModalHandler = () => setOpenModal(false);
  return (
    <div className={styles["mobile-navigation"]}>
      <MobileNavigationModal open={openModal} closeModal={closeModalHandler} />

      {!openModal && (
        <div className={styles["hambi-container"]} onClick={openModalHandler}>
          <HamburgerIcon />
        </div>
      )}
    </div>
  );
};
