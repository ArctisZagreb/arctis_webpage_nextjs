import { GradiantBackground } from "@/components/layout/GradiantBackground/GradiantBackground";
import { Wrapper } from "@/components/layout/Wrapper/Wrapper";
import React from "react";
import Image from "next/image";
import styles from "./OurProjectsCta.module.scss";
import { Button } from "@/components/UI/Button";
export default function OurProjectsCta() {
  return (
    <GradiantBackground>
      <Wrapper>
        <div className={styles["flex-container"]}>
          <div className={styles["content"]}>
            <p>
              We have delivered successful projects and provided valuable
              services to recognized and valued companies in Croatia and
              worldwide
            </p>
            <Button text="read more" />
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
    </GradiantBackground>
  );
}
