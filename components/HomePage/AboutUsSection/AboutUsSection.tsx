import { Wrapper } from "@/components/layout/Wrapper/Wrapper";
import { Button } from "@/components/UI/Button";
import { DownArrow } from "@/components/UI/DownArrow/DownArrow";
import { SecColText } from "@/components/UI/SecColText";
import { SectionTitle } from "@/components/UI/SectionTitle";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import styles from "./AboutUsSection.module.scss";
export const AboutUsSection = () => {
  const router = useRouter();

  const nextSectionHandler = () => {
    router.push("/#solutions");
  };
  return (
    <section className={styles["about-us"]}>
      <Wrapper>
        <SectionTitle title="About us" anchorId="aboutus" />
        <div className={styles["flex-container"]}>
          <div className={styles["content"]}>
            <p>
              We <SecColText>@</SecColText>ARCTIS are proud to offer over a
              decade of combined expertise in facilities management consultancy,
              coupled to supplying and installing the most appropriate software
              for integrated workplace management systems (IWMS) - ARCHIBUS,
              backed by a comprehensive range of support services including
              applications development, systems integration, training and
              support.
            </p>
            <Button href="/aboutus" text="learn more" />
          </div>
          <div className={styles["image-container"]}>
            <Image
              src="/assets/logo/arctis-logo3.png"
              width={470}
              height={160}
              alt="Arctis logo"
            />
          </div>
        </div>
        <div className={styles["flex-container"]}>
          <div className={styles["content"]}>
            <p>
              We have delivered successful projects and provided valuable
              services to recognized and valued companies in Croatia and
              worldwide
            </p>
            <Button href="/references" text="read more" />
          </div>
          <div className={styles["images-container"]}>
            <div className={styles["image-box"]}>
              <Image
                src="/assets/logo/companies/msd-logo.png"
                width={240}
                height={160}
                alt="msd logo"
              />
            </div>
            <div className={styles["image-box"]}>
              <Image
                src="/assets/logo/companies/hypo-logo.png"
                width={240}
                height={160}
                alt="HypoGroup alpe adria logo"
              />
            </div>
            <div className={styles["image-box"]}>
              <Image
                src="/assets/logo/companies/tht-logo.png"
                width={240}
                height={160}
                alt="THT logo"
              />
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};
