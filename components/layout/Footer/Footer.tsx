import React from "react";
import Image from "next/image";
import styles from "./Footer.module.scss";
import { SecColText } from "@/components/UI/SecColText";
import { Wrapper } from "../Wrapper/Wrapper";
import { SocialIcons } from "@/components/UI/icons/SocialIcons";
import { ContactIcons } from "@/components/UI/icons/ContactIcons";
import { CONTACTDATA } from "@/STATIC_DATA/ARCTISCONTACTDATA";
export const Footer = () => {
  return (
    <Wrapper>
      <footer className={styles["footer"]}>
        <div className={styles["arctis-section"]}>
          <div className={styles["logo-container"]}>
            <Image
              width={180}
              height={70}
              alt="Arctis logo"
              src="/assets/logo/arctis-logo-blue.png"
            />
          </div>
          <p>
            We <SecColText>@</SecColText>Arctis are experts in IWMS / CAFM /
            CMMS solutions and technology services, focused on enhancing your
            working environment and supporting your organisation goals
          </p>
          <div className={styles["social-icons"]}>
            <a
              href={CONTACTDATA.linkedin}
              rel="noref"
              target="_blank"
              className={styles["social-icon"]}
            >
              <SocialIcons platform="linkedin" />
            </a>
            <a
              href={CONTACTDATA.facebook}
              rel="noref"
              target="_blank"
              className={styles["social-icon"]}
            >
              <SocialIcons platform="facebook" />
            </a>
          </div>
        </div>
        <div className={styles["contact-section"]}>
          <h2 className={styles["section-title"]}>Contact Us</h2>
          <div className={styles["contact-box"]}>
            <span className={styles["icon-container"]}>
              <ContactIcons type="address" />
            </span>
            <address>{CONTACTDATA.address}</address>
          </div>
          <div className={styles["contact-box"]}>
            <span className={styles["icon-container"]}>
              <ContactIcons type="email" />
            </span>
            <a href={`emailto:${CONTACTDATA.email}`}>{CONTACTDATA.email}</a>
          </div>
          <div className={styles["contact-box"]}>
            <span className={styles["icon-container"]}>
              <ContactIcons type="phone" />
            </span>
            <a href={`tel:${CONTACTDATA.phoneNumber}`}>
              {CONTACTDATA.phoneNumber}
            </a>
          </div>
        </div>
        <div className={styles["links-section"]}>
          <h2 className={styles["section-title"]}>Quick Links</h2>
        </div>
      </footer>
    </Wrapper>
  );
};
