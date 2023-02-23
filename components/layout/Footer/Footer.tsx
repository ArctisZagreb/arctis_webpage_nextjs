import React from "react";
import Image from "next/image";
import styles from "./Footer.module.scss";
import { SecColText } from "@/components/UI/SecColText";
import { Wrapper } from "../Wrapper/Wrapper";
import { SocialIcons } from "@/components/UI/icons/SocialIcons";
import { ContactIcons } from "@/components/UI/icons/ContactIcons";
import { CONTACTDATA } from "@/STATIC_DATA/ARCTISCONTACTDATA";
import { NAVIGATIONPATHS } from "@/STATIC_DATA/NAVIGATIONPATHS";
import Link from "next/link";
export const Footer = () => {
  return (
    <Wrapper>
      <footer className={styles["footer"]}>
        <div className={styles["arctis-section"]}>
          <div className={styles["logo-container"]}>
            <Image
              width={240}
              height={90}
              alt="Arctis logo"
              src="/assets/logo/arctis-logo2.png"
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
        <div className={styles["flex-group"]}>
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
            <ul className={styles["links-list"]}>
              <li>
                <Link href="/">Services</Link>
              </li>
              <li>
                <Link href="/">Solutions</Link>
              </li>
              <li>
                <Link href="/">Resources</Link>
              </li>
              <li>
                <Link href="/">About us</Link>
              </li>
              <li>
                <Link href="/">FAQ</Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};
