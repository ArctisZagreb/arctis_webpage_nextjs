import React from "react";
import styles from "./ContactContent.module.scss";
import { Wrapper } from "../layout/Wrapper/Wrapper";
import { ContactForm } from "../Shared/ContactForm/ContactForm";
import { ContactIcons } from "../UI/icons/ContactIcons";
import { CONTACTDATA } from "@/STATIC_DATA/ARCTISCONTACTDATA";
export const ContactContent = () => {
  return (
    <Wrapper>
      <div className={styles["contact-content"]}>
        <div className={styles["form-container"]}>
          <ContactForm />
        </div>
        <div className={styles["information-container"]}>
          <h2 className={styles["firm-title"]}>Arctis d.o.o.</h2>

          <ul className={styles["contact-info"]}>
            <li>
              <span className={styles["icon"]}>
                <ContactIcons type="address" />
              </span>{" "}
              <p>{CONTACTDATA.address}, Croatia</p>
            </li>
            <li>
              <span className={styles["icon"]}>
                <ContactIcons type="phone" />
              </span>{" "}
              <a href={`tel:${CONTACTDATA.phoneNumber}`}>
                {CONTACTDATA.phoneNumber}
              </a>
            </li>
            <li>
              <span className={styles["icon"]}>
                <ContactIcons type="email" />
              </span>
              <a href={`emailto:${CONTACTDATA.email}`}>{CONTACTDATA.email}</a>
            </li>
          </ul>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2780.7764598669132!2d15.95853491577551!3d45.81573511793828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d6e01307784b%3A0x28a7a9941c528e74!2sArctis%20d.o.o.!5e0!3m2!1sen!2shr!4v1621414850053!5m2!1sen!2shr"
            width="600"
            height="450"
            title="google maps location"
            loading="lazy"
          ></iframe>
          <div className={styles["leagal-info"]}>
            <h3> Legal Information</h3>
            <br />
            <p>
              The Board of Directors is represented by the Managing Director
              Hrvoje Šolman.
            </p>{" "}
            <br />
            <p>
              The company is signed into a court registrar at Commercial court
              in Zagreb.
            </p>
            <p>MBS: 080744742</p>
            <p>MB: 2697190, OIB: 36165855739</p>
            <p>
              The capital of the Company amounts to 20.000,00 kunas and it is
              completely paid.
            </p>{" "}
            <br />
            <p>Bank: Hypo Alpe-Adria-Bank d.d.</p>
            <p>Bank Address: Slavonska av. 6, Zagreb</p>
            <p>IBAN: HR46 2500 0091 1013 3645 6</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
