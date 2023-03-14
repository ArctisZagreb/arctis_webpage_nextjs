import React from "react";
import { ContactForm } from "../Shared/ContactForm/ContactForm";
import styles from "./AboutUsContactForm.module.scss";
export const AboutUsContactForm = () => {
  return (
    <div className={styles["about-us-contact-form"]}>
      <h1>Contact Us</h1>
      <ContactForm />
    </div>
  );
};
