import React from "react";
import styles from "./ContactHeader.module.scss";
export const ContactHeader = () => {
  return (
    <div className={styles["contact-header"]}>
      <h1>Contact</h1>
      <p>Feel free to contact us</p>
    </div>
  );
};
