import React from "react";
import styles from "./ServicePageContent.module.scss";
import Image from "next/image";
import { Wrapper } from "../layout/Wrapper/Wrapper";
import { Parallax } from "react-parallax";
export const ImplementationContent = () => {
  return (
    <section className={styles["content"]}>
      <Wrapper>
        <p className={styles["paragraph"]}>
          With a prescriptive implementation approach, modern technologies and
          leveraging industry best practices, we will deliver a faster project
          deployment and a reliable return on your technology investment.
        </p>
        <p className={styles["paragraph"]}>
          The implementation projects run by our experts, with a stone-solid
          foundation in implementation standards, following the different
          solutions combined best practice methodology, developed and improved
          during decade&apos;s worth of projects experience.
        </p>
        <h1 className={styles["title"]}>IMPLEMENTATION PLAN</h1>
        <p className={styles["paragraph"]}>
          ARCHIBUS implementation can be a standard (Commercial of the shelf –
          COTS), fully customized one (adapted completely to the client&apos;s
          needs), or within a balanced ratio of both. Customized implementation
          services usually include several steps, first of them being request
          analysis, in which the current and future organisation
          functionalities, processes, workflows, reporting and surveying needs
          are meticulously analysed, laying foundation of data inputs for the
          process of planning the future implementation.
        </p>
        <p className={styles["paragraph"]}>
          Design document in the planning phase describe the technical and
          functional architecture of the solution to be implemented, later
          referred in the customization phase.
        </p>
        <p className={styles["paragraph"]}>
          Within the development phase, necessary functionalities, tailored
          adaptations, specific workflows, customised interfaces and reports are
          being developed with all the necessary conditions for the fulfilment
          of the production phase, as well as data preparation and data
          migration from the previous/legacy solutions, testing phase,
          personalised trainings and establishing the production environment.
        </p>
        <p className={styles["paragraph"]}>
          A crucial aspect for the success of any implementation is related to
          data conversion. Critical concern is not only linked to adapting the
          solution to the specific business processes and requirements of the
          customers, but also in assisting the customer to capture, organize and
          standardize the fore mentioned information. After the data take-over,
          ARCHIBUS solution becomes the company repository for all the assets
          data and moreover, an internal knowledge system, comprising of roles,
          procedures, workflows, and processes.
        </p>
        <p className={styles["paragraph"]}>
          ARCHIBUS can also be integrated with other ERP applications such as
          Human Resources, Financial, and Security systems, BMS and BEMS, as
          well as BIM and IoT solutions, to increase functionality and
          productivity and outline the holistic approach. We excel at our
          ability to implement the powerful ARCHIBUS integration tools that
          bridge divisional and departmental solutions, ultimately adding value
          to everyone&apos;s work.
        </p>
      </Wrapper>
      <div className={styles["parallax-container"]}>
        <Parallax
          bgImage="/assets/images/decorative/paragraph1.jpg"
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
          <li>Defining the implementation scope, goals and procedures</li>
          <li>
            Reviewing current-state business processes and legacy solutions
          </li>
          <li>
            Defining system architecture, configuring and supporting system
            implementation
          </li>
          <li>Migration of data from the other solutions/systems</li>
          <li>Applying pilot project implementation procedures</li>
          <li>Reflecting on and continuously optimizing the processes</li>
          <li>
            Supplementing existing solutions with additional implementation
            projects
          </li>
          <li>
            Establishing regular meetings on the status and progress of the
            implementation
          </li>
          <li>
            Reacting flexibly and dynamically to changes and new requirements
          </li>
          <li>
            Providing of dynamic environment that promotes individual strengths
            and collaborative collaboration
          </li>
          <li>...</li>
        </ul>
      </Wrapper>
    </section>
  );
};
