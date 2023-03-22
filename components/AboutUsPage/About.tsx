import React from "react";
import styles from "./About.module.scss";
import { GradiantBackground } from "../layout/GradiantBackground/GradiantBackground";
import { Wrapper } from "../layout/Wrapper/Wrapper";
import { Button } from "../UI/Button";
export const About = () => {
  return (
    <GradiantBackground>
      <Wrapper>
        <div className={styles["about"]}>
          <div className={styles["question-container"]}>
            <h2 className={styles["question"]}>Who we are?</h2>
            <p className={styles["answer"]}>
              We at ARCTIS are proud to offer over a decade of combined
              expertise in facilities management consultancy, coupled to
              supplying and installing the most appropriate software for
              integrated workplace management systems (IWMS) - ARCHIBUS, backed
              by a comprehensive range of support services including
              applications development, systems integration, training and
              support.
            </p>
          </div>
          <div className={styles["question-container"]}>
            <h2 className={styles["question"]}>
              WHY ARE WE DIFFERENT THAN THE REST?
            </h2>
            <p className={styles["answer"]}>
              While providing solutions for key projects such as change
              management, facilities and space planning, asset and maintenance
              management, carbon footprint and other essential operational
              facilities management (FM) tasks, we can also offer BIM + FM
              synergy insights and consultancy.
            </p>
            <p className={styles["answer"]}>
              The success of our approach is due to a proven, robust and
              reliable methodology, developed and enhanced by the company to a
              high level of expertise. Throughout the Europe and Croatia, it has
              enabled us to achieve significant results for our clients in the
              diverse private sector organisations.
            </p>
          </div>
          <div className={styles["cta-container"]}>
            <Button href="/references" text="Our work" />
            <Button href="/contact" text="Contact us" />
          </div>
        </div>
      </Wrapper>
    </GradiantBackground>
  );
};
