import React from "react";
import styles from "./ServicePageContent.module.scss";
import { Wrapper } from "../layout/Wrapper/Wrapper";
import { Parallax } from "react-parallax";
export const ConsultingContent = () => {
  return (
    <section className={styles["content"]}>
      <Wrapper>
        <p className={styles["paragraph"]}>
          Consulting services in ICT are advisory services that help
          organisations assess different technology strategies and, while doing
          so, align their technology strategies with their business or process
          strategies. These services support organisational IT initiatives by
          providing strategic, architectural, operational and implementation
          planning:
        </p>
        <p className={styles["paragraph"]}>
          Strategic planning usually includes advisory services that help
          organisations assess their IT needs and formulate system
          implementation plans, including IWMS / CMMS / CAFM solutions
          implementation.
        </p>
        <p className={styles["paragraph"]}>
          Architecture planning usually includes advisory services that combine
          strategic plans and knowledge of emerging technologies to create the
          logical design of the system and the supporting infrastructure to meet
          organisation requirements.
        </p>
        <p className={styles["paragraph"]}>
          Operational assessment and benchmarking include services that assess
          the operating efficiency and capacity of an organisation’s IT
          environment.
        </p>
        <p className={styles["paragraph"]}>
          Implementation planning includes services aimed at advising
          organisations on the rollout and testing of new solution deployments.
        </p>
        <h1 className={styles["title"]}>CONSULTANCY IN PRACTICE</h1>
        <p className={styles["paragraph"]}>
          The process starts with a needs assessment to discover the right
          solution for the target organisation, by investing ample of time with
          the key stakeholders, with the sole purpose of understanding their
          existing processes as well as their goals.
        </p>
        <p className={styles["paragraph"]}>
          In continuation, a documentation of existing processes and
          identification of areas that are efficient as well as areas that can
          be improved throughout the implementation is required. Our specialists
          provide support in the various Asset Management and Facility
          Management areas addressing reducing costs, generating savings,
          increasing work productivity, optimizing office space and digitizing
          work processes, etc.
        </p>
        <p className={styles["paragraph"]}>
          A deliverable for this phase is a detailed Implementation Plan which
          includes a set of detailed and refined schedule that takes into
          consideration key stakeholders core business processes which should
          not be negatively impacted by the overall project.
        </p>
        <p className={styles["paragraph"]}>
          An important emphasis is also on supporting clients in the creation of
          data models based on national and international standards (ISO, PAS,
          IFC, COBie…) and jointly developing a procedure for data collection,
          comparison and relocation activities.
        </p>
        <p className={styles["paragraph"]}>
          Consultancy service is an important component for the successful
          implementation project. In addition to the project management and the
          support of our IT specialists, you can rely on a comprehensive and
          reliable advice from our experienced consultants. They can support you
          with the technical know-how and provide an assistance with the
          technical implementation. Our consultants are always improving with
          the latest developments and innovations, especially within the
          constantly and rapidly changing IT landscape, and can advise you
          through a needs-oriented and target-oriented methodology.
        </p>
        <p className={styles["paragraph"]}>
          In addition, we have created a comprehensive ROI calculator to assess
          the implementation potential by introducing an FTE component,
          analysing the time needed to finish a specific task between
          traditional methodology and using ARCHIBUS solution.
        </p>
      </Wrapper>
      <div className={styles["parallax-container"]}>
        <Parallax
          bgImage="/assets/images/decorative/paragraph.png"
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
          <li>Needs Assessment</li>
          <li>ROI (Return-on-Investment) analysis</li>
          <li>Explore the potential solutions</li>
          <li>Workflow process evaluation</li>
          <li>Technology evaluation</li>
          <li>Global deployment consultancy</li>
          <li>Post-implementation results analysis</li>
          <li>Key Performance Indicator (KPI) analysis</li>
          <li>Workflow process review</li>
          <li>Technology roadmap planning</li>
          <li>...</li>
        </ul>
      </Wrapper>
    </section>
  );
};
