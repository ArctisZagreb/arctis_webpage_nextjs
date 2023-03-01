import React from "react";
import styles from "./ServicePageContent.module.scss";
import Image from "next/image";
import { Wrapper } from "../layout/Wrapper/Wrapper";
import { Parallax } from "react-parallax";
export const ProjectManagementContent = () => {
  return (
    <section className={styles["content"]}>
      <Wrapper>
        <p className={styles["paragraph"]}>
          From initial deployment and day-to-day optimization to big picture
          thinking and proactive strategizing, our experts are ready to provide
          the depth and breadth of experience necessary turn vision into
          reality.
        </p>
        <p className={styles["paragraph"]}>
          Our experienced project managers know the challenges and possible
          solutions for the complex project challenges in Corporate Real Estate,
          Asset Management and Facility Management professions. We support our
          customers with the project management and project coordination
          services during those projects.
        </p>
        <h1 className={styles["title"]}>AGILE VS WATERFALL APPROACH</h1>
        <p className={styles["paragraph"]}>
          With a prescriptive implementation approach, using modern technologies
          and leveraging industry best practices, we @Arctis focus on delivering
          a faster project deployment and a reliable return on your technology
          investment.
        </p>
        <p className={styles["paragraph"]}>
          While combining, dependant of the project type, two of the most common
          project management approaches (waterfall and agile), for the solution
          implementation and development projects we most commonly utilize agile
          project management practice.
        </p>
        <p className={styles["paragraph"]}>
          Agile project management is an incremental and iterative practice with
          regular feedback intervals, promoting adaptability throughout the
          product development or implementation process, allowing regular and
          high-impact releases that enable delivering a series of wins over
          time.
        </p>
        <p className={styles["paragraph"]}>
          On the other hand, waterfall project management approach follows a
          linear, sequential formula of project phases execution that do not
          advance until each phase receives final approval, which can prove
          difficult and costly to revisit a previous phase, rendering
          implementation or development project less adaptable and flexible.
        </p>
        <p className={styles["paragraph"]}>
          Applying an agile mindset to ARCHIBUS solution implementation and
          development requires focusing on agility and adaptability in delivery.
          This translates into multiple go-lives and strategic iterations, with
          on-time and on-budget emphasis.
        </p>
        <p className={styles["paragraph"]}>
          Our strategy, when delivering products & implementation projects, is
          using the agile project management approach as the most effective
          practices when adaptability and agility are required. Together with
          our customers, we have established project processes that are based on
          best practice standards, while simultaneously leaving plenty of room
          for tailoring and customization, based on individual organisations
          specifications.
        </p>
      </Wrapper>
      <div className={styles["parallax-container"]}>
        <Parallax
          bgImage="/assets/images/decorative/paragraph2.jpg"
          bgImageAlt="decorative image"
          strength={210}
        >
          <div style={{ height: "150px" }}></div>
        </Parallax>
      </div>
      <Wrapper>
        <p className={styles["paragraph"]}>
          Some of our usual activities include:
        </p>
        <ul className={styles["list"]}>
          <li> Analysing the organisation needs closely with the client</li>
          <li> Planning projects adaptively</li>
          <li> Defining concepts and work details</li>
          <li> Managing projects of different scope and size</li>
          <li>
            {" "}
            Providing assistance, educating clients through training courses and
            workshops
          </li>
          <li>
            Establishing regular meetings on the status and progress of the
            project
          </li>
          <li>
            Reacting flexibly and dynamically to changes and new requirements
          </li>
          <li>
            Orientating towards budget requirements and adhering to schedules
          </li>
          <li>...</li>
        </ul>
      </Wrapper>
    </section>
  );
};
