import { IReference } from "@/types/sanity-types";
import React from "react";
import styles from "./ReferenceInfo.module.scss";
import Image from "next/image";
import { urlFor } from "@/lib/sanity.client";
export const ReferenceInfo: React.FC<{ reference: IReference | null }> = ({
  reference,
}) => {
  if (!reference) return <></>;
  return (
    <div className={styles["reference-info"]}>
      <div className={styles["client-info"]}>
        <div className={styles["logo-container"]}>
          <Image
            src={urlFor(reference.logo).url()}
            alt={reference.client.name}
            width={250}
            height={200}
          />
        </div>
        <div className={styles["text-content"]}>
          <p className={styles.client}>
            Client:
            <a
              href={reference.client.url ? reference.client.url : "#"}
              rel="noreferrer"
              target="_blank"
            >
              {" "}
              {reference.client.name}
            </a>
          </p>

          <p className={styles.work}>
            Type of work: <span>{reference.typeOfWork}</span>
          </p>
        </div>
      </div>
      <div className={styles["services-provided"]}>
        <div className={styles["services"]}>
          {reference.servicesProvided && (
            <>
              <h4>Services Provided:</h4>
              <ul className={styles["services-list"]}>
                {reference.servicesProvided.map((service) => {
                  console.log(service);
                  if (service.serviceName) {
                    return (
                      <li key={service._key}>
                        {service.serviceName}

                        {service.subservices && (
                          <ul className={styles["subservices-list"]}>
                            {service.subservices.map((subServ, i) => {
                              return <li key={subServ + i}>{subServ}</li>;
                            })}
                          </ul>
                        )}
                      </li>
                    );
                  } else {
                    return <li key={service._key}></li>;
                  }
                })}
              </ul>
            </>
          )}
        </div>
        <div className="image-gallery"></div>
      </div>
    </div>
  );
};
